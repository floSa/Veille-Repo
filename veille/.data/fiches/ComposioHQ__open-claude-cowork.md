---
schema: 1
depot: ComposioHQ/open-claude-cowork
source_readme_sha: 2cd1e8cda7441694
ecrite_le: 2026-09-29
nature: app
deploiement: compilation
prerequis: [Node, clé d'API, compte à créer]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: ignorer
---

# ComposioHQ/open-claude-cowork

> Application de bureau Electron pour dialoguer avec Claude et 500+ applications via Composio.

## Le problème
Relier un agent à Gmail, Slack ou GitHub demande d'écrire les intégrations et l'authentification soi-même.

## Ce que ça fait vraiment
Une fenêtre Electron appelle un serveur Express, qui passe les messages au Claude Agent SDK ou à Opencode. Les outils viennent du Composio Tool Router (MCP), les réponses arrivent en SSE. Des skills se chargent depuis `.claude/skills/`.

## Comment c'est branché
```mermaid
graph LR
  U[User] --> W[Electron window main.js]
  W --> P[Preload bridge]
  P --> S[HTTP and SSE API server.js]
  S --> R[Provider registry]
  R --> C[Claude adapter]
  S --> T[Composio Tool Router]
```

## Essayer
```bash
git clone https://github.com/ComposioHQ/open-claude-cowork.git
cd open-claude-cowork
./setup.sh
cd server && npm start
npm start
```

## Coût et pièges
Clé Anthropic et clé Composio obligatoires. Les actions passent par le service Composio.

## Ce que ce n'est pas
Le README présente aussi « Secure Clawdbot », mais son code est absent de l'arbre analysé. Ce n'est pas un client hors ligne.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : peu de valeur pour un profil data/MLOps, dépendance à Composio, et la moitié annoncée du dépôt manque.
