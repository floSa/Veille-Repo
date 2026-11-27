# OpenXiangShan/CoupledL2

> Coupled L2 cache of the XiangShan RISC-V processor project; near-empty README.

## The problem
Not documented in the README: only the build command is given.

## What it actually does
The README contains only two steps: `make init` then `make compile`. Nothing else is documented; the exact role (L2 cache) comes from the name, not from the text.

## How it is wired
```mermaid
flowchart LR
  A[make init] --> B[make compile]
```

## Trying it
```bash
make init
make compile
```

## Cost and gotchas
Prerequisites not documented. Licence not identified.

## What it is not
Not documentation: insufficient material to judge.

## Alternatives
No alternative named in the README.

## For you
Ignore: CPU hardware design, empty README, unrelated to data/AI/MLOps.
