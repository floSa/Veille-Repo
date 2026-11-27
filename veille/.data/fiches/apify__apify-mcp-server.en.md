# apify/apify-mcp-server

> Apify's official MCP server giving agents scraping, data extraction and browser automation.

## The problem
Connecting an agent to every site to scrape takes one MCP server per site and a lot of glue code.

## What it actually does
The agent searches for an Actor in the Apify Store, reads its schema and price, runs it, then reads the dataset (`search-actors`, `fetch-actor-details`, `call-actor`, `get-dataset-items`). Available hosted (OAuth) or locally over stdio. The `tools` parameter chooses what is loaded. README truncated after the FAQ in the supplied material.

## How it is wired
```mermaid
flowchart TD
  client["Client MCP"] --> server["mcp.apify.com / actors-mcp-server"]
  server --> search["search-actors"]
  server --> details["fetch-actor-details"]
  server --> call["call-actor"]
  call --> actor["Actor Apify"]
  actor --> data[("Dataset")]
```

## Trying it
```bash
claude mcp add apify "https://mcp.apify.com" -t http
npx @apify/actors-mcp-server --tools actors,docs,apify/web-search,apify/web-fetch
```

## Cost and gotchas
Signing in is free; Actor runs are billed ($5 of monthly usage included). Cap with `maxTotalChargeUsd` or `maxItems`. The local server requires Node 22+. Telemetry is on by default.

## What it is not
Not a scraper itself: it opens access to third-party Actors, some paid. The default tool set may change between versions: pin `tools`.

## Alternatives
No alternative named in the README.

## For you
Adopt it if your agents or data pipelines need web collection: a single connection, cappable costs.
