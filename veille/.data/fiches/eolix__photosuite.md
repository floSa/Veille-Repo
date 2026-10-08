---
schema: 1
depot: eolix/photosuite
source_readme_sha: ee7f132e390d3ece
ecrite_le: 2026-10-08
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: []
verdict: ignorer
---

# eolix/photosuite

> Éditeur d'images de bureau en Rust, calqué sur Photoshop, avec lecture et écriture PSD/PSB, pour designers.

## Le problème
Ouvrir, éditer et sauvegarder des PSD sans payer Adobe, avec des outils déjà connus.

## Ce que ça fait vraiment
Éditeur natif (egui sur wgpu, repli CPU) : calques, masques, styles de calque, objets dynamiques, filtres, Camera Raw, 38 langues. Scriptable : CLI `photosuite-cli`, canal de contrôle JSON et serveur MCP, plug-ins WebAssembly. Le README annonce l'aller-retour PSD complet comme « travail en cours ».

## Comment c'est branché
Le diagramme fourni décrit une version Tauri/JS, alors que le README dit que le projet est désormais en Rust : incohérence, voir plus bas.
```mermaid
flowchart LR
    A["App controller (app-controller.js)"] --> B["File loading (file-loader.js)"]
    B --> C["PSD/PSB codec (psd-parser.js)"]
    C --> D["Document model (document.js)"]
    D --> E["Layer system (layer-system.js)"]
    E --> F["Filters and adjustments"]
```

## Essayer
```bash
cargo run --release -p photosuite
cargo test --workspace
sudo apt install ./photosuite-<version>-linux-<arch>.deb
```

## Coût et pièges
Gratuit, sans compte ni télémétrie. Compilation : Rust 1.90+ et plusieurs bibliothèques système sous Linux. Annoncé non affilié à Adobe.

## Ce que ce n'est pas
Pas un remplaçant de GIMP ou Affinity, ni un clone complet de Photoshop. Fidélité PSD non terminée. Le schéma GitDiagram (Tauri/JS) ne correspond pas au README actuel (Rust).

## Alternatives
Aucune alternative nommée (GIMP et Affinity cités seulement comme ce que le projet n'est pas).

## Pour toi
À ignorer pour ton profil data/IA/MLOps : c'est un éditeur graphique, hors sujet ; seul le serveur MCP présente un intérêt marginal.

