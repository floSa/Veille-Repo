# airbnb/chronon

> Feature platform for ML: same definitions for training (backfill) and online serving, with measurable consistency.

## The problem
Features computed for training diverge from those served in production, or require heavy infrastructure to reproduce.

## What it actually does
You define `GroupBy` (windowed aggregations) and `Join` in Python; `compile.py` generates Thrift, `run.py` launches Spark backfills, uploads to a KV store (MongoDB in the demo), online fetch and consistency computation. Flink streaming is announced but absent from the quickstart. Services: a Scala fetcher and a Java/Vert.x service. Cited adopters: Airbnb, Stripe, OpenAI, Netflix, Uber…

## How it is wired
```mermaid
flowchart LR
  P["Python GroupBy / Join"] --> C["compile.py (Thrift)"]
  C --> R["run.py"]
  R --> S["Spark backfill"]
  R --> U["Upload vers MongoDB KV"]
  U --> F["Online fetcher"]
  F --> K["Client HTTP/GRPC"]
```

## Trying it
```bash
curl -o docker-compose.yml https://chronon.ai/docker-compose.yml
docker-compose up
docker-compose exec main bash
compile.py --conf=joins/quickstart/training_set.py
run.py --conf production/joins/quickstart/training_set.v1
```

## Cost and gotchas
The quickstart runs with Docker alone. In production: Spark, Hive/HDFS, Kafka, KV store, Airflow orchestration are your responsibility. Last push early October 2026.

## What it is not
Not a turnkey feature store on one machine: the surrounding data infrastructure is required. The README's Java is not executable in the demo.

## Alternatives
None named in the README (it compares "log-and-wait" and "replicate offline-online" approaches).

## For you
Adopt it to evaluate if you have online models: offline/online consistency is exactly the MLOps problem, but plan for the Spark/KV infrastructure.
