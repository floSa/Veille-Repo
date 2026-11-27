# canonical/cloud-init

> Standard method for initializing multi-distribution cloud instances, for administrators and platform engineers.

## The problem
An identical machine image must be configured differently at each boot (network, SSH, packages) depending on the provider.

## What it actually does
At boot, identifies the provider, reads metadata, user data and vendor data, then runs configuration modules (users and SSH, disks, packages, commands) through a per-distribution abstraction. Renders the network configuration and persists instance data.

## How it is wired
```mermaid
flowchart LR
  I["Image + métadonnées"] --> D["Datasources"]
  D --> M["cloud-init CLI (main.py)"]
  M --> S["Stages (stages.py)"]
  S --> C["Config modules"]
  C --> X["Distro abstraction"]
  S --> R["Instance data / reporting"]
```

## Trying it
```bash
# Aucune commande dans le README : renvoi vers la documentation et le guide de contribution.
```

## Cost and gotchas
Free; already shipped with most distributions and clouds. Over 600 open tickets.

## What it is not
Generally not a tool you install yourself; the license is present but not identified by GitHub, so it needs checking.

## Alternatives
- No alternative cited in the README.

## For you
Adopt by default: you already use it in MLOps on cloud instances, so you might as well master the `user-data` format.
