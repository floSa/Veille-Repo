---
schema: 1
depot: epgsql/epgsql
source_readme_sha: 2249034b8b4079af
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# epgsql/epgsql

> Client PostgreSQL asynchrone en Erlang, avec pipeline de requêtes.

## Le problème
Enchaîner plusieurs requêtes demande autant d'allers-retours réseau, ce qui ralentit les applications Erlang.

## Ce que ça fait vraiment
Pilote PostgreSQL avec trois interfaces (`epgsql`, `epgsqla`, `epgsqli`) utilisables sur la même connexion. Une file interne de requêtes permet le pipeline. Prend en charge requêtes simples, étendues, préparées, lots, annulation, LISTEN/NOTIFY, réplication, codecs enfichables.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A[Application Erlang] --> B[epgsql / epgsqla / epgsqli]
  B --> C[Processus connexion]
  C --> D[File de requêtes]
  D --> E[PostgreSQL]
  E --> F[Codecs de types]
```

## Essayer
```erlang
{ok, C} = epgsql:connect(#{host => "localhost", username => "username", password => "psss", database => "test_db", timeout => 4000}),
epgsql:squery(C, "select * from account"),
ok = epgsql:close(C).
```

## Coût et pièges
Gratuit. Erlang requis (non listé en prérequis). Les performances SSL peuvent baisser si la boîte aux lettres du processus déborde. L'annulation est délicate avec le pipeline.

## Ce que ce n'est pas
Pas un ORM ni un pool de connexions : le pool vient avec `epgsql/pgapp`. Pas pour Python.

## Alternatives
- epgsql/pgapp : ajoute un pool (poolboy) et la reconnexion automatique.

## Pour toi
À ignorer sauf pile Erlang ou Elixir : un pilote de base de données de niche, sans usage direct en data/IA.

