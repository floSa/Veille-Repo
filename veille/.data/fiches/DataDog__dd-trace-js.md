---
schema: 1
depot: DataDog/dd-trace-js
source_readme_sha: 8d270c4c7ee99cf1
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: npm
prerequis: [Node, compte à créer, service tiers]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS]
verdict: ignorer
---

# DataDog/dd-trace-js

> Traceur APM `dd-trace` pour applications Node.js, qui envoie les traces à un agent Datadog.

## Le problème
Il faut capturer des traces de performance d'une application Node.js et les envoyer à Datadog.

## Ce que ça fait vraiment
Paquet npm `dd-trace` : capture les données APM, les envoie à un agent qui les agrège puis les transmet aux serveurs Datadog. Lignes de version : v6 courante (Node ≥ 22), v5 en maintenance, v1 à v4 en fin de vie. Plugin ESBuild et wrapper Turbopack pour Next.js 15.5+. Un projet séparé gère Lambda. Support de l'API OpenTelemetry.

## Comment c'est branché
```mermaid
flowchart LR
  A["Application Node.js"] --> T["dd-trace"]
  T --> G["Datadog Agent"]
  G --> D["Serveurs Datadog"]
  B["ESBuild / Turbopack"] --> T
  O["API OpenTelemetry"] --> T
```

## Essayer
```bash
npm install dd-trace
npm install dd-trace@5
```

## Coût et pièges
Compte Datadog nécessaire pour exploiter les données. Ne pas utiliser le wrapper Turbopack pour les bundles client ou edge. Licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas de stockage ni d'interface locale : tout dépend du service Datadog.

## Alternatives
- datadog-lambda-js : pour les cas Lambda (cité).

## Pour toi
À ignorer sauf service Node.js déjà sur Datadog : hors sujet pour un profil data/IA/MLOps, et verrouillé sur un SaaS.

