---
schema: 1
depot: bruin-data/ingestr
source_readme_sha: d3900d6f7065ba70
ecrite_le: 2026-09-29
nature: outil
deploiement: pip
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier, télémétrie]
verdict: adopter
---

# bruin-data/ingestr

> Ligne de commande qui copie des données d'une source vers une destination par simples drapeaux, sans code.

## Le problème
Copier une table d'une base vers un entrepôt oblige d'ordinaire à écrire un connecteur, gérer les schémas et le chargement incrémental.

## Ce que ça fait vraiment
`ingestr ingest` prend une URI source, une table source, une URI destination et une table destination. Il charge en mode `append`, `merge` ou `delete+insert`. Le paquet pip peut aussi s'utiliser depuis Python (`ingestr.ingest(...)`) avec lignes, générateurs ou DataFrames, transmis en flux Arrow IPC. D'après le code, une fabrique crée le gestionnaire de source et celui de destination ; un module de télémétrie existe dans l'arborescence.

## Comment c'est branché
```mermaid
flowchart LR
  S["Database Sources"] --> H["Source Handler"]
  I["Command Line Interface"] --> F["Factory Component"]
  F --> H
  H --> T["Table Definition Manager"]
  T --> D["Destination Handler"]
  D --> Q["SQL Database Handler"]
  M["Telemetry System"] --> I
```

## Essayer
```bash
pip install ingestr
ingestr ingest \
    --source-uri 'postgresql://admin:admin@localhost:8837/web?sslmode=disable' \
    --source-table 'public.some_data' \
    --dest-uri 'bigquery://<your-project-name>?credentials_path=/path/to/service/account.json' \
    --dest-table 'ingestr.some_data'
```
Un script d'installation `curl -LsSf https://getbruin.com/install/ingestr | sh` existe aussi.

## Coût et pièges
Gratuit, mais il faut les accès aux sources et destinations (identifiants BigQuery, Postgres…). Le paquet pip télécharge au premier usage un binaire depuis les versions GitHub. Le README ne décrit pas la télémétrie : à vérifier. Licence présente mais non identifiée par GitHub.

## Ce que ce n'est pas
Ce n'est pas un outil de transformation : il déplace les données, il ne les modélise pas. La liste précise des connecteurs n'est pas dans le README, qui renvoie à la documentation.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter pour des copies de tables vers un entrepôt sans écrire de connecteur : une commande suffit, mais confirme la licence et la télémétrie avant un usage en entreprise.
