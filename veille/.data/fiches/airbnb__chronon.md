---
schema: 1
depot: airbnb/chronon
source_readme_sha: f75d6967d749f4ae
ecrite_le: 2026-10-27
nature: outil
deploiement: docker
prerequis: [Docker, beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# airbnb/chronon

> Plateforme de features pour ML : mêmes définitions pour entraînement (backfill) et serving en ligne, cohérence mesurable.

## Le problème
Les features calculées pour l'entraînement divergent de celles servies en production, ou demandent une infrastructure lourde à reproduire.

## Ce que ça fait vraiment
Tu définis des `GroupBy` (agrégations fenêtrées) et des `Join` en Python ; `compile.py` génère du Thrift, `run.py` lance backfills Spark, upload vers un KV store (MongoDB dans la démo), fetch en ligne et calcul de cohérence. Streaming Flink annoncé mais absent du quickstart. Services : fetcher Scala et service Java/Vert.x. Adoptants cités : Airbnb, Stripe, OpenAI, Netflix, Uber…

## Comment c'est branché
```mermaid
flowchart LR
  P["Python GroupBy / Join"] --> C["compile.py (Thrift)"]
  C --> R["run.py"]
  R --> S["Spark backfill"]
  R --> U["Upload vers MongoDB KV"]
  U --> F["Online fetcher"]
  F --> K["Client HTTP/GRPC"]
```

## Essayer
```bash
curl -o docker-compose.yml https://chronon.ai/docker-compose.yml
docker-compose up
docker-compose exec main bash
compile.py --conf=joins/quickstart/training_set.py
run.py --conf production/joins/quickstart/training_set.v1
```

## Coût et pièges
Le quickstart tourne avec Docker seul. En production : Spark, Hive/HDFS, Kafka, KV store, orchestration Airflow sont à ta charge. Dernier push début octobre 2026.

## Ce que ce n'est pas
Pas un feature store clé en main sur une machine : l'infrastructure de données autour est requise. Le Java du README n'est pas exécutable dans la démo.

## Alternatives
Aucune nommée dans le README (il compare des approches « log-and-wait » et « replicate offline-online »).

## Pour toi
À adopter pour évaluer si tu as des modèles en ligne : la cohérence offline/online est exactement le problème MLOps, mais prévois l'infra Spark/KV.

