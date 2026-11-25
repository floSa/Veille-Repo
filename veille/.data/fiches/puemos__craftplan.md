---
schema: 1
depot: puemos/craftplan
source_readme_sha: 8aab093dfe335b6d
ecrite_le: 2026-11-25
nature: app
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# puemos/craftplan

> Logiciel auto-hébergé de gestion pour artisans : catalogue, stocks, commandes, production, achats, CRM.

## Le problème
Un petit atelier jongle entre plusieurs outils pour ses recettes, stocks, commandes et clients.

## Ce que ça fait vraiment
Une application Elixir, Phoenix LiveView, Ash et PostgreSQL. Nomenclatures versionnées avec coûts, lots et traçabilité, allergènes, commandes et factures, achats, CRM, import CSV, API JSON:API et GraphQL, courriels via SMTP ou services tiers. Le routeur Phoenix appelle les domaines Ash, persistés par Repo.

## Comment c'est branché
```mermaid
flowchart TD
  RT["craftplan_web/router.ex"] --> OL["order_live/index.ex"]
  RT --> JR["json_api_router.ex"]
  OL --> OR["craftplan/orders.ex"]
  OR --> BOM["catalog/bom.ex"]
  BOM --> BT["production/batching.ex"]
  OR --> RP["craftplan/repo.ex"]
```

## Essayer
```bash
curl -O https://raw.githubusercontent.com/puemos/craftplan/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/puemos/craftplan/main/.env.example
cp .env.example .env
docker compose up -d
```

## Coût et pièges
Gratuit, mais auto-hébergé : Docker, PostgreSQL, SeaweedFS et secrets à renseigner dans .env. Les envois de courriel peuvent passer par un service payant.

## Ce que ce n'est pas
Pas un ERP généraliste : il vise la production artisanale en petits lots. AGPL : obligations de partage du code en cas de service réseau.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : outil de gestion d'atelier, sans rapport avec un travail data / IA / MLOps.

