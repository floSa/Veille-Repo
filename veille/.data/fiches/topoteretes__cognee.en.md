# topoteretes/cognee

> Persistent memory layer for agents: text and code become a queryable graph.

## The problem
An agent starts from scratch every session: decisions, fixes and project context are lost.
Assembling graph + vectors + sessions + metadata yourself takes four databases.

## What it actually does
Four operations: `remember` (store), `recall` (retrieve), `improve` (enrich), `forget` (delete).
Text is split into entities and relationships; code becomes a graph of symbols and dependencies.
Without an LLM, ingestion and search work through a local GLiNER; the LLM steps are skipped.
Claude Code, Codex, OpenClaw and MCP plugins, Python/TypeScript/Rust SDKs, REST API.

## How it is wired
```mermaid
flowchart LR
  src["texte / code"] --> remember["cognee.remember"]
  remember --> graph["graphe entités+relations"]
  remember --> vect["chunks embarqués"]
  graph --> recall["cognee.recall"]
  vect --> recall
  recall --> app["agent / application"]
  improve["cognee.improve"] --> graph
```

## Trying it
```bash
uv pip install "cognee[gliner]"
cognee-cli remember "Marie Curie was born in Warsaw." -d local_quickstart
cognee-cli recall "Where was Marie Curie born?" -d local_quickstart
cognee-cli demo
docker compose --profile ui --profile mcp up
```

## Cost and gotchas
OpenAI by default for the LLM and embeddings: `LLM_API_KEY` is at your expense, calls are billed at ingestion.
The default Docker image does not include GLiNER; the local UI requires Node.js/npm and Docker for the MCP.

## What it is not
It is not "all Postgres" in production: the graph on Postgres is a demo, the production version is a licensed product.
It is not a managed database by default: authentication, persistent storage and backends remain for you to configure.
The BEAM scores (0.79 / 0.67) come from different configurations and cannot be compared directly.

## Alternatives
Mem0, Letta, Zep, Graphiti: named as import sources via the COGX format, hence direct competitors in agent memory.
Cognee Cloud: the managed option if you do not want to operate the stack yourself.

## For you
The serious candidate if you want a versionable agent memory over your own data — test the no-LLM mode first.
