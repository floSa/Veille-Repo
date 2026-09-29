---
schema: 1
depot: webpack/webpack-dev-server
source_readme_sha: f964014ebecb864c
ecrite_le: 2026-09-29
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# webpack/webpack-dev-server

> Serveur de développement avec rechargement à chaud pour projets webpack.

## Le problème
Reconstruire et recharger manuellement les assets à chaque modification ralentit le développement front.

## Ce que ça fait vraiment
Sert les assets webpack depuis la mémoire via webpack-dev-middleware, avec live reload, HMR, surcouche d'erreurs dans le navigateur, proxy, HTTPS, WebSocket. Lancé par `webpack serve`, en npm script ou via l'API. À usage développement uniquement.

## Comment c'est branché
```mermaid
graph LR
  W[Compilateur webpack] --> M[webpack-dev-middleware]
  M --> S[Server.js]
  S --> WS[WebSocketServer]
  WS --> CL[Client navigateur]
```

## Essayer
```bash
npm install webpack-dev-server --save-dev
npx webpack serve
```

## Coût et pièges
Gratuit. Écoute par défaut sur localhost:8080 ; ne pas exposer en production.

## Ce que ce n'est pas
Pas un serveur de production ni un remplaçant de webpack.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : utile seulement si tu maintiens un front webpack, sans lien avec data/IA/MLOps.

