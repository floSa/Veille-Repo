---
schema: 1
depot: mackron/miniaudio
source_readme_sha: 3189aa9039ba073f
ecrite_le: 2026-10-29
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: surveiller
---

# mackron/miniaudio

> Bibliothèque C en un seul fichier pour lire et capturer de l'audio, pour développeurs d'applications natives.

## Le problème
Lire ou capturer du son sur chaque plateforme exige de gérer autant d'API différentes.

## Ce que ça fait vraiment
Un `miniaudio.c`/`.h` sans dépendance : API bas niveau (appareils, callbacks) et haut niveau (moteur, mixage, spatialisation 3D), décodage WAV/FLAC/MP3, encodage WAV, rééchantillonnage, graphe de nœuds. Backends WASAPI, ALSA, PulseAudio, Core Audio, AAudio, Web Audio, etc.

## Comment c'est branché
```mermaid
graph TD
  APP[Application] --> ENG[ma_engine]
  ENG --> DEC[ma_decoder]
  ENG --> NODE[Node graph]
  APP --> DEV[ma_device]
  DEV --> BE[Backends audio]
```

## Essayer
```bash
# compiler miniaudio.c comme un fichier source, inclure miniaudio.h
# Linux : lier -lpthread -lm
```

## Coût et pièges
Gratuit. ABI non garantie entre versions ; licence « domaine public ou MIT No Attribution » mais non identifiée par GitHub.

## Ce que ce n'est pas
Pas un outil de reconnaissance ni de traitement ML. Encodage limité à WAV.

## Alternatives
Aucune alternative nommée.

## Pour toi
Surveiller : brique utile pour de l'audio temps réel (voix, démos), seulement en C/C++.

