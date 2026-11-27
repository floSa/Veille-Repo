# dbt-labs/dbt

> Data transformation tool built on SELECT queries, here rewritten in Rust for version 2.0.

## The problem
Transforming data in a warehouse with software engineering practices (versioning, tests, dependencies) is hard to do by hand.

## What it actually does
You write models as SELECT statements; dbt turns them into tables and views in the warehouse, and manages dependencies between models and tests. The main branch holds version 2.0: a rewrite in Rust, a single binary, faster parsing and compilation, a strict specification, Parquet artifacts in addition to JSON. The Python version 1 lives on the `1.latest` branch.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
  sql["Requêtes SELECT"] --> d["dbt (version Rust)"]
  d --> wh["Entrepôt de données"]
```

No diagram provided, and the architecture described from the code is not available. Not documented.

## Trying it
The README contains no command: it points to the installation and introduction pages.

## Cost and gotchas
Free for the Apache 2.0 code. dbt is a distribution with customizations under the dbt product license. A data warehouse is required. 2.0 is recent.

## What it is not
Not an extraction or loading tool: it only does transformation. The main repository is no longer the Python implementation of version 1.

## Alternatives
No alternative named in the README.

## For you
Adopt it if you build SQL analytics pipelines: it is the reference for in-warehouse transformation, but check which version (1 or 2) you install.
