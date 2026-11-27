# gastownhall/beads

> Graph-based issue tracker, versioned by Dolt, designed as memory for coding agents.

## The problem
An agent's markdown plans get lost, duplicated and do not express dependencies.
Several agents or branches writing the same task file produce merge conflicts.

## What it actually does
Each task is a "bead" in a dependency graph; `bd ready` returns only tasks with no open blocker.
`bd update --claim` atomically reserves a task (assignment + status), `bd close` releases blocked tasks.
Identifiers are hashes (`bd-a1b2`), so there are no collisions between agents or branches; hierarchy `bd-a3f8.1.1` for epics.
Semantic compaction of closed tasks to save context, threaded messages, `bd remember` for project memory re-injected by `bd prime`.

## How it is wired
```mermaid
flowchart LR
  create["bd create"] --> graph["graphe de dépendances"]
  graph --> ready["bd ready"]
  ready --> claim["bd update --claim"]
  claim --> close["bd close"]
  close --> graph
  graph <--> remote["bd dolt push / pull"]
  graph --> jsonl[".beads/issues.jsonl (export)"]
```

## Trying it
```bash
curl -fsSL https://raw.githubusercontent.com/gastownhall/beads/main/scripts/install.sh | bash
bd init
bd setup claude
brew install beads
npm install -g @beads/bd
bd ready --json
bd prime
```

## Cost and gotchas
`bd init` modifies your repository: it creates or updates `AGENTS.md` and installs Claude/Codex integrations unless `--skip-agents` or `--stealth` is used.
Version upgrades may cross a schema migration: a single clone runs `bd migrate` then `bd dolt push`, the others run `bd bootstrap`.

## What it is not
It is not a flat file: `.beads/issues.jsonl` is an interoperability export, neither a source of truth nor a backup.
It is not multi-writer by default: embedded mode has a single writer, server mode requires an external `dolt sql-server`.
It is not something to clone into your project: it is a CLI installed once, used everywhere.

## Alternatives
No alternative named in the README.

## For you
Interesting if you run several agents in parallel on the same repository — check the checksums before installing the binary.
