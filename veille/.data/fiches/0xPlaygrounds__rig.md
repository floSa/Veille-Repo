---
schema: 1
depot: 0xPlaygrounds/rig
source_readme_sha: 9cbe81a4639fa356
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [clé d'API]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# 0xPlaygrounds/rig

> Bibliothèque Rust pour applications LLM, et agent de code en terminal extensible par plugins Bevy.

## Le problème
Construire des agents LLM en Rust avec plusieurs fournisseurs et bases vectorielles sous une même interface.

## Ce que ça fait vraiment
Deux produits : la bibliothèque (plus de 20 fournisseurs de modèles, plus de 10 vector stores, agents avec outils, streaming, hooks, embeddings, audio et image, OpenTelemetry, enregistrement/rejeu) et l'agent `rig`, dont outils, commandes et vue terminal sont des plugins listés dans `plugins.toml`. Il se recompile avec `/reload` ; pilotable par pipes en JSON.

## Comment c'est branché
```mermaid
flowchart LR
  H["Application Host"] --> F["Rig Facade lib.rs"]
  F --> B["Agent Builder"]
  B --> E["Agent Engine"]
  E --> T["Tool Registry"]
  E --> M["Model Adapter"]
  M --> P["Model Provider"]
```

## Essayer
```bash
cargo install rig
rig
cargo add rig
```
L'agent s'authentifie avec `/login` ou une variable comme `OPENAI_API_KEY`.

## Coût et pièges
Gratuit, MIT ; l'usage des modèles est facturé par le fournisseur. Rust 1.97.1 minimum, Linux et macOS pour l'agent. Version 0.44.0 : l'API peut encore bouger.

## Ce que ce n'est pas
Pas une plateforme MLOps ni un cadre Python. Le support WASM est annoncé pour le cœur, non vérifié ici.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : intéressant si tu fais des agents en Rust ; en Python, mieux vaut rester sur ton écosystème actuel.

