---
schema: 1
depot: HDoujinDownloader/HDoujinDownloader
source_readme_sha: 814d426a5d937025
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [matière insuffisante, mainteneur unique]
verdict: ignorer
---

# HDoujinDownloader/HDoujinDownloader

> Téléchargeur de doujinshi et de galeries d'images pour de nombreux sites, en exécutable portable.

## Le problème
Récupérer et ranger des galeries d'images de sites variés se fait à la main, page par page.

## Ce que ça fait vraiment
Exécutable portable, sans installation. Télécharge des galeries, les organise selon leurs métadonnées, suit les nouveaux chapitres, convertit en ZIP/CBZ, RAR/CBR, PDF, CBW ou 7Z et redimensionne les images. Surveille le presse-papiers pour télécharger les URL copiées. Interface en plusieurs langues.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
    A["URL de galerie"] --> B["HDoujinDownloader"]
    B --> C["Téléchargement"]
    C --> D["Conversion"]
    D --> E["Collection organisée"]
```

## Essayer
Aucune commande documentée. Télécharger la dernière release et lancer l'exécutable.

## Coût et pièges
Gratuit. README très court : la liste des sites pris en charge, la plateforme et la mise à jour ne sont pas documentées. 248 issues ouvertes d'après le catalogue.

## Ce que ce n'est pas
Pas un outil de scraping générique pour la data : il est conçu pour des galeries d'images de sites précis. Le respect des conditions d'usage de chaque site reste à ta charge.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : téléchargeur de galeries sans rapport avec la data ou l'IA, et README trop mince pour juger plus.

