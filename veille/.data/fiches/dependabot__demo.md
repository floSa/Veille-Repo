---
schema: 1
depot: dependabot/demo
source_readme_sha: 81d753b4bb978521
ecrite_le: 2026-10-29
nature: doc
deploiement: rien à installer
prerequis: [compte à créer]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [licence non déclarée, matière insuffisante]
verdict: ignorer
---

# dependabot/demo

> Dépôt de démonstration avec des dépendances périmées, à forker pour essayer Dependabot.

## Le problème
Tester Dependabot demande un projet avec des dépendances obsolètes.

## Ce que ça fait vraiment
Contient quelques projets aux dépendances volontairement anciennes. Le README tient en deux lignes : on forke et on observe. Rien d'autre n'est documenté.

## Comment c'est branché
```mermaid
flowchart LR
  A[Fork] --> B[Dépendances périmées]
  B --> C[Dependabot]
  C --> D[Pull requests]
```

## Essayer
Aucune commande documentée : forker le dépôt sur GitHub.

## Coût et pièges
Gratuit, compte GitHub requis. Licence non déclarée.

## Ce que ce n'est pas
Pas du code à réutiliser ; il est périmé à dessein.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : tu activeras Dependabot directement sur tes dépôts sans ce bac à sable.

