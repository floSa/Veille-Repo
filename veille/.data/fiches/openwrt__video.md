---
schema: 1
depot: openwrt/video
source_readme_sha: 711c5fef46bdacd3
ecrite_le: 2026-11-25
nature: liste
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence non déclarée]
verdict: ignorer
---

# openwrt/video

> Flux de paquets OpenWrt pour bibliothèques graphiques et vidéo hors du cœur du système.

## Le problème
Les routeurs et systèmes embarqués OpenWrt n'ont pas dans leur base les paquets graphiques comme Mesa, Wayland ou Qt.

## Ce que ça fait vraiment
Collection de Makefile de paquets : Wayland, Weston, Qt5 et Qt6, Mesa, SDL3, WPE WebKit, Plymouth, kmscon et un jeu SDL3. Les couches hautes dépendent de Mesa et de Wayland. Les paquets apparaissent dans menuconfig, section Video.

## Comment c'est branché
```mermaid
flowchart TD
  A["libs/mesa/Makefile"] --> B["frameworks/wayland/Makefile"]
  B --> C["frameworks/weston/Makefile"]
  A --> D["frameworks/qt6/qt6base/Makefile"]
  E["libs/sdl3/Makefile"] --> F["games/sdl3-doom/Makefile"]
  G["libs/wpewebkit/Makefile"] --> B
```

## Essayer
```bash
src-git video https://github.com/openwrt/video.git
./scripts/feeds update video
./scripts/feeds install -a -p video
```

## Coût et pièges
Demande un buildroot OpenWrt et une compilation complète. Aucune licence déclarée au niveau du dépôt.

## Ce que ce n'est pas
Pas une application : un flux de définitions de paquets pour construire un firmware.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
Ignorer : de l'embarqué et des systèmes réseau, hors sujet pour un profil data / IA / MLOps.

