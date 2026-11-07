---
schema: 1
depot: staniel359/muffon
source_readme_sha: 1bd2d048b862708a
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# staniel359/muffon

> Un client de musique de bureau qui agrège plusieurs sources de streaming pour découvrir et organiser sa musique.

## Le problème
Écouter et explorer de la musique répartie sur plusieurs services oblige à jongler entre applications.

## Ce que ça fait vraiment
Application Electron et Vue pour Windows, macOS et Linux. Elle récupère audio, vidéo et métadonnées depuis Last.fm, Bandcamp, Deezer, SoundCloud, YouTube Music, Genius, Discogs et d'autres. Fonctions : file d'attente, bibliothèque, playlists, recommandations, scrobbling Last.fm, Discord Rich Presence, paroles. Spotify et Yandex Music sont notés comme hors service.

## Comment c'est branché
```mermaid
flowchart TD
  A["Electron main"] --> B["IPC"]
  B --> C["Vue renderer"]
  C --> D["stores player.js et queue.js"]
  C --> E["helpers/actions/api"]
  E --> F["Sources musicales externes"]
```

## Essayer
```bash
xattr -d com.apple.quarantine /Applications/muffon.app
```
Cette commande sert seulement sous macOS après installation du binaire depuis les releases.

## Coût et pièges
Gratuit, mais dépend de services tiers dont certains ne fonctionnent plus. Applications non signées : avertissements Windows et macOS à contourner.

## Ce que ce n'est pas
Pas un outil de téléchargement ni de piratage : le README l'exclut. Les contributions faites avec de l'IA sont refusées par l'équipe.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : lecteur de musique grand public, sans lien avec un travail data, IA ou MLOps, et dépendant de sources externes instables.

