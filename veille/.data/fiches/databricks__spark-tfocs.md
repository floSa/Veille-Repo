---
schema: 1
depot: databricks/spark-tfocs
source_readme_sha: 62914b86715b4365
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [dernier commit ancien]
verdict: ignorer
---

# databricks/spark-tfocs

> Port Scala de TFOCS pour résoudre des problèmes d'optimisation convexe distribués sur Spark.

## Le problème
Résoudre lasso ou programmes linéaires sur de gros volumes demande un solveur qui tourne sur un cluster Spark.

## Ce que ça fait vraiment
Il fournit `SolverL1RLS` (lasso), `SolverSLP` (programme linéaire lissé), `TFOCS` (solveur convexe général) et `TFOCS_SCD`. Les vecteurs et matrices distribués sont des RDD de `DenseVector` et `Vector`. Les noms suivent ceux de TFOCS pour Matlab.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  A["RDD de vecteurs"] --> B["DVector DMatrix"]
  B --> C["VectorSpace"]
  C --> D["TFOCS.optimize"]
  D --> E["LinearOperator"]
  D --> F["ProxCapableFunction"]
```

## Essayer
```scala
SolverL1RLS.run(A, b, lambda)
SolverSLP.run(c, A, b, mu)
```
Commandes d'installation non documentées. Un Spark et Scala sont nécessaires, hors liste de prérequis.

## Coût et pièges
Il faut un cluster Spark compatible avec l'API MLlib de l'époque. Dernier push en avril 2024, TODO ouverts (stockage par blocs, vecteurs creux).

## Ce que ce n'est pas
Ce n'est pas un outil pour Spark récent garanti : le README ne donne aucune version. Il ne sert qu'à l'optimisation convexe.

## Alternatives
Aucune alternative nommée dans le README, sauf TFOCS pour Matlab dont il reprend les noms.

## Pour toi
Ignorer : quasi abandonné et lié à une ancienne API Spark MLlib ; réexamine-le seulement si tu dois reproduire du TFOCS sur Spark.

