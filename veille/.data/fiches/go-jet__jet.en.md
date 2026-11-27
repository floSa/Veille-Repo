# go-jet/jet

> Typed SQL builder for Go with code generation and result mapping, without being an ORM.

## The problem
In Go, writing SQL as strings catches nothing at compile time, and mapping joins to nested structs is tedious; ORMs multiply round trips (N+1).

## What it actually does
The `jet` generator connects to PostgreSQL, MySQL, MariaDB, CockroachDB or SQLite, reads the schema and emits `table`, `view`, `enum` and `model` types. You write `SELECT(...).FROM(...)` in Go; a column change breaks compilation. `stmt.Query(db, &dest)` fills nested structs in a single call. `SELECT_JSON` (v2.13.0) returns the result as JSON on the server side.

## How it is wired
```mermaid
flowchart LR
  A[Jet generator CLI main.go] --> B[Schema metadata]
  B --> C[Model templates model_template.go]
  C --> D[Generated packages]
  D --> E[SQL statement builder sql_builder.go]
  E --> F[Query result mapping qrm.go]
  F --> G[Database]
```

## Trying it
```bash
go get -u github.com/go-jet/jet/v2
go install github.com/go-jet/jet/v2/cmd/jet@latest
jet -dsn=postgresql://user:pass@localhost:5432/jetdb?sslmode=disable -schema=dvds -path=./.gen
```

## Cost and gotchas
Go 1.24+ required. The generator deletes the contents of the schema's target folder. The DB user must be able to read the information tables.

## What it is not
Not an ORM: no migrations or object state management. pgx v5 support is experimental (`pgx` branch). Governance not specified in the README.

## Alternatives
No alternative named in the README (it compares itself to ORMs in general).

## For you
Worth watching: useful if you write Go with a relational database; otherwise outside your usual data/AI scope.
