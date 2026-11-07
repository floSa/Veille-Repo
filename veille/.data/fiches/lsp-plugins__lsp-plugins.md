---
schema: 1
depot: lsp-plugins/lsp-plugins
source_readme_sha: 26947a8ffda367b8
ecrite_le: 2026-11-07
nature: extension
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# lsp-plugins/lsp-plugins

> Collection de plugins audio libres (CLAP, LV2, VST3, LADSPA) pour le travail de studio sous Linux.

## Le problème
Les stations audio sous GNU/Linux manquaient de plugins de qualité (compresseurs, égaliseurs, effets) en formats ouverts.

## Ce que ça fait vraiment
Fournit des plugins audio en formats CLAP, LV2, VST2, VST3, LADSPA, GStreamer et standalone (JACK). Depuis la version 1.2.0, ce dépôt ne contient plus de code : il récupère les sous-projets du groupe lsp-plugins pour compiler. Support complet sur Linux x86_64 et aarch64, partiel ailleurs. Hôtes testés : Ardour, Reaper, Bitwig, Carla, Ableton Live (macOS, VST3).

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
    A["make config"] --> B["make fetch"]
    B --> C["Sous-projets lsp-plugins"]
    C --> D["make"]
    D --> E["make install"]
    E --> F["Hôte audio DAW"]
```

## Essayer
```bash
make clean
make config
make fetch
make
make install
```

## Coût et pièges
Gratuit, dons acceptés. La compilation demande gcc ou clang, cairo, libsndfile et libGL. Pas de support Wayland natif (XWayland requis) ; sur macOS, un bundle modifié doit être re-signé.

## Ce que ce n'est pas
Pas un outil d'IA ni de data : c'est de l'audio. Ce dépôt seul ne contient aucun code source des plugins. Les binaires sont à récupérer en releases.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer pour un profil data / IA / MLOps : bon projet d'audio, mais hors de ton périmètre.

