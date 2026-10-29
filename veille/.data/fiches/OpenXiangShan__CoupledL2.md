---
schema: 1
depot: OpenXiangShan/CoupledL2
source_readme_sha: 71dc5f847b16586b
ecrite_le: 2026-10-29
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence à vérifier, matière insuffisante]
verdict: ignorer
---

# OpenXiangShan/CoupledL2

> Cache L2 couplé du projet de processeur RISC-V XiangShan ; README quasi vide.

## Le problème
Non documenté dans le README : seule la commande de compilation est donnée.

## Ce que ça fait vraiment
Le README ne contient que deux étapes : `make init` puis `make compile`. Rien d'autre n'est documenté ; le rôle exact (cache L2) vient du nom, non du texte.

## Comment c'est branché
```mermaid
flowchart LR
  A[make init] --> B[make compile]
```

## Essayer
```bash
make init
make compile
```

## Coût et pièges
Prérequis non documentés. Licence non identifiée.

## Ce que ce n'est pas
Pas une documentation : matière insuffisante pour juger.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : conception matérielle de CPU, README vide, sans lien avec data/IA/MLOps.

