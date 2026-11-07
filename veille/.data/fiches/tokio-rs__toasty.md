---
schema: 1
depot: tokio-rs/toasty
source_readme_sha: 2bde0395a079ace7
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: []
verdict: ignorer
---

# tokio-rs/toasty

> ORM Rust pour SQLite, PostgreSQL, MySQL et DynamoDB, destiné aux développeurs d'applications Rust.

## Le problème
Écrire des requêtes SQL ou DynamoDB à la main en Rust est répétitif, et un ORM classique cache les capacités propres à chaque base.

## Ce que ça fait vraiment
Tu déclares tes modèles avec `#[derive(toasty::Model)]` et des attributs (`#[key]`, `#[unique]`, `#[has_many]`). Toasty génère des méthodes de requête seulement pour les accès indexés. Avec SQL il autorise des contraintes en plus ; avec DynamoDB, seulement celles que la base peut exécuter.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
    Struct["Struct annotée toasty::Model"] --> Derive["Macro derive"]
    Derive --> Methods["Méthodes de requête"]
    Methods --> Driver["Driver"]
    Driver --> SQL["SQLite, Turso, PostgreSQL, MySQL"]
    Driver --> Dynamo["DynamoDB"]
```

## Essayer
```bash
# Le README ne donne pas de commande d'installation.
# Il renvoie au dossier examples/ et au crate toasty sur crates.io.
```

## Coût et pièges
Gratuit, MIT. Aucune clé ni service ; DynamoDB suppose un compte AWS si tu le cibles. Le niveau de stabilité n'est pas documenté.

## Ce que ce n'est pas
Pas une abstraction qui masque la base : le README dit refuser d'abstraire le moteur. Pas un outil de migration documenté dans ce README.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : un ORM Rust ne sert pas un profil data / IA / MLOps, sauf si tu bâtis un service Rust sur DynamoDB ou Postgres.

