---
schema: 1
depot: appsignal/appsignal-elixir
source_readme_sha: a6e680fd36445de6
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS, télémétrie]
verdict: ignorer
---

# appsignal/appsignal-elixir

> Client Elixir du service AppSignal : suivi des erreurs et des performances d'applications Elixir.

## Le problème
Repérer erreurs et lenteurs dans une application Elixir ou Phoenix en production.

## Ce que ça fait vraiment
Instrumente automatiquement les requêtes, remonte les exceptions et problèmes de performance vers AppSignal. Intégrations pour Plug et Phoenix, instrumentation personnalisée possible. Le README décrit surtout le développement : tests ExUnit, AddressSanitizer pour le NIF, benchmarks avec benchee.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  APP["Application Elixir"] --> LIB["appsignal-elixir"]
  LIB --> NIF["NIF natif"]
  NIF --> API["AppSignal.com"]
```

## Essayer
```bash
mono bootstrap
mix test
```
Installation côté utilisateur : guide sur docs.appsignal.com.

## Coût et pièges
Compte AppSignal et clé de push nécessaires ; le service est payant au-delà d'une offre gratuite (non précisé dans le README). Les données partent chez AppSignal.

## Ce que ce n'est pas
Ce n'est pas un outil de monitoring autonome : sans le service AppSignal, il ne sert à rien. Le README ne documente pas l'installation.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : client d'un SaaS pour Elixir, hors de ta pile habituelle de data, IA ou MLOps.

