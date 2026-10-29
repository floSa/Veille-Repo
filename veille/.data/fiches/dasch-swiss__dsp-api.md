---
schema: 1
depot: dasch-swiss/dsp-api
source_readme_sha: 1452b573644d25d8
ecrite_le: 2026-10-29
nature: service
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: fondation
alertes: []
verdict: ignorer
---

# dasch-swiss/dsp-api

> Serveur d'API pour stocker et interroger des données de recherche en sciences humaines, pour institutions et chercheurs.

## Le problème
Les données de sources primaires en humanités sont hétérogènes et difficiles à lier, versionner et partager de façon standard.

## Ce que ça fait vraiment
Stocke les données sous forme de graphes RDF dans un triplestore (testé avec Jena Fuseki) et les fichiers binaires via Sipi (serveur média C++). Expose une API HTTP en Scala pour interroger, annoter et lier les données. Gère authentification, autorisations et versionnement automatique ; s'appuie sur des ontologies OWL.

## Comment c'est branché
```mermaid
graph TD
  A[Client DSP-APP] --> B[DSP-API Scala]
  B --> C[Triplestore Jena Fuseki]
  B --> D[Sipi média]
  B --> E[Ontologies OWL]
```

## Essayer
```bash
just init-db-test
just stack-up
just stack-stop
just test-unit
```

## Coût et pièges
Gratuit. Exige Linux ou macOS, Docker Desktop, Nix avec flakes et direnv ; build Bazel avec JDK Temurin 25. Erreur `mounts denied` possible sous Docker Desktop.

## Ce que ce n'est pas
Pas une plateforme générique de données : elle vise les humanités numériques. Les contributions passent d'abord par un contact avec l'équipe.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer : domaine humanités et stack RDF/Scala hors profil, sauf projet de graphes de connaissances.

