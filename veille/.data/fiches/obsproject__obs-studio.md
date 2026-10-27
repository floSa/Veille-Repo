---
schema: 1
depot: obsproject/obs-studio
source_readme_sha: be2dff0124620dcd
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: surveiller
---

# obsproject/obs-studio

> Logiciel libre de capture, composition, encodage, enregistrement et diffusion vidéo, pour créateurs et streamers.

## Le problème
Mélanger plusieurs sources (écran, caméra, audio) et les diffuser en direct ou les enregistrer demande un outil de composition temps réel.

## Ce que ça fait vraiment
Le cœur `libobs` gère scènes, sources, filtres, transitions, encodeurs et sorties. Les fonctions viennent de plugins : capture Windows, macOS, Linux (PipeWire), encodeurs x264/NVENC, sorties RTMP et WebRTC. L'interface Qt passe par une API de frontend ; des backends OpenGL, D3D11 et Metal font le rendu.

## Comment c'est branché
```mermaid
flowchart LR
  S["Sources & filters"] --> L["libobs"]
  L --> G["Graphics"]
  G --> B["OpenGL / D3D11 / Metal"]
  L --> F["FFmpeg encoding"]
  F --> O["Outputs"]
  U["OBS Studio Qt app"] --> L
```

## Essayer
Le README ne contient pas de commande : instructions de build sur https://github.com/obsproject/obs-studio/wiki/Install-Instructions.

## Coût et pièges
Gratuit (GPL-2.0 ou ultérieure). Compilation par CMake, spécifique à chaque plateforme.

## Ce que ce n'est pas
Pas un éditeur de montage : c'est un outil de capture et de diffusion. Le README sert surtout de porte d'entrée vers le wiki et les règles de contribution.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour enregistrer des démos ou des webinaires, sans rapport avec le travail data / IA proprement dit.

