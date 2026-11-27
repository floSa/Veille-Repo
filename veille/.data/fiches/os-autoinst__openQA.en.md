# os-autoinst/openQA

> Testing framework for operating systems and graphical applications that drives virtual machines, for teams that ship distributions.

## The problem
Scripting tests on a popup window or on a boot error before init is hard, and verifying the output is even harder.

## What it actually does
openQA launches virtual machines, monitors their state and runs tests on them. This repository contains the web interface and the management logic (scheduling, test management, high-level API). The os-autoinst test engine is in another repository and is still required.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
    U["Utilisateur ou API REST"] --> W["Interface web openQA"]
    W --> P["Planification des tests"]
    P --> E["Moteur os-autoinst"]
    E --> VM["Machines virtuelles"]
```

## Trying it
```bash
# Aucune commande dans le README.
# Il renvoie vers le Starter Guide, l'Installation Guide et un Codespace.
```

## Cost and gotchas
The os-autoinst repository must also be installed. The installation procedure is in guides outside the README. Old GitHub tags are misleading: every commit on master is considered stable.

## What it is not
Not a classic application code testing tool: it tests whole systems in VMs. No reliable numbered versions.

## Alternatives
No alternative named in the README.

## For you
Ignore: useful for testing operating systems or kernel boot, far from everyday data, AI or MLOps work.
