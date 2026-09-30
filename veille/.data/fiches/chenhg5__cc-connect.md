---
schema: 1
depot: chenhg5/cc-connect
source_readme_sha: b8313074bc9a231d
ecrite_le: 2026-09-30
nature: outil
deploiement: npm
prerequis: [Node, clé d'API, compte à créer]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: surveiller
---

# chenhg5/cc-connect

> Pont entre agents de code locaux (Claude Code, Codex, Gemini…) et plateformes de chat comme Telegram ou Slack.

## Le problème
Un agent de code local n'est pilotable que depuis son terminal, pas depuis le téléphone ou une messagerie d'équipe.

## Ce que ça fait vraiment
Relaie les messages de 13 plateformes (Feishu, Telegram, Slack, Discord, DingTalk…) vers un agent installé en local, avec sessions par projet, commandes `/model`, `/mode`, `/dir`, tâches planifiées `/cron`, envoi de fichiers, isolation par utilisateur Unix (`run_as_user`) et interface web sur le port 9820.

## Comment c'est branché
```mermaid
flowchart LR
  U[Chat user] --> A[Chat adapters]
  A --> E[engine.go]
  E --> S[session.go]
  E --> G[Agent integrations]
  C[cron.go] --> E
  W[Web admin App.tsx] --> API[api.go]
```

## Essayer
```bash
npm install -g cc-connect
cc-connect
```

## Coût et pièges
Il faut installer et authentifier l'agent avant (sinon `cc-connect` quitte). Jetons de bot par plateforme. Sans licence déclarée. Le mode `/mode yolo` approuve tous les outils automatiquement.

## Ce que ce n'est pas
Ce n'est pas un agent : il relaie vers ceux que tu as installés. Le README propose aussi des collaborations commerciales.

## Alternatives
Non documenté : le README ne nomme pas d'alternative.

## Pour toi
Surveiller : pratique pour piloter un agent à distance, mais sans licence et avec un mode d'approbation totale risqué sur ta machine.

