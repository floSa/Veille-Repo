---
schema: 1
depot: moshang-ax/lottery
source_readme_sha: eb18e67c02826037
ecrite_le: 2026-10-08
nature: app
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# moshang-ax/lottery

> Programme de tirage au sort pour dîner annuel, avec sphère 3D de noms, import et export Excel.

## Le problème
Animer un tirage au sort d'entreprise avec des lots configurables.

## Ce que ça fait vraiment
Front Vue 3 + Vite avec Three.js (CSS3D) pour la sphère de noms, et un serveur Node/Express qui lit la liste des participants dans `server/data/user.xlsx` et enregistre les gagnants. Les lots se configurent dans `server/config.js`. Les résultats s'exportent en Excel. Un déploiement Docker est décrit.

## Comment c'est branché
```mermaid
graph TD
  App[Vue app : App.vue] --> Panel[Draw controls : ControlPanel.vue]
  App --> Engine[3D draw engine : engine.js]
  Engine --> Store[Draw state : store.js]
  App --> API[API client : index.js]
  API --> Server[Express service : server.js]
  Server --> Excel[Excel and persistence : help.js]
```

## Essayer
```bash
git clone https://github.com/moshang-xc/lottery.git
cd lottery/server && npm install
cd ../product && npm install
npm run build
npm run serve
```

## Coût et pièges
Gratuit. Le README Docker mentionne les ports 8888 et 443. L'URL de clone du README diffère du nom du dépôt catalogué.

## Ce que ce n'est pas
Pas un outil d'analyse ou d'IA : une application d'animation d'événement.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : aucun usage data/IA/MLOps, sauf pour animer un événement d'équipe.

