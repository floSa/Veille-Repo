---
schema: 1
depot: http4s/http4s
source_readme_sha: 65fa6dd40f63bb6a
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# http4s/http4s

> Interface Scala minimale et idiomatique pour services HTTP, équivalent de Rack, WSGI ou Servlets.

## Le problème
Écrire des serveurs et clients HTTP en Scala fonctionnel demande une abstraction typée et composable.

## Ce que ça fait vraiment
Fournit `HttpRoutes`, requêtes et réponses typées, `EntityEncoder`/`EntityDecoder`, middlewares serveur et client, serveur et client Ember, WebSocket, multipart, contenu statique, codecs Circe et analyseur Jawn, et s'appuie sur Cats Effect et fs2 d'après le diagramme. Le backend blaze demande un JDK ≥ 8u252.

## Comment c'est branché
```mermaid
flowchart TD
  A["Request"] --> B["EmberServer"]
  B --> C["Server Middleware"]
  C --> D["HttpRoutes"]
  D --> E["EntityDecoder / Encoder"]
  F["EmberClient"] --> A
```

## Essayer
```bash
scalacOptions ++= Seq("-Ypartial-unification")
```
(utile hors Scala 2.13, d'après le README.)

## Coût et pièges
Gratuit. Écosystème Scala fonctionnel : courbe d'apprentissage importante. 384 issues ouvertes.

## Ce que ce n'est pas
Pas un framework web complet « tout compris » : une interface HTTP minimale.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer, sauf si ton stack de données est en Scala (Spark) et que tu y écris des services HTTP.

