---
schema: 1
depot: rivet-dev/rivet
source_readme_sha: fe53aab7108ed151
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Node, service tiers]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# rivet-dev/rivet

> Plateforme d'acteurs durables, avec état, SQLite et WebSocket, pour exécuter des agents IA à grande échelle.

## Le problème
Faire tourner chaque agent dans un bac à sable ou une VM coûte cher en mémoire et en démarrage, alors qu'il passe l'essentiel du temps à attendre l'inférence.

## Ce que ça fait vraiment
Un acteur est un processus durable avec variables en mémoire, base SQLite, WebSocket et planification, qui se met en veille puis se réveille à la demande. Les acteurs partagent un processus Node.js ou Bun. Le plan de contrôle en Rust planifie, route et persiste ; les données vivent sur stockage objet S3. Bibliothèques pour agents, workflows et exécution sécurisée de code (agentOS).

## Comment c'est branché
```mermaid
flowchart LR
    SDK["Actor SDKs"] --> API["Engine API router.rs"]
    SDK --> GW["Edge gateway"]
    API --> SCH["Actor scheduling"]
    GW --> W["Actor worker engine.ts"]
    W --> DEP[("Database depot storage.rs")]
    W --> WF["Durable workflows"]
```

## Essayer
```bash
npx skills add rivet-dev/skills
```
Le README propose de coller cette consigne dans un agent de code, puis de demander quoi construire.

## Coût et pièges
Auto-hébergement gratuit (Apache-2.0), avec un stockage objet S3 comme seule dépendance. Rivet Cloud et BYOC sont des offres gérées. Les chiffres (4,99 ms, 72 Ko) viennent des benchmarks de l'éditeur.

## Ce que ce n'est pas
Pas un fournisseur de bacs à sable : pour exécuter du code non fiable il faut agentOS ou ton propre bac à sable. Les clients Python et Swift sont expérimentaux.

## Alternatives
- Cloudflare Durable Objects : Rivet se présente comme équivalent ouvert, auto-hébergeable, sans plafond de 128 Mo.
- E2B : bac à sable comparé dans le README, plus lourd au démarrage.

## Pour toi
À surveiller : intéressant pour héberger des agents durables et multi-utilisateurs sans une VM par agent, mais plateforme jeune à évaluer avant d'y lier tes workflows.

