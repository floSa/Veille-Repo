---
schema: 1
depot: strapi/strapi
source_readme_sha: cbc029a16a9d8cb0
ecrite_le: 2026-10-27
nature: service
deploiement: npm
prerequis: [Node]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# strapi/strapi

> CMS headless open source qui génère des API REST et GraphQL à partir de modèles de contenu.

## Le problème
Exposer du contenu à un site, une appli mobile ou de l'IoT oblige à écrire l'API et l'interface d'édition à la main.

## Ce que ça fait vraiment
On définit des types de contenu dans le Content-Type Builder ; Strapi génère les API REST et GraphQL. Interface d'administration avec rôles et permissions, médiathèque, i18n, brouillon/publication. Chaque requête suit routes, middlewares, contrôleurs, services. Bases SQLite, PostgreSQL, MySQL, MariaDB. Une couche « Strapi AI » existe.

## Comment c'est branché
```mermaid
flowchart LR
  D["Developer"] --> B["Content-Type Builder"]
  B --> G["Generated APIs"]
  G --> R["Routes"]
  R --> M["Middlewares"]
  M --> C["Controllers"]
  C --> S["Services"]
  S --> DB["Database"]
```

## Essayer
```bash
npx create-strapi@latest my-project
npx @strapi-community/dockerize@latest
```

## Coût et pièges
Auto-hébergement gratuit ; Strapi Cloud est l'offre managée payante. Aucune image Docker officielle : on génère la sienne.

## Ce que ce n'est pas
Pas un site complet : il sert l'API, le front est à construire. La licence n'est pas identifiée par GitHub.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique pour exposer des jeux de données ou des contenus éditoriaux, mais loin du cœur data / IA.

