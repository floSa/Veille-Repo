---
schema: 1
depot: testcontainers/testcontainers-java
source_readme_sha: aad5dd088f9ee8a2
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [matière insuffisante]
verdict: ignorer
---

# testcontainers/testcontainers-java

> Bibliothèque Java fournissant des conteneurs Docker jetables pour tests JUnit, pour développeurs Java.

## Le problème
Les tests d'intégration ont besoin de vraies bases de données ou navigateurs, difficiles à installer et à réinitialiser.

## Ce que ça fait vraiment
Démarre à la demande des instances jetables de bases de données, navigateurs Selenium ou tout service empaqueté dans Docker, pour des tests JUnit. Le README est minimal ; d'après l'architecture, un cœur commun pilote Docker et des modules séparés (MySQL, PostgreSQL, Redis, Neo4j…) l'étendent via SPI.

## Comment c'est branché
```mermaid
flowchart LR
  T["Tests JUnit"] --> C["Core Container API"]
  C --> S["Configuration & Service SPI"]
  M["Container Modules"] --> C
  C --> D["Docker Engine"]
```

## Essayer
Aucune commande documentée dans le README, qui renvoie vers la documentation en ligne.

## Coût et pièges
Gratuit, mais Docker est nécessaire sur la machine de test (déduit de la description).

## Ce que ce n'est pas
Pas une base de données ni un outil de CI. Le README est trop court pour juger des versions ou des limites.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À ignorer : bibliothèque Java uniquement, donc hors de ta pile Python ; fiche minimale faute de matière.

