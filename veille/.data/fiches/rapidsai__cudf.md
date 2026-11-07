---
schema: 1
depot: rapidsai/cudf
source_readme_sha: 7602e897c16c2a91
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: pip
prerequis: [GPU, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# rapidsai/cudf

> Bibliothèque de DataFrames sur GPU NVIDIA, compatible pandas, pour le traitement de données tabulaires.

## Le problème
Les opérations pandas sur gros volumes sont lentes sur CPU.

## Ce que ça fait vraiment
libcudf (C++/CUDA) exécute les algorithmes sur GPU. Au-dessus : pylibcudf (liaisons Cython), cudf (API proche de pandas), `cudf.pandas` (accélération sans changer le code), cudf-polars (moteur GPU pour Polars) et dask-cudf. Utilisé par cuML, cuGraph, XGBoost, Spark.

## Comment c'est branché
```mermaid
flowchart TD
  U[Script pandas / Polars / Dask] --> CP[cudf.pandas / cudf-polars / dask-cudf]
  CP --> C[cudf]
  C --> PL[pylibcudf]
  PL --> L[libcudf C++/CUDA]
  L --> G((GPU NVIDIA))
```

## Essayer
```bash
pip install cudf-cu13
python -m cudf.pandas script.py
```

## Coût et pièges
GPU NVIDIA et pilote compatible CUDA 12 ou 13 requis ; le paquet doit correspondre à la version de CUDA (suffixe `-cu##`). Pas de coût logiciel.

## Ce que ce n'est pas
Pas une version de pandas qui marche partout : sans GPU compatible, rien. Le moteur Polars GPU est annoncé en bêta ouverte.

## Alternatives
- Polars (cité) : moteur CPU/GPU lazy si tu veux changer d'API.
- Dask via dask-cudf : pour répartir sur plusieurs GPU.

## Pour toi
À adopter si tu as un GPU NVIDIA : `python -m cudf.pandas` accélère du pandas existant sans réécriture.

