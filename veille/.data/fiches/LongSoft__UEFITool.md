---
schema: 1
depot: LongSoft/UEFITool
source_readme_sha: 832d08985503bd74
ecrite_le: 2026-11-25
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# LongSoft/UEFITool

> Visionneuse d'images firmware UEFI en C++/Qt, pour analystes et bricoleurs de BIOS.

## Le problème
Il manquait un outil libre multiplateforme pour explorer l'intérieur d'une image firmware UEFI.

## Ce que ça fait vraiment
Analyse une image UEFI en arbre, vérifie son intégrité et propose une interface pour la parcourir. UEFIExtract en déverse l'arbre sur disque ; UEFIFind cherche un motif. L'édition n'est possible que dans l'ancienne version 0.28 (branche old_engine) ; la reconstruction d'image est encore en chantier.

## Comment c'est branché
```mermaid
flowchart TD
  G["UEFITool (GUI Qt)"] --> C["common (ffsparser)"]
  E["UEFIExtract (CLI)"] --> C
  F["UEFIFind (CLI)"] --> C
  C --> Z["LZMA / Tiano / zlib"]
  C --> K["Kaitai Struct"]
  B["CMake / Meson"] --> G
```

## Essayer
```bash
qmake ./UEFITool/uefitool.pro
cmake UEFIExtract
```

## Coût et pièges
Gratuit. Compilation avec compilateur C++ et Qt5 ou Qt6 pour l'interface, CMake ou Meson pour les outils en console. Certains fichiers de mise à jour (HP chiffrés, Dell) ne s'ouvrent pas.

## Ce que ce n'est pas
Pas un éditeur complet pour l'instant. Pas un outil de sécurité offensive : il lit et extrait des images.

## Alternatives
FMMT (TianoCore), Fiano (Google et Facebook), uefi-firmware-parser, Chipsec, PhoenixTool.

## Pour toi
Ignorer : analyse de firmware, hors périmètre data / IA / MLOps.

