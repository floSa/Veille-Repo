---
schema: 1
depot: vbenjs/vue-vben-admin
source_readme_sha: 0d91e5abdb60bb87
ecrite_le: 2026-10-27
nature: app
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# vbenjs/vue-vben-admin

> Modèle d'application d'administration en Vue 3, Vite et TypeScript, avec permissions et thèmes.

## Le problème
Démarrer une interface d'administration (connexion, routes protégées, thèmes, i18n) sans repartir de zéro.

## Ce que ça fait vraiment
Gabarit de front-office prêt à cloner, proposé en plusieurs variantes selon la bibliothèque d'interface. Gère l'amorçage de l'application, les préférences, l'authentification, les routes dynamiques selon les permissions, des layouts, un tableau de bord, un client de requêtes et une API simulée (mock). La version 5.0 n'est pas compatible avec les précédentes (branche v2 pour l'ancienne).

## Comment c'est branché
```mermaid
graph LR
  A[App entry main.ts] --> B[App bootstrap bootstrap.ts]
  B --> C[Route access access.ts]
  C --> D[Authentication state auth.ts]
  C --> E[Admin layouts basic.vue]
  B --> F[Request client request-client.ts]
  F --> G[Mock API routes]
```

## Essayer
```bash
git clone https://github.com/vbenjs/vue-vben-admin.git
cd vue-vben-admin
npm i -g corepack
pnpm install
pnpm dev
pnpm build
```

## Coût et pièges
Gratuit. Le compte de test de l'aperçu est public (vben/123456) : ne jamais le reprendre tel quel. Documentation principalement en chinois pour le site de démonstration.

## Ce que ce n'est pas
Pas un back-end : l'API est simulée. Pas de rapport avec le MLOps, sauf comme squelette de tableau de bord.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : gabarit front générique ; pour un tableau de bord de modèles, un outil dédié ira plus vite.

