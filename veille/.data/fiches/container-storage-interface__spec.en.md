# container-storage-interface/spec

> CSI specification and protobuf files for plugging storage systems into container orchestrators.

## The problem
Each orchestrator had its own way of talking to storage systems.

## What it actually does
The README is two sentences long: the repository contains the CSI specification and its protobuf files. It lists the orchestrators that adopt it: Cloud Foundry, Kubernetes, Mesos, Nomad. The rest: not documented here.

## How it is wired
```mermaid
flowchart LR
  A[Orchestrateur] --> B[Spécification CSI]
  B --> C[Pilote de stockage]
```
Diagram deduced from the purpose of the specification, not from a provided diagram.

## Trying it
No command documented.

## Cost and gotchas
Free. It is a specification: you need a CSI driver to use it.

## What it is not
Not a storage driver nor an installable tool.

## Alternatives
No alternative named in the README.

## For you
Worth watching as a reference if you write or debug persistent volumes on Kubernetes for MLOps; nothing to run in it.
