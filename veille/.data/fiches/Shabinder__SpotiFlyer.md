---
schema: 1
depot: Shabinder/SpotiFlyer
source_readme_sha: 37acda21e7fb305c
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# Shabinder/SpotiFlyer

> Téléchargeur de musique Kotlin multiplateforme pour Spotify, YouTube, Gaana, JioSaavn et SoundCloud.

## Le problème
Réécouter des playlists en streaming consomme des données et dépend du réseau.

## Ce que ça fait vraiment
Retrouve les morceaux d'albums et de playlists via YouTube Music ou JioSaavn, puis les télécharge. Android, bureau et web (bêta). Analytique et rapports d'erreurs sont optionnels, désactivés par défaut et auto-hébergés.

## Comment c'est branché
Architecture non documentée dans le README fourni.
```mermaid
flowchart TD
  U(("Utilisateur")) --> A["App Kotlin Multiplatform"]
  A --> S["Spotify, Gaana, SoundCloud"]
  A --> Y["YouTube Music, JioSaavn"]
  A --> F[("Fichiers téléchargés")]
```

## Essayer
```bash
# Installation par paquets de la page Releases (APK, MSI, DEB, JAR)
# JAR : nécessite Java installé
```

## Coût et pièges
Gratuit. Dernier push le 2024-10-06 ; le README annonce que SpotiFlyer ne recevra plus de mises à jour au profit de Soundbound. Le fonctionnement dépend de la disponibilité de YouTube Music ou JioSaavn dans ton pays.

## Ce que ce n'est pas
Pas maintenu. Le README avertit que télécharger de la musique protégée peut être illégal. Licence GPL-3.0.

## Alternatives
- Soundbound : successeur annoncé par l'auteur.

## Pour toi
Ignorer : projet arrêté, risque juridique, aucun rapport avec un travail data ou IA.

