# databricks/Spark-The-Definitive-Guide

> Code and datasets from the book "Spark: The Definitive Guide", for readers who want to replay the examples.

## The problem
A book on Spark without runnable code stays theoretical. This repository provides the examples, organized by language and by chapter.

## What it actually does
- `code` folder: examples sorted by language then by chapter.
- `data` folder: datasets to copy into `/data` or to point to from the notebooks.
- Run locally, or on Databricks by importing the notebooks by hand.
- The README says "work in progress"; the last push dates from 2020.

## How it is wired
```mermaid
flowchart LR
  A[code par chapitre] --> B[notebooks]
  C[dossier data] --> B
  B --> D[local /data]
  B --> E[Databricks Runtime 3.1+]
  E --> F[/databricks-datasets/definitive-guide/data]
```

## Trying it
```bash
# Aucune commande : le README décrit des étapes manuelles
# 1. récupérer le notebook en version RAW (ou cloner le dépôt)
# 2. l'importer dans l'espace Databricks
# 3. remplacer /data par /databricks-datasets/definitive-guide/data
```

## Cost and gotchas
A Databricks account must be created. Runtime 3.1 or higher required. Import from an external URL is blocked: you must upload from your own machine.

## What it is not
Not a library nor a maintained project. The examples date from Spark 2.x and may no longer run as is. A license is present but not identified.

## Alternatives
No alternative named in the README.

## For you
Worth bookmarking for learning Spark from the book, but not a working base: code frozen since 2020 and an unclear license.
