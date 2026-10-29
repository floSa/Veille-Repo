---
schema: 1
depot: DataDog/dd-trace-dotnet
source_readme_sha: 9de7fa2ce7014c8e
ecrite_le: 2026-10-29
nature: bibliothèque
deploiement: npm
prerequis: [compte à créer, clé d'API]
cout: payant
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS, télémétrie]
verdict: ignorer
---

# DataDog/dd-trace-dotnet

> Bibliothèques .NET de Datadog pour tracer et profiler des applications .NET.

## Le problème
Observer les performances d'applications .NET en production.

## Ce que ça fait vraiment
Traceur .NET qui instrumente automatiquement les bibliothèques prises en charge et permet une instrumentation manuelle ; profileur continu. Alimente le traçage distribué, la sécurité applicative, la visibilité CI et l'instrumentation dynamique. Paquets NuGet `Datadog.Trace` et `Datadog.Trace.OpenTracing`, installateurs Windows et Linux.

## Comment c'est branché
Matière insuffisante pour un schéma fidèle : aucune architecture fournie ; le README liste les composants (traceur, profileur, paquets).

## Essayer
Aucune commande documentée dans le README : voir les documents de configuration Datadog.

## Coût et pièges
Le client est libre mais utile surtout avec un compte Datadog payant. 353 issues ouvertes.

## Ce que ce n'est pas
Pas un outil autonome d'observabilité.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf si ton équipe a Datadog et du .NET : profil hors data/IA.

