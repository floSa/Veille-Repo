---
schema: 1
depot: betaflight/betaflight-configurator
source_readme_sha: b7c0f30143b38b76
ecrite_le: 2026-09-29
nature: app
deploiement: binaire
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# betaflight/betaflight-configurator

> Application de configuration du firmware de contrôleurs de vol Betaflight, pour pilotes de drones.

## Le problème
Régler un contrôleur de vol (moteurs, failsafe, OSD) demande un outil dédié qui parle son protocole.

## Ce que ça fait vraiment
Application web progressive (PWA) construite avec Vue et Vite, qui dialogue avec le contrôleur en MSP via Web Serial ou Bluetooth. Elle existe aussi en installeurs Windows, Linux, macOS et Android (Capacitor). Elle gère plusieurs langues.

## Comment c'est branché
```mermaid
flowchart LR
  W["Navigateur / PWA"] --> V["Vue Components + Tabs"]
  V --> J["Core JS Modules"]
  J --> M["MSP Communication"]
  M --> Pr["Protocol (WebSerial, WebBluetooth)"]
  Pr --> FC["Flight Controller"]
  V --> An["Android / Capacitor"]
```

## Essayer
```bash
npm install
npm run dev
npm run build
npm run preview
npm test
```
Utiliser la version de Node indiquée dans `.nvmrc` (npm 11.6.1 ou plus).

## Coût et pièges
Gratuit. La version PWA de test peut corrompre les réglages du contrôleur. Sous Linux, ajouter l'utilisateur au groupe `dialout`.

## Ce que ce n'est pas
Pas le firmware : celui-ci vit dans le dépôt `betaflight/betaflight`. Pas un simulateur de vol.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : réservé au réglage de drones, sans lien avec tes chaînes data/IA.

