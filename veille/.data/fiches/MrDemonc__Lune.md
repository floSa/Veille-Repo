---
schema: 1
depot: MrDemonc/Lune
source_readme_sha: dfdb8f224d5b9d74
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# MrDemonc/Lune

> Lecteur de musique Android hors ligne en Jetpack Compose, sans permission Internet, pour qui veut un son personnalisable.

## Le problème
Les lecteurs musicaux Android embarquent souvent publicité, pistage ou compte. Celui-ci joue uniquement les fichiers locaux, sans réseau.

## Ce que ça fait vraiment
- Lecture de fichiers locaux (MP3, FLAC, Opus, etc.) avec file d'attente persistante et playlists.
- Égaliseur 10 bandes, réverbération, compression dynamique, balance, hauteur et vitesse.
- Paroles synchronisées, visualiseur, fondu enchaîné de 12 secondes, minuteur.
- Widget d'écran d'accueil au flou avancé ; disponible sur F-Droid.

## Comment c'est branché
```mermaid
flowchart TD
    VM["MusicViewModel"] --> Provider["MusicProvider"]
    Provider --> Metadata["MetadataManager"]
    VM --> Playback["PlaybackManager"]
    Playback --> Queue["QueueManager"]
    Playback --> Service["MusicService"]
    Queue --> DB["MusicDatabase (Room)"]
    Widget["LuneWidgetProvider"] --> Service
```

## Essayer
```bash
git clone https://github.com/MrDemonc/Lune.git
cd Lune
./gradlew assembleRelease
```
Sinon, installer depuis F-Droid (lien du README).

## Coût et pièges
Gratuit. Pour compiler : JDK 17 ou plus, Android SDK 37, Gradle (wrapper fourni) et un fichier `keystore.properties` pour signer. Dons en Monero proposés.

## Ce que ce n'est pas
Pas un service de streaming : il ne lit que le stockage local. Licence GPL-3.0, contraignante pour les dérivés.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : application Android grand public, sans rapport avec ton travail data / IA.

