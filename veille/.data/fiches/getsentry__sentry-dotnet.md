---
schema: 1
depot: getsentry/sentry-dotnet
source_readme_sha: 3a7f5bf702b9a5fe
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# getsentry/sentry-dotnet

> Kit de développement Sentry pour applications .NET, avec intégrations ASP.NET, MAUI, Serilog et d'autres.

## Le problème
Les erreurs d'une application .NET en production restent invisibles sans remontée centralisée.

## Ce que ça fait vraiment
Le dépôt publie une suite de paquets NuGet : le noyau `Sentry` et des intégrations (ASP.NET Core, Blazor, MAUI, Entity Framework, Hangfire, Quartz, journalisation, OpenTelemetry, profilage). Un paquet `Sentry.Extensions.AI` existe pour le suivi des modules d'agents IA. Le détail se trouve dans la documentation officielle.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
  A[Application .NET] --> C[Paquet Sentry]
  I[Intégrations : AspNetCore, MAUI, Serilog] --> C
  C --> S[Serveur Sentry]
```

## Essayer
Aucune commande documentée dans le README : l'installation passe par les paquets NuGet listés dans le tableau.

## Coût et pièges
Il faut un serveur Sentry pour recevoir les événements ; ses tarifs ne sont pas décrits dans le README. Choisir entre Quartz3 (Quartz.NET 3.6+) et Quartz (4.x).

## Ce que ce n'est pas
Ce n'est pas l'outil de surveillance lui-même, seulement le client .NET. Unity et PowerShell ont des dépôts séparés.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer pour un profil data / IA / MLOps sauf si tu écris en .NET : c'est un SDK mature mais sans lien avec le Python ou les pipelines de données.

