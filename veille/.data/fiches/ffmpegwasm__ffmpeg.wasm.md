---
schema: 1
depot: ffmpegwasm/ffmpeg.wasm
source_readme_sha: 66768a187656d3e5
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [matière insuffisante]
verdict: surveiller
---

# ffmpegwasm/ffmpeg.wasm

> Port FFmpeg en WebAssembly/JavaScript pour convertir audio et vidéo directement dans le navigateur.

## Le problème
Transcoder de l'audio ou de la vidéo oblige à envoyer les fichiers à un serveur ou à installer FFmpeg en local.

## Ce que ça fait vraiment
Le code FFmpeg C est compilé en WebAssembly par Emscripten. Un wrapper JS lance le noyau dans un Web Worker, avec un système de fichiers virtuel en mémoire ; les sorties reviennent en blobs. Le noyau .wasm est téléchargé à l'exécution (CDN). Des paquets séparés existent : core, core-mt (multithread), util, types.

## Comment c'est branché
```mermaid
flowchart TD
  B["Browser Main Thread"] -->|"import wrapper"| W["@ffmpeg/ffmpeg Wrapper"]
  W -->|"postMessage"| K["Web Worker"]
  K -->|"instantiate"| C["WASM Core (@ffmpeg/core)"]
  C --> F["Virtual File System"]
  F -->|"Blob output"| B
  N["CDN/Netlify"] -->|"fetch .wasm"| W
```

## Essayer
```bash
# Le README fourni ne contient aucune commande ; il renvoie à la page Getting Started
# https://ffmpegwasm.netlify.app/docs/getting-started/installation
```

## Coût et pièges
Gratuit. Le fichier .wasm est chargé depuis un CDN à l'exécution. Le README est très court : le détail est dans la documentation externe.

## Ce que ce n'est pas
Pas un FFmpeg natif : il tourne dans le navigateur, via le worker. Le README ne chiffre pas les performances.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : utile pour prétraiter médias côté client dans une démo ou une app IA, mais hors du cœur data/MLOps.

