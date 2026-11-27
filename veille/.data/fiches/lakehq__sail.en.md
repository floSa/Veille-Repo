# lakehq/sail

> Rust engine compatible with Spark Connect that runs PySpark without a JVM, for data engineers.

## The problem
Spark relies on the JVM: slow startup, memory tuning, high infrastructure costs.

## What it actually does
A Spark Connect server parses SQL and plans, then runs them locally or in distributed mode (driver/workers, Celeborn shuffle). Reads and writes Delta Lake and Iceberg, with catalogs (Glue, Unity, Hive, OneLake) and storage on S3, Azure, GCS, HDFS. Python UDFs run through Arrow.

## How it is wired
```mermaid
graph LR
  A[Spark clients] --> B[Spark Connect server.rs]
  B --> C[SQL parser]
  C --> D[Plan resolver]
  D --> E[Execution driver]
  E --> F[Execution worker]
  F --> G[Data source formats]
```

## Trying it
```bash
pip install pysail
pip install "pyspark-client"
sail spark server --port 50051
```

## Cost and gotchas
Free. The "~10x faster" figures come from a TPC-H derivative supplied by the vendor. The compatibility script only checks that functions exist.

## What it is not
Not guaranteed behavioral parity with Spark; the checker does not cover Spark SQL strings.

## Alternatives
- None cited in the README.

## For you
Worth watching: a strong promise for your PySpark jobs, but measure it yourself on your own workloads before migrating.
