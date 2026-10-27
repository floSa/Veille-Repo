---
schema: 1
depot: WasmEdge/WasmEdge
source_readme_sha: c75c58eb372f2d3e
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: surveiller
---

# WasmEdge/WasmEdge

> Runtime WebAssembly léger du CNCF, pour exécuter du code isolé et des modèles de langage en local.

## Le problème
Exécuter du code tiers ou des fonctions en périphérie sans conteneur lourd, avec isolation des ressources système.

## Ce que ça fait vraiment
Charge, valide, compile (AOT/JIT via LLVM) et exécute des modules Wasm. Il offre WASI, des sockets, des pilotes de base de données et des plugins (crypto, HTTP, inférence NN). LlamaEdge, bâti dessus, exécute des modèles GenAI. Des SDK existent pour Rust et Java ; le runtime s'intègre aussi par API C.

## Comment c'est branché
```mermaid
flowchart LR
  A[WasmEdge CLI] --> B[Loader]
  B --> C[Validator]
  C --> D[Compiler LLVM JIT/AOT]
  D --> E[Executor Engine]
  E --> F[Plugin Manager]
  F --> G[WASI-NN Plugin]
```

## Essayer
```bash
# Le README renvoie vers des guides externes ; aucune commande n'y figure.
```

## Coût et pièges
Gratuit. Le README précise que WasmEdge n'est pas encore thread-safe. Les plugins d'IA demandent un matériel adapté (GPU non détaillé).

## Ce que ce n'est pas
Pas un orchestrateur : l'orchestration passe par des outils tiers (Kubernetes, Dapr). « Plus rapide » est une affirmation des auteurs, non mesurée ici.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pertinent pour déployer de l'inférence légère en périphérie, mais l'écosystème IA reste moins mûr que les runtimes classiques.

