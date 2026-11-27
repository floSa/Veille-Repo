# epgsql/epgsql

> Asynchronous PostgreSQL client in Erlang, with query pipelining.

## The problem
Chaining several queries takes as many network round trips, which slows down Erlang applications.

## What it actually does
A PostgreSQL driver with three interfaces (`epgsql`, `epgsqla`, `epgsqli`) that can be used on the same connection. An internal query queue enables pipelining. Supports simple, extended and prepared queries, batches, cancellation, LISTEN/NOTIFY, replication, and pluggable codecs.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
  A[Application Erlang] --> B[epgsql / epgsqla / epgsqli]
  B --> C[Processus connexion]
  C --> D[File de requêtes]
  D --> E[PostgreSQL]
  E --> F[Codecs de types]
```

## Trying it
```erlang
{ok, C} = epgsql:connect(#{host => "localhost", username => "username", password => "psss", database => "test_db", timeout => 4000}),
epgsql:squery(C, "select * from account"),
ok = epgsql:close(C).
```

## Cost and gotchas
Free. Erlang required (not listed as a prerequisite). SSL performance can drop if the process mailbox overflows. Cancellation is tricky with pipelining.

## What it is not
Not an ORM nor a connection pool: the pool comes with `epgsql/pgapp`. Not for Python.

## Alternatives
- epgsql/pgapp: adds a pool (poolboy) and automatic reconnection.

## For you
Ignore unless you use an Erlang or Elixir stack: a niche database driver, with no direct use in data/AI.
