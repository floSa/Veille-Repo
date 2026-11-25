---
schema: 1
depot: imzyb/MiSub
source_readme_sha: 97be6c4849ef1d03
ecrite_le: 2026-11-25
nature: app
deploiement: SaaS
prerequis: [compte à créer, Node]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# imzyb/MiSub

> Panneau de gestion d'abonnements proxy, déployé sur Cloudflare Pages, pour particuliers et petites équipes.

## Le problème
Gérer plusieurs abonnements et nœuds proxy et les fournir en formats compatibles avec chaque client est fastidieux.

## Ce que ça fait vraiment
Interface Vue 3 reliée à des fonctions Pages : fusion d'abonnements en profils, chaîne d'opérateurs (filtre, renommage regex, tri, déduplication), sortie pour Clash, Sing-Box, Surge, Loon et autres. Stockage Cloudflare KV ou D1, notifications Telegram.

## Comment c'est branché
```mermaid
flowchart TD
  node_dashboard["Dashboard.vue"] --> node_http_client["http.js"]
  node_http_client --> node_api_router["api-router.js"]
  node_api_router --> node_subscription_handler["subscription-handler.js"]
  node_subscription_handler --> node_subscription_service["subscription-service.js"]
  node_subscription_service --> node_node_parser["node-parser.js"]
  node_subscription_service --> node_operator_runner["operator-runner.js"]
```

## Essayer
```bash
npm install
npm run dev
npm test -- --run
npm run build
```

## Coût et pièges
Gratuit. Exige un compte GitHub et un compte Cloudflare, plus un espace KV lié. Si `ADMIN_PASSWORD` n'est pas défini, le mot de passe par défaut est `admin`.

## Ce que ce n'est pas
Pas un service de proxy ni de VPN : seulement un gestionnaire de liens d'abonnement.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : outil de contournement réseau personnel, sans lien avec un travail data / IA / MLOps.

