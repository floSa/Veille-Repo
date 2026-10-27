---
schema: 1
depot: google/guava
source_readme_sha: 2f87f3f5c6a7b7f1
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# google/guava

> Bibliothèques Java de base de Google : collections, graphes, concurrence, E/S, hachage, chaînes.

## Le problème
Le JDK de base manque de collections immuables, de multimaps et d'utilitaires de concurrence prêts à l'emploi.

## Ce que ça fait vraiment
Fournit multimap, multiset, collections immuables, une bibliothèque de graphes et des utilitaires de concurrence (Futures, MoreExecutors, Service, Monitor). Deux variantes : JRE (JDK 8+) et Android. Une dépendance runtime : `failureaccess`.

## Comment c'est branché
```mermaid
flowchart LR
  A[Application Java] --> C[Lists.java]
  A --> M[Multimap.java]
  A --> F[Futures.java]
  F --> E[MoreExecutors.java]
  A --> S[Service.java]
  A --> P[Preconditions.java]
```

## Essayer
```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.7.2-jre</version>
</dependency>
```

## Coût et pièges
Gratuit. Les API `@Beta` peuvent changer ou disparaître. Les formes sérialisées ne sont pas stables d'une version à l'autre. Pas conçu contre un appelant malveillant.

## Ce que ce n'est pas
Pas un framework : une boîte à outils. Aucun lien avec la data science.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf si tu codes en Java/Scala : il est déjà tiré en dépendance transitive par de nombreux outils JVM.

