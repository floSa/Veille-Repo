---
schema: 1
depot: ardalis/CleanArchitecture
source_readme_sha: a01abd200731d62a
ecrite_le: 2026-10-27
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# ardalis/CleanArchitecture

> Gabarit de départ ASP.NET Core appliquant la Clean Architecture, pour développeurs .NET.

## Le problème
Structurer une solution .NET en couches faiblement couplées (domaine, application, infrastructure) sans repartir de zéro.

## Ce que ça fait vraiment
Template de solution (branche principale en .NET 9, paquet NuGet 10.x). Le code contient deux exemples : gestion de contributeurs (API, use cases, agrégat, dépôt EF, événements de domaine, envoi d'e-mail) et mini panier/catalogue. Le README est surtout un renvoi vers la documentation et des formations NimblePros.

## Comment c'est branché
```mermaid
flowchart LR
  A["Contributor API Program.cs"] --> B["Contributor use cases"]
  B --> C["Contributor aggregate"]
  B --> D["Contributor repository EfRepository.cs"]
  D --> E["AppDbContext.cs"]
  C --> F["Domain event dispatch"]
```

## Essayer
Le README ne contient aucune commande : il renvoie à la documentation en ligne.

## Coût et pièges
Gratuit (MIT). Cours et accompagnement payants promus dans le README. Migrations de version à lire.

## Ce que ce n'est pas
Pas une bibliothèque à référencer : un modèle de départ à copier. Rien sur les données ni l'IA.

## Alternatives
Aucune alternative nommée dans le README (hexagonal, onion, ports-and-adapters sont cités comme synonymes).

## Pour toi
Hors périmètre data/IA ; à ignorer sauf si tu écris des API en C#.

