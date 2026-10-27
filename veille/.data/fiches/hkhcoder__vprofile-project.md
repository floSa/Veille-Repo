---
schema: 1
depot: hkhcoder/vprofile-project
source_readme_sha: f58c419f0160da74
ecrite_le: 2026-10-27
nature: app
deploiement: compilation
prerequis: [version de Python, service tiers]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# hkhcoder/vprofile-project

> Application Java Spring MVC de démonstration pour exercices DevOps (CI/CD, Ansible, Vagrant).

## Le problème
Les formations DevOps ont besoin d'une application multi-services réaliste à déployer.

## Ce que ça fait vraiment
Monolithe Spring MVC en WAR sous Tomcat : gestion de comptes, envoi de fichiers, recherche ElasticSearch, messagerie RabbitMQ, cache Memcached, base MySQL. Fournit des playbooks Ansible, des Vagrantfiles et un Jenkinsfile. Le README ne liste que prérequis (JDK 17 ou 21, Maven 3.9, MySQL 8), technologies et import du dump SQL.

## Comment c'est branché
```mermaid
graph LR
  A[Browser] --> B[Nginx]
  B --> C[Tomcat Spring MVC]
  C --> D[MySQL]
  C --> E[Memcached]
  C --> F[RabbitMQ]
  C --> G[ElasticSearch]
```

## Essayer
```bash
mysql -u <user> -p accounts < db_backup.sql
```

## Coût et pièges
Gratuit, mais il faut monter MySQL, Memcached, RabbitMQ et ElasticSearch. Aucune licence déclarée.

## Ce que ce n'est pas
Pas une application de production : c'est un support d'exercice. Le README ne décrit pas comment la lancer.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : exemple d'entraînement DevOps générique, sans licence, avec un README trop mince pour être exploitable.

