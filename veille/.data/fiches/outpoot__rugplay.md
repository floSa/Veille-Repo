---
schema: 1
depot: outpoot/rugplay
source_readme_sha: 986599a3d2dcf92f
ecrite_le: 2026-11-25
nature: app
deploiement: docker
prerequis: [Docker, Node, compte à créer, clé d'API]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# outpoot/rugplay

> Simulateur de trading de cryptomonnaies fictives avec pools de liquidité, marchés de prédiction et jeux.

## Le problème
Apprendre le fonctionnement des échanges décentralisés et des « rug pulls » sans risquer d'argent réel.

## Ce que ça fait vraiment
Un trade part du modal Svelte vers l'API, passe la limitation de débit et la logique AMM, puis PostgreSQL. Un serveur websocket (Bun) diffuse les mises à jour via Redis. Connexion Google OAuth.

## Comment c'est branché
```mermaid
flowchart TD
  A["TradeModal.svelte"] --> B["trade/+server.ts"]
  B --> C["ratelimit.ts"]
  B --> D["amm.ts"]
  D --> E["db/schema.ts"]
  B --> F["redis.ts"]
  F --> G["websocket/src/main.ts"]
```

## Essayer
```bash
cd website/websocket && bun install
cd .. && npm install --include=dev
cd websocket && bun run src/main.ts
cd .. && npm run dev
```

## Coût et pièges
Gratuit en local. Il faut Redis, PostgreSQL (Docker), Bun, un client Google OAuth ; AWS et OpenRouter optionnels.

## Ce que ce n'est pas
Pas un outil de trading réel : tout est fictif.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : jeu de simulation sans lien avec data/IA ; la pile reste un exemple SvelteKit complet.

