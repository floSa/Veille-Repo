# fastapi/fastapi

> A Python framework for building web APIs from type annotations, with automatic documentation.

## The problem
Writing an API means validating inputs, converting types and maintaining documentation, all by hand.

## What it actually does
You declare routes with annotated Python functions; FastAPI validates the parameters (path, query, body, headers, cookies, forms, files), converts the data, injects dependencies, serializes the response and generates an OpenAPI schema with two documentation interfaces (Swagger UI, ReDoc). It builds on Starlette (web) and Pydantic (data), with WebSockets, SSE and background tasks.

## How it is wired
```mermaid
flowchart LR
  C["Client HTTP"] --> A["FastAPI app (applications.py)"]
  A --> M["Middleware stack"]
  M --> R["Route dispatch (routing.py)"]
  R --> D["Dependency solving (utils.py)"]
  D --> E["User endpoint"]
  E --> S["Response encoding (encoders.py)"]
```

## Trying it
```bash
uv add "fastapi[standard]"
uv run fastapi dev
uv run fastapi deploy
```
The example's `main.py` (`FastAPI()` and two `@app.get` routes) is in the README.

## Cost and gotchas
Free. `fastapi deploy` sends the application to FastAPI Cloud, a service from the same team, optional; you can deploy elsewhere. The README's productivity gain figures come from an internal estimate, which cannot be verified.

## What it is not
Neither an ORM nor a server: you need Uvicorn (provided by the `standard` extra) and, for persistence, another library. No front end.

## Alternatives
- Typer: for a command-line application rather than a web API.
- Starlette: the base on which FastAPI is built.
- Strawberry: cited for GraphQL integration.

## For you
Adopt: it is the common choice for exposing a model as an API (Pydantic validation, auto docs), with short code.
