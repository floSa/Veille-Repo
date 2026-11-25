---
schema: 1
depot: lraton/FlopperZiro
source_readme_sha: 9f1d729b91344a89
ecrite_le: 2026-11-25
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# lraton/FlopperZiro

> Multi-outil matériel DIY sur STM32, inspiré du Flipper Zero, pour bricoleurs d'électronique.

## Le problème
Le Flipper Zero coûte cher. Ce dépôt propose une version à monter soi-même pour explorer RF, NFC, infrarouge et BadUSB.

## Ce que ça fait vraiment
Firmware Arduino pour un STM32-L432KC avec écran OLED, lecteur microSD et six boutons. Menus pour BadUSB (scripts Rubber Ducky depuis la SD), RFID/NFC (lecture d'UID, émulation), RF 433 MHz (capture/rejeu), infrarouge. La feuille de route reste ouverte : ISO14443-B, PN7150 et documentation de montage non cochés.

## Comment c'est branché
```mermaid
flowchart TD
  MA["main/main.ino"] --> ME["main/menu.ino"]
  ME --> BU["main/badusb.ino"]
  ME --> IR["main/ir.ino"]
  ME --> RF["main/rf.ino"]
  ME --> RI["main/rfid.ino"]
  RF --> SL["main/sdList.ino"]
  IR --> SL
```

## Essayer
```bash
# Aucune commande documentée : le firmware se compile et se téléverse depuis l'Arduino IDE.
```

## Coût et pièges
Pas de clé d'API, mais du matériel à acheter et souder (STM32, PN532, FS1000A/RXB12, OLED, TP4056). Documentation de montage encore incomplète.

## Ce que ce n'est pas
Pas un produit fini ni un remplaçant du Flipper Zero. Le README précise un usage éducatif, pas de test de sécurité non autorisé.

## Alternatives
- Flipper Zero : matériel abouti, firmware et écosystème maintenus.

## Pour toi
Ignorer : de l'électronique embarquée sans lien avec data/IA/MLOps, et un projet encore en chantier.

