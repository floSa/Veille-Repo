---
schema: 1
depot: debezium/debezium
source_readme_sha: d9511c0d89ce3563
ecrite_le: 2026-10-27
nature: outil
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# debezium/debezium

> Plateforme de capture de changements (CDC) qui diffuse chaque modification de ligne d'une base vers Kafka.

## Le problème
Savoir qu'une donnée a changé sans triggers propriétaires ni double écriture, et sans perdre d'événements ni leur ordre.

## Ce que ça fait vraiment
Des connecteurs Kafka Connect surveillent un serveur de base de données, lisent les changements validés et les écrivent dans des topics Kafka (un par table). Les clients reprennent où ils s'étaient arrêtés. Un moteur embarqué permet de recevoir les événements directement dans l'application, sans Kafka. Des transformations, convertisseurs et stockages d'offsets complètent l'ensemble.

## Comment c'est branché
```mermaid
flowchart LR
  A["Source database"] --> B["Debezium connector"]
  B --> C["Kafka Connect"]
  C --> D["Kafka topics"]
  D --> E["Consumer applications"]
  B --> F["Engine API (embedded)"]
  F --> G["Embedded host app"]
```

## Essayer
```bash
git clone https://github.com/debezium/debezium.git
cd debezium
./mvnw clean verify
./mvnw clean verify -DskipITs     # sans Docker
./mvnw clean verify -Dquick       # artefacts seulement
```

## Coût et pièges
Gratuit. Les tests d'intégration exigent Docker. Il faut JDK 21, Maven et en général une infra Kafka. Le README décrit surtout la compilation.

## Ce que ce n'est pas
Pas un ETL clé en main : il émet des événements, c'est à toi de les consommer. Les connecteurs génériques sont plus limités que ceux dédiés à un SGBD.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter pour alimenter features, index ou entrepôts en quasi temps réel : référence du CDC, Apache-2.0, activité forte.

