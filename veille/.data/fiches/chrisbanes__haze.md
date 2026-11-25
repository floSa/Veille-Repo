---
schema: 1
depot: chrisbanes/haze
source_readme_sha: 2760ae2598da65e6
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# chrisbanes/haze

> Effets visuels flou et verre pour Compose Multiplatform, pour développeurs d'applications mobiles et bureau.

## Le problème
Réaliser flou d'arrière-plan et effets de verre sur plusieurs plateformes Compose demande du code spécifique à chacune.

## Ce que ça fait vraiment
Modules Kotlin : un cœur de capture de source, `haze-blur`, `haze-glass` (réfraction, teinte, lumière) et des styles Material 3. Fonctionne sur Android, iOS, macOS, JVM bureau et Wasm/JS. Peut traiter un aperçu caméra sous conditions.

## Comment c'est branché
```mermaid
flowchart TD
  A["Gradle build-logic"] --> B["Core Library haze"]
  B --> C["haze-materials"]
  B --> D1["Benchmark"]
  B --> D3["Screenshot tests"]
  B --> E1["Android sample"]
  B --> E3["iOS sample"]
```

## Essayer
```kotlin
implementation("dev.chrisbanes.haze:haze:<version>")
implementation("dev.chrisbanes.haze:haze-blur:<version>")
```

## Coût et pièges
Gratuit. Garder tous les artefacts Haze à la même version. Mesurer les performances sur un build proche de la production.

## Ce que ce n'est pas
Pas une bibliothèque de traitement d'image ni d'IA : un effet d'interface Compose.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : concerne le développement d'interfaces Compose, pas un profil data / IA / MLOps.

