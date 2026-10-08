---
schema: 1
depot: rust-lang/rust-by-example
source_readme_sha: f290c71569cb20ca
ecrite_le: 2026-10-08
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: surveiller
---

# rust-lang/rust-by-example

> Livre pour apprendre Rust par des exemples exécutables, avec éditeur en ligne.

## Le problème
Apprendre la syntaxe et les idiomes de Rust demande des exemples concrets que l'on peut modifier et lancer.

## Ce que ça fait vraiment
Livre mdBook couvrant les bases (formatage, variables, flux de contrôle, fonctions), types, génériques, traits, erreurs, conversions, bibliothèque standard, crates, Cargo, tests et Rust unsafe. Éditeur de code intégré pour lancer les exemples (connexion Internet requise). Traductions disponibles.

## Comment c'est branché
```mermaid
flowchart LR
  A["index.md"] --> B["flow_control.md"]
  A --> C["trait.md"]
  A --> D["error.md"]
  A --> E["std.md"]
  A --> F["cargo.md"]
  A --> G["playground.md"]
```

## Essayer
```bash
git clone https://github.com/rust-lang/rust-by-example
cd rust-by-example
cargo install mdbook
mdbook build
mdbook serve
```

## Coût et pièges
Gratuit. Lecture hors ligne possible ; exécuter les exemples demande Internet.

## Ce que ce n'est pas
Pas un cours de Rust pour la data science ni un outil.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À surveiller : utile si tu apprends Rust pour de l'outillage performant ; sinon sans effet sur ton quotidien.

