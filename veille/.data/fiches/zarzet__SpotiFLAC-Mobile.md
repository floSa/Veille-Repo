---
schema: 1
depot: zarzet/SpotiFLAC-Mobile
source_readme_sha: bb4f92adb0171c7d
ecrite_le: 2026-10-30
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# zarzet/SpotiFLAC-Mobile

> Application mobile (nom d'affichage Mornye) pour télécharger, organiser et lire sa musique, avec extensions.

## Le problème
Un lecteur et gestionnaire de bibliothèque musicale qui télécharge via des extensions et lit en haute qualité.

## Ce que ça fait vraiment
Lecteur Android et iOS avec lecture USB bit-perfect, égaliseur, ReplayGain, paroles synchronisées, bibliothèque locale, sources réseau (SMB, WebDAV, Subsonic). Les téléchargements passent par des extensions de dépôts communautaires (`registry.json`). Interface Flutter/Dart, backend Rust, ponts plateformes.

## Comment c'est branché
```mermaid
flowchart LR
  A[UI Flutter/Dart] --> B[Backend Rust]
  A --> C[Ponts Android / iOS]
  B --> D[Extensions communautaires]
  A --> E[Bibliothèque locale / réseau]
```

## Essayer
```
Source AltStore/SideStore :
https://raw.githubusercontent.com/mornyeapp/Mornye/refs/heads/main/apps.json
```

## Coût et pièges
Gratuit. Disponibilité selon pays (VPN suggéré par la FAQ). Le mainteneur précise que le dépôt n'héberge aucun contenu protégé.

## Ce que ce n'est pas
Pas affilié aux services de streaming. Pas un projet data. Responsabilité légale des usages laissée à l'utilisateur (voir la section Disclaimer).

## Alternatives
Aucune alternative nommée.

## Pour toi
Ignorer : application grand public sans rapport avec ton métier, avec un risque de conformité sur les téléchargements.

