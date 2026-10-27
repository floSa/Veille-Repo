---
schema: 1
depot: hexpm/hex
source_readme_sha: 061857755758b33f
ecrite_le: 2026-10-27
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence non déclarée]
verdict: ignorer
---

# hexpm/hex

> Gestionnaire de paquets de l'écosystème Erlang/Elixir, intégré à Mix.

## Le problème
Les projets Elixir/Erlang ont besoin de résoudre et télécharger des dépendances de façon sûre.

## Ce que ça fait vraiment
Fournit des tâches Mix pour publier, chercher et résoudre des paquets. D'après le code : sous-système API (auth, clés, paquets, releases, docs), résolveur de dépendances, registre/repo, HTTP avec bundle de certificats CA (`ca-bundle.crt`, mis à jour par `mix certdata`), crypto, un peu d'Erlang. Les tests d'intégration visent le serveur hexpm, à cloner et avec PostgreSQL.

## Comment c'est branché
```mermaid
flowchart LR
  M["Mix CLI tasks"] --> C["Core Hex application"]
  C --> A["API subsystem"]
  C --> S["Dependency solver"]
  C --> R["Registry / Repo"]
  A --> H["HTTP + ca-bundle.crt"]
  H --> X["hexpm API server"]
```

## Essayer
```bash
mix certdata
mix test --exclude integration
```
Installation : voir hex.pm.

## Coût et pièges
Gratuit. Aucune licence déclarée dans le catalogue. Tests d'intégration : hexpm local + PostgreSQL (postgres/postgres).

## Ce que ce n'est pas
Pas un outil à installer séparément dans un projet Python. Ce dépôt est le client, pas le registre.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À ignorer sauf si tu fais de l'Elixir : sans lien avec un profil data/IA ; licence absente à noter.

