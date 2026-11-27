# Graphify-Labs/graphify

> A command-line tool that transforms a project into a queryable knowledge graph, rather than simply using `grep`.

## The problem
An agent that needs to understand a deposit reads the files one by one and destroys their context.
Vector indexes provide plausible excerpts without showing how things are connected.

## What it actually does
Parses the local code using tree-sitter (with approximately 37 grammars), without using an LLM or generating any output data.
Produces three files: `graph.html` (clickable), `GRAPH_REPORT.md`, and `graph.json` (re-queryable).
Three queries: `query` (subgraph for a question), `path` (path between two nodes), and `explain`.
Each edge is labeled as `EXTRACTED`, `INFERRED`, or `AMBIGUOUS` – we know what is read and what is inferred.

## How it is wired
```mermaid
flowchart TD
  u(("Développeur")) --> skill["/graphify dans l'assistant"]
  skill --> extract["Extraction tree-sitter locale"]
  skill -.-> sem["Passe sémantique docs/médias"] -.-> llm["Modèle de l'assistant"]
  extract --> graph[("graph.json")]
  graph --> html["graph.html"]
  graph --> report["GRAPH_REPORT.md"]
  graph --> q["query / path / explain"]
```

## Trying it
```bash
uv tool install graphifyy
graphify install
graphify explain "APIRouter"
graphify path "FastAPI" "ModelField"
```

## Cost and gotchas
The PyPI package is `graphifyy` (two y's); the others `graphify*` are not affiliated.
The code is free and local; documentation, PDFs, images, and videos are accessed through your assistant's model.

## What it is not
Not a vector index: no embeddings, so no semantic similarity search on the code.
Not fully local: the company provides a hosted platform, and the semantic search relies on a backend.
The LOCOMO/LongMemEval figures in the README are self-reported, based on a benchmark chosen by the publisher.

## Alternatives
- `microsoft/markitdown`: This is suitable for converting documents, but not for mapping code.

## For you
Local extraction without LLMs is a significant advantage when dealing with proprietary code. It should be tested on a real repository.
