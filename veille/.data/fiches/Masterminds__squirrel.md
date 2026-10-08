---
schema: 1
depot: Masterminds/squirrel
source_readme_sha: f1dafb8f66d5eb20
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier, dernier commit ancien]
verdict: ignorer
---

# Masterminds/squirrel

> Générateur de requêtes SQL fluide pour Go, qui n'est pas un ORM.

## Le problème
Construire des requêtes SQL dynamiques par concaténation de chaînes est fragile en Go.

## Ce que ça fait vraiment
Builders SELECT, INSERT, UPDATE, DELETE et CASE composables, avec arguments liés, format de paramètres (`Dollar` pour PostgreSQL) et exécution via un runner (`RunWith`). Cache de requêtes préparées (`StmtCache`) et variantes avec contexte.

## Comment c'est branché
```mermaid
flowchart LR
  A["statement.go"] --> B["select.go"]
  A --> C["insert.go"]
  B --> D["expr.go"]
  B --> E["placeholder.go"]
  B --> F["squirrel.go (runner)"]
  F --> G["stmtcacher.go"]
```

## Essayer
```go
users := sq.Select("*").From("users").Join("emails USING (email_id)")
sql, args, err := users.Where(sq.Eq{"deleted_at": nil}).ToSql()
```

## Coût et pièges
Gratuit. Le projet se dit « complete » : correctifs rares, issues sans réponse garantie (dernier push avril 2024). Licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas un ORM. Pas de tuples dans `IN` (contournement via `Or`/`Eq`).

## Alternatives
- structable : mappeur table-struct bâti sur squirrel.

## Pour toi
À ignorer : peu actif et licence à clarifier ; peu d'intérêt hors services Go avec SQL.

