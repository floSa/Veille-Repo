# PostgREST/postgrest

> Server that exposes a complete REST API from an existing PostgreSQL database.

## The problem
Hand-writing a CRUD API on top of PostgreSQL is slow and duplicates rules already present in the database.

## What it actually does
PostgREST parses the request, verifies the JWT token, plans, translates to SQL (JSON serialized directly in SQL), executes through a connection pool and formats the response. Authorization comes from database roles, schema versioning, and documentation from OpenAPI. It is written in Haskell (Warp, Hasql) and is stateless.

## How it is wired
```mermaid
flowchart LR
  A["Client API"] --> B["ApiRequest.hs"]
  B --> C["Auth.hs (JWT)"]
  C --> D["Plan.hs"]
  D --> E["Query.hs (SQL)"]
  E --> F["Pool.hs"]
  F --> G["PostgreSQL"]
```

## Trying it
```bash
postgrest --help
```

## Cost and gotchas
Free. You need a PostgreSQL and must take care with roles and constraints: security rests entirely on the database. The README also describes a Docker installation, without a command.

## What it is not
Not an ORM nor a business logic server: all business logic must live in the database (views, functions, constraints).

## Alternatives
No alternative named in the README.

## For you
Adopt to quickly expose feature or result tables as an API, if you are comfortable with PostgreSQL roles.
