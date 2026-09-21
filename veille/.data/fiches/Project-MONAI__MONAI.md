---
schema: 1
depot: Project-MONAI/MONAI
source_readme_sha: 97556de84bb73a38
ecrite_le: 2026-09-21
nature: bibliothèque
deploiement: pip
prerequis: [GPU]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# Project-MONAI/MONAI

> Framework PyTorch pour l'apprentissage profond en imagerie médicale, du prétraitement à l'évaluation.

## Le problème
Les données d'imagerie médicale sont multidimensionnelles et propres à leur domaine : réimplémenter transformations, pertes et métriques à chaque projet fait diverger les résultats.

## Ce que ça fait vraiment
Prétraitement flexible pour données d'imagerie multidimensionnelles.
APIs composables et portables, pensées pour s'insérer dans un workflow existant.
Implémentations spécifiques au domaine : réseaux, fonctions de perte, métriques d'évaluation.
Parallélisme de données multi-GPU et multi-nœuds.

## Comment c'est branché
```mermaid
flowchart LR
    A[données d'imagerie] --> B[transforms MONAI]
    B --> C[réseaux du domaine]
    C --> D[losses spécifiques]
    D --> E[metrics d'évaluation]
    E --> F[MONAI Bundle]
    F --> G[MONAI Model Zoo]
```

## Essayer
```bash
pip install monai
docker run -ti --rm --gpus all projectmonai/monai:latest /bin/bash
```

## Coût et pièges
Gratuit. L'image Docker suppose des GPU NVIDIA. La politique de support couvre la version courante de PyTorch plus trois mineures ; pour le reste des dépendances, SPEC0, soit deux ans environ.

## Ce que ce n'est pas
Pas un outil clinique : c'est un framework de recherche et d'ingénierie, sans validation médicale. Pas autonome : les exemples et tutoriels vivent dans un dépôt séparé, `Project-MONAI/tutorials`. La branche `dev` est la version non publiée, pas la version à utiliser.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
La référence du domaine ; si tu touches à de l'imagerie médicale, partir d'ici plutôt que de PyTorch nu.
