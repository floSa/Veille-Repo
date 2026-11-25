---
schema: 1
depot: trakt/trakt-web
source_readme_sha: 53821a0fa6a75f19
ecrite_le: 2026-11-25
nature: app
deploiement: autre
prerequis: [Node, compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS]
verdict: ignorer
---

# trakt/trakt-web

> Client web SvelteKit de Trakt pour suivre films et séries, dépôt ouvert aux contributions.

## Le problème
Le dépôt sert à contribuer au client Trakt : le README explique surtout comment configurer l'environnement de développement.

## Ce que ça fait vraiment
C'est un client SvelteKit/Bun : listes paginées via une couche de requêtes, présentation des médias, réglages de services de streaming, analytique. Il appelle l'API Trakt avec un client ID et un secret. Des workflows GitHub montent les dépendances par bissection (`ncu`).

## Comment c'est branché
```mermaid
flowchart TD
  A["SvelteKit client"] --> B["QueryClientProvider"]
  B --> C["useQuery.ts"]
  D["usePaginatedListQuery.ts"] --> C
  C --> E["Request modules"]
  F["createHalEngine.ts"] -.-> G["HAL analytics"]
  H["safeStorage.ts"] --> A
```

## Essayer
```bash
bun run install:frozen
bun run client:dev:contrib
```

## Coût et pièges
Il faut Bun, un compte Trakt et une application API (`TRAKT_CLIENT_ID`, `TRAKT_CLIENT_SECRET`), avec les URI de redirection localhost. Licence présente mais non identifiée par GitHub.

## Ce que ce n'est pas
Pas un outil autonome : il ne fonctionne qu'avec le service Trakt. Pas de back-end dans ce dépôt.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : un front de service de suivi de séries, sans rapport avec data/IA/MLOps.

