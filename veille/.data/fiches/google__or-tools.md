---
schema: 1
depot: google/or-tools
source_readme_sha: d4bcafffc5c1e427
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# google/or-tools

> Suite d'optimisation combinatoire de Google : CP-SAT, programmation linéaire, routage, graphes.

## Le problème
Résoudre des problèmes d'affectation, de planification, de tournées ou de flots sans écrire un solveur.

## Ce que ça fait vraiment
Code C++ avec wrappers Python, C#, Java (et Julia, Go selon le graphe). Solveurs CP-SAT et CP, Glop (simplexe) et PDLP (premier ordre), couche d'abstraction vers solveurs mixtes tiers, algorithmes de sac à dos, voyageur de commerce, tournées de véhicules, plus courts chemins, flots.

## Comment c'est branché
```mermaid
flowchart LR
  Wrappers[Python C# Java] --> Linear[Linear Solver Wrapper]
  Wrappers --> SAT[SAT Solver]
  Wrappers --> CS[Constraint Solver]
  Linear --> Glop[Glop PDLP]
  SAT --> BOP[Boolean Optimization]
  Base[Base Utilities] --> SAT
```

## Essayer
Aucune commande d'installation dans le README (renvoi au site developers.google.com/optimization). Compilation possible avec Make, CMake ou Bazel.

## Coût et pièges
Gratuit. Les wrappers vers solveurs commerciaux supposent des licences à ta charge. Les versions de plateformes testées citées sont anciennes.

## Ce que ce n'est pas
Pas du machine learning : c'est de l'optimisation exacte et heuristique sur modèles formalisés.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Adopter pour planification, allocation ou tournées en MLOps (ordonnancement, affectation) : référence Apache-2.0, bien documentée.

