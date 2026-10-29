---
schema: 1
depot: ayusharma/birthday
source_readme_sha: 53fa1005a4ea1dc6
ecrite_le: 2026-10-29
nature: app
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# ayusharma/birthday

> Animation d'anniversaire en CSS3, HTML5 et jQuery, à ouvrir dans un navigateur.

## Le problème
Offrir une carte d'anniversaire animée sans application.

## Ce que ça fait vraiment
Une page statique : un visiteur déclenche des étapes (lumière, musique, bannière, ballons, gâteau et bougie, message), pilotées par `effect.js`. Des feuilles de style, un fichier audio `hbd.mp3` complètent la page.

## Comment c'est branché
```mermaid
flowchart LR
  A[index.html] --> B[effect.js]
  B --> C[Lumière / Musique]
  B --> D[Bannière / Ballons]
  B --> E[Gâteau et bougie]
  A --> F[stylesheet.css]
```

## Essayer
```bash
cd Birthday
python -m SimpleHTTPServer --port 8081
npm install
npm run server-node
```

## Coût et pièges
Gratuit. Aucune licence ; dernier push en août 2024. La commande Python citée est celle de Python 2.

## Ce que ce n'est pas
Pas un outil ni une bibliothèque réutilisable : une page de démonstration.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : animation décorative, sans licence et sans rapport avec data/IA/MLOps.

