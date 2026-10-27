---
schema: 1
depot: mainsail-crew/mainsail
source_readme_sha: 9751de8e229672a4
ecrite_le: 2026-10-27
nature: app
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# mainsail-crew/mainsail

> Interface web légère et responsive pour piloter une imprimante 3D sous firmware Klipper.

## Le problème
Klipper se configure en fichiers et n'a pas d'interface native confortable pour surveiller et lancer des impressions.

## Ce que ça fait vraiment
Application Vue/Vuetify qui parle à Moonraker (API de Klipper) : gestionnaire de fichiers et éditeur G-code, file d'impression, historique, visionneuse G-code 3D, maillage du plateau, webcams multiples, timelapse, contrôle d'alimentation, macros, tableau de bord configurable, 12 langues. Prise en charge de plusieurs imprimantes.

## Comment c'est branché
```mermaid
graph LR
  V[Vue.js Application] --> W[WebSocket Client]
  W --> M[Moonraker API]
  M --> K[Klipper Firmware]
  V --> F[File Management]
  V --> G[GCode Viewer]
  V --> C[Webcam Integration]
```
(Schéma d'après l'architecture décrite, générique.)

## Essayer
Aucune commande dans le README : mise en route via docs.mainsail.xyz/setup ; un mode distant existe sur my.mainsail.xyz.

## Coût et pièges
Gratuit. Exige Klipper et Moonraker déjà installés. Le mode distant passe par un service hébergé.

## Ce que ce n'est pas
Pas un firmware ni un logiciel de tranchage : seulement l'interface.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer : impression 3D, sans lien avec data/IA/MLOps.

