---
schema: 1
depot: evrone/go-clean-template
source_readme_sha: a8a0820e224cf1cf
ecrite_le: 2026-09-29
nature: outil
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# evrone/go-clean-template

> Gabarit de microservice Go en Clean Architecture, avec REST, gRPC, AMQP et NATS.

## Le problème
Un service qui grossit tourne vite au code spaghetti sans règles de découpage claires.

## Ce que ça fait vraiment
Trois domaines d'exemple (authentification JWT, tâches, traduction) exposés par quatre transports : REST (Fiber), gRPC, RabbitMQ RPC, NATS RPC. Injection de dépendances par constructeurs, Postgres, traces OpenTelemetry vers Jaeger. Couches `controller`, `usecase`, `entity`, `repo`.

## Comment c'est branché
```mermaid
graph LR
  C[internal/controller] --> U[internal/usecase]
  U --> E[internal/entity]
  U --> R[internal/repo/persistent]
  U --> W[internal/repo/webapi]
  R --> P[PostgreSQL]
```

## Essayer
```bash
make compose-up
make run
make compose-up-integration-test
make compose-up-all
```

## Coût et pièges
Gratuit ; nécessite Docker, Postgres, RabbitMQ et NATS. Identifiants d'exemple en clair dans le README : à changer.

## Ce que ce n'est pas
Pas une bibliothèque à importer : c'est un modèle à copier et adapter.

## Alternatives
bxcodec/go-clean-arch et zhashkevych/courses-backend, cités dans le README.

## Pour toi
Ignorer : gabarit de backend Go généraliste, peu lié à data/IA/MLOps.

