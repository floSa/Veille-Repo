---
schema: 1
depot: dbt-labs/dbt
source_readme_sha: a003fe448ca06aeb
ecrite_le: 2026-11-07
nature: outil
deploiement: binaire
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: adopter
---

# dbt-labs/dbt

> Outil de transformation de données par requêtes SELECT, ici réécrit en Rust pour la version 2.0.

## Le problème
Transformer des données dans un entrepôt avec des pratiques de génie logiciel (versionnage, tests, dépendances) est difficile à la main.

## Ce que ça fait vraiment
Tu écris des modèles sous forme de SELECT ; dbt les transforme en tables et vues dans l'entrepôt, gère les dépendances entre modèles et les tests. La branche principale contient la version 2.0 : réécriture en Rust, binaire unique, analyse et compilation plus rapides, spécification stricte, artefacts Parquet en plus du JSON. La version 1 en Python vit sur la branche `1.latest`.

## Comment c'est branché
Aucun diagramme fourni, et l'architecture décrite d'après le code n'est pas disponible. Non documenté.

## Essayer
Le README ne contient aucune commande : il renvoie vers les pages d'installation et d'introduction.

## Coût et pièges
Gratuit pour le code Apache 2.0. dbt est une distribution avec des personnalisations sous licence produit dbt. Un entrepôt de données est nécessaire. La 2.0 est récente.

## Ce que ce n'est pas
Pas un outil d'extraction ni de chargement : il ne fait que la transformation. Le dépôt principal n'est plus l'implémentation Python de la version 1.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter si tu construis des pipelines analytiques SQL : c'est la référence de la transformation en entrepôt, mais vérifie quelle version (1 ou 2) tu installes.

