---
schema: 1
depot: pearlxcore/PS4PKGTool
source_readme_sha: f6e432ac6ea9b96a
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# pearlxcore/PS4PKGTool

> Application Windows pour gérer, inspecter et extraire une collection de paquets PS4 (PKG).

## Le problème
Une collection de PKG PS4 est difficile à trier, renommer et inspecter sans outil.

## Ce que ça fait vraiment
Scanne des dossiers, lit les métadonnées (param.sfo, trophées), renomme et range les PKG, fusionne base et mise à jour, extrait des fichiers. Une file de tâches gère extraction, fusion, conversion FFPFSC et installation sur shadPS4. Un visualiseur d'assets ouvre images, audio, bundles Unity et PAK Unreal.

## Comment c'est branché
```mermaid
flowchart TD
  B["Forms/Main/Main.cs"] --> D["TaskQueueService.cs"]
  B --> C["MiniPkgViewerForm.cs"]
  B --> E["PkgDirectoryScanner.cs"]
  E --> F["PkgMetadataReader.cs"]
  D --> G["PackageExtractionService.cs"]
  C --> H["AssetInspectionService.cs"]
```

## Essayer
```bash
# Aucune commande : télécharger la release Windows (.NET 10 requis).
```

## Coût et pièges
Windows et .NET 10. Les paquets générés par OrbisPkgTool sont expérimentaux et non testés sur console débridée. Envoi vers PS4 : Node.js et http-server nécessaires.

## Ce que ce n'est pas
Pas un outil pour obtenir des jeux gratuitement, d'après le README. Conversion FFPFSC non testée sur matériel réel.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Outil de gestion de jeux console sans lien avec la data / IA : à ignorer.

