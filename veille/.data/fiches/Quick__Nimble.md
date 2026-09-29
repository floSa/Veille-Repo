---
schema: 1
depot: Quick/Nimble
source_readme_sha: 7f8e6f1ff6ee74fb
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: autre
prerequis: [compilation]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# Quick/Nimble

> Bibliothèque de matchers pour exprimer les attentes des tests Swift et Objective-C.

## Le problème
Les assertions XCTest sont verbeuses ; on veut des attentes lisibles, y compris asynchrones.

## Ce que ça fait vraiment
Un DSL `expect(...).to(...)` s'appuie sur `Expectation`/`Expression` et un grand jeu de matchers. Des adaptateurs relient XCTest et Swift Testing, une couche Objective-C sert les tests ObjC, et des helpers gèrent `toEventually`. Installation par Swift Package Manager, CocoaPods, Carthage ou sous-modules git.

## Comment c'est branché
```mermaid
flowchart LR
    T["Test target"] --> D["Core DSL and Expectation Engine"]
    D --> M["Matchers Module"]
    D --> AS["Asynchronous Utilities"]
    D --> AD["Adapters Layer"]
    AD --> X["XCTest"]
    D --> O["Objective-C Support"]
```

## Essayer
```bash
pod install
```
(après ajout de `pod 'Nimble'` au Podfile ; version SwiftPM : `.package(url: "https://github.com/Quick/Nimble.git", from: "13.0.0")`).

## Coût et pièges
Gratuit. `raiseException` n'est pas disponible via Swift Package Manager. À lier à la cible de test, pas à l'app.

## Ce que ce n'est pas
Pas un framework de test complet : il complète XCTest ; le README le présente aussi comme compagnon de Quick. Aucune télémétrie, précise-t-il.

## Alternatives
- Quick : projet frère, style BDD, s'installe avec Nimble.

## Pour toi
À ignorer pour un profil data/IA/MLOps : c'est un outil de test Swift/iOS sans lien avec ton domaine.

