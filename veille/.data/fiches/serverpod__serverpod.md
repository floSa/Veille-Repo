---
schema: 1
depot: serverpod/serverpod
source_readme_sha: 1f6bb11981c28a85
ecrite_le: 2026-10-27
nature: outil
deploiement: autre
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# serverpod/serverpod

> Serveur d'applications écrit en Dart avec génération d'API, pour développeurs Flutter.

## Le problème
Une application Flutter a besoin d'un backend, d'un client d'API et d'un accès base de données écrits à la main.

## Ce que ça fait vraiment
Génère les modèles et le client à partir du serveur, propose un ORM Dart sur PostgreSQL, migrations, cache distribué (Redis), journalisation, authentification (Google, Apple, Firebase, e-mail), flux par sockets, appels planifiés, téléversements, contrôles de santé et serveur web expérimental.

## Comment c'est branché
```mermaid
graph LR
  A[Flutter App] --> B[Generated API Client]
  B --> C[Endpoint Dispatch]
  C --> D[Authentication Core]
  C --> E[Dart ORM]
  E --> F[PostgreSQL]
  C --> G[Distributed Cache]
```

## Essayer
```bash
# non documenté dans le README : liens « Get Started » en ligne
```

## Coût et pièges
PostgreSQL, Redis facultatif ; scripts Terraform pour GCP et AWS. Le serveur web est dit expérimental.

## Ce que ce n'est pas
Pas un outil data/IA : un backend pour applications Flutter.

## Alternatives
- Aucune citée dans le README.

## Pour toi
À ignorer : écosystème Dart/Flutter hors du périmètre data/IA/MLOps.

