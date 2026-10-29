---
schema: 1
depot: GreenleafLab/ArchR
source_readme_sha: 70770f9779bd0390
ecrite_le: 2026-10-29
nature: bibliothèque
deploiement: docker
prerequis: [version de Python, beaucoup de RAM]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [dernier commit ancien]
verdict: surveiller
---

# GreenleafLab/ArchR

> Paquet R d'analyse de données scATAC-seq (chromatine en cellule unique).

## Le problème
Analyser des millions de cellules ATAC-seq avec des ressources limitées.

## Ce que ça fait vraiment
Traitement et analyse complets de scATAC-seq, analyse couplée avec scRNA-seq, trajectoires par monocle3 et Slingshot, export d'une matrice de pics pour STREAM. Le README annonce 1 million de cellules en 8 heures sur un portable. Environnements `renv` (R 4.1 et 4.4) ou images Docker avec RStudio.

## Comment c'est branché
Matière insuffisante pour un schéma fidèle : aucune architecture fournie ; le README liste fonctions et modes d'installation.

## Essayer
```r
devtools::install_github("GreenleafLab/ArchR", ref="master", repos = BiocManager::repositories())
library(ArchR)
ArchR::installExtraPackages()
```
```bash
docker image pull greenleaflab/archr:latest
```

## Coût et pièges
Gratuit (MIT). Statut bêta ; dernier push en février 2025 ; 183 issues ouvertes ; dépendances R nombreuses.

## Ce que ce n'est pas
Pas un outil d'alignement de séquences : il traite des fragments déjà produits.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile seulement en génomique cellulaire ; entretien ralenti depuis 2025.

