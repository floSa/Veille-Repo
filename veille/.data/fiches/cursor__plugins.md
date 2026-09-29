---
schema: 1
depot: cursor/plugins
source_readme_sha: 6bd737a80502980a
ecrite_le: 2026-09-29
nature: liste
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée, dépend d'un SaaS]
verdict: surveiller
---

# cursor/plugins

> Catalogue de plugins officiels Cursor : skills, règles et serveurs MCP vers des dizaines de SaaS.

## Le problème
Brancher un agent de code sur Gmail, GitHub, BigQuery, Salesforce… demande du câblage MCP répété.

## Ce que ça fait vraiment
Chaque plugin est un dossier avec son manifeste `.cursor-plugin/plugin.json` (skills, règles, mcp.json). Un validateur (`scripts/validate-plugins.mjs`) contrôle le catalogue. Le plus fourni est `orchestrate` : CLI Bun qui crée des agents cloud Cursor en planificateur/worker/vérificateur, avec Slack en option. Autres : continual-learning (mise à jour d'AGENTS.md), pstack, pr-review-canvas.

## Comment c'est branché
```mermaid
graph LR
  M[Cursor Marketplace] --> C[marketplace.json]
  V[validate-plugins.mjs] --> C
  O[Orchestrate CLI] --> L[agent-manager.ts]
  L --> A[Cursor Cloud Agents]
  L --> SL[Slack adapter]
```

## Essayer
```bash
# Aucune commande documentée : installation via le Marketplace Cursor
```

## Coût et pièges
Suppose Cursor ; les plugins d'intégration exigent les comptes des SaaS ciblés. Aucune licence déclarée dans le catalogue.

## Ce que ce n'est pas
Pas une bibliothèque autonome : ne sert qu'avec Cursor. Beaucoup de plugins listés n'ont pas leur code dans le dépôt.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : `orchestrate` et `continual-learning` donnent des patrons agentiques à étudier, mais tout dépend de Cursor et d'une licence absente.

