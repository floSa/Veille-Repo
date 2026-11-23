// Génère chez GitDiagram, par petits lots, les diagrammes manquants de la file.
// Prudent : s'arrête au premier blocage, puis retente de plus en plus tard (30 min, 1 h, 2 h… 12 h),
// et ne génère jamais ce que le cache de GitDiagram a déjà. Ne garde rien d'autre qu'un état.
// Usage : node generer_diagrammes.mjs <file.txt> <etat.json> [taille_du_lot]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const [fileTxt, etatJson, lot = '20'] = process.argv.slice(2);
const MAX = Number(lot);
const REUSSI = /Diagram ready|Architecture analyzed|Actual cost/i;
const QUOTA = /Too many free generations|try again in about (\d+) minutes?/i;
const ECHOUE = /Couldn.t generate|too large|Repository not found|check the owner and repository name/i;

const maintenant = () => new Date();
const etat = existsSync(etatJson) ? JSON.parse(readFileSync(etatJson, 'utf8'))
  : { bloque_jusqua: null, palier_min: 30, faits: {}, essais: {}, journal: [] };
const note = (m) => { console.log(m); etat.journal.push(`${maintenant().toISOString().slice(0, 16)} ${m}`); etat.journal = etat.journal.slice(-60); };
const sauver = () => writeFileSync(etatJson, JSON.stringify(etat, null, 1));
const bloquer = (min, pourquoi) => {
  etat.palier_min = Math.min(Math.max(min, 30), 720);
  etat.bloque_jusqua = new Date(Date.now() + etat.palier_min * 60000).toISOString();
  note(`BLOQUÉ (${pourquoi}) — prochain essai après ${etat.palier_min} min`);
  sauver();
};

if (etat.bloque_jusqua && new Date(etat.bloque_jusqua) > maintenant()) {
  console.log(`en attente jusqu'à ${etat.bloque_jusqua} (palier ${etat.palier_min} min)`); process.exit(0);
}
const sonde = !!etat.bloque_jusqua;   // on sort d'un blocage : un seul dépôt d'abord, pour tester
etat.bloque_jusqua = null;

const file = readFileSync(fileTxt, 'utf8').split('\n').map(s => s.trim()).filter(Boolean)
  .filter(d => !etat.faits[d] && (etat.essais[d] || 0) < 3);
if (!file.length) { note('file vide : rien à faire'); sauver(); process.exit(0); }

const dansCache = async (d) => {
  const [u, r] = d.split('/');
  const res = await fetch('https://gitdiagram.com/api/diagram-state', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://gitdiagram.com',
      Referer: `https://gitdiagram.com/${d}`, 'User-Agent': 'Mozilla/5.0 (catalogue de veille personnel)' },
    body: JSON.stringify({ username: u, repo: r }), signal: AbortSignal.timeout(30000) });
  if (res.status === 429 || res.status === 403) return res.status;
  if (!res.ok) return null;
  const j = await res.json().catch(() => ({}));
  return (j.diagram || '').trim() ? true : false;
};

const { chromium } = await import('playwright');
const nav = await chromium.launch({ headless: true });
let ok = 0, cache = 0, echecs = 0, vus = 0;
const limite = MAX;   // après une sonde réussie on continue le lot : s arrêter à 1 coûtait un passage de 3 h
for (const d of file) {
  if (ok + echecs >= limite) break;
  if (++vus > 400) break;
  const c = await dansCache(d);
  if (c === 429 || c === 403) { await nav.close(); bloquer(etat.palier_min * 2, `lecture du cache refusée (${c})`); process.exit(0); }
  if (c === true) { etat.faits[d] = 'cache'; cache++; continue; }
  const page = await nav.newPage();
  let r = 'timeout', fin = '';
  try {
    await page.goto(`https://gitdiagram.com/${d}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    for (let n = 0; n < 90; n++) {
      await page.waitForTimeout(2000);
      const txt = await page.innerText('body').catch(() => '');
      fin = txt.replace(/\s+/g, ' ').slice(-120);
      const q = txt.match(QUOTA);
      if (q) { r = 'quota'; etat.attente = Number(q[1]) || 0; break; }
      if (ECHOUE.test(txt)) { r = 'refus'; break; }
      if (REUSSI.test(txt)) { r = 'ok'; break; }
    }
  } catch (e) { r = 'erreur'; }
  await page.close().catch(() => {});
  if (r === 'quota') { await nav.close(); bloquer(Math.max(etat.palier_min * 2, (etat.attente || 0) + 5), 'quota atteint'); process.exit(0); }
  if (r === 'ok' || r === 'refus') { etat.faits[d] = r; if (r === 'ok') ok++; }
  else { etat.essais[d] = (etat.essais[d] || 0) + 1; echecs++; note(`${d} : ${r} (essai ${etat.essais[d]}) ${fin}`); }
  if (echecs >= 3 && ok === 0) { await nav.close(); bloquer(60, 'trois échecs de suite'); process.exit(0); }
  await new Promise(r => setTimeout(r, 8000));
}
await nav.close();
if (ok || cache) etat.palier_min = 30;   // ça passe : on repart du palier le plus court
note(`lot terminé : ${ok} générés, ${cache} déjà en cache, ${echecs} échecs${sonde ? ' (sonde de reprise)' : ''} ; reste ${file.length - ok - cache}`);
sauver();
