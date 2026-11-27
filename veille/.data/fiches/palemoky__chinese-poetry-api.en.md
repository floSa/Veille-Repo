# palemoky/chinese-poetry-api

> REST and GraphQL API in Go to query nearly 400,000 classical Chinese poems.

## The problem
The poems of the chinese-poetry corpus are raw JSON files, impractical to search, filter or serve to an application.

## What it actually does
An importer loads the JSON files, normalizes and classifies them, then builds simplified and traditional SQLite databases. A Go server then serves poems, authors, dynasties and genres, with full-text search, pagination, filtered random draw and switching via `?lang=`. Per-IP rate limiting built in; unknown parameters are rejected with a 400.

## How it is wired
```mermaid
graph LR
  A[json_loader.go] --> B[pipeline.go]
  B --> C[finalize.go]
  C --> D[SQLite database]
  D --> E[router.go]
  E --> F[GraphQL server.go]
```

## Trying it
```bash
docker run -d -p 1279:1279 palemoky/chinese-poetry-api:latest
curl "http://localhost:1279/api/v1/health"
curl "http://localhost:1279/api/v1/poems/search?q=静夜思"
```

## Cost and gotchas
Free. Clone with `--recurse-submodules` to get the data. Documentation in Chinese.

## What it is not
Not a reading application: it is a read-only data service. The GPL-3.0 license imposes copyleft on anyone who redistributes.

## Alternatives
No alternative named; the data source is the chinese-poetry repository.

## For you
Worth watching: a clean, queryable corpus is useful for Chinese NLP or RAG, but it is a niche and the GPL hinders commercial use.
