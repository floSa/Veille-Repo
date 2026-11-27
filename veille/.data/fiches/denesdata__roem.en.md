# denesdata/roem

> Website tracking the economic impact of Covid-19 in Romania, produced by researchers at Babeș-Bolyai University.

## The problem
Romanian decision-makers lacked up-to-date data on the economic impact of the pandemic.

## What it actually does
The repository contains the code of a platform of interactive infographics, updated daily, on the Romanian economy. The displayed data is kept in a separate repository updated by a bot. Build instructions are in the wiki, not reproduced in the README.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.

```mermaid
flowchart LR
  A["Dépôt de données"] --> B["Site roem"]
  B --> C["Infographies interactives"]
  C --> D["Décideurs"]
```

## Trying it
```bash
# Aucune commande dans le README : voir la page Wiki du dépôt.
```

## Cost and gotchas
The README details neither dependencies nor installation. The license is announced as MIT with attribution, but GitHub does not identify it: check before any use.

## What it is not
It is not a reusable tool: it is the website of a research project dating from 2020. The data is not in this repository.

## Alternatives
No alternative named in the README.

## For you
Ignore: a research site centered on Romania, with no reusable component; only the data-publishing approach may serve as an example.
