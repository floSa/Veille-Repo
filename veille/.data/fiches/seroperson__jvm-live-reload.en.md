# seroperson/jvm-live-reload

> sbt, Gradle and mill plugins to hot-reload any web or gRPC app on the JVM.

## The problem
Restarting the JVM on every change slows down development, especially outside frameworks that already know how to reload.

## What it actually does
A reverse proxy launches the application; on the next request after a change, it recreates the `ClassLoader` and restarts the application without restarting the JVM. Requires a `/health` endpoint and a `main` method that handles `InterruptedException`. Works over HTTP (9000 to 8080) and gRPC (9001 to 8081). Alpha, according to the README.

## How it is wired
```mermaid
flowchart LR
  Build[Plugin sbt, Gradle ou mill] --> Proxy[Proxy inverse]
  Proxy --> App[Application cible]
  Hooks[Hooks démarrage et arrêt] --> App
  Proxy --> Health[/health ou grpc.health]
```

## Trying it
```bash
sbt run
./gradlew liveReloadRun
mill app.liveReloadRun
```

## Cost and gotchas
Free. JDK 17 minimum; the `--add-opens` option is sometimes needed. The app runs in a non-forked JVM. README states an alpha state.

## What it is not
Not a Python tool nor a daemon reloader: only web and gRPC on the JVM.

## Alternatives
The native reloading of Spring, Quarkus, Play and Apache Tapestry, cited in the README.

## For you
Ignore: JVM development tool, unrelated to your data/AI stack.
