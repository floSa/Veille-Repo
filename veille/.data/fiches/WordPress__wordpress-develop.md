---
schema: 1
depot: WordPress/wordpress-develop
source_readme_sha: 8b3df91d7e0e37aa
ecrite_le: 2026-10-27
nature: outil
deploiement: docker
prerequis: [Docker, Node]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [licence copyleft]
verdict: ignorer
---

# WordPress/wordpress-develop

> Dépôt de développement du cœur de WordPress, pour contributeurs qui veulent corriger ou tester le CMS.

## Le problème
Contribuer au noyau demande un environnement PHP, MySQL et JavaScript reproductible.

## Ce que ça fait vraiment
Fournit un environnement local par conteneurs piloté par npm (démarrage, installation, WP-CLI, tests PHP, E2E, QUnit, couverture). Le code contient administration, connexion, médias, REST, Customizer, thèmes, multisite et un client IA (`AiClient.php`).

## Comment c'est branché
```mermaid
graph LR
  A[wp-login.php] --> B[admin.php]
  B --> C[Content editing]
  C --> D[Media management]
  C --> E[Posts REST]
  C --> F[MySQL database]
  F --> G[Site rendering]
```

## Essayer
```bash
npm install
npm run build:dev
npm run env:start
npm run env:install
```

## Coût et pièges
Node 24.x / npm 11.x et Docker. Identifiants par défaut `admin` / `password` : à changer.

## Ce que ce n'est pas
Pas une installation WordPress de production : c'est l'environnement de développement du cœur.

## Alternatives
- Aucune citée dans le README.

## Pour toi
À ignorer : réservé aux contributeurs du noyau WordPress, sans rapport avec data/IA.

