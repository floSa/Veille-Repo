---
schema: 1
depot: ddddxxx/LyricsX
source_readme_sha: fc09ffc873f01037
ecrite_le: 2026-09-29
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# ddddxxx/LyricsX

> Application macOS qui affiche les paroles synchronisées de la musique en cours dans un lecteur.

## Le problème
Suivre les paroles d'un morceau sans ouvrir une page web à côté du lecteur.

## Ce que ça fait vraiment
Se branche sur des lecteurs de musique, recherche et télécharge des paroles chronométrées depuis des sources en ligne, les affiche sur le bureau, la barre de menus et la Touch Bar. Décalage réglable, saut par double clic, import/export par glisser-déposer, format LRCX (compatible LRC), conversion chinois traditionnel/simplifié. Versions iOS et Linux « en début de développement ».

## Comment c'est branché
```mermaid
flowchart LR
  A["MusicPlayer (lecteur)"] --> B["AppController"]
  B --> C["LyricsKit (sources de paroles)"]
  C --> D["Lyrics HUD (bureau)"]
  C --> E["Menu bar lyrics"]
  C --> F["Touch Bar lyrics"]
```

## Essayer
```bash
brew install --cask lyricsx
```

## Coût et pièges
Gratuit. macOS 10.11 minimum. Les paroles appartiennent à leurs détenteurs de droits (avertissement du README).

## Ce que ce n'est pas
Pas un lecteur de musique ni un éditeur LRCX : aucun éditeur officiel n'existe.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : application grand public macOS sans lien avec la donnée, l'IA ou le MLOps.

