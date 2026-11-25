---
schema: 1
depot: rive-app/rive-ios
source_readme_sha: 51dbb3d497b57170
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# rive-app/rive-ios

> Bibliothèque d'exécution Apple qui lit des animations interactives Rive dans des apps UIKit, AppKit et SwiftUI.

## Le problème
Intégrer dans une app iOS ou macOS des animations vectorielles qui réagissent aux interactions demande un moteur dédié.

## Ce que ça fait vraiment
`RiveViewModel` pilote `RiveModel` et `RiveView` au-dessus du moteur C++ Rive (artboards, machines à états, entrées). Une couche de concurrence propose une API asynchrone avec `Worker` et file de commandes. Distribuée par Swift Package Manager et CocoaPods.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  A["Source/RiveViewModel.swift"] --> B["Source/RiveView.swift"]
  A --> C["Source/RiveModel.swift"]
  C --> D["Renderer/RiveFile.mm"]
  D --> E["Renderer/RiveArtboard.mm"]
  E --> F["RiveStateMachineInstance.mm"]
  H["Concurrency/Worker/Worker.swift"] --> I["RiveCommandQueue.mm"]
```

## Essayer
Le README ne donne pas de commande d'installation : ouvrir `RiveRuntime.xcworkspace` dans Xcode avec le schéma `Preview (iOS)` ou `Preview (macOS)`.

## Coût et pièges
Gratuit. Nécessite Xcode (le besoin réel n'est pas dans la liste des prérequis) et des fichiers d'animation créés dans l'éditeur Rive.

## Ce que ce n'est pas
Pas l'éditeur d'animations Rive : seulement le lecteur Apple. Pas de lien avec la data.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : runtime d'animation pour apps Apple, hors du périmètre data / IA / MLOps.

