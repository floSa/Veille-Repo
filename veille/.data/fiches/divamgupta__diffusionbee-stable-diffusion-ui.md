---
schema: 1
depot: divamgupta/diffusionbee-stable-diffusion-ui
source_readme_sha: 16dd8fd9e6221e4a
ecrite_le: 2026-09-29
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# divamgupta/diffusionbee-stable-diffusion-ui

> Application macOS en un clic pour faire tourner Stable Diffusion localement.

## Le problème
Installer Stable Diffusion en local sur Mac demande Python, dépendances et poids à gérer.

## Ce que ça fait vraiment
Interface Electron, installateur unique, traitement local.
Texte→image, image→image, inpainting, outpainting, upscaling, ControlNet, LoRA ; SD 1.x, 2.x, XL.
Téléchargement de modèles depuis l'app, historique de génération, optimisé M1/M2.

## Comment c'est branché
```mermaid
flowchart LR
  A[Electron App] --> B[Native Bridge]
  B --> C[SD Bridge]
  C --> D[SD Core]
  D --> E[Plugin System]
  E --> F[ControlNet]
  D --> G[Model Converter]
```

## Essayer
Aucune commande documentée : téléchargement sur diffusionbee.com.

## Coût et pièges
Gratuit ; macOS 11+ (M1/M2) ou 12.3.1+ (Intel). Sorties soumises à la licence CreativeML OpenRAIL-M.

## Ce que ce n'est pas
Pas une bibliothèque ni une API ; dernier push octobre 2024, modèles récents probablement absents.

## Alternatives
Aucune alternative nommée ; le README cite ses bases (CompVis/stable-diffusion, huggingface/diffusers).

## Pour toi
À ignorer : outil grand public macOS vieillissant, diffusers est la voie pour un usage programmatique.
