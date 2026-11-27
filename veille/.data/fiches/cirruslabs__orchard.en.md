# cirruslabs/orchard

> Orchestrator for Tart virtual machines on a cluster of Apple Silicon Macs.

## The problem
Managing dozens of macOS VMs across several physical Macs by hand is unmanageable.

## What it actually does
Orchard provides a controller and workers: you create a cluster of Macs and drive Tart VMs through an `orchard` CLI or a built-in REST API. The `orchard dev` mode launches a controller and a worker on the local machine. On macOS 15 and later, the "local network" permission requires a workaround: run the worker as root with `--user`, or adjust the network preferences.

## How it is wired
No diagram provided: simple diagram taken from the README.
```mermaid
flowchart LR
  U[CLI orchard / API REST] --> C[Orchard Controller]
  C --> W[Orchard Worker]
  W --> T[VM Tart]
```

## Trying it
```shell
brew install openai/tools/orchard
orchard dev
```

## Cost and gotchas
Apple Silicon hardware required. An `orchard localnetworkhelper` helper runs with privileges to avoid the permission dialog. The license is present but not identified by GitHub.

## What it is not
Not a CI tool on its own: it is VM orchestration. Short README, the detail is in the official documentation.

## Alternatives
The README does not name an alternative.

## For you
Ignore: useful only if you run a farm of Macs for macOS CI, not for MLOps on GPUs.
