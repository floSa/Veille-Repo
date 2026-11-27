# bruin-data/ingestr

> Command-line tool that copies data from a source to a destination using simple flags, with no code.

## The problem
Copying a table from a database to a warehouse usually means writing a connector, handling schemas and incremental loading.

## What it actually does
`ingestr ingest` takes a source URI, a source table, a destination URI and a destination table. It loads in `append`, `merge` or `delete+insert` mode. The pip package can also be used from Python (`ingestr.ingest(...)`) with rows, generators or DataFrames, passed as an Arrow IPC stream. According to the code, a factory creates the source handler and the destination handler; a telemetry module exists in the tree.

## How it is wired
```mermaid
flowchart LR
  S["Database Sources"] --> H["Source Handler"]
  I["Command Line Interface"] --> F["Factory Component"]
  F --> H
  H --> T["Table Definition Manager"]
  T --> D["Destination Handler"]
  D --> Q["SQL Database Handler"]
  M["Telemetry System"] --> I
```

## Trying it
```bash
pip install ingestr
ingestr ingest \
    --source-uri 'postgresql://admin:admin@localhost:8837/web?sslmode=disable' \
    --source-table 'public.some_data' \
    --dest-uri 'bigquery://<your-project-name>?credentials_path=/path/to/service/account.json' \
    --dest-table 'ingestr.some_data'
```
An install script `curl -LsSf https://getbruin.com/install/ingestr | sh` also exists.

## Cost and gotchas
Free, but you need access to the sources and destinations (BigQuery credentials, Postgres...). On first use the pip package downloads a binary from the GitHub releases. The README does not describe the telemetry: check it. A license is present but GitHub does not identify it.

## What it is not
It is not a transformation tool: it moves data, it does not model it. The precise list of connectors is not in the README, which points to the documentation.

## Alternatives
No alternative named in the README.

## For you
Adopt it for copying tables to a warehouse without writing a connector: one command is enough, but confirm the license and the telemetry before using it in a company.
