# microsoft/pg_durable

> PostgreSQL extension that runs durable SQL workflows, with crash recovery, without an external orchestrator.

## The problem
Long-running jobs in a database end up as cron, queues, workers and status tables. A restart in the middle forces you to replay everything.

## What it actually does
You describe the workflow in SQL with operators like `~>` and `|=>`, then `df.start()` launches it. A background worker, hosting the duroxide runtime, executes each step (SQL or HTTP) and checkpoints it in PostgreSQL. State lives in the `df.*` and `duroxide.*` schemas. After a crash, execution resumes from the last durable point. Outgoing HTTP calls follow an anti-SSRF policy.

## How it is wired
```mermaid
flowchart TD
  A["Client SQL"] --> B["dsl.rs, df.start"]
  B --> C["Schéma df"]
  C --> D["worker.rs"]
  D --> E["duroxide"]
  E --> F["Schéma duroxide"]
  D --> G["execute_sql.rs, execute_http.rs"]
```

## Trying it
```bash
docker run -d --name pg_durable_pg17 \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=secret \
  ghcr.io/microsoft/pg_durable:pg17

psql "postgresql://postgres:secret@localhost:5432/postgres"
```

## Cost and gotchas
Free. The Docker image is for evaluation only, not production: it enables superuser instances. It requires `shared_preload_libraries`, a restart and a superuser worker. PostgreSQL 17 or 18 only, amd64 for the image.

## What it is not
It is not a general-purpose orchestrator: everything must fit into SQL or HTTP steps. The project is in preview, and the license is not identified by GitHub.

## Alternatives
Airflow, Temporal, Step Functions, Argo or pg_cron with a jobs table: more flexibility outside SQL, at the price of one more service.

## For you
Keep an eye on it: very relevant for embedding or ingestion pipelines already in Postgres, but preview status and the license needs clarifying.
