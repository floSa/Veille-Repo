---
schema: 1
depot: mpv-android/mpv-android
source_readme_sha: f3d3b65df75ce4f6
ecrite_le: 2026-10-27
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# mpv-android/mpv-android

> Lecteur vidéo Android fondé sur libmpv, pour qui veut un lecteur local ou réseau très réglable.

## Le problème
Les lecteurs Android par défaut gèrent mal les sous-titres stylés, les réglages de rendu et certains flux.

## Ce que ça fait vraiment
Décodage matériel ou logiciel, gestes pour chercher/volume/luminosité, sous-titres libass (double sous-titre), lecture de flux via « Open URL », lecture en arrière-plan et Picture-in-Picture. Le code natif relie `MPVLib` à libmpv par JNI.

## Comment c'est branché
```mermaid
graph LR
  A[Main screen] --> B[Picker activity]
  B --> C[MPVActivity.kt]
  C --> D[MPVView.kt]
  D --> E[MPVLib.kt]
  E --> F[libmpv]
```

## Essayer
```bash
# non documenté dans le README : voir le README du dossier buildscripts
```

## Coût et pièges
Gratuit. Android TV seulement via F-Droid ou APK manuel.

## Ce que ce n'est pas
**Pas** une bibliothèque (AAR) à importer : le README dit de s'en inspirer (`MPVLib`, `BaseMPVView`, code natif).

## Alternatives
- Aucune citée dans le README.

## Pour toi
À ignorer : application grand public sans usage data/IA, sauf si tu veux étudier l'intégration libmpv.

