---
schema: 1
depot: donnemartin/awesome-aws
source_readme_sha: 43a378dee20198d8
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique, dernier commit ancien]
verdict: ignorer
---

# donnemartin/awesome-aws

> Liste organisée de SDK, outils open source, guides et ressources AWS.

## Le problème
L'écosystème AWS est immense ; trouver les bons outils communautaires par service prend du temps.

## Ce que ça fait vraiment
Index par langage (SDK), par service (Lambda, S3, DynamoDB, Kinesis…), guides, blogs, conférences.
« Fiery Meter » : icônes selon le nombre d'étoiles, recalculé par un module Python `awesome-aws` qui interroge GitHub.
Annexe décrivant les services AWS en une ligne.

## Comment c'est branché
```mermaid
flowchart LR
  A[CLI awesome_cli.py] --> B[Core Logic awesome.py]
  B --> C[GitHub API Integration awesome/lib/github.py]
  C --> D[GitHub API]
  E[Testing tests] --> B
  F[Automation Scripts scripts] --> B
```

## Essayer
Aucune commande documentée.

## Coût et pièges
Gratuit. Dernier push en mars 2024 ; beaucoup d'entrées datent d'avant (KPIs, services anciens).

## Ce que ce n'est pas
Pas une liste à jour de l'IA sur AWS : la section Machine Learning se réduit à des exemples anciens.

## Alternatives
Aucune alternative nommée hors listes « awesome » génériques.

## Pour toi
À ignorer : liste vieillissante, peu utile pour MLOps AWS actuel ; la doc officielle sert mieux.
