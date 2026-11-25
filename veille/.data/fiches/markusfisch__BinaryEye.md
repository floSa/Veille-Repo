---
schema: 1
depot: markusfisch/BinaryEye
source_readme_sha: 2b1926e3afd1c43e
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# markusfisch/BinaryEye

> Lecteur et générateur de codes-barres pour Android, sans publicité, appuyé sur ZXing-C++.

## Le problème
Les lecteurs de codes-barres du Play Store sont souvent bourrés de pub ou fermés.

## Ce que ça fait vraiment
Lit une vingtaine de formats (QR, Data Matrix, EAN, PDF417...) et en génère une dizaine. Fonctionne en portrait et paysage et lit les codes inversés. Des liens profonds et des Intents permettent de l'appeler depuis d'autres apps ; le scan continu envoie un POST JSON par code vers une adresse. Un relais Bluetooth passe par des applications compagnons tierces.

## Comment c'est branché
```mermaid
flowchart TD
  A["CameraActivity.kt"] --> B["zxingcpp Mapping.kt"]
  B --> C["ContentParser.kt"]
  C --> D["ActionRegistry.kt"]
  A --> F["Database.kt"]
  A --> G["ScanSender.kt"]
  C --> H["BarcodeActivity.kt"]
```

## Essayer
Aucune commande documentée pour l'installation. Exemple de lien profond : `binaryeye://scan?continuous=true&callback=...`.

## Coût et pièges
Gratuit, dons demandés. Android seulement. Le callback de scan doit répondre en 2xx et accepter un POST ; mieux vaut HTTPS.

## Ce que ce n'est pas
Pas une bibliothèque : pour l'intégrer dans une app, le README renvoie à BarcodeScannerView.

## Alternatives
BarcodeScannerView pour intégrer ZXing-C++ dans une app ; ML Kit pour scanner sous Android.

## Pour toi
À ignorer : utilitaire Android, sans rapport avec ton métier, sauf pour saisir des codes à la volée.

