---
schema: 1
depot: apify/apify-mcp-server
source_readme_sha: b83bc15cf0f7892c
ecrite_le: 2026-11-07
nature: service
deploiement: npm
prerequis: [compte à créer, Node]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [télémétrie, dépend d'un SaaS]
verdict: adopter
---

# apify/apify-mcp-server

> Serveur MCP officiel d'Apify donnant aux agents scraping, extraction de données et automatisation de navigateur.

## Le problème
Brancher un agent à chaque site à scraper demande un serveur MCP par site et beaucoup de code de liaison.

## Ce que ça fait vraiment
L'agent cherche un Actor dans Apify Store, lit son schéma et son prix, le lance, puis lit le jeu de données (`search-actors`, `fetch-actor-details`, `call-actor`, `get-dataset-items`). Disponible en hébergé (OAuth) ou en local par stdio. Le paramètre `tools` choisit ce qui est chargé. README tronqué après la FAQ dans la matière fournie.

## Comment c'est branché
```mermaid
flowchart TD
  client["Client MCP"] --> server["mcp.apify.com / actors-mcp-server"]
  server --> search["search-actors"]
  server --> details["fetch-actor-details"]
  server --> call["call-actor"]
  call --> actor["Actor Apify"]
  actor --> data[("Dataset")]
```

## Essayer
```bash
claude mcp add apify "https://mcp.apify.com" -t http
npx @apify/actors-mcp-server --tools actors,docs,apify/web-search,apify/web-fetch
```

## Coût et pièges
Connexion gratuite ; les runs d'Actors sont facturés (5 $ d'usage mensuel offerts). Plafonne avec `maxTotalChargeUsd` ou `maxItems`. Le serveur local exige Node 22+. Télémétrie activée par défaut.

## Ce que ce n'est pas
Pas un scraper en soi : il ouvre l'accès à des Actors tiers, certains payants. Le jeu d'outils par défaut peut changer entre versions : fixe `tools`.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter si tes agents ou pipelines de données ont besoin de collecte web : un seul branchement, coûts plafonnables.

