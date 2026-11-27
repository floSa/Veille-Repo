# levnikolaevich/claude-code-skills

> Collection of Claude Code and Codex skills covering the cycle from product discovery to operations.

## The problem
An agent says "done" without you knowing what it checked or what remains pending.

## What it actually does
Eight thematic plugins: product discovery, architecture, planning, implementation, quality assurance, delivery, operations, skill maintenance. Each skill is independent (e.g. `ln-41-surgical-change-implementer`) and aims at a bounded deliverable with explicit evidence and limits. Reviews stay read-only; publishing follows authorization boundaries.

## How it is wired
```mermaid
flowchart LR
  D[Product discovery] --> A[Architecture]
  A --> P[Delivery planning]
  P --> I[Implementation]
  I --> Q[Quality assurance]
  Q --> L[Delivery]
  L --> O[Operations]
```

## Trying it
```text
/plugin marketplace add levnikolaevich/claude-code-skills
/plugin install implementation-suite@levnikolaevich-skills-marketplace
/reload-plugins
```

## Cost and gotchas
Free; consumes your agent quota. The skills' content was not sampled in the sheet: quality unverified.

## What it is not
Not an orchestration framework: skills to invoke by hand, with no guaranteed execution.

## Alternatives
No alternative cited in the README.

## For you
Watch: install a single plugin (implementation-suite) to judge; the whole is vast and opinionated.
