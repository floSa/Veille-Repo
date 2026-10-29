---
schema: 1
depot: DataDog/dd-trace-php
source_readme_sha: df404892561207d1
ecrite_le: 2026-10-29
nature: extension
deploiement: autre
prerequis: [compte à créer, clé d'API]
cout: payant
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS, télémétrie]
verdict: ignorer
---

# DataDog/dd-trace-php

> Extension PHP de Datadog pour l'APM et le traçage distribué.

## Le problème
Observer les requêtes et erreurs d'applications PHP.

## Ce que ça fait vraiment
Extension native instrumentant le moteur PHP, API utilisateur, intégrations de frameworks, traceur compatible OpenTracing. Profileur, sécurité applicative (extension, processus auxiliaire, WAF), télémétrie, configuration distante, sidecar. Installation par PECL (`datadog_trace`) ou sources.

## Comment c'est branché
```mermaid
flowchart LR
  A[Application PHP] --> B[engine_hooks.c]
  B --> C[ddtrace.h]
  C --> D[sidecar.rs]
  D --> E[Backend Datadog]
  F[client_init.c] --> G[Helper AppSec]
  H[Profiler lib.rs] --> D
```

## Essayer
Aucune commande documentée dans le README : renvoie à la documentation d'installation.

## Coût et pièges
Compilation (cargo 1.91.1 minimum) et compte Datadog payant pour exploiter les données.

## Ce que ce n'est pas
Pas un outil autonome ni indépendant du fournisseur.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : traçage PHP propriétaire, hors de ta pile data/IA.

