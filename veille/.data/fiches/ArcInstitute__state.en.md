# ArcInstitute/state

> PyTorch models to predict how cells respond to perturbations and to produce cell embeddings.

## The problem
Predicting the effect of a genetic or chemical perturbation on cells from varied contexts is expensive to test in the lab.

## What it actually does
The `state` CLI has two groups: `state tx` (State Transition: `preprocess_train`, `train`, `predict`, `infer`) and `state emb` (State Embedding: `preprocess`, `fit`, `transform`, `query`). It reads h5ad files, trains with PyTorch Lightning and Hydra, and can store embeddings in LanceDB for neighbor search. W&B tracking and Slurm launching are handled in the code.

## How it is wired
```mermaid
flowchart LR
  A["CLI Frontend state"] --> B["Config Manager (TOML/YAML)"]
  B --> C["Raw h5ad files"]
  C --> D["Trainer (PyTorch Lightning)"]
  D --> E["Checkpoint (.ckpt)"]
  E --> F["Inference Module"]
  F --> G["LanceDB Store"]
```

## Trying it
```bash
uv tool install arc-state
state tx preprocess_train --adata raw_data.h5ad --output preprocessed.h5ad --num_hvgs 2000
state tx predict --output-dir $HOME/state/test --checkpoint final.ckpt
state emb transform --model-folder /path/to/SE-600M --input in.h5ad --output out.h5ad
```

## Cost and gotchas
GPU is not quantified in the README, but it is implicit (`--nv`, `num_gpus_per_node`). h5ad data and checkpoints must be supplied; a Singularity container is available. License not recognized by GitHub.

## What it is not
Not a general-purpose single-cell tool: it is focused on perturbation prediction and embedding. Performance claims belong to the associated paper, not the README.

## Alternatives
No alternative cited; `cell-eval` (evaluation) and `cell-load` (data loading) are companions, not substitutes.

## For you
Worth watching if you do AI for biology: end-to-end pipeline and Colabs, but the license needs reading and a GPU is required.
