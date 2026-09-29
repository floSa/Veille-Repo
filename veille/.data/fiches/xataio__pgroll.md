---
schema: 1
depot: xataio/pgroll
source_readme_sha: 1a60ec74f0b0cbd8
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# xataio/pgroll

> CLI Go de migrations de schéma PostgreSQL sans interruption et réversibles, pour équipes backend.

## Le problème
Une migration cassante (renommage, changement de type) verrouille les tables ou casse les clients pendant le déploiement.

## Ce que ça fait vraiment
Sert l'ancien et le nouveau schéma en parallèle via des vues dans des schémas virtuels (`search_path`).
Modèle expand/contract : ajouts d'abord, nouvelle colonne remplie par backfill par lots, triggers de synchronisation.
`complete` supprime l'ancien schéma, `rollback` annule instantanément.
Migrations JSON, conversion depuis SQL DDL, `baseline` pour une base existante ; Postgres 14+, RDS, Aurora.

## Comment c'est branché
```mermaid
flowchart LR
  OP[Schema operator] --> M[main.go]
  M --> C[cmd/root.go]
  C --> R[pkg/roll]
  R --> MG[pkg/migrations]
  MG --> BF[pkg/backfill]
  R --> ST[pkg/state]
  BF --> PG[(PostgreSQL)]
```

## Essayer
```bash
go install github.com/xataio/pgroll@latest
brew tap xataio/pgroll
brew install pgroll
pgroll --postgres-url postgres://user:password@host:port/dbname init
pgroll --postgres-url postgres://user:password@host:port/dbname start initial_migration.json
pgroll --postgres-url postgres://user:password@host:port/dbname complete
```

## Coût et pièges
Gratuit, binaire unique. Les triggers ajoutent une amplification d'écriture pendant la migration.
Les clients doivent gérer le `search_path` de version.

## Ce que ce n'est pas
Pas un ORM ni un outil de migration de données métier.
Pas pour d'autres SGBD que PostgreSQL.

## Alternatives
- Reshape : approche similaire qui a inspiré pgroll.
- PgHaMigrations : migrations Postgres sûres pour Rails.

## Pour toi
À adopter si tu gères des bases Postgres de features ou de métadonnées en production : migrations sans coupure et rollback immédiat.
