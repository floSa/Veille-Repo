// Test : GitDiagram accepte-t-il de générer depuis un serveur GitHub ? Ne garde rien, affiche seulement.
import { chromium } from 'playwright';
const depots = process.argv.slice(2);
const REUSSI = /Diagram ready|Architecture analyzed|Actual cost/i;
const QUOTA = /Too many free generations|try again in about (\d+) minutes?/i;
const ECHOUE = /Couldn.t generate|too large|Repository not found|check the owner and repository name/i;
const ip = await fetch('https://api.ipify.org').then(r => r.text()).catch(() => '?');
console.log('IP du serveur :', ip);
const nav = await chromium.launch({ headless: true });
for (const d of depots) {
  const page = await nav.newPage();
  let etat = 'timeout', fin = '';
  const t0 = Date.now();
  try {
    await page.goto(`https://gitdiagram.com/${d}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    for (let n = 0; n < 90; n++) {
      await page.waitForTimeout(2000);
      const txt = await page.innerText('body').catch(() => '');
      fin = txt.replace(/\s+/g, ' ').slice(-200);
      if (QUOTA.test(txt)) { etat = 'quota'; break; }
      if (ECHOUE.test(txt)) { etat = 'refus'; break; }
      if (REUSSI.test(txt)) { etat = 'ok'; break; }
    }
  } catch (e) { etat = 'erreur : ' + e.message.slice(0, 100); }
  console.log(`${d} -> ${etat} en ${Math.round((Date.now() - t0) / 1000)} s | ${fin}`);
  await page.close();
}
await nav.close();
