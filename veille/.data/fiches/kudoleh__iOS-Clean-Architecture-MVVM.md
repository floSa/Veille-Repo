---
schema: 1
depot: kudoleh/iOS-Clean-Architecture-MVVM
source_readme_sha: 28b5cdb0965e58b1
ecrite_le: 2026-09-29
nature: doc
deploiement: compilation
prerequis: [compilation]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# kudoleh/iOS-Clean-Architecture-MVVM

> Projet modèle iOS en Clean Architecture et MVVM, avec recherche de films en exemple.

## Le problème
Structurer une appli iOS en couches testables, sans que le domaine dépende de l'interface ou du réseau.

## Ce que ça fait vraiment
Trois couches : Domain (entités, cas d'usage, interfaces de dépôt), Data (dépôts, réseau, persistance CoreData) et Presentation (ViewModels, vues). Sont illustrés : injection de dépendances, coordinateurs de flux, DTO, cache, pagination, tests unitaires, vue SwiftUI ou UIKit sur le même ViewModel.

## Comment c'est branché
```mermaid
flowchart LR
    V["Views"] --> VM["ViewModels"]
    VM --> UC["Use Cases"]
    UC --> RI["Repository Interfaces"]
    RI --> RM["Repository Implementations"]
    RM --> N["Network Services"]
    N --> API["External API"]
```

## Essayer
Aucune commande documentée : ouvrir le projet dans Xcode (11.2.1 ou plus).

## Coût et pièges
Gratuit. Aucune licence déclarée, ce qui complique la réutilisation comme modèle. Le CI cité (Travis) est probablement obsolète.

## Ce que ce n'est pas
Pas une bibliothèque : un projet à copier et renommer (« Movie »). Une variante avec vues en code existe dans un autre dépôt.

## Alternatives
- iOS-Clean-Architecture-MVVM-Views-In-Code : même idée sans storyboards.

## Pour toi
À ignorer : modèle d'architecture iOS, hors périmètre data/IA/MLOps.

