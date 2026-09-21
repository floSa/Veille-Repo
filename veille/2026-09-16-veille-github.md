# Veille GitHub — 16 septembre 2026

> 7 dépôts retenus sur 98 examinés · sources : trending du jour (global + Python, daily +
> weekly) et dépôts créés depuis moins de 30 jours sur 10 topics métier.

## En deux lignes

Le trending du jour est saturé de **collections de « skills » pour agents** — une dizaine
de dépôts à plusieurs dizaines de milliers d'étoiles qui vendent tous la même chose. Le
signal utile est ailleurs, dans la couche d'infrastructure qui commence à se construire
autour : **scanner de sécurité pour skills (NVIDIA), gestion du budget de contexte, worktrees
pour agents parallèles**. Côté data pur, une seule vraie sortie : la plateforme RAG de Tencent.

---

## 1. [Tencent/WeKnora](https://github.com/Tencent/WeKnora) — une plateforme RAG complète, self-hostable, pas un tutoriel déguisé

`Go` · ⭐ 24 712 (**+1 892 aujourd'hui**) · créé le 22/07/2025 · licence MIT · 3 427 forks · 646 issues ouvertes

Chaîne complète d'ingestion → indexation → interrogation, livrée avec ce qu'on finit
toujours par redévelopper soi-même : connecteurs de sources (Notion, GitLab, RSS, Feishu,
Yuque), parsing de 10+ formats dont PDF, Word, Excel et images, édition des *chunks* avec
historique de révision, agent ReAct qui orchestre retrieval + outils MCP + recherche web,
et observabilité Langfuse branchée d'origine. Le « Wiki Mode » ajouté récemment fait
distiller les documents bruts en une base markdown interconnectée avec graphe de
connaissances. Multi-tenant avec RBAC 4 niveaux et journal d'audit par workspace.

**Pourquoi pour toi** — C'est le socle qui évite de repartir de zéro sur un POC RAG client :
le multi-tenant et l'audit par workspace sont exactement ce qu'on redéveloppe mal et tard
dans ce genre de projet.

**Le bémol** — 646 issues ouvertes pour 24 k étoiles, et une surface fonctionnelle énorme
(20+ providers LLM, 8 connecteurs, sandboxes Docker/E2B) : le coût d'entrée est réel et la
dette de maintenance visible. Documentation en partie chinoise. MIT, mais vérifier
`THIRD_PARTY_NOTICES.md` — les composants tiers ont leurs propres licences.

**Verdict** — à tester cette semaine

---

## 2. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) — scanner de sécurité pour les skills d'agents, avant installation

`Python` · ⭐ 17 370 (**+672 aujourd'hui**) · créé le 21/03/2026 · licence Apache-2.0 · 138 issues

Analyse un skill (repo Git, URL, zip, dossier ou fichier) et répond à une question : est-ce
qu'on peut l'installer. 71 motifs de vulnérabilité sur 17 catégories — injection de prompt,
exfiltration de données, escalade de privilèges, *supply chain*, empoisonnement de mémoire,
*MCP tool poisoning*. Deux étages : analyse statique rapide, puis évaluation sémantique LLM
optionnelle. Sortie en terminal, JSON, Markdown ou **SARIF** — donc branchable en CI.
Le chiffre qui justifie le projet, tiré de leur dataset de 31 132 skills analysés :
**26,1 % contiennent une vulnérabilité, 5,2 % montrent une intention probablement malveillante**.

**Pourquoi pour toi** — Tu écris et installes des skills (ton repo `mes-skills`).
Un `skillspector scan` sur tout skill tiers avant `install.sh`, et la sortie SARIF en CI sur
ton propre repo, c'est trente minutes de mise en place pour une classe de risque entière.

**Le bémol** — Projet NVIDIA de six mois, clairement une pièce de leur pipeline « Verified
Skills » : l'outil pousse vers leur catalogue. Python 3.12+ requis. L'étage sémantique
consomme des tokens LLM — à cadrer avant de le brancher sur chaque commit.

**Verdict** — à tester cette semaine

---

## 3. [mksglu/context-mode](https://github.com/mksglu/context-mode) — le budget de contexte des agents, traité comme un problème d'ingénierie

`TypeScript` · ⭐ 23 146 (**+1 832 aujourd'hui**) · créé le 23/02/2026 · **licence ELv2** · 250 issues

Serveur MCP qui attaque quatre fuites de contexte à la fois. La principale : les retours
d'outils bruts qui remplissent la fenêtre — un *snapshot* Playwright coûte 56 Ko, vingt
issues GitHub 59 Ko. Le serveur les garde en bac à sable et n'expose qu'un résumé indexé :
**315 Ko ramenés à 5,4 Ko**. Le reste — édition de fichiers, opérations git, tâches, erreurs,
décisions — est tracé dans SQLite et indexé en FTS5, pour que la compaction de conversation
ne perde plus le fil de ce qui était en cours. Passé n°1 sur Hacker News.

**Pourquoi pour toi** — Directement transposable au tooling que tu construis : le pattern
« l'outil renvoie une référence, pas la donnée » vaut d'être repris même sans adopter le
serveur.

**Le bémol** — **Elastic License 2.0, pas open source** : interdiction d'en faire un service
managé, restrictions sur la revente. À écarter d'emblée pour tout ce qui part chez un client.
Sept mois d'existence, 250 issues ouvertes, dépendance forte à l'écosystème MCP.

**Verdict** — à garder sous le coude (lire l'architecture, pas forcément l'installer)

---

## 4. [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) — un workspace d'expérimentation reproductible pour agents de recherche

`Rust` · ⭐ 3 747 (**+531 aujourd'hui**) · créé le 07/06/2026 · licence MIT · 29 issues

Le seul de la sélection qui parle vraiment de méthode expérimentale. Chaque direction de
recherche reçoit sa session d'agent et son *worktree* git isolé ; les variantes sont suivies
dans un arbre d'expériences natif git, et **chaque run reçoit une archive immuable du commit
enregistré**. Logs, diffs, résultats et artefacts restent attachés au code qui les a produits.
Le même snapshot tourne en local, en SSH, ou sur Slurm, Kubernetes, Ray, HF Jobs et Modal.
Mode « autoresearch » : proposer une idée, modifier le code, lancer l'expérience, inspecter
les résultats, décider de la suite — en boucle.

**Pourquoi pour toi** — C'est du *experiment tracking* qui suit le code plutôt que les
métriques. Complémentaire de MLflow, pas concurrent : MLflow te dit quel run a gagné,
celui-ci te rend le run rejouable.

**Le bémol** — Trois mois d'existence, 3,7 k étoiles seulement, Windows en bêta. Le compte
sur `openresearch.sh` pousse vers du compute managé — modèle économique à surveiller.
Attention au README : *« le service distant écoute sur loopback et n'a aucune
authentification applicative, les autres utilisateurs de cet hôte peuvent l'atteindre »* —
rédhibitoire sur un serveur GPU partagé.

**Verdict** — à tester cette semaine (sur un projet perso, pas sur l'infra partagée)

---

## 5. [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) — la plomberie git des agents parallèles, en Rust

`Rust` · ⭐ 7 876 (**+871 aujourd'hui**) · créé le 17/10/2025 · licence MIT **ou** Apache-2.0 · 47 issues

CLI de gestion de worktrees git pensée pour faire tourner plusieurs agents de code en
parallèle sans qu'ils se marchent dessus. Petit périmètre, bien tenu : CI visible, couverture
Codecov, docs sur worktrunk.dev. Signé max-sixty, un mainteneur connu de l'écosystème data
Python (xarray, PRQL).

**Pourquoi pour toi** — Le problème est concret dès qu'on lance deux sessions d'agent sur le
même repo. Un binaire Rust, aucune dépendance Python à gérer.

**Le bémol** — Outil de confort, pas de fond : sans usage réel de plusieurs agents simultanés,
il ne sert à rien. Un an d'existence, projet largement mono-mainteneur.

**Verdict** — à garder sous le coude

---

## 6. [alibaba/open-code-review](https://github.com/alibaba/open-code-review) — la revue de code interne d'Alibaba, ouverte

`Go` · ⭐ 29 861 (**+5 169 aujourd'hui**) · créé le ~18/05/2026 · licence Apache-2.0

CLI de revue de code par LLM, issue de l'outil interne d'Alibaba — deux ans de service,
« des dizaines de milliers de développeurs ». Lit le diff git, envoie les fichiers modifiés
à un modèle configurable via un agent outillé (lecture de fichiers complets, recherche dans
le code), et produit des commentaires au niveau de la ligne. `ocr scan` fait aussi de la
revue de fichiers entiers, utile pour auditer un dépôt inconnu. Ils publient leur benchmark
(**AACR-Bench** : 50 repos, 200 PR réelles, 10 langages, 1 505 défauts annotés, validés par
80+ ingénieurs) et revendiquent une meilleure précision que Claude Code à modèle égal pour
**~1/9 des tokens**, en assumant un *recall* plus faible.

**Pourquoi pour toi** — L'argument qui compte n'est pas la qualité de revue, c'est le coût :
neuf fois moins de tokens, ça change ce qu'on peut se permettre de brancher en CI sur tous
les projets. Le dataset AACR-Bench est publié sur Hugging Face — réutilisable pour évaluer
ta propre chaîne de revue.

**Le bémol** — Benchmark produit par l'éditeur, sur un protocole qu'il a lui-même défini : à
rejouer avant de citer le chiffre. +5 169 étoiles en un jour sur un projet de quatre mois,
c'est un lancement poussé, pas une adoption organique.

**Verdict** — à tester cette semaine (mesurer le coût réel sur un de tes repos)

---

## 7. [earendil-works/pi](https://github.com/earendil-works/pi) — une API LLM unifiée et un runtime d'agent, en paquets séparés

`TypeScript` · ⭐ 106 058 (+458 aujourd'hui) · créé le 09/08/2025 · licence MIT · 234 issues

Monorepo dont l'intérêt principal n'est pas le CLI mais le découpage :
`@earendil-works/pi-ai` (API multi-provider unifiée — OpenAI, Anthropic, Google),
`pi-agent-core` (runtime d'agent avec *tool calling* et gestion d'état), `pi-tui`,
`pi-telemetry` (contrats de télémétrie neutres avec tests de conformité). Chaque brique
s'utilise seule.

**Pourquoi pour toi** — `pi-ai` + `pi-agent-core` sont réutilisables sans adopter le reste,
si tu construis un agent maison en TypeScript. Le paquet télémétrie vaut le coup d'œil pour
son approche vendor-neutral.

**Le bémol** — Deux drapeaux rouges. **Aucun système de permissions** : l'agent tourne avec
les droits de l'utilisateur qui l'a lancé, la conteneurisation est à la charge de
l'utilisateur. Et la gouvernance : *« les issues et PR de nouveaux contributeurs sont
fermées automatiquement par défaut »* — projet peu ouvert malgré ses 106 k étoiles.
Écosystème TypeScript, loin de ta stack Python quotidienne.

**Verdict** — à surveiller

---

## Vus aussi, sans fiche

- **[huggingface/transformers](https://github.com/huggingface/transformers)** — +1 240 ⭐
  aujourd'hui. La v5.17.0 (09/09) ajoute le support de HYV4 (MoE 780 B, 49 B actifs,
  contexte 1 M) ; la v5.16.1 celui de GLM-5.3-Flash. Rien à installer, juste à noter si tu
  suis ces modèles.
- **[roboflow/supervision](https://github.com/roboflow/supervision)** — +217 ⭐, 50 k au total.
  Rien de neuf, mais reste la boîte à outils CV de référence si un sujet vision arrive.
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — +84 ⭐, 83 k au total.
  Toujours le crawler de référence pour alimenter un RAG. Mentionné ici pour mémoire.

## Écartés volontairement

La vague du jour, sur laquelle je ne fais pas de fiche : **une dizaine de collections de
« skills » pour agents**, toutes en tête du trending, toutes MIT, toutes sur le même créneau.
`affaan-m/ECC` (259 k ⭐), `obra/superpowers` (287 k), `DietrichGebert/ponytail` (139 k),
`ayghri/i-have-adhd` (+17 880 aujourd'hui), `tt-a1i/archify`, `blader/humanizer`,
`openai/skills`, `addyosmani/agent-skills`, `Jeffallan/claude-skills`. Beaucoup de
promesses, peu de code exécutable, et le chiffre de SkillSpector (26 % de skills vulnérables)
invite à ne rien installer de tout ça sans scan préalable.

Hors périmètre également : `jiji262/douyin-downloader` (téléchargement vidéo),
`TauricResearch/TradingAgents` (trading), `heygen-com/hyperframes` (rendu vidéo),
`multimodal-art-projection/YuE` (génération musicale), `decolua/9router` (proxy API gratuit,
modèle douteux), `melgarafael/DeskcommCRM` (CRM).

---

*Note générée par le skill `veille-github`. Données brutes : `.data/2026-09-16.json`.*
