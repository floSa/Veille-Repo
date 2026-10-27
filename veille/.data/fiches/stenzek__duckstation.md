---
schema: 1
depot: stenzek/duckstation
source_readme_sha: 52c0c0c65e3bd94c
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# stenzek/duckstation

> Émulateur PlayStation 1 pour Windows, Linux, macOS et Android, axé précision et performance.

## Le problème
Rejouer des jeux PS1 sur PC ou mobile avec une fidélité correcte et de meilleurs rendus que la console.

## Ce que ça fait vraiment
Émulateur avec recompilateur CPU, rendu matériel (D3D11/12, OpenGL, Vulkan, Metal), PGXP, mise à l'échelle, états sauvegardés, cheats, RetroAchievements. Deux interfaces : Qt et plein écran ImGui. Un BIOS PS1/PS2 fourni par l'utilisateur est obligatoire.

## Comment c'est branché
```mermaid
flowchart LR
  A[Qt frontend qthost.h] --> B[Emulated system system.h]
  C[Fullscreen UI imgui.h] --> B
  B --> D[Hardware rendering]
  B --> E[Save states]
  B --> F[RetroAchievements rc_client.c]
```

## Essayer
```bash
chmod a+x DuckStation-x64.AppImage
git clone https://github.com/stenzek/duckstation.git
```

## Coût et pièges
Gratuit, mais le BIOS n'est pas fourni (à extraire de sa console). Aucun support pour l'application Android. Installeur Windows récent.

## Ce que ce n'est pas
Pas libre au sens strict : le README cite CC-BY-NC-ND, qui n'autorise que la redistribution non modifiée. Un mainteneur principal.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : un émulateur de jeux sans rapport avec la data/IA/MLOps, et une licence restrictive.

