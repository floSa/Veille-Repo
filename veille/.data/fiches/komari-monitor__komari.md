---
schema: 1
depot: komari-monitor/komari
source_readme_sha: fa9ef0c9cc040748
ecrite_le: 2026-09-29
nature: service
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [archivé]
verdict: ignorer
---

# komari-monitor/komari

> Supervision de serveurs auto-hébergée, avec agents légers, tableau de bord web et terminal distant.

## Le problème
Suivre l'état de plusieurs serveurs sans SaaS de monitoring demande d'assembler soi-même collecte, stockage et interface.

## Ce que ça fait vraiment
Un binaire Go (Gin, WebSocket, JSON-RPC) reçoit les métriques d'agents à la seconde et les historise en SQLite (PostgreSQL pris en charge par le moteur de métriques).
Interface web embarquée : tableau de bord, historiques, terminal web, transfert de fichiers via l'agent.
Plugins exécutés dans un runtime JavaScript, thèmes, notifications (e-mail, Telegram, webhooks…), OAuth.

## Comment c'est branché
```mermaid
graph LR
  M[main.go] --> S[server.go] --> APP[app.go]
  APP --> R[router.go]
  R --> AG[connections.go]
  R --> T[stream_relay.go]
  APP --> DB[dbcore.go]
  APP --> MS[store.go]
  APP --> PL[plugin.go]
```

## Essayer
Aucune commande dans le README : il renvoie au guide d'installation (Docker, binaire, source).

## Coût et pièges
Gratuit ; le README met en avant des hébergeurs partenaires payants. Outil de contrôle à distance : exposition à sécuriser soi-même.

## Ce que ce n'est pas
Pas un simple afficheur de métriques : il exécute des commandes et transfère des fichiers sur les machines. Le dépôt est archivé.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : dépôt archivé et README d'une page, alors qu'un outil qui ouvre un terminal sur tes serveurs exige une maintenance active.
