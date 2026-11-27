# whiteguo233/OpenBiliClaw

> Local content-discovery agent that builds a psychological profile and recommends across several platforms.

## The problem
Each platform's recommendations serve its own goals and stay siloed; your tastes are never cross-referenced from one site to another.

## What it actually does
A browser extension captures your interactions and sends them to a local Python backend (FastAPI, SQLite). A five-layer profile engine (MBTI, traits, needs) guides discovery on B站, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, GitHub, V2EX, etc. An LLM evaluator scores candidates, with interest probes, dialogue and feedback. Interfaces: web, mobile, extension, separate Flutter client.

## How it is wired
```mermaid
flowchart LR
  A[Browser extension service-worker.ts] --> B[Local API app.py]
  B --> C[Event ingress event_ingress.py]
  C --> D[Memory manager manager.py]
  D --> E[Profile analysis engine.py]
  E --> F[Discovery engine engine.py]
  F --> G[Recommendation engine engine.py]
```

## Trying it
```bash
curl -fsSL https://raw.githubusercontent.com/whiteguo233/OpenBiliClaw/main/scripts/install.sh | bash
openbiliclaw init
openbiliclaw start
openbiliclaw discover
```

## Cost and gotchas
LLM key at your expense (or local Ollama with bge-m3, ~1.1 GB). The macOS/Windows installers are neither signed nor notarized. You must be logged in to the platforms in your browser.

## What it is not
Not a cloud service: everything stays local except the LLM calls you configure. A `.obcbackup` export is not encrypted.

## Alternatives
No alternative named in the README (comparison with official recommendations and filtering plugins).

## For you
Worth watching: a rich example of a local agent with memory, but mostly useful if you consume these platforms (mostly Chinese); check the level of personal data handled.
