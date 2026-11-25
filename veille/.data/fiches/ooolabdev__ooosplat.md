---
schema: 1
depot: ooolabdev/ooosplat
source_readme_sha: e0e7f31fadd15981
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [GPU, beaucoup de RAM]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [télémétrie]
verdict: surveiller
---

# ooolabdev/ooosplat

> Application de bureau qui transforme vidéos ou photos en scène 3D Gaussian Splatting, en local.

## Le problème
Générer un splat 3D oblige à enchaîner à la main extraction d'images, reconstruction COLMAP et entraînement.

## Ce que ça fait vraiment
Tu choisis des vidéos ou dossiers d'images, un dossier de projet et une qualité (rapide, équilibré, fin). L'app extrait les images avec FFmpeg, reconstruit les caméras avec COLMAP, entraîne avec Brush, puis publie un final.ply. Elle prévisualise, édite (sélection, suppression, recadrage) et exporte en PLY, SPZ, SOG, MP4 ou HTML. Elle gère les panoramas, le GPS, les compléments de prise de vue. Un CLI et un serveur MCP optionnel existent.

## Comment c'est branché
```mermaid
flowchart TD
  A["Task UI App.tsx"] --> B["backend.ts"]
  B --> C["commands mod.rs"]
  C --> R["runner.rs"]
  R --> M["colmap.rs"]
  R --> BR["brush.rs"]
  R --> P["manager.rs"]
```

## Essayer
```bash
npm install
npm run setup:engines
npm run tauri -- dev
sudo apt install ./OOOSplat-0.8.0-x64-linux.deb
```

## Coût et pièges
Gratuit et local, mais un GPU est quasi indispensable pour Brush (Vulkan ou Metal) ; COLMAP profite de CUDA. Les projets prennent beaucoup de disque. Statistiques anonymes activées par défaut, désactivables. Windows 11, macOS Apple Silicon et Ubuntu 24.04 en alpha.

## Ce que ce n'est pas
Pas un service cloud ni un outil de génération par IA texte-vers-3D. L'écran reprend un projet sans restaurer l'optimiseur.

## Alternatives
Aucune alternative nommée dans le README (COLMAP et Brush sont des composants).

## Pour toi
À surveiller : intéressant si tu explores la reconstruction 3D en local avec GPU, mais encore en alpha et orienté création plutôt que MLOps.

