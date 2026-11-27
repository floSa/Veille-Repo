# apache/datafusion

> Extensible query engine in Rust on Apache Arrow, for building analytical databases and pipelines.

## The problem
Building a specialized analytical engine (SQL, DataFrame, columnar formats) without starting over from a database engine.

## What it actually does
Full query planner, columnar, vectorized, streaming and multi-threaded execution, partitioned sources. SQL and DataFrame API; CSV, Parquet, JSON and Avro natively; extension points (sources, functions, operators). Sub-projects for Python, Java, Spark (Comet) and distributed (Ballista).

## How it is wired
```mermaid
flowchart LR
  A["SQL / DataFrame API"] --> P["SQL Parser & Planner"]
  P --> L["LogicalPlan Builder"]
  L --> O["Optimizer Rules"]
  O --> X["Physical Planner"]
  X --> E["Execution Engine"]
  E --> F["File Format Connectors"]
```

## Trying it
No command documented in the README: you declare the `datafusion` crate in `Cargo.toml`, with its features (`parquet`, `sql`, `avro`...).

## Cost and gotchas
Free, Apache-2.0. Rust required. Public methods evolve: deprecation before removal, see the API guidelines.

## What it is not
Not a ready-to-use database: an engine to assemble (the CLI and Python are sub-projects).

## Alternatives
DataFusion Python (Python interface), DataFusion Comet (Spark accelerator), DataFusion Ballista (distributed).

## For you
Adopt: a serious Arrow/Parquet foundation, Apache foundation, accessible from Python for your data processing.
