---
schema: 1
depot: benjjneb/dada2
source_readme_sha: 3b18a9f11857446a
ecrite_le: 2026-10-29
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# benjjneb/dada2

> Paquet R qui infère des variants de séquences exacts à partir de lectures d'amplicons.

## Le problème
Distinguer de vraies variantes séquencées de l'erreur, jusqu'à un nucléotide d'écart.

## Ce que ça fait vraiment
Pipeline : filtrage des lectures, apprentissage des erreurs, inférence de variants, fusion des paires, table de séquences, suppression des chimères, attribution taxonomique. Cœur de calcul en C++. Distribué via Bioconductor, avec tutoriel pour données Illumina MiSeq.

## Comment c'est branché
```mermaid
flowchart LR
  A[filter.R] --> B[errorModels.R]
  B --> C[dada.R]
  C --> D[paired.R]
  D --> E[chimeras.R]
  E --> F[taxonomy.R]
  C --> G[Rmain.cpp / cluster.cpp]
```

## Essayer
Aucune commande complète dans le README (le bloc d'installation est tronqué) : installation par Bioconductor, tutoriel sur le site.

## Coût et pièges
Gratuit, licence LGPL-3.0. 227 issues ouvertes. Prévoir R et Bioconductor, et des données de séquençage (amplicons Illumina) ; le calcul demande de la mémoire sur de gros jeux de données.

## Ce que ce n'est pas
Pas un outil de séquençage ; il traite des lectures brutes déjà produites.

## Alternatives
Aucune alternative nommée dans le README (OTU cités comme approche remplacée dans une publication).

## Pour toi
À surveiller : référence du métabarcoding en R, sans valeur hors microbiome.

