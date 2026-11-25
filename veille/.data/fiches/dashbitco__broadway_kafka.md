---
schema: 1
depot: dashbitco/broadway_kafka
source_readme_sha: 1a10bde5cf30e044
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: ignorer
---

# dashbitco/broadway_kafka

> Connecteur Kafka pour Broadway, la bibliothèque Elixir de traitement de flux, destiné aux développeurs Elixir.

## Le problème
Consommer des messages Kafka dans un pipeline Broadway demande de gérer groupes de consommateurs, partitions et acquittements.

## Ce que ça fait vraiment
Un producteur Broadway valide ses options, répartit les partitions avec un allocator, lit les messages via le client brod et les acquitte avec un acknowledger. La configuration se limite aux hôtes, au groupe et aux sujets.

## Comment c'est branché
```mermaid
flowchart TD
  A["mix.exs"] --> B["producer.ex"]
  C["producer_options.ex"] --> B
  B --> D["allocator.ex"]
  B --> E["kafka_client.ex"]
  E --> F["brod_client.ex"]
  B --> G["acknowledger.ex"]
```

## Essayer
```elixir
def deps do
  [
    {:broadway_kafka, "~> 0.4.1"}
  ]
end
```

## Coût et pièges
Gratuit. Il faut un broker Kafka et un projet Elixir. Aucune licence n'est déclarée dans le catalogue.

## Ce que ce n'est pas
Pas un client Kafka autonome : il suppose Broadway et Elixir.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : réservé aux pipelines Elixir, alors qu'un profil data, IA ou MLOps consomme Kafka en Python ou Java.

