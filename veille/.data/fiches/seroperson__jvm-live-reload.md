---
schema: 1
depot: seroperson/jvm-live-reload
source_readme_sha: a52e917806e5a541
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# seroperson/jvm-live-reload

> Plugins sbt, Gradle et mill pour recharger à chaud toute appli web ou gRPC sur la JVM.

## Le problème
Redémarrer la JVM à chaque modification ralentit le développement, surtout hors des frameworks qui savent déjà recharger.

## Ce que ça fait vraiment
Un proxy inverse lance l'application ; à la prochaine requête après un changement, il recrée le `ClassLoader` et relance l'application sans redémarrer la JVM. Exige un endpoint `/health` et une méthode `main` qui gère `InterruptedException`. Fonctionne en HTTP (9000 vers 8080) et gRPC (9001 vers 8081). Alpha, selon le README.

## Comment c'est branché
```mermaid
flowchart LR
  Build[Plugin sbt, Gradle ou mill] --> Proxy[Proxy inverse]
  Proxy --> App[Application cible]
  Hooks[Hooks démarrage et arrêt] --> App
  Proxy --> Health[/health ou grpc.health]
```

## Essayer
```bash
sbt run
./gradlew liveReloadRun
mill app.liveReloadRun
```

## Coût et pièges
Gratuit. JDK 17 minimum ; parfois l'option `--add-opens` est nécessaire. L'appli tourne dans une JVM non forkée. README signalant un état alpha.

## Ce que ce n'est pas
Pas un outil Python ni un rechargeur de daemons : seulement web et gRPC sur la JVM.

## Alternatives
Les rechargements natifs de Spring, Quarkus, Play et Apache Tapestry, cités dans le README.

## Pour toi
À ignorer : outil JVM de développement, sans rapport avec ta pile data/IA.

