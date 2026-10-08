---
schema: 1
depot: Joooook/12306-mcp
source_readme_sha: 47625a9dc832fef0
ecrite_le: 2026-10-08
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# Joooook/12306-mcp

> Serveur MCP qui laisse un modèle de langage chercher des billets de train sur 12306 (Chine).

## Le problème
Un assistant IA ne peut pas interroger directement le service ferroviaire chinois 12306.

## Ce que ça fait vraiment
Serveur MCP en TypeScript, en stdio ou HTTP, qui expose des outils de recherche de billets, filtrage de trains, consultation des arrêts d'un trajet et recherche de correspondances, avec une ressource de données de gares. Le code se concentre dans `src/index.ts`.

## Comment c'est branché
```mermaid
graph LR
  A[MCP client] --> B[stdio transport index.ts]
  A --> C[HTTP transport index.ts]
  B --> D[MCP server index.ts]
  D --> E[Search tools]
  E --> F[12306 services]
  E --> G[Station data]
```

## Essayer
```bash
npx -y 12306-mcp
npx -y 12306-mcp --port 8080
```

## Coût et pièges
Gratuit. Node 18+ ; dépend du service 12306, hors de ton contrôle. Docker disponible.

## Ce que ce n'est pas
Pas un outil de réservation : seulement de la recherche. L'auteur précise qu'il est « pour l'apprentissage ».

## Alternatives
Un skill équivalent existe (Joooook/12306-skill, cité dans le README).

## Pour toi
À ignorer : utile seulement pour voyager en Chine ; garde-le comme exemple simple de serveur MCP TypeScript.

