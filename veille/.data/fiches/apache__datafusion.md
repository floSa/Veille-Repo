---
schema: 1
depot: apache/datafusion
source_readme_sha: 3c5535ef79498dda
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# apache/datafusion

> Moteur de requêtes extensible en Rust sur Apache Arrow, pour bâtir bases et pipelines analytiques.

## Le problème
Construire un moteur analytique spécialisé (SQL, DataFrame, formats colonnes) sans repartir d'un moteur de base de données.

## Ce que ça fait vraiment
Planificateur de requêtes complet, exécution colonnaire, vectorisée, en flux et multi-thread, sources partitionnées. SQL et API DataFrame ; CSV, Parquet, JSON et Avro en natif ; points d'extension (sources, fonctions, opérateurs). Sous-projets pour Python, Java, Spark (Comet) et le distribué (Ballista).

## Comment c'est branché
```mermaid
flowchart LR
  A["SQL / DataFrame API"] --> P["SQL Parser & Planner"]
  P --> L["LogicalPlan Builder"]
  L --> O["Optimizer Rules"]
  O --> X["Physical Planner"]
  X --> E["Execution Engine"]
  E --> F["File Format Connectors"]
```

## Essayer
Aucune commande documentée dans le README : on déclare la crate `datafusion` dans `Cargo.toml`, avec ses features (`parquet`, `sql`, `avro`…).

## Coût et pièges
Gratuit, Apache-2.0. Rust requis. Les méthodes publiques évoluent : dépréciation avant suppression, voir les guidelines d'API.

## Ce que ce n'est pas
Pas une base de données prête à l'emploi : un moteur à assembler (la CLI et Python sont des sous-projets).

## Alternatives
DataFusion Python (interface Python), DataFusion Comet (accélérateur Spark), DataFusion Ballista (distribué).

## Pour toi
Adopter : socle Arrow/Parquet sérieux, fondation Apache, accessible depuis Python pour tes traitements de données.

