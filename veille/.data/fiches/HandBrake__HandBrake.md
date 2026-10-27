---
schema: 1
depot: HandBrake/HandBrake
source_readme_sha: 741c06120ef25c8a
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: surveiller
---

# HandBrake/HandBrake

> Transcodeur vidéo open source (Linux, Mac, Windows) pour convertir ses vidéos en MP4, MKV ou WebM.

## Le problème
Adapter des vidéos (caméras, captures, DVD, Blu-ray) aux formats lisibles par téléphone, TV ou navigateur.

## Ce que ça fait vraiment
Moteur partagé `libhb` (scan, filtres, encodage via FFmpeg, x264, x265, SVT-AV1 et encodeurs matériels, mux) avec trois interfaces : GTK, macOS (avec service XPC) et Windows WPF (avec worker HTTP). Presets intégrés. Les dépendances sont compilées depuis `contrib/`.

## Comment c'est branché
```mermaid
flowchart LR
  FE["GTK / macOS / WPF"] --> SC["scan.c"]
  SC --> WK["work.c"]
  WK --> FL["avfilter.c"]
  WK --> EN["encx264.c"]
  EN --> MX["muxavformat.c"]
```

## Essayer
Aucune commande documentée dans le README ; il renvoie à la documentation officielle.

## Coût et pièges
Gratuit. Licence présente mais non identifiée par GitHub ; le README cite la GPL v2. Les encodeurs matériels dépendent du GPU.

## Ce que ce n'est pas
Pas un éditeur vidéo ; il transcode des fichiers existants.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Utile pour préparer des jeux de données vidéo (changer de codec ou réduire la taille) ; sinon hors sujet.

