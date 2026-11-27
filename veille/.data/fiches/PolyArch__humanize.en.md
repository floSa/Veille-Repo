# PolyArch/humanize

> Claude Code plugin that loops Claude's implementation and an independent Codex review until the plan is validated.

## The problem
An agent that codes alone lets through defects it cannot see; a systematic external review is missing.

## What it actually does
Generates an idea, then a plan, then launches an RLCR loop: Claude implements, Codex reviews the summaries and then the code with severity markers, until the criteria are met. Options: agent teams, Gemini consultation, tracking with `humanize monitor`, a "Bitter Lesson" memory. Before the loop, it checks that the human understands the plan.

## How it is wired
```mermaid
flowchart LR
  I[gen-idea.md] --> P[gen-plan.md]
  P --> F[refine-plan.md]
  F --> L[start-rlcr-loop.md]
  L --> C[Codex review]
  C --> L
```

## Trying it
```bash
/plugin marketplace add PolyArch/humanize
/plugin install humanize@PolyArch
/humanize:gen-plan --input draft.md --output docs/plan.md
/humanize:start-rlcr-loop docs/plan.md
```

## Cost and gotchas
Requires the Codex CLI (and Gemini for research): API consumption from both providers is at your expense. No license declared.

## What it is not
Not a substitute for human review: the project insists that the human remains the architect. Its internal implementation is only verified on one hook.

## Alternatives
- The official ralph-loop plugin, which it draws inspiration from.

## For you
Worth watching: a useful idea of a double Claude/Codex look, but no license and usage billed twice.
