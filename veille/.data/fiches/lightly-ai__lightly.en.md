# lightly-ai/lightly

> Modular PyTorch framework for self-supervised pre-training in vision, for ML engineers.

## The problem
Training visual representations without labels (SimCLR, DINO, MAE…) means reimplementing losses, projection heads and transformations.

## What it is not to do alone
Lightly exposes low-level building blocks: loss functions (NTXentLoss, NegativeCosineSimilarity…), heads (`SimCLRProjectionHead`, `SimSiamPredictionHead`), multi-view transformations and an image dataset.

## What it actually does
You compose a PyTorch module (backbone + head), a loss and a dataloader, then train in a simple loop or with PyTorch Lightning, including multi-GPU (DDP, distributed gather). The README publishes ImageNet-1k benchmarks (BarlowTwins, BYOL, DINO, iBOT, MAE, MoCo, SimCLR, SwAV, VICReg…) for 100 epochs, hyperparameters not optimized.

## How it is wired
```mermaid
flowchart LR
  A[Python API core.py] --> B[Image dataset dataset.py]
  B --> C[Model heads heads.py]
  C --> D[Backbones resnet.py]
  D --> E[Embedding trainer embedding.py]
  E --> F[Benchmarking knn_classifier.py]
```

## Trying it
```bash
pip3 install lightly
make install-dev
make test-fast
```
The README also provides a complete SimCLR example in Python.

## Cost and gotchas
GPU recommended for training. README cited: Python 3.8+, PyTorch ≥ 1.11; the "Python 3.13 not supported" mention seems outdated. A commercial version (Docker, one-command pre-training) is sold by the company.

## What it is not
Not the vendor's data curation platform (LightlyStudio / LightlyTrain, paid or freemium): here only the free SSL framework.

## Alternatives
- solo-learn: SSL library cited in the related work.
- LightlyTrain: the vendor's commercial version.

## For you
Adopt it to experiment with SSL in vision on your unlabeled images: API close to PyTorch, MIT, well maintained.
