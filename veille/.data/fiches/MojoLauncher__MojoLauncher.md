---
schema: 1
depot: MojoLauncher/MojoLauncher
source_readme_sha: d0e299340854b412
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# MojoLauncher/MojoLauncher

> Lanceur Android pour jouer à Minecraft Java Edition, dérivé de PojavLauncher.

## Le problème
Minecraft Java ne tourne pas nativement sur Android ; il faut un lanceur qui embarque un JRE et la couche graphique.

## Ce que ça fait vraiment
Application Android (module `app_pojavlauncher`) avec JRE personnalisés multi-architectures, intégration LWJGL/GLFW, couche native JNI (graphismes OpenGL/Vulkan, entrées), gl4es, agent DNS, installeur Forge. Lance presque toutes les versions et les modloaders Forge/Fabric. Disponible en release, Google Play, builds Actions ou compilation.

## Comment c'est branché
```mermaid
flowchart LR
  U["Android App UI"] --> J["JNI / native layer"]
  U --> R["Custom JRE + LWJGL"]
  R --> G["gl4es"]
  U --> F["Forge installer"]
  U --> D["DNS injector"]
```

## Essayer
```bash
./gradlew :app_mojo:assembleDebug
```

## Coût et pièges
Gratuit, mais Minecraft doit être possédé (non précisé dans le README). Sous Windows, liens symboliques à créer pour `mojoexec`, `sdl`, `glfw`. Problèmes connus : souris lente, textures déformées avec gl4es. LGPL-3.0.

## Ce que ce n'est pas
Pas un outil de développement ni de données : un lanceur de jeu.

## Alternatives
- PojavLauncher : projet d'origine cité.

## Pour toi
À ignorer : aucun rapport avec un profil data/IA/MLOps.

