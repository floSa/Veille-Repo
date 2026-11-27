# TomWhitwell/Workshop_Computer

> Development repository for the Workshop Computer programmable cards, for music module makers.

## The problem
Authors of cards for the Workshop System need a common place to share documentation, code and firmware.

## What it actually does
Gathers a getting-started guide, starter examples (Arduino, Pico SDK, CircuitPython, MicroPython), Chris Johnson's ComputerCard library and a `releases` folder where everyone drops their card (uf2, source or link). A VS Code DevContainer makes building, flashing and debugging easier. A metadata site is hosted separately.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.

```mermaid
graph LR
  A["Développeur"] --> B["ComputerCard"]
  B --> C["DevContainer VS Code"]
  C --> D["Firmware uf2"]
  D --> E["Dossier releases"]
  E --> F["Site de métadonnées"]
```

## Trying it
No command documented: the README points to `.devcontainer/README.md`.

## Cost and gotchas
Workshop Computer hardware is needed to test. No license declared in the catalog: reuse of the code is not guaranteed.

## What it is not
Not installable software nor a data tool: it is a repository of musical hardware contributions. The README sets no strict contribution rule.

## Alternatives
No alternative named in the README.

## For you
Ignore: the domain of modular hardware music, unrelated to data, AI or MLOps.
