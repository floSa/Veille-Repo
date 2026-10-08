---
schema: 1
depot: nhn/tui.image-editor
source_readme_sha: 9a557bc2ce55b9a5
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [archivé, dernier commit ancien]
verdict: ignorer
---

# nhn/tui.image-editor

> Éditeur d'images HTML5 Canvas en JavaScript, avec enveloppes Vue et React.

## Le problème
Intégrer dans une page web recadrage, dessin et filtres d'images sans écrire un éditeur.

## Ce que ça fait vraiment
Charge une image dans un canvas (fabric.js 4.2.0) : recadrage, retournement, rotation, redimensionnement, dessin libre, formes, icônes, texte, masques, filtres (sépia, flou, pixelisation, etc.), annuler/rétablir, téléchargement. Thèmes clair et sombre personnalisables. Paquets JS, Vue et React.

## Comment c'est branché
```mermaid
flowchart LR
  A["ImageEditor (imageEditor.js)"] --> B["Action layer (action.js)"]
  B --> C["Command invoker (invoker.js)"]
  C --> D["Canvas graphics (graphics.js)"]
  A --> E["Editor UI (ui.js)"]
  F["Vue wrapper (ImageEditor.vue)"] --> A
```

## Essayer
Pas de commande d'installation dans le README (liens vers les paquets `toast-ui.image-editor`, Vue et React). Contribution :
```bash
npm install
```

## Coût et pièges
Gratuit. Dépôt archivé, dernier push novembre 2023 ; dépendances anciennes (fabric.js 4.2.0).

## Ce que ce n'est pas
Pas maintenu : aucune correction attendue.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À ignorer : archivé et sans lien avec data/IA.

