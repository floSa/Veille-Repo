---
schema: 1
depot: casey/just
source_readme_sha: cc20edff96351fbd
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# casey/just

> Lanceur de commandes de projet : on écrit des recettes dans un `justfile`, on les exécute avec `just`.

## Le problème
Les commandes de test, build et déploiement vivent dans l'historique du shell ou dans un Makefile mal adapté.

## Ce que ça fait vraiment
Lit un `justfile` (syntaxe proche de `make`), avec paramètres, dépendances, variables, fichiers `.env`, modules et imports, et recettes écrites en Python ou Node. Erreurs statiques signalées avant exécution, complétion shell, `--list`, `--fmt`. Pas un outil de build : toutes les recettes sont « phony ».

## Comment c'est branché
```mermaid
graph LR
  A[CLI entry main.rs] --> B[Justfile discovery search.rs]
  B --> C[File loading loader.rs]
  C --> D[Parsing parser.rs]
  D --> E[Static analysis analyzer.rs]
  E --> F[Recipe execution executor.rs]
  F --> G[Shell process shell.rs]
```

## Essayer
```bash
cargo install just
just --version
just --list
just test
```

## Coût et pièges
Gratuit. Sous Windows, il faut un `sh` ou régler `set shell`. Plusieurs fonctions restent instables (`set unstable`).

## Ce que ce n'est pas
Pas un système de build avec suivi de fichiers (le cache de recettes est instable et fragile). Le projet n'accepte plus de pull requests ; CC0.

## Alternatives
make (ancêtre de just), task (YAML), mise (tâches en TOML, aussi gestionnaire d'outils).

## Pour toi
À adopter : un `justfile` documente les commandes d'un projet ML (entraînement, tests, déploiement) en un fichier lisible, sans dépendance.

