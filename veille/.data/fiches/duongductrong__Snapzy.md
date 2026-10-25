---
schema: 1
depot: duongductrong/Snapzy
source_readme_sha: a5ba13f9c942013b
ecrite_le: 2026-10-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# duongductrong/Snapzy

> Application macOS de barre de menus pour captures d'écran, enregistrements, annotation et OCR.

## Le problème
Capturer, annoter et partager une capture exige plusieurs outils ; CleanShot X est payant.

## Ce que ça fait vraiment
Capture plein écran, zone ou défilante, enregistrement vidéo ou GIF, éditeurs d'annotation et vidéo, OCR local (Apple Vision) ou via un endpoint compatible OpenAI, historique, envoi vers S3 ou R2 avec identifiants dans le Trousseau. Schéma d'URL `snapzy://`, extension Raycast. Aucune télémétrie selon le README.

## Comment c'est branché
```mermaid
graph LR
  A[Screenshot capture] --> B[Post-capture actions]
  C[Screen recording] --> B
  B --> D[Quick Access]
  D --> E[Annotation editor]
  D --> F[Video editor]
  D --> G[Cloud upload CloudManager.swift]
```

## Essayer
```bash
brew install --cask snapzy
open 'snapzy://capture/area'
```

## Coût et pièges
Gratuit. macOS 13 minimum. L'application n'est pas isolée en sandbox. Un OCR personnalisé envoie l'image à l'endpoint choisi.

## Ce que ce n'est pas
Pas multiplateforme : macOS seulement. Les scores OCR viennent d'un corpus synthétique ; les vraies captures donnent moins.

## Alternatives
CleanShot X (cité comme source d'inspiration, pas comme alternative libre).

## Pour toi
À ignorer : outil de productivité macOS sans lien avec le travail data/IA, utile surtout pour documenter des démos.

