---
schema: 1
depot: UrbanOS-Public/smartcitiesdata
source_readme_sha: 23d322b303816bd6
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Docker, service tiers, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: surveiller
---

# UrbanOS-Public/smartcitiesdata

> Plateforme de données de villes intelligentes en micro-services Elixir autour de Kafka et Presto.

## Le problème
Ingérer, normaliser et exposer des données de sources très différentes demande tout un pipeline à assembler.

## Ce que ça fait vraiment
Des micro-services Elixir ingèrent, valident, transforment, persistent et diffusent les données. Les services échangent via Kafka et un bus d'événements, stockent sur du stockage objet compatible S3 et interrogent via PrestoDB. L'accès passe par une interface ReactJS, une API REST ou une API websocket. Andi, Reaper, Valkyrie, Alchemist, Forklift et Discovery sont les services.

## Comment c'est branché
```mermaid
flowchart TD
    A["Reaper : récupère"] --> B["Valkyrie : valide"]
    B --> C["Alchemist : transforme"]
    C --> D["Forklift : écrit dans Presto"]
    A -.-> E["Kafka et bus d'événements"]
    D --> F["Discovery API"]
```

## Essayer
```bash
docker build .
mix test
mix test.integration
mix test.e2e
```

## Coût et pièges
Le déploiement suppose Kubernetes, Kafka, Redis, Elasticsearch, PostgreSQL, Presto et Vault : une infrastructure lourde. Le README est un gabarit, plusieurs sections (Execution, Additional Notes, Contributions) sont vides.

## Ce que ce n'est pas
Ce n'est pas une application à installer en une commande. La section d'exécution est vide dans le README, il faut passer par le wiki.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À surveiller : intéressant comme architecture de référence d'ingestion de données ouvertes, trop lourd à déployer pour un essai rapide.

