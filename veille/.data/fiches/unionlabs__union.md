---
schema: 1
depot: unionlabs/union
source_readme_sha: b3d9bd809fb8af74
ecrite_le: 2026-11-07
nature: service
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# unionlabs/union

> Infrastructure blockchain à preuves à divulgation nulle pour transférer messages et actifs entre chaînes, pour développeurs Web3.

## Le problème
Relier des blockchains oblige souvent à faire confiance à des oracles ou à des signatures multiples. Union vise une vérification sans tiers de confiance.

## Ce que ça fait vraiment
Monorepo de plusieurs briques : nœud `uniond` (Go), prouveur `galoisd` (Go, Gnark), relais `voyager` (Rust), clients légers, contrats CosmWasm et EVM, indexeur `hubble`, application web, site et SDK TypeScript. Il implémente IBC pour Cosmos et se connecte à des chaînes EVM.

## Comment c'est branché
```mermaid
flowchart TD
    Visor["unionvisor"] -->|"supervise"| Node["uniond (nœud)"]
    Node -->|"preuve zk"| Galois["galoisd (prouveur)"]
    Node -->|"IBC"| Light["light-clients"]
    Node -->|"messages"| Voy["voyager (relais)"]
    Voy --> Hub["hubble (indexeur)"]
    App["app + ts-sdk"] -->|"API"| Node
```

## Essayer
```bash
nix build .#uniond -L
nix build .#voyager -L
nix develop
```

## Coût et pièges
Le README impose Nix pour construire (curl d'installation fourni) ; certaines briques ne compilent que sous Linux, macOS passe par une VM NixOS (OrbStack). Stack Go, Rust et Solidity.

## Ce que ce n'est pas
Pas une bibliothèque légère : c'est un protocole complet, avec gouvernance décentralisée prévue.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : relais inter-chaînes sans lien avec la data, l'IA ou le MLOps.

