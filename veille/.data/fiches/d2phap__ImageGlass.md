---
schema: 1
depot: d2phap/ImageGlass
source_readme_sha: 537863939ad217b4
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: freemium
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# d2phap/ImageGlass

> Visionneuse de photos multiplateforme lisant plus de 90 formats, avec outils d'édition simples.

## Le problème
Les visionneuses par défaut sont lentes ou ne lisent pas WEBP, JXL, HEIC, AVIF, HDR ou le brut.

## Ce que ça fait vraiment
Navigation rapide avec cache adaptatif, rendu SVG natif, GIF/WEBP animés, gestion des couleurs, diaporama, rotation, recadrage, redimensionnement, sélecteur de couleur. Le registre de codecs s'appuie sur Skia ; plugins et outils externes via ImageGlass.SDK. Version 10 pour Windows, macOS (Apple Silicon) et Linux X11.

## Comment c'est branché
```mermaid
flowchart LR
  Entry[Program.cs] --> Core[Core.cs]
  Core --> Manager[PhotoManager.cs]
  Manager --> Codec[CodecRegistry SkiaCodec]
  Manager --> Cache[Photo Cache]
  Manager --> Viewer[ViewerControl PhotoRenderer]
  Core --> Plugins[PluginRegistry]
```

## Essayer
Aucune commande documentée dans le README : téléchargement depuis imageglass.org ou GitHub.

## Coût et pièges
Édition de base gratuite ; la version Pro (déploiement géré, réglages verrouillés) est payante. Des dépôts frauduleux imitent le projet : ne télécharger que depuis les sources officielles.

## Ce que ce n'est pas
Pas un éditeur d'images complet. Version 9 et version 10 coexistent dans le dépôt.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : confort de bureau sans rapport avec ton métier ; licence non identifiée et mainteneur principal unique.

