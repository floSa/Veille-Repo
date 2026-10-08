---
schema: 1
depot: gonum/gonum
source_readme_sha: ece4fb68185a29c3
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: surveiller
---

# gonum/gonum

> Suite de calcul numérique et scientifique en Go : algèbre linéaire, graphes, statistiques, optimisation.

## Le problème
Go n'a pas d'équivalent natif de NumPy/SciPy pour le calcul scientifique.

## Ce que ça fait vraiment
Paquets en Go pur (avec un peu d'assembleur) : BLAS/LAPACK et matrices denses, graphes (algorithmes, formats), statistiques et distributions, optimisation, FFT, intégration numérique, différences finies, interpolation, fonctions spéciales. Tags de compilation (`safe`, `noasm`, `bounds`). Versions tous les six mois, alignées sur Go.

## Comment c'est branché
```mermaid
flowchart LR
  A["Matrix (dense.go)"] --> B["BLAS (blas64.go)"]
  A --> C["LAPACK (lapack64.go)"]
  D["Statistics (stat.go)"] --> A
  E["Optimization (minimize.go)"] --> A
  F["Graph (graph.go)"] --> G["Path algorithms"]
```

## Essayer
```bash
go get -u gonum.org/v1/gonum/...
```

## Coût et pièges
Gratuit. Versions encore en v0.x. 256 issues ouvertes. README minimal : la doc est ailleurs.

## Ce que ce n'est pas
Pas de deep learning ni d'écosystème dataframe comparable à Python.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À surveiller : pertinent seulement pour des services de calcul en Go ; en Python, reste sur NumPy/SciPy.

