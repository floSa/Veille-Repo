---
schema: 1
depot: Chrisimx/ScanBridge
source_readme_sha: 2b944f9a10a497af
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: freemium
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# Chrisimx/ScanBridge

> Application Android Material You qui numérise via les scanners réseau compatibles eSCL/AirScan.

## Le problème
Utiliser un scanner réseau depuis un téléphone sans pilote constructeur.

## Ce que ça fait vraiment
Découvre les scanners eSCL du réseau, pilote la numérisation (source, résolution, recto-verso, dimensions), assemble plusieurs pages et exporte en PDF ou images. Application Kotlin multiplateforme (Android et bureau) : l'interface Compose partage un noyau (découverte, protocole eSCL, base Room).

## Comment c'est branché
```mermaid
flowchart TD
  A["MainActivity.kt"] --> C["ScanBridgeNavHost.kt"]
  B["desktopApp Main.kt"] --> C
  C --> D["ScannerBrowser.kt"]
  D --> E["DiscoveryUsecase.kt"]
  E --> F["EsclScanningProtocol.kt"]
  C --> G["StartScanUseCase.kt"]
```

## Essayer
```bash
./gradlew assembleRelease
./gradlew build
```

## Coût et pièges
Seule la permission internet est demandée. Disponible sur F-Droid et Google Play (achat qui soutient le développement). Licence GPL-3.0.

## Ce que ce n'est pas
Pas un logiciel d'OCR ni de gestion documentaire : il numérise seulement.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : pratique pour numériser depuis un téléphone, mais sans lien avec un travail data/IA/MLOps.

