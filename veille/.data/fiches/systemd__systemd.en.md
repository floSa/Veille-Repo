# systemd/systemd

> Linux system and service manager, with a journal, udev, DNS and EFI boot.

## The problem
Starting, supervising and logging the services of a Linux machine in a consistent way.

## What it actually does
The README only points to the documentation. From the code: the Manager resolves dependencies into transactions and jobs, and runs and supervises services; journald records logs; auxiliary daemons handle udev, DNS resolution, time, home directories and memory (oomd); systemd-boot and bootctl handle EFI.

## How it is wired
```mermaid
flowchart LR
  Admin["Service Client"] --> DBus["Manager D-Bus"]
  DBus --> Manager["Service Manager"]
  Manager --> Tx["Unit Transactions"]
  Tx --> Jobs["Unit Jobs"]
  Jobs --> Svc["Managed Services"]
  Svc --> Journal["Journal Manager"]
```

## Trying it
No command documented in the README.

## Cost and gotchas
Free. GPL-2.0 license. The README is very short (links only): minimal fiche.

## What it is not
Not a tool to install separately: it is already in most Linux distributions. The README does not say how to use it.

## Alternatives
No alternative named in the README.

## For you
Ignore as a watch item: you already use it (units for your serving services); nothing to adopt.
