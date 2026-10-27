---
schema: 1
depot: electric-sql/electric
source_readme_sha: ad8520ad7b034a7f
ecrite_le: 2026-10-27
nature: service
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# electric-sql/electric

> Moteur de synchronisation en lecture de Postgres vers des clients, par HTTP et « Shapes ».

## Le problème
Synchroniser partiellement des données Postgres vers des applications (fan-out, réplication partielle) coûte cher à écrire soi-même.

## Ce que ça fait vraiment
Service Elixir qui se connecte à la réplication logique de Postgres, dérive des « Shapes » filtrés, sert snapshot puis changements en HTTP/SSE, compatible avec les CDN. Clients TypeScript et Elixir, hook React. Le dépôt contient aussi un service Rust de flux durables et une plateforme d'agents.

## Comment c'est branché
```mermaid
flowchart LR
  A[Postgres] --> B[Replication Client]
  B --> C[Shape Event Router]
  C --> D[Shape Cache]
  D --> E[Shape HTTP API]
  E --> F[Shape Clients]
```

## Essayer
```bash
docker compose -f .support/docker-compose.yml up
curl -i 'http://localhost:3000/v1/shape?table=foo&offset=-1'
```

## Coût et pièges
Postgres avec réplication logique requis. Le LiveDashboard Phoenix est sans authentification : à protéger par le réseau. Lecture seule : l'écriture n'est pas couverte.

## Ce que ce n'est pas
Pas une synchronisation bidirectionnelle : « read-path » uniquement. La partie agents est un sujet distinct, peu détaillé dans le README.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour alimenter des applications ou agents avec des données Postgres à jour, mais pas un outil de pipeline analytique.

