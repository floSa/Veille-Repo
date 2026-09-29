---
schema: 1
depot: TheWidlarzGroup/react-native-video
source_readme_sha: 4fd0ff3b6f085893
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: npm
prerequis: [Node, service tiers]
cout: freemium
maturite: expérimental
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# TheWidlarzGroup/react-native-video

> Composant lecteur vidéo pour React Native : HLS/DASH, DRM, lecture hors ligne.

## Le problème
Lire des vidéos en streaming avec DRM sur iOS et Android depuis React Native demande du natif sur mesure.

## Ce que ça fait vraiment
Fournit `useVideoPlayer` et `VideoView`, lit HLS, DASH et SmoothStreaming, gère Widevine/FairPlay, Picture-in-Picture, plugin Expo. La v7 (bêta) repose sur `react-native-nitro-modules` et la nouvelle architecture RN. Le code décrit ExoPlayer (Android), AVFoundation (iOS).

## Comment c'est branché
```mermaid
graph LR
  J[Video.tsx / useVideoPlayer] --> B[Pont React Native]
  B --> A[Android: ExoPlayer]
  B --> I[iOS: AVFoundation]
  I --> D[DRMManager.swift]
  A --> S[Serveurs de licence DRM]
```

## Essayer
```bash
npm install react-native-nitro-modules
npm install react-native-video@beta
cd ios && pod install
```

## Coût et pièges
Gratuit ; l'éditeur vend du support, un SDK hors ligne et des boilerplates. La v7 change souvent ; TV et VisionOS non faits.

## Ce que ce n'est pas
Pas un service de streaming : il ne fournit ni hébergement ni serveur de licences.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : composant mobile hors du périmètre data/IA/MLOps.

