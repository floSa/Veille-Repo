# electric-sql/electric

> Read-path sync engine from Postgres to clients, over HTTP and "Shapes".

## The problem
Partially syncing Postgres data to applications (fan-out, partial replication) is expensive to write yourself.

## What it actually does
Elixir service that connects to Postgres logical replication, derives filtered "Shapes", and serves a snapshot then changes over HTTP/SSE, CDN-compatible. TypeScript and Elixir clients, React hook. The repository also contains a Rust durable-streams service and an agents platform.

## How it is wired
```mermaid
flowchart LR
  A[Postgres] --> B[Replication Client]
  B --> C[Shape Event Router]
  C --> D[Shape Cache]
  D --> E[Shape HTTP API]
  E --> F[Shape Clients]
```

## Trying it
```bash
docker compose -f .support/docker-compose.yml up
curl -i 'http://localhost:3000/v1/shape?table=foo&offset=-1'
```

## Cost and gotchas
Requires Postgres with logical replication. The Phoenix LiveDashboard has no authentication: protect it at the network level. Read-only: writing is not covered.

## What it is not
Not a bidirectional sync: "read-path" only. The agents part is a separate topic, little detailed in the README.

## Alternatives
No alternative named in the README.

## For you
Worth watching: useful to feed applications or agents with up-to-date Postgres data, but not an analytics pipeline tool.
