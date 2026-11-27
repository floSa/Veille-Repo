# rlaope/oh-my-hermes

> Workflow layer on top of Hermes Agent: model routing, parallel lanes, memory and proofs.

## The problem
A coding agent often declares "done" without proof, and choosing the model per task remains manual.

## What it actually does
Python plugin for Hermes Agent: classifies the request, picks a model and an effort level among 12 editable categories, splits the work into units on separate worktrees, distinguishes "planned / in progress / claimed done / verified". 108 `omh-*` skills, nine `ulw-*` workflows, long-term memory reviewed by a validator. The README says no comparative measurement has been published yet.

## How it is wired
```mermaid
graph LR
    A["CLI entry point (__main__.py)"] --> B["Command dispatch (main.py)"]
    B --> C["Intent routing (intent.py)"]
    C --> D["Model routing (model_routing.py)"]
    D --> E["Coding orchestration (fanout.py)"]
    E --> F["Verification execution"]
    F --> G["Reviewed local memory (memory_store.py)"]
```

## Trying it
```bash
curl -fsSL https://raw.githubusercontent.com/rlaope/oh-my-hermes/main/install.sh | sh
omh setup
omh doctor
```

## Cost and gotchas
Assumes Hermes Agent is installed and model providers are configured (cost on you). The README suggests running a remote script via curl. The recommended chains cite paid models.

## What it is not
Not an autonomous agent: it adds on to Hermes. The figures for gains in the README are not yet publicly reproduced.

## Alternatives
No alternative named in the README.

## For you
Ignore unless you already use Hermes Agent: young repo, a single maintainer, gains not publicly measured.
