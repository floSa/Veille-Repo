---
schema: 1
depot: jqssun/android-airplay-server
source_readme_sha: 34aee1c85a27dba4
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

# jqssun/android-airplay-server

> Récepteur AirPlay pour Android et Android TV, basé sur UxPlay, qui transforme l'appareil en écran et enceinte.

## Le problème
Un appareil Android ne peut pas recevoir la recopie d'écran ou l'audio d'un iPhone, iPad ou Mac.

## Ce que ça fait vraiment
Il reçoit la recopie d'écran (H.264, H.265) et l'audio (AAC-ELD, AAC-LC, ALAC), lit les vidéos HLS et la musique avec pochettes. La partie protocole est en C (UxPlay) via JNI ; le décodage passe par MediaCodec. Les réglages se font aussi via ADB.

## Comment c'est branché
```mermaid
flowchart LR
  A["Appareil Apple (émetteur)"] --> B["UxPlay C/JNI: RAOP, mDNS, FairPlay, HLS"]
  B --> C["Android: MediaCodec, AudioTrack, ExoPlayer"]
```

## Essayer
```bash
git submodule update --init --recursive
./gradlew assembleDebug
```

## Coût et pièges
Gratuit. Les contenus protégés par DRM (application Apple TV) ne sont pas supportés. Les appareils doivent être sur le même sous-réseau.

## Ce que ce n'est pas
Pas affilié à Apple. Ce n'est pas un outil de data ou d'IA, juste un récepteur multimédia.

## Alternatives
- UxPlay : l'implémentation du protocole dont il dérive.

## Pour toi
Ignorer : utilitaire multimédia Android sans usage pour un travail data, IA ou MLOps.

