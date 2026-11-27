# cube-js/cube

> Open source semantic layer that defines metrics and access once, exposed via SQL, REST and GraphQL.

## The problem
Every BI tool or AI agent redefines its own metrics: diverging results and duplicated logic.

## What it actually does
Data model as code (measures, dimensions, joins, access rules) compiled to SQL for your sources (Snowflake, BigQuery, Databricks, Postgres…). REST/GraphQL/SQL/subscription API gateway, built-in relational cache (Cube Store) for latency. No interface: "headless". The commercial Cube offering adds chat, dashboards and RBAC.

## How it is wired
```mermaid
flowchart LR
  A[BI AI Consumer] --> B[API Gateway]
  B --> C[Schema Compiler]
  C --> D[SQL Query Engine]
  D --> E[Orchestrator Cache]
  E --> F[Driver Interface]
  F --> G[SQL Data Sources]
```

## Trying it
```bash
docker run -p 4000:4000 \
  -p 15432:15432 \
  -v ${PWD}:/cube/conf \
  -e CUBEJS_DEV_MODE=true \
  cubejs/cube
```

## Cost and gotchas
Dev mode = authentication bypass: never expose it or use it in production (README). Without a SQL password, the SQL API accepts any username. License present but not identified by GitHub.

## What it is not
Not a database nor a BI app: it has no interface. Management features are in the paid offering.

## Alternatives
Cube (commercial offering, same semantic layer), mentioned in the README.

## For you
Adopt: a governed semantic layer is valuable for feeding BI and agents with the same metrics; check the license and never run dev mode in production.
