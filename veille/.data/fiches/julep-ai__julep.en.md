# julep-ai/julep

> Python framework for AI agents as durable, resumable, audited dataflows, for engineering teams.

## The problem
Ad hoc agent loops crash without recovery, replay side effects and are hard to explain.

## What it actually does
`@flow` compiles ordinary Python into a frozen IR: tools, pure functions, reasoners, branches, fan-out, retries, timeouts.
Local execution (`dry_run` with fake reasoners) or durable on Temporal or DBOS; unauthorized tools are refused.
"dbt for agents" CLI: `ls`, `graph`, `run`, `lint`, `test`, `trace`, `deploy`, `plan/apply` to Kubernetes/Helm.
FastAPI control plane, secrets vault, frozen MCP snapshots, OTel/Langfuse export.

## How it is wired
```mermaid
flowchart LR
  F[@flow] --> IR[IR figé]
  IR --> D[deploy / dry_run]
  D --> T[Temporal / DBOS]
  T --> TL[Tools / MCP]
  T --> R[Reasoner LLM]
  D --> CLI[julep CLI]
  T --> O[Langfuse / OTel]
```

## Trying it
```bash
pip install --pre julep
julep ls
julep run triage --input '"TICKET-42"'
julep lint +triage
julep serve api --migrate
```

## Cost and gotchas
Free base; production involves Temporal, Postgres, S3, Kubernetes and LLM keys.
Julep 3 is a release candidate, a rewrite with no migration path from v1.

## What it is not
Not the Julep v1 agent API platform (`v1` branch).
Not a no-code tool: designed for developers comfortable with infrastructure.

## Alternatives
No alternative named in the README.

## For you
Worth watching: a serious approach to agent reliability (durability, IR, lint), to test as soon as 3.0 final is out if you are industrializing agents.
