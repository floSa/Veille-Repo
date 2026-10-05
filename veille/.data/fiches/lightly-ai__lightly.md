---
schema: 1
depot: lightly-ai/lightly
source_readme_sha: 044a84b540bf644a
ecrite_le: 2026-10-05
nature: bibliothèque
deploiement: pip
prerequis: [GPU, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# lightly-ai/lightly

> Framework PyTorch modulaire de pré-entraînement auto-supervisé pour la vision, pour ingénieurs ML.

## Le problème
Entraîner des représentations visuelles sans étiquettes (SimCLR, DINO, MAE…) oblige à réimplémenter pertes, têtes de projection et transformations.

## Ce que ce n'est pas faire seul
Lightly expose des briques de bas niveau : fonctions de perte (NTXentLoss, NegativeCosineSimilarity…), têtes (`SimCLRProjectionHead`, `SimSiamPredictionHead`), transformations multi-vues et dataset d'images.

## Ce que ça fait vraiment
Tu composes un module PyTorch (backbone + tête), une perte et un dataloader, puis tu entraînes en boucle simple ou avec PyTorch Lightning, y compris multi-GPU (DDP, gather distribué). Le README publie des benchmarks ImageNet-1k (BarlowTwins, BYOL, DINO, iBOT, MAE, MoCo, SimCLR, SwAV, VICReg…) pour 100 époques, hyperparamètres non optimisés.

## Comment c'est branché
```mermaid
flowchart LR
  A[Python API core.py] --> B[Image dataset dataset.py]
  B --> C[Model heads heads.py]
  C --> D[Backbones resnet.py]
  D --> E[Embedding trainer embedding.py]
  E --> F[Benchmarking knn_classifier.py]
```

## Essayer
```bash
pip3 install lightly
make install-dev
make test-fast
```
Le README fournit aussi un exemple SimCLR complet en Python.

## Coût et pièges
GPU recommandé pour l'entraînement. README cité : Python 3.8+, PyTorch ≥ 1.11 ; la mention « Python 3.13 non supporté » semble datée. Version commerciale (Docker, pré-entraînement en une commande) vendue par la société.

## Ce que ce n'est pas
Pas la plateforme de curation de données de l'éditeur (LightlyStudio / LightlyTrain, payantes ou freemium) : ici seulement le framework SSL gratuit.

## Alternatives
- solo-learn : bibliothèque SSL citée dans les travaux liés.
- LightlyTrain : version commerciale de l'éditeur.

## Pour toi
À adopter pour expérimenter du SSL en vision sur tes images sans étiquettes : API proche de PyTorch, MIT, bien maintenue.

