---
schema: 1
depot: sky-map-team/stardroid
source_readme_sha: 125321cdc467c6b6
ecrite_le: 2026-11-25
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier, télémétrie]
verdict: ignorer
---

# sky-map-team/stardroid

> Application Android d'astronomie, ancienne Google Sky Map, réécrite en Kotlin dans sa version 2.

## Le problème
Identifier les objets du ciel en pointant son téléphone, sans application encombrée de publicités.

## Ce que ça fait vraiment
La v2 (Kotlin, Compose) calcule positions du ciel, éphémérides et passages de satellites à partir de l'heure, du lieu et des capteurs. Un catalogue Room alimente des couches, rendues par un moteur OpenGL ES 1. Les TLE des satellites viennent de CelesTrak. La v1 est retirée.

## Comment c'est branché
```mermaid
flowchart TD
  IN["Heure, lieu, orientation"] --> SM["SkyModel.kt"]
  CAT["RoomCatalogRepository.kt"] --> LR["LayerRegistry.kt"]
  SM --> LR
  LR --> RA["SkyRenderer.kt (API)"]
  RA --> GL["GLSkyRenderer.kt (GLES1)"]
  SW["SatelliteRefreshWorker.kt"] --> CT["CelesTrakClient.kt"]
  CT --> SM
```

## Essayer
```bash
# Aucune commande documentée dans le README.
```

## Coût et pièges
Gratuit, Android seulement. La variante GMS embarque Firebase Analytics ; la variante F-Droid n'en a pas. Marque et icônes sont réservées à Penterakt LLC : un fork publié doit être renommé. Licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas un logiciel d'astronomie de bureau ni de traitement d'images : un planétarium mobile.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : application grand public sans lien avec la data, l'IA ou le MLOps.

