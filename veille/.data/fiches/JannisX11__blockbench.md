---
schema: 1
depot: JannisX11/blockbench
source_readme_sha: 767e2fa568ba5bed
ecrite_le: 2026-10-08
nature: app
deploiement: binaire
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# JannisX11/blockbench

> Éditeur 3D gratuit pour modèles low-poly à textures pixel art, avec formats Minecraft.

## Le problème
Créer des modèles low-poly texturés pour jeux ou Minecraft demande des outils 3D lourds, peu adaptés au pixel art.

## Ce que ça fait vraiment
Éditeur de bureau (Electron) et web : hiérarchie de modèle (outliner), édition de maillage, UV, peinture de textures, animation (timeline), aperçu 3D. Export vers des formats standardisés (glTF) et dédiés Minecraft Java et Bedrock. Système de plugins en JavaScript.

## Comment c'est branché
```mermaid
flowchart LR
  A[Artiste] --> OL["outliner.js"]
  OL --> ME["mesh_editing.js"]
  ME --> UV["uv.js"]
  UV --> PV["preview.ts"]
  PV --> PJ["project.ts"]
  PJ --> ML["model_loader.ts"]
```

## Essayer
```bash
npm install
npm run dev
npm run serve   # version web sur http://localhost:3000
```

## Coût et pièges
Gratuit. Le README recommande de télécharger l'application sur le site plutôt que compiler. 665 issues ouvertes.

## Ce que ce n'est pas
Pas un outil de modélisation haut de gamme ni de génération par IA : un éditeur manuel de modèles à cubes et pixels.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : outil de création 3D pour jeux, hors de ton périmètre, sauf besoin ponctuel d'assets.

