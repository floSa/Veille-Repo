---
schema: 1
depot: apache/kafka
source_readme_sha: 5550c38ce0519656
ecrite_le: 2026-10-27
nature: service
deploiement: docker
prerequis: [Docker, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: surveiller
---

# apache/kafka

> Plateforme distribuée de streaming d'événements, pour pipelines de données et applications temps réel.

## Le problème
Transporter et conserver de gros flux d'événements entre applications de façon durable et à fort débit.

## Ce que ça fait vraiment
Des brokers stockent des journaux d'enregistrements ; producteurs et consommateurs passent par les API clientes, avec groupes de consommateurs, groupes de partage, stockage distant et outils d'administration. Le README est surtout un guide de build (Gradle), de test, de qualité de code et de benchmark. Java 17 et 25 sont testés.

## Comment c'est branché
```mermaid
graph LR
  A[Applications] --> B[Client APIs]
  B --> C[Network client NetworkClient.java]
  C --> D[Kafka broker]
  D --> E[Replica manager]
  D --> F[Group service]
  D --> G[Remote storage API]
```

## Essayer
```bash
docker run -p 9092:9092 apache/kafka:latest
./gradlew jar
KAFKA_CLUSTER_ID="$(./bin/kafka-storage.sh random-uuid)"
./bin/kafka-storage.sh format --standalone -t $KAFKA_CLUSTER_ID -c config/server.properties
./bin/kafka-server-start.sh config/server.properties
```

## Coût et pièges
Gratuit, mais l'exploitation d'un cluster (stockage, supervision, mises à jour) est à ta charge. Java requis.

## Ce que ce n'est pas
Pas un outil d'analytique ni un entrepôt de données : c'est un bus d'événements. Le README décrit le développement du projet plus que son usage.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : référence pour ingérer des flux (features temps réel, logs d'inférence) ; à adopter seulement si le volume justifie son exploitation.

