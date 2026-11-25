---
schema: 1
depot: mesamirh/MovieBox-Tui
source_readme_sha: 34bbdb3393477d4c
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [service tiers]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# mesamirh/MovieBox-Tui

> Interface terminal en Rust pour chercher, télécharger et lire films, séries et télé en direct.

## Le problème
Parcourir plusieurs sources de streaming, choisir qualité et sous-titres, puis lancer un lecteur oblige à jongler entre sites.

## Ce que ça fait vraiment
Service central qui interroge des fournisseurs (MovieBox, 4KHDHub, BDIX, DhakaFlix), des addons Stremio et des listes M3U. Choix de résolution, sous-titres, téléchargement par segments avec reprise, lancement de mpv, VLC ou IINA, affichage d'affiches en Kitty/Sixel. Historique et favoris stockés en local, sans télémétrie selon le README.

## Comment c'est branché
Schéma d'après le diagramme du code.

```mermaid
flowchart TD
  A["TUI App"] --> B["Media Service"]
  B --> C["MovieBox Provider"]
  B --> D["Addon Aggregator"]
  B --> E["M3U Provider"]
  B --> F["Download Manager"]
  A --> G["Player Launcher"]
```

## Essayer
```bash
brew tap mesamirh/moviebox-tui https://github.com/mesamirh/MovieBox-Tui
brew install moviebox-tui
cargo install moviebox-tui --locked
moviebox-tui
```

## Coût et pièges
Gratuit, Apache-2.0. Dépend de sites tiers et de scrapers qui peuvent casser. Il faut un lecteur externe, et yt-dlp/ffmpeg pour certains téléchargements. L'installation par `curl | bash` est à lire avant exécution. Projet très récent.

## Ce que ce n'est pas
Pas un hébergeur de contenu : il lit des flux publics, mais la légalité dépend des sources utilisées et de ta juridiction.

## Alternatives
Aucune alternative nommée dans le README (il s'appuie sur des addons Stremio).

## Pour toi
À ignorer : client de streaming sans lien avec ton métier, avec un risque juridique lié aux sources.

