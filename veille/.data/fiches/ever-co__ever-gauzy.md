---
schema: 1
depot: ever-co/ever-gauzy
source_readme_sha: 127358c5e38b4bd4
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [Docker, Node]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# ever-co/ever-gauzy

> Plateforme open source ERP, CRM, RH et suivi du temps pour entreprises et équipes freelances.

## Le problème
Les petites structures jonglent entre outils séparés pour la gestion de projet, les finances, les RH et le suivi du temps.

## Ce que ça fait vraiment
Application web Angular avec API NestJS, couvrant ERP, CRM, RH, recrutement, projets, ventes, facturation et rapports. Applications bureau (serveur, timer avec captures d'écran). Bases SQLite par défaut, PostgreSQL ou MySQL en production. Compose avec Redis, OpenSearch, MinIO, Jitsu, Cube.

## Comment c'est branché
```mermaid
flowchart TD
    User["Utilisateur"] --> Web["Application web (app.routes.ts)"]
    Web --> API["API NestJS (apps/api/src/main.ts)"]
    API --> Data[("Base de données")]
    Desktop["Desktop / Timer"] --> API
    Agent["Activity agent"] --> API
```

## Essayer
```bash
docker-compose -f docker-compose.demo.yml up
yarn bootstrap
yarn start
docker compose -f docker-compose.caddy.yml --env-file .env.caddy up -d
```

## Coût et pièges
En production, définir les secrets JWT, la session Express et les trois mots de passe `DEMO_*` : l'API refuse de démarrer sinon. Node 26 ou plus. La version SaaS est signalée en alpha.

## Ce que ce n'est pas
Pas un outil data/IA. Les identifiants de démo (`admin`) ne valent que pour l'essai local.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : progiciel de gestion hors périmètre data/IA/MLOps.

