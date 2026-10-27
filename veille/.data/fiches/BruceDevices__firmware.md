---
schema: 1
depot: BruceDevices/firmware
source_readme_sha: 1628dc0783d9b3ab
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# BruceDevices/firmware

> Firmware ESP32 d'outils de sécurité offensive (Wi-Fi, BLE, RF, RFID, IR) pour équipes Red Team.

## Le problème
Les outils offensifs portables du commerce sont chers et peu modulables.

## Ce que ça fait vraiment
Firmware C++ pour ESP32 (M5Stack, LILYGO, Elecrow, etc.) avec menu embarqué, commandes série, interface web, ESP-NOW. Modules : attaques Wi-Fi (deauth, evil portal, ARP), BLE spam, Sub-GHz/CC1101, RFID/NFC, IR, NRF24, BadUSB, interpréteur JavaScript (mquickjs). Une carte maison (RF REAPER) est vendue.

## Comment c'est branché
```mermaid
flowchart LR
  P[PlatformIO build - platformio.ini] --> M[Firmware entry - main.cpp]
  B[Board adapters - interface.cpp] --> M
  M --> D[main_menu.cpp]
  D --> W[Wi-Fi - wifi_atks.cpp]
  D --> R[RF - record.cpp]
  D --> J[mquickjs - interpreter.cpp]
```

## Essayer
```bash
esptool.py --port /dev/ttyACM0 write_flash 0x00000 Bruce-<device>.bin
```
Alternative : web flasher sur bruce.computer/flasher.

## Coût et pièges
Matériel ESP32 compatible à acheter. Usage légal et autorisé uniquement (clause du README) ; plusieurs fonctions sont des attaques actives.

## Ce que ce n'est pas
Pas un outil d'analyse de données ; le README précise que certaines fonctions (Emulate tag, Mousejack, FM spectrum) ne sont pas cochées.

## Alternatives
Flipper Zero est cité comme point de comparaison (appareil plus cher).

## Pour toi
À ignorer pour un profil data/IA/MLOps : outil de pentest matériel, sans lien avec ton métier.

