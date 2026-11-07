---
schema: 1
depot: nhost/nhost-dart
source_readme_sha: 660a432b357fa81b
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# nhost/nhost-dart

> Clients Dart et widgets Flutter pour Nhost, alternative open source à Firebase avec GraphQL.

## Le problème
Une appli Flutter qui utilise Nhost doit gérer l'authentification, le stockage et GraphQL à la main.

## Ce que ça fait vraiment
Cinq paquets : `nhost_dart` (clients d'authentification, de stockage et de fonctions), `nhost_flutter_auth` (état d'authentification en widgets), `nhost_flutter_graphql` et `nhost_graphql_adapter` (connexions GraphQL), `nhost_gql_links` (interne). Nhost lui-même repose sur PostgreSQL, Hasura, Hasura Auth et Hasura Storage.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A["nhost_dart"] --> B["nhost_flutter_auth"]
  A --> C["nhost_graphql_adapter"]
  C --> D["nhost_flutter_graphql"]
  E["nhost_gql_links"] --> C
```

## Essayer
Aucune commande documentée dans le README (paquets publiés sur pub.dev).

## Coût et pièges
Un backend Nhost (hébergé ou auto-hébergé) est nécessaire. Dart et Flutter requis en réalité, non listés dans les prérequis possibles.

## Ce que ce n'est pas
Pas le backend Nhost : seulement ses clients Dart. Pas d'exemple de code dans le README.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer : clients Flutter sans rapport avec un travail data / IA.

