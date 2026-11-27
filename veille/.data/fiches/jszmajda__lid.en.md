# jszmajda/lid

> Method and Claude Code plugins for specifying the design before the code with an agent.

## The problem
Coding agents misunderstand intent: the gaps are not bugs but misunderstandings about what was wanted.

## What it actually does
Enforces a chain of HLD, LLD, EARS specifications, tests, code, with a review at each phase. The code and tests cite specification identifiers (`@spec`). Two plugins: `linked-intent-dev` and `arrow-maintenance`, plus `lid-experimental`. For other tools, rules point to an `AGENTS.md`.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.

```mermaid
flowchart LR
    A["HLD"] --> B["LLDs"]
    B --> C["Specs EARS"]
    C --> D["Tests"]
    D --> E["Code"]
```

## Trying it
```bash
/plugin marketplace add jszmajda/lid
/plugin install linked-intent-dev@jszmajda-lid
/plugin install arrow-maintenance@jszmajda-lid
/linked-intent-dev
```

## Cost and gotchas
Free, but you pay for your agent's tokens; the README warns that mapping an existing codebase consumes a lot. Discipline required: review every design.

## What it is not
Not a code generator: it is a documentation process. The skills and commands only work fully on Claude Code.

## Alternatives
No alternative named in the README (it mentions other spec-driven development systems without naming them).

## For you
Watch: useful if you code a lot with agents and suffer from intent drift; the review cost is real.
