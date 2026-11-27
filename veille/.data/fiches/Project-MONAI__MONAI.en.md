# Project-MONAI/MONAI

> PyTorch framework for deep learning in medical imaging, from preprocessing to evaluation.

## The problem
Medical imaging data is multidimensional and domain-specific: reimplementing transforms, losses and metrics in every project makes results diverge.

## What it actually does
Flexible preprocessing for multidimensional imaging data.
Composable and portable APIs, designed to slot into an existing workflow.
Domain-specific implementations: networks, loss functions, evaluation metrics.
Multi-GPU and multi-node data parallelism.

## How it is wired
```mermaid
flowchart LR
    A[données d'imagerie] --> B[transforms MONAI]
    B --> C[réseaux du domaine]
    C --> D[losses spécifiques]
    D --> E[metrics d'évaluation]
    E --> F[MONAI Bundle]
    F --> G[MONAI Model Zoo]
```

## Trying it
```bash
pip install monai
docker run -ti --rm --gpus all projectmonai/monai:latest /bin/bash
```

## Cost and gotchas
Free. The Docker image assumes NVIDIA GPUs. The support policy covers the current PyTorch version plus three minor versions; for the rest of the dependencies, SPEC0, i.e. about two years.

## What it is not
Not a clinical tool: it is a research and engineering framework, with no medical validation. Not standalone: examples and tutorials live in a separate repository, `Project-MONAI/tutorials`. The `dev` branch is the unreleased version, not the one to use.

## Alternatives
No alternative named in the README.

## For you
The reference in the field; if you touch medical imaging, start here rather than from bare PyTorch.
