---
schema: 1
depot: kepano/flexoki
source_readme_sha: a0f3dd14202c3e8b
ecrite_le: 2026-10-27
nature: dataset
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# kepano/flexoki

> Palette de couleurs claire/sombre inspirée de l'encre et du papier, avec de nombreux portages.

## Le problème
Les thèmes d'éditeur et de terminal sont souvent trop contrastés ou incohérents entre applications.

## Ce que ça fait vraiment
Définit une palette (papier, bases 50 à 950, huit teintes d'accent) en versions standard et étendue, avec valeurs hex et RGB. Un générateur écrit des thèmes iTerm2 et un terrain de jeu navigateur teste la palette. Portages communautaires pour des dizaines d'applications (Neovim, VS Code, Alacritty, Tailwind, GIMP, Matplotlib, R).

## Comment c'est branché
```mermaid
flowchart LR
  A["palette.ts"] --> B["color.ts"]
  B --> C["index.ts"]
  C --> D["iterm2.ts"]
  A --> E["playground.js"]
  A --> F["flexoki.css"]
  A --> G[Ports applications]
```

## Essayer
Aucune commande dans le README : la documentation en ligne explique comment appliquer les couleurs.

## Coût et pièges
Gratuit. Les portages sont maintenus par des tiers et de qualité inégale. Dernier push le 2026-03-07.

## Ce que ce n'est pas
Pas un outil de visualisation de données. Pas une garantie d'accessibilité : le README ne revendique aucun test de contraste.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : le portage Python/Matplotlib et R donne une palette cohérente pour tes graphiques et ton éditeur, sans coût.

