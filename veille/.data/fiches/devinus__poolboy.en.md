# devinus/poolboy

> Worker pool library for Erlang, to control the number of open processes or connections.

## The problem
Opening one database connection per request overloads the server; a bounded pool is needed.

## What it actually does
- Checks out (`checkout`) and returns (`checkin`) a worker, or uses `transaction` to do it automatically.
- Options: name, worker module, maximum size, allowed overflow (`max_overflow`), `lifo` or `fifo` strategy.
- The README shows a PostgreSQL connection pool with epgsql.

## How it is wired
```mermaid
flowchart LR
  A[Application] --> B[poolboy]
  B --> C[Worker gen_server]
  C --> D[PostgreSQL via epgsql]
```

## Trying it
```erlang
1> Worker = poolboy:checkout(PoolName).
2> gen_server:call(Worker, Request).
3> poolboy:checkin(PoolName, Worker).
```

## Cost and gotchas
Free. Last push in April 2023. Three authors credited, no clear maintenance.

## What it is not
Not a pool for other languages. No built-in metrics.

## Alternatives
No alternative named in the README.

## For you
Ignore: Erlang and little maintained, unrelated to data / AI.
