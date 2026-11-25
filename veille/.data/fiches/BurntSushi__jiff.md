---
schema: 1
depot: BurntSushi/jiff
source_readme_sha: d5a0d5e7d1a6059f
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# BurntSushi/jiff

> Bibliothèque Rust de dates et fuseaux horaires conçue pour être difficile à mal utiliser.

## Le problème
Les calculs de dates avec fuseaux et heure d'été produisent facilement des erreurs silencieuses dans les bibliothèques existantes.

## Ce que ça fait vraiment
Jiff fournit des types haut niveau (`Timestamp`, `Zoned`, `Span`), une arithmétique consciente de l'heure d'été et des arrondis. Il lit la base IANA des fuseaux, analyse et imprime sans perte (RFC 3339, RFC 2822, strftime), avec Serde en option. Inspiré de Temporal (TC39). Plateformes : Unix, Windows, Android, WASM.

## Comment c'est branché
```mermaid
flowchart TD
  A["API publique, src/lib.rs"] --> B["Timestamp, timestamp.rs"]
  A --> C["Zoned, zoned.rs"]
  C --> D["Civil, src/civil/"]
  C --> E["Fuseaux, src/tz/"]
  F["Formats, src/fmt/"] --> D
```

## Essayer
```bash
cargo new jiff-example
cd jiff-example
cargo add jiff
cargo run
```

## Coût et pièges
Gratuit, mais il faut la chaîne Rust (compilateur 1.85.0 minimum), absente de la liste des prérequis. Licence Unlicense ou MIT. Les performances viennent après la justesse de l'API.

## Ce que ce n'est pas
Ce n'est pas un module Python ni un outil de données : c'est une brique Rust. Le README reconnaît des zones non optimisées.

## Alternatives
`chrono`, `time`, `hifitime` et `icu`, comparés dans la documentation du dépôt.

## Pour toi
À ignorer sauf projet Rust : pour un profil data en Python, aucun gain direct.

