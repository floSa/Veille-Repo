---
schema: 1
depot: go-jet/jet
source_readme_sha: c69e8d82c086636f
ecrite_le: 2026-10-05
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# go-jet/jet

> Constructeur SQL typé pour Go avec génération de code et mapping des résultats, sans être un ORM.

## Le problème
En Go, écrire du SQL en chaînes ne détecte rien à la compilation, et mapper des jointures vers des structs imbriquées est fastidieux ; les ORM multiplient les allers-retours (N+1).

## Ce que ça fait vraiment
Le générateur `jet` se connecte à PostgreSQL, MySQL, MariaDB, CockroachDB ou SQLite, lit le schéma et émet des types `table`, `view`, `enum` et `model`. Tu écris `SELECT(...).FROM(...)` en Go ; un changement de colonne casse la compilation. `stmt.Query(db, &dest)` remplit des structs imbriquées en un seul appel. `SELECT_JSON` (v2.13.0) renvoie le résultat en JSON côté serveur.

## Comment c'est branché
```mermaid
flowchart LR
  A[Jet generator CLI main.go] --> B[Schema metadata]
  B --> C[Model templates model_template.go]
  C --> D[Generated packages]
  D --> E[SQL statement builder sql_builder.go]
  E --> F[Query result mapping qrm.go]
  F --> G[Database]
```

## Essayer
```bash
go get -u github.com/go-jet/jet/v2
go install github.com/go-jet/jet/v2/cmd/jet@latest
jet -dsn=postgresql://user:pass@localhost:5432/jetdb?sslmode=disable -schema=dvds -path=./.gen
```

## Coût et pièges
Go 1.24+ requis. Le générateur supprime le contenu du dossier cible du schéma. L'utilisateur DB doit pouvoir lire les tables d'information.

## Ce que ce n'est pas
Pas un ORM : pas de migrations ni de gestion d'état d'objets. Le support pgx v5 est expérimental (branche `pgx`). Gouvernance non précisée dans le README.

## Alternatives
Aucune alternative nommée dans le README (il se compare aux ORM en général).

## Pour toi
À surveiller : utile si tu fais du Go avec une base relationnelle ; sinon hors de ton périmètre data/IA habituel.

