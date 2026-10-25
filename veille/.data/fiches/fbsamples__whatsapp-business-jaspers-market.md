---
schema: 1
depot: fbsamples/whatsapp-business-jaspers-market
source_readme_sha: b6711ffd8b737e13
ecrite_le: 2026-10-25
nature: app
deploiement: autre
prerequis: [compte à créer, service tiers, Node]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# fbsamples/whatsapp-business-jaspers-market

> Bot de démonstration WhatsApp Business pour une épicerie fictive, à copier pour construire son propre parcours client.

## Le problème
Brancher un webhook WhatsApp, des messages interactifs et des templates avec médias demande de lire beaucoup de documentation Meta. Ici, un exemple complet et exécutable.

## Ce que ça fait vraiment
Un serveur Node reçoit les webhooks WhatsApp, normalise messages et statuts, puis route les boutons de réponse vers des réponses grocery, offre ou recette (templates avec carrousel d'images). Après les statuts livré/lu, Redis sert à envoyer une relance. L'attribution des entrées est journalisée vers CloudWatch Logs.

## Comment c'est branché
```mermaid
flowchart LR
  U[Utilisateur WhatsApp] --> W[app.js webhook]
  W --> M[message.js / status.js]
  M --> C[conversation.js]
  C --> G[graph-api.js]
  G --> API[WhatsApp Cloud API]
  C --> R[redis.js]
  M --> A[attribution.js] --> L[CloudWatch Logs]
```

## Essayer
```bash
git clone git@github.com:fbsamples/whatsapp-business-jaspers-market.git
cd whatsapp-business-jaspers-market
redis-server --daemonize yes
npm install
cp .sample.env .env
./template.sh
node app.js
npm test
```
Plus `ngrok http 8080` pour exposer le webhook.

## Coût et pièges
Compte développeur Meta, app Meta, Meta Business et compte WhatsApp Business obligatoires. Quatre IDs de média à téléverser, valables 30 jours. Redis et un tunnel (ngrok) requis. L'application refuse de démarrer si un ID est manquant.

## Ce que ce n'est pas
Pas un bot prêt pour la production ni un framework réutilisable : c'est un exemple pédagogique lié à la plateforme Meta. Pas d'IA ni de LLM ici.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : utile si tu dois prototyper un canal WhatsApp devant un agent, mais sans IA et verrouillé sur Meta, il n'apporte rien de plus à un profil data/MLOps.

