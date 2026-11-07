---
schema: 1
depot: microsoft/pg_durable
source_readme_sha: fad1c3c19f579b7e
ecrite_le: 2026-11-07
nature: extension
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# microsoft/pg_durable

> Extension PostgreSQL qui exécute des workflows SQL durables, avec reprise après crash, sans orchestrateur externe.

## Le problème
Les traitements longs en base finissent en cron, files, workers et tables de statut. Un redémarrage au milieu oblige à tout rejouer.

## Ce que ça fait vraiment
On décrit le workflow en SQL avec des opérateurs comme `~>` et `|=>`, puis `df.start()` le lance. Un worker en arrière-plan, hébergeant le runtime duroxide, exécute chaque étape (SQL ou HTTP) et la checkpoint dans PostgreSQL. L'état est dans les schémas `df.*` et `duroxide.*`. Après un crash, l'exécution reprend au dernier point durable. Les accès HTTP sortants suivent une politique anti-SSRF.

## Comment c'est branché
```mermaid
flowchart TD
  A["Client SQL"] --> B["dsl.rs, df.start"]
  B --> C["Schéma df"]
  C --> D["worker.rs"]
  D --> E["duroxide"]
  E --> F["Schéma duroxide"]
  D --> G["execute_sql.rs, execute_http.rs"]
```

## Essayer
```bash
docker run -d --name pg_durable_pg17 \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=secret \
  ghcr.io/microsoft/pg_durable:pg17

psql "postgresql://postgres:secret@localhost:5432/postgres"
```

## Coût et pièges
Gratuit. L'image Docker est réservée à l'évaluation, pas à la production : elle active des instances superutilisateur. Il faut `shared_preload_libraries`, un redémarrage et un worker superutilisateur. PostgreSQL 17 ou 18 seulement, amd64 pour l'image.

## Ce que ce n'est pas
Ce n'est pas un orchestrateur généraliste : tout doit tenir en étapes SQL ou HTTP. Le projet est en préversion, et la licence n'est pas identifiée par GitHub.

## Alternatives
Airflow, Temporal, Step Functions, Argo ou pg_cron avec une table de jobs : plus de souplesse hors SQL, au prix d'un service de plus.

## Pour toi
À surveiller : très pertinent pour des pipelines d'embeddings ou d'ingestion déjà dans Postgres, mais préversion et licence à clarifier.

