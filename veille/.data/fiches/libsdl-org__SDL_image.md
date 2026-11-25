---
schema: 1
depot: libsdl-org/SDL_image
source_readme_sha: fc3a7b2dec9df977
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [matière insuffisante]
verdict: ignorer
---

# libsdl-org/SDL_image

> Bibliothèque C qui charge des images de nombreux formats comme surfaces SDL 3.

## Le problème
Charger BMP, PNG, JPEG ou WebP dans un programme SDL demande autant de décodeurs.

## Ce que ça fait vraiment
`IMG.c` détecte le format et délègue au décodeur `IMG_xxx.c`. Formats gérés : BMP, GIF, JPEG, PNG, QOI, TGA, XCF, XPM, SVG simple, et AVIF, JPEG-XL, TIFF, WebP selon des bibliothèques optionnelles. Compilation par CMake.

## Comment c'est branché
```mermaid
flowchart TD
  A["SDL_image.h"] --> B["src/IMG.c"]
  B --> C["IMG_png.c"]
  B --> D["IMG_jpg.c"]
  B --> E["IMG_webp.c"]
  B --> F["IMG_avif.c"]
  G["CMakeLists.txt"] --> B
```

## Essayer
```bash
# Aucune commande dans le README ; voir INSTALL.md.
```

## Coût et pièges
Gratuit, licence Zlib. Il faut SDL 3 ; les formats modernes exigent des bibliothèques optionnelles.

## Ce que ce n'est pas
Pas un outil de traitement d'image : il décode seulement.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : brique de jeu vidéo en C, sans rapport avec la data ou l'IA.

