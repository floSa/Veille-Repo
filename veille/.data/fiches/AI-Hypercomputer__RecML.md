---
schema: 1
depot: AI-Hypercomputer/RecML
source_readme_sha: 906321fad894c341
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [GPU, service tiers, version de Python]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# AI-Hypercomputer/RecML

> Bibliothèque de recommandation Keras/JAX optimisée pour Cloud TPU et SparseCore, pour chercheurs et praticiens.

## Le problème
Entraîner des recommandeurs avec de grandes tables d'embeddings sur TPU demande de réécrire données, partitionnement et métriques.

## Ce que ça fait vraiment
Fournit des implémentations de référence (SASRec, BERT4Rec, Mamba4Rec, HSTU, DLRM v2), des couches réutilisables, des API d'embedding pour SparseCore et des métriques standard (AUC, NDCG@K, MRR, Recall@K). Un entraîneur unifié cible TPU ou GPU avec sharding SPMD, checkpoints et journalisation (par ex. BigQuery). Le README exprime une vision plus qu'un mode d'emploi.

## Comment c'est branché
```mermaid
flowchart LR
  A["Preprocessing"] --> B["Data iterator"]
  B --> C["Sequential models"]
  C --> D["JAX trainer"]
  D --> E["SPMD partitioning"]
  D --> F["Checkpoint files"]
  C --> G["SparseCore embeddings"]
```

## Essayer
```bash
# Aucune commande documentée dans le README.
```

## Coût et pièges
Pensée pour Cloud TPU (facturé par Google Cloud) ; GPU possible. Installation non documentée dans le README.

## Ce que ce n'est pas
Pas une bibliothèque prête à installer d'après le README : « aims to house », c'est une ambition. Certains modèles listés ne sont pas confirmés dans le code échantillonné.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : intéressant si tu construis des recommandeurs sur TPU, mais rien à installer ni à lancer d'après le README.
