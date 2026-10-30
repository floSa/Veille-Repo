---
schema: 1
depot: swc-project/swc
source_readme_sha: b1003406e72d7888
ecrite_le: 2026-10-30
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: surveiller
---

# swc-project/swc

> Compilateur TypeScript/JavaScript écrit en Rust, utilisable depuis Rust et JavaScript, pour les outils de build web.

## Le problème
Les compilateurs JS/TS en JavaScript sont lents sur les gros projets.

## Ce que ça fait vraiment
Compile et transforme TypeScript et JavaScript. Fournit des crates Rust (point d'entrée : le parseur) et des paquets npm avec addons natifs auto-chargés (macOS, Windows MSVC, Linux GNU/musl en x64 et arm64). MSRV Rust 1.73 ; Node v10+ à l'usage, v20+ au développement.

## Comment c'est branché
Diagramme non fourni pour ce dépôt.
```mermaid
flowchart LR
  A[Code TS/JS] --> B[SWC Rust crates]
  B --> C[Addon natif npm]
  C --> D[API JavaScript]
```

## Essayer
```bash
curl https://raw.githubusercontent.com/swc-project/swc/main/scripts/update-all-swc-crates.sh | bash -s
# nécessite jq et cargo upgrade ; le reste est sur le site de documentation
```

## Coût et pièges
Gratuit. Pour mettre à jour les crates, `jq` et `cargo upgrade` sont requis. Le cache d'addon se règle via `SWC_NATIVE_BINDING_CACHE`.

## Ce que ce n'est pas
Pas un bundler complet à lui seul. Les chiffres de performance renvoient au site, non vérifiables dans le README.

## Alternatives
Comparaison avec Babel renvoyée à la page du site (aucun autre dépôt nommé).

## Pour toi
Surveiller : brique de chaîne front-end rencontrée via d'autres outils, sans usage direct en data/IA.

