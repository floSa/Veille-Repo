---
schema: 1
depot: provectus/kafka-ui
source_readme_sha: 7358e40a96a4fe9f
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [dernier commit ancien]
verdict: surveiller
---

# provectus/kafka-ui

> Interface web pour surveiller et administrer des clusters Apache Kafka, destinée aux équipes qui exploitent Kafka.

## Le problème
Inspecter brokers, topics, groupes de consommateurs et messages Kafka en ligne de commande est lent et peu lisible.

## Ce que ça fait vraiment
Une application web qui gère plusieurs clusters : brokers, topics, partitions, lag des consumer groups, navigation et production de messages (JSON, texte, Avro), schema registry, Kafka Connect, ksqlDB. Elle ajoute authentification OAuth, contrôle d'accès par rôles et masquage de données.

## Comment c'est branché
```mermaid
flowchart TD
    user(("Kafka UI user")) --> web["Web application [App.tsx]"]
    web -.-> api["HTTP API"]
    topics["Topics [TopicsService.java]"] --> admin["Admin client service"]
    admin -.-> kafka[("Apache Kafka cluster")]
    rbac["Role-based access"] --> auth["Authentication"]
```

## Essayer
```bash
docker run -it -p 8080:8080 -e DYNAMIC_CONFIG_ENABLED=true provectuslabs/kafka-ui
# puis http://localhost:8080
```

## Coût et pièges
Gratuit, mais il faut un cluster Kafka à interroger. Dernier push en juillet 2024 et 352 issues ouvertes : suivi à vérifier.

## Ce que ce n'est pas
Pas un outil de supervision complet : il montre l'état et agit, il ne remplace ni Prometheus ni un système d'alerte.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile si tes pipelines de données passent par Kafka, mais le dépôt n'a plus de push depuis juillet 2024.

