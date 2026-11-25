---
schema: 1
depot: api-platform/core
source_readme_sha: 05a005eda09172a4
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# api-platform/core

> Bibliothèque PHP pour créer des API REST et GraphQL pilotées par l'hypermédia, intégrée à Symfony.

## Le problème
Construire une API complète (formats, documentation, filtres, pagination) en PHP demande beaucoup de code répétitif.

## Ce que ça fait vraiment
Un moteur de métadonnées décrit les ressources, des processeurs et fournisseurs d'état gèrent l'accès aux données (Doctrine, Elasticsearch, GraphQL), des sérialiseurs produisent JSON-LD, Hydra, JSON:API, HAL, OpenAPI. Des intégrations existent pour Symfony et, d'après l'arborescence, Laravel.

## Comment c'est branché
```mermaid
flowchart TD
  A1["Requête HTTP ou GraphQL"] --> A4["Symfony Controller"]
  A4 --> B1["Metadata Engine"]
  B1 --> B2["State Processors et Providers"]
  B2 --> C1["Doctrine"]
  B2 --> C4["Serialization Modules"]
  C4 --> D1["OpenAPI Documentation"]
```

## Essayer
Aucune commande dans le README ; il renvoie à la documentation du site officiel.

## Coût et pièges
Gratuit. PHP et Symfony requis (non listés : `aucun`). Le README court ne détaille pas l'installation.

## Ce que ce n'est pas
Pas un framework autonome : il se greffe sur Symfony ou Laravel. Pas orienté données ni IA.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : écosystème PHP, alors qu'un profil data / IA / MLOps expose ses API avec FastAPI ou équivalent.

