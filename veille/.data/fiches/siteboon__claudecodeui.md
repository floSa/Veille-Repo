---
schema: 1
depot: siteboon/claudecodeui
source_readme_sha: 73b19988fde819fe
ecrite_le: 2026-10-05
nature: app
deploiement: npm
prerequis: [Node, service tiers]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft, dépend d'un SaaS]
verdict: surveiller
---

# siteboon/claudecodeui

> Interface web et mobile pour piloter Claude Code, Cursor CLI et Codex sur ses projets.

## Le problème
Les agents de code en CLI exigent un terminal ouvert ; difficile de les reprendre depuis un téléphone ou de voir tout l'historique.

## Ce que ça fait vraiment
Serveur Node avec client React : chat, terminal intégré, explorateur de fichiers, explorateur Git, sessions retrouvées automatiquement dans `~/.claude`. Lit et écrit la config MCP de Claude Code. Système de plugins, TaskMaster optionnel, application de bureau Electron, offre cloud hébergée.

## Comment c'est branché
```mermaid
flowchart LR
  A["App.tsx"] --> B["api.ts"]
  B --> C["HTTP Server index.ts"]
  C --> D["provider.routes.ts"]
  D --> E["Agent CLIs"]
  C --> F["git.routes.ts"]
  C --> G["Session Service"]
```

## Essayer
```bash
npx @cloudcli-ai/cloudcli
npm install -g @cloudcli-ai/cloudcli
cloudcli
```
Puis `http://localhost:3001`.

## Coût et pièges
Node 22+. Il faut ses propres abonnements Claude, Cursor ou Codex. Offre cloud à partir de 7 €/mois. Modifie la config `~/.claude` locale. Outils désactivés par défaut.

## Ce que ce n'est pas
Pas un agent : il fournit l'environnement, pas l'IA. Le mode Docker Sandbox est expérimental.

## Alternatives
- Claude Code Remote Control : comparé dans la FAQ ; une seule session active, machine allumée.

## Pour toi
À surveiller : utile si tu laisses des agents travailler à distance, mais AGPL-3.0 et accès en écriture à ta config ; teste en bac à sable.

