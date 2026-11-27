# vanzan01/claude-code-sub-agent-collective

> npx installer for more than 30 Claude Code agents that enforce test-driven development.

## The problem
Coding agents ship without tests, guess APIs and follow methods that are inconsistent from one project to the next.

## What it actually does
`init` copies into the project a CLAUDE.md, agents, hooks and a Vitest test framework. The `/van` command routes to `@task-orchestrator`, which delegates to specialists (components, features, tests, quality, devops); docs lookup via Context7; TDD hooks (red, green, refactor) and delivery validation.

## How it is wired
```mermaid
flowchart LR
  I[Collective CLI installer.js] --> T[Templates]
  T --> V[/van van.md]
  V --> O[Task orchestrator]
  O --> S[Specialist agents]
  S --> H[TDD hooks]
  O --> R[research-agent.md]
```

## Trying it
```bash
npx claude-code-collective init
npx claude-code-collective validate
npx claude-code-collective status
```

## Cost and gotchas
Free, but uses a lot of tokens (30+ agents, research sometimes slow). Claude Code restart required. Last push April 2026.

## What it is not
The author says so: experimental, not production-ready, no official standard, opinionated about TDD.

## Alternatives
No alternative cited in the README.

## For you
Worth watching: interesting to see a hub-and-spoke orchestration with hooks, but test it on a throwaway project.
