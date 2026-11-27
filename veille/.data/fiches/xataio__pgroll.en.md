# xataio/pgroll

> Go CLI for zero-downtime, reversible PostgreSQL schema migrations, for backend teams.

## The problem
A breaking migration (rename, type change) locks tables or breaks clients during deployment.

## What it actually does
Serves the old and the new schema side by side through views in virtual schemas (`search_path`).
Expand/contract model: additions first, new column filled by batched backfill, synchronization triggers.
`complete` drops the old schema, `rollback` undoes instantly.
JSON migrations, conversion from SQL DDL, `baseline` for an existing database; Postgres 14+, RDS, Aurora.

## How it is wired
```mermaid
flowchart LR
  OP[Schema operator] --> M[main.go]
  M --> C[cmd/root.go]
  C --> R[pkg/roll]
  R --> MG[pkg/migrations]
  MG --> BF[pkg/backfill]
  R --> ST[pkg/state]
  BF --> PG[(PostgreSQL)]
```

## Trying it
```bash
go install github.com/xataio/pgroll@latest
brew tap xataio/pgroll
brew install pgroll
pgroll --postgres-url postgres://user:password@host:port/dbname init
pgroll --postgres-url postgres://user:password@host:port/dbname start initial_migration.json
pgroll --postgres-url postgres://user:password@host:port/dbname complete
```

## Cost and gotchas
Free, single binary. Triggers add write amplification during the migration.
Clients must handle the versioned `search_path`.

## What it is not
Not an ORM nor a business data migration tool.
Not for DBMSs other than PostgreSQL.

## Alternatives
- Reshape: similar approach that inspired pgroll.
- PgHaMigrations: safe Postgres migrations for Rails.

## For you
Adopt if you run Postgres databases for features or metadata in production: migrations without downtime and instant rollback.
