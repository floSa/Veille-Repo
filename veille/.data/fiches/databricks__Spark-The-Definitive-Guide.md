---
schema: 1
depot: databricks/Spark-The-Definitive-Guide
source_readme_sha: 4c08062590d50317
ecrite_le: 2026-10-29
nature: doc
deploiement: rien à installer
prerequis: [compte à créer, version de Python]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier, dernier commit ancien, dépend d'un SaaS]
verdict: surveiller
---

# databricks/Spark-The-Definitive-Guide

> Code et jeux de données du livre « Spark: The Definitive Guide », pour les lecteurs qui veulent rejouer les exemples.

## Le problème
Un livre sur Spark sans code exécutable reste théorique. Ce dépôt fournit les exemples, rangés par langage et par chapitre.

## Ce que ça fait vraiment
- Dossier `code` : exemples classés par langage puis par chapitre.
- Dossier `data` : jeux de données à copier dans `/data` ou à pointer depuis les notebooks.
- Exécution en local, ou sur Databricks en important les notebooks à la main.
- Le README dit « work in progress » ; le dernier push date de 2020.

## Comment c'est branché
```mermaid
flowchart LR
  A[code par chapitre] --> B[notebooks]
  C[dossier data] --> B
  B --> D[local /data]
  B --> E[Databricks Runtime 3.1+]
  E --> F[/databricks-datasets/definitive-guide/data]
```

## Essayer
```bash
# Aucune commande : le README décrit des étapes manuelles
# 1. récupérer le notebook en version RAW (ou cloner le dépôt)
# 2. l'importer dans l'espace Databricks
# 3. remplacer /data par /databricks-datasets/definitive-guide/data
```

## Coût et pièges
Compte Databricks à créer. Runtime 3.1 ou plus requis. L'import depuis une URL externe est bloqué : il faut uploader depuis son poste.

## Ce que ce n'est pas
Pas une bibliothèque ni un projet maintenu. Les exemples datent de Spark 2.x et peuvent ne plus tourner tels quels. Licence présente mais non identifiée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À garder en marque-page pour apprendre Spark depuis le livre, mais pas une base de travail : code figé depuis 2020 et licence floue.

