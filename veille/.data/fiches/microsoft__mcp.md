---
schema: 1
depot: microsoft/mcp
source_readme_sha: 95c2f8bca48ea415
ecrite_le: 2026-10-25
nature: liste
deploiement: autre
prerequis: [compte à créer]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# microsoft/mcp

> Dépôt de Microsoft hébergeant les serveurs MCP Azure et Fabric, avec un catalogue d'autres serveurs MCP.

## Le problème
Brancher un agent sur Azure, Fabric ou Microsoft 365 sans outils standardisés revient à bricoler des appels d'API par service.

## Ce que ça fait vraiment
Monorepo .NET avec une bibliothèque cœur `Azure.Mcp.Core`, des serveurs (`Azure.Mcp.Server`, `Fabric.Mcp.Server`) et des outils par service (Acr, Aks, AppConfig…). Le README catalogue aussi des serveurs distants ou locaux : Foundry, GitHub, Playwright, Dataverse, SQL, Sentinel, Teams, Mail, Word. Extension Azure pour Copilot CLI et Claude Code.

## Comment c'est branché
```mermaid
flowchart LR
  A[Hôte MCP] --> B[Azure.Mcp.Server / Fabric.Mcp.Server]
  B --> C[Azure.Mcp.Core]
  C --> D[Outils Acr, Aks, AppConfig…]
  D --> E[Azure Resource Manager / Key Vault / Cosmos DB]
  F[GitHub Actions et Azure Pipelines] --> B
```

## Essayer
```bash
/plugin marketplace add microsoft/skills
/plugin install azure-skills@skills
/plugin update azure-skills@skills
```

## Coût et pièges
Le dépôt est gratuit, mais les services ciblés (Azure, Microsoft 365, Fabric) exigent des comptes, des droits et des ressources facturées. Plusieurs serveurs listés sont des dépôts distincts.

## Ce que ce n'est pas
Pas un seul serveur : un catalogue plus deux serveurs construits ici. Les autres vivent dans leurs propres dépôts.

## Alternatives
- github/github-mcp-server : serveur GitHub listé dans le catalogue.
- microsoft/playwright-mcp : pilotage de navigateur listé dans le catalogue.

## Pour toi
À surveiller : pertinent si ton plateau est Azure ou Fabric ; l'index des serveurs MCP Microsoft sert aussi de carte pour brancher des agents sur les données de l'entreprise.

