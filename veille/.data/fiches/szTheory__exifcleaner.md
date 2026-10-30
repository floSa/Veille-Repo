---
schema: 1
depot: szTheory/exifcleaner
source_readme_sha: 690ba8d6a52f711a
ecrite_le: 2026-10-30
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# szTheory/exifcleaner

> Application de bureau qui supprime les métadonnées d'images, médias et PDF, pour qui publie des fichiers.

## Le problème
Photos et documents publiés embarquent GPS, appareil, auteur : fuite de vie privée.

## Ce que ça fait vraiment
Glisser-déposer de fichiers ou dossiers, traitement par lots via le protocole `-stay_open` d'ExifTool. Options : conserver l'orientation, enregistrer en copie, retirer les xattr macOS, conserver les horodatages. Aperçu avant/après des métadonnées. Aucune télémétrie ni mise à jour automatique. Electron, React 19, TypeScript.

## Comment c'est branché
```mermaid
graph LR
  UI[Interface React] --> IPC[IPC validé]
  IPC --> Adapter[Adaptateur ExifTool]
  Adapter --> ExifTool[ExifTool stay-open]
  ExifTool --> Fichiers
```

## Essayer
```bash
git clone https://github.com/szTheory/exifcleaner.git
cd exifcleaner
yarn install
yarn dev
yarn test
```

## Coût et pièges
Gratuit. Binaires non signés : avertissement macOS ou Windows au premier lancement, checksums SHA-256 publiés. Sauvegarde des originaux conseillée.

## Ce que ce n'est pas
Pas une garantie d'effacement : PDF (métadonnées récupérables), TIFF et AVIF partiels, MKV refusé, RAF refusé.

## Alternatives
Le README ne nomme que ExifTool, dont il dépend.

## Pour toi
À surveiller : pratique avant de partager des jeux de données images ou documents, mais limites par format à vérifier.

