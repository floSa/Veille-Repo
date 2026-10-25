---
schema: 1
depot: torlando-tech/columba
source_readme_sha: b317d023caf97a38
ecrite_le: 2026-10-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# torlando-tech/columba

> Appli Android de messagerie et d'appels vocaux sur le réseau maillé Reticulum, sans serveur central.

## Le problème
Communiquer sans internet, antennes ni serveur central, avec des échanges chiffrés sans compte.

## Ce que ça fait vraiment
Messages LXMF et appels vocaux LXST via Bluetooth LE, Wifi, radio LoRa (RNode) ou TCP vers un serveur Reticulum. Partage de position avec cartes hors ligne (MBTiles), navigateur NomadNet, relais de trafic, identités multiples exportables et partage par QR code. Stockage local.

## Comment c'est branché
```mermaid
flowchart LR
  A["App navigation"] --> B["Messaging screens MessagingScreen.kt"]
  B --> C["Reticulum service"]
  C --> D["Core IPC adapter ClientRnsCore.kt"]
  D --> E["Network interfaces"]
  B --> F["Local database ColumbaDatabase.kt"]
  A --> G["Voice call screens VoiceCallScreen.kt"]
```

## Essayer
Aucune commande documentée : télécharger l'APK depuis les Releases et l'installer sur Android (vérification des APK dans SECURITY.md).

## Coût et pièges
Gratuit, sans compte. La LoRa demande du matériel RNode. Le réseau n'a de valeur que s'il y a des pairs près de toi.

## Ce que ce n'est pas
Pas un messager grand public avec annuaire : il s'appuie sur Reticulum. Pas un outil pour l'IA ou la donnée.

## Alternatives
Sideband, cité comme autre client Reticulum dont on peut importer les identités.

## Pour toi
Ignorer : messagerie maillée pour passionnés de réseaux hors ligne, sans usage direct pour un profil data/IA/MLOps.

