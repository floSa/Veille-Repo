---
schema: 1
depot: NickeManarin/ScreenToGif
source_readme_sha: de5dfc1816ded971
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique, matière insuffisante]
verdict: surveiller
---

# NickeManarin/ScreenToGif

> Enregistreur d'écran, de webcam et de croquis pour Windows, avec éditeur d'animation et export GIF.

## Le problème
Capturer un écran ou une webcam et le convertir en GIF léger, en retouchant les images, sans logiciel lourd.

## Ce que ça fait vraiment
Le README est surtout une liste de liens de dons. L'architecture dérivée du code montre trois enregistreurs (écran, webcam, croquis), un projet d'images modifiable dans l'éditeur, un gestionnaire d'encodage (GIF, APNG, vidéo, PSD, images) passant par FFmpeg, et un envoi optionnel vers Imgur ou Yandex Disk.

## Comment c'est branché
```mermaid
flowchart LR
  A["App.xaml.cs"] --> B["BaseCapture.cs"]
  B --> C["Project.cs"]
  C --> D["Editor.xaml.cs"]
  D --> E["EncodingManager.cs"]
  E --> F["FfmpegHelper.cs"]
  E --> G["CloudFactory.cs"]
```

## Essayer
Aucune commande documentée : le README demande le .NET 9 Desktop Runtime ou supérieur et renvoie au site, à Chocolatey, FOSSHUB ou au Microsoft Store.

## Coût et pièges
Gratuit. Windows et .NET 9 requis. Licence MS-PL, copyleft au niveau des fichiers.

## Ce que ce n'est pas
Pas multiplateforme. Le README demande de ne pas revendre l'application sous un autre nom.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique pour illustrer une démo ou une documentation en GIF sous Windows, sinon sans enjeu pour ton métier.

