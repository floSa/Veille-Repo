---
schema: 1
depot: abpframework/abp
source_readme_sha: be6e319db3bc9a55
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# abpframework/abp

> Framework .NET modulaire pour applications d'entreprise : DDD, multi-tenant, modules prêts à l'emploi.

## Le problème
Les applications métier .NET répètent la même infrastructure : identité, tenants, journaux d'audit, tâches de fond, événements.

## Ce que ça fait vraiment
Couche d'architecture au-dessus d'ASP.NET Core : modularité et DDD, locataire courant, validation, autorisation, cache, bus d'événements, tâches de fond, stockage de blobs, rendu de modèles. Modules (Account, Identity, OpenIddict, SaaS, CMS Kit), thèmes UI, modèles de démarrage, CLI, ABP Studio et ABP Suite.

## Comment c'est branché
```mermaid
flowchart LR
  Dev[Développeur] --> App[ABP application]
  App --> Found[Modularity et DDD]
  Found --> Cross[Cross-cutting services]
  Found --> Infra[Event bus Jobs Blob Audit]
  App --> Modules[Identity Permissions Settings]
  App --> UI[MVC themes]
```

## Essayer
Aucune commande documentée dans le README : guides Getting Started et outil CLI cités.

## Coût et pièges
Le framework est gratuit en LGPL-3.0 ; ABP Studio et ABP Suite sont des outils séparés, certains payants (non détaillé).

## Ce que ce n'est pas
Pas un outil sans code : il impose une architecture opinionnée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : spécifique aux applications .NET d'entreprise, sans lien avec data/IA.

