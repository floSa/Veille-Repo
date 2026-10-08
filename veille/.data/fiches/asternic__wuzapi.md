---
schema: 1
depot: asternic/wuzapi
source_readme_sha: 85d6717831d3a98c
ecrite_le: 2026-10-08
nature: service
deploiement: docker
prerequis: [Docker, compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dépend d'un SaaS, mainteneur unique]
verdict: surveiller
---

# asternic/wuzapi

> API REST en Go, multi-comptes, qui pilote WhatsApp via la bibliothèque whatsmeow.

## Le problème
Automatiser l'envoi et la réception de messages WhatsApp sans émulateur Android ni Chrome headless.

## Ce que ça fait vraiment
Serveur HTTP qui gère plusieurs sessions WhatsApp (QR code) et expose des endpoints : session, messages (texte, médias, sondages), utilisateurs, groupes, présence. Les événements sortent par webhooks signés HMAC ou RabbitMQ ; stockage SQLite ou PostgreSQL, médias en S3 en option. Tableau de bord intégré.

## Comment c'est branché
```mermaid
flowchart LR
  C[Client API] --> R[routes.go]
  R --> H[handlers.go]
  H --> M[clients.go sessions]
  M --> W[WhatsApp via whatsmeow]
  M --> D[db.go]
  W --> E[wmiau.go webhooks]
  E --> Q[rabbitmq.go]
```

## Essayer
```bash
cp .env.sample .env
go build .
./wuzapi -logtype=console -color=true
brew install asternic/wuzapi/wuzapi
```

## Coût et pièges
Violer les conditions de WhatsApp peut faire bannir le numéro. Si les clés d'admin et de chiffrement sont auto-générées, il faut les sauvegarder. Un changement de protocole WhatsApp peut casser la connexion.

## Ce que ce n'est pas
Pas l'API officielle WhatsApp Business ; non affilié à WhatsApp.

## Alternatives
L'API WhatsApp Business via un fournisseur officiel, recommandée par le README pour un usage commercial.

## Pour toi
À surveiller : utile pour des notifications de pipeline ou un chatbot en prototype, mais fragile et risqué en production.

