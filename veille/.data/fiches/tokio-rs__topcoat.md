---
schema: 1
depot: tokio-rs/topcoat
source_readme_sha: f4bb1aa4e640a6d1
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: []
verdict: surveiller
---

# tokio-rs/topcoat

> Framework Rust full-stack modulaire, avec rendu serveur et réactivité côté client, pour applications web.

## Le problème
Une application web Rust demande une couche d'API séparée et un bundle client, ce qui multiplie le code d'assemblage.

## Ce que ça fait vraiment
Rend tout le HTML côté serveur avec la macro `view!` ; les composants async peuvent interroger la base directement. Les expressions `$(...)` sont du Rust typé, évalué côté serveur puis traduit en JavaScript, sans wasm. Le composant `#[shard]` se re-rend côté serveur. Le routage vient de l'arborescence des modules, avec empaquetage des assets, composants Topcoat UI et courrier.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
    A["module_router!"] --> B["#[page]"]
    B --> C["view! + #[component]"]
    C --> D["Rendu serveur HTML"]
    C --> E["$(...) traduit en JavaScript"]
    C --> F["#[shard] re-rendu serveur"]
    D --> G["asset! : bundler"]
```

## Essayer
```bash
topcoat new
topcoat fmt
```

## Coût et pièges
Gratuit. Toolchain Rust nécessaire (non listée parmi les prérequis). Le README prévient : stade précoce et expérimental, changements incompatibles attendus.

## Ce que ce n'est pas
Ce n'est pas un framework stable : l'API peut changer. Il ne cible pas le calcul de données.

## Alternatives
Aucune alternative nommée dans le README ; il cite htmx, Alpine AJAX et Datastar comme intégrations possibles.

## Pour toi
À surveiller : intéressant si tu écris des interfaces web en Rust pour des outils internes, trop jeune pour un usage de production.

