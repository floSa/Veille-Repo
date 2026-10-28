---
schema: 1
depot: Gaius-Augustus/BRAKER
source_readme_sha: 40f93ac4b4b275de
ecrite_le: 2026-10-28
nature: outil
deploiement: docker
prerequis: [Docker, beaucoup de RAM, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# Gaius-Augustus/BRAKER

> Pipeline d'annotation de gènes sur génomes eucaryotes, avec RNA-Seq et protéines, aujourd'hui déprécié au profit de BRAKER4.

## Le problème
Annoter les gènes d'un génome nouvellement séquencé exige d'entraîner plusieurs prédicteurs et d'intégrer des preuves externes.

## Ce que ça fait vraiment
`braker.pl` orchestre GeneMark-ES/ET/EP/ETP et AUGUSTUS : entraînement automatique, intégration d'indices RNA-Seq ou protéines (OrthoDB), puis TSEBRA pour fusionner les prédictions. Il sort un jeu de gènes en GTF, séquences codantes et protéines. Un conteneur Singularity évite l'installation manuelle de nombreuses dépendances.

## Comment c'est branché
```mermaid
flowchart LR
  G[Genome sequence] --> B[BRAKER pipeline braker.pl]
  E[RNA-seq / proteins] --> B
  B --> GM[GeneMark training]
  B --> AU[AUGUSTUS prediction]
  GM --> T[Training gene selection]
  AU --> O[Gene annotations]
```

## Essayer
```
singularity build braker3.sif docker://teambraker/braker3:latest
singularity exec braker3.sif braker.pl
braker.pl --genome=genome.fa --prot_seq=proteins.fa
```

## Coût et pièges
Génome masqué pour les répétitions, bases de protéines volumineuses, beaucoup de CPU et de temps. L'installation conda n'est pas supportée pour GeneMark-ETP. La prédiction des UTR est expérimentale. Le README annonce que BRAKER est déprécié.

## Ce que ce n'est pas
Pas un outil d'IA généraliste : c'est de la bio-informatique de génomique. Licence Artistic indiquée dans le README, mais non reconnue par GitHub.

## Alternatives
BRAKER4 (recommandé par le README), GALBA (variante pour Miniprot).

## Pour toi
Ignorer : déprécié et spécifique à la génomique, sauf si tu dois reproduire une annotation existante avant de passer à BRAKER4.

