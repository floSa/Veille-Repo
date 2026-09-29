---
schema: 1
depot: fastify/fastify
source_readme_sha: 18a8e0e8a62fb804
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: adopter
---

# fastify/fastify

> Framework web Node.js à faible surcharge et architecture de plugins, pour des API rapides.

## Le problème
Un serveur HTTP lent ou peu structuré coûte en infrastructure et gêne le développement d'API.

## Ce que ça fait vraiment
Des routes reçoivent la requête, qui traverse une chaîne de hooks (`onRequest`, `preValidation`, `preHandler`, `preSerialization`, `onSend`, `onResponse`). La validation et la sérialisation reposent sur JSON Schema compilé, la journalisation sur Pino. Le système de plugins encapsule décorateurs, hooks et routes. La branche `main` correspond à la v6.

## Comment c'est branché
```mermaid
flowchart LR
  Req[Requête HTTP] --> H1[onRequest]
  H1 --> H2[preValidation]
  H2 --> H3[preHandler]
  H3 --> Handler[Route Handler]
  Handler --> H4[preSerialization]
  H4 --> Resp[Réponse]
```

## Essayer
```bash
mkdir my-app
cd my-app
npm init fastify
npm i
npm run dev
npm start
npm i fastify
```

## Coût et pièges
Gratuit. `listen` écoute sur localhost par défaut : en conteneur il faut lier `0.0.0.0`, avec les risques que le README signale. Les chiffres de benchmark cités portent sur la v4.0.0 et sont synthétiques.

## Ce que ce n'est pas
Pas un framework « tout compris » : ORM, authentification et le reste passent par des plugins. Le README le dit lui-même : à toi de mesurer sur ton application.

## Alternatives
- Express, hapi, Restify, Koa : comparés dans le benchmark du README, Fastify y sort plus rapide.

## Pour toi
À adopter pour exposer un modèle ou un service de données en API Node : schéma de validation intégré, écosystème de plugins et hébergement OpenJS Foundation (projet « At-Large »).

