---
schema: 1
depot: norcalli/nvim-colorizer.lua
source_readme_sha: 86a9bf99ed17c1d5
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# norcalli/nvim-colorizer.lua

> Plugin Neovim qui colorie en direct les codes couleur (hex, noms, rgb) dans le texte.

## Le problème
Lire `#ff9900` ou `rgb(...)` dans un fichier sans voir la couleur oblige à la deviner.

## Ce que ça fait vraiment
Analyse le tampon avec un parseur écrit à la main en LuaJIT et un trie pour reconnaître les noms de couleurs, puis applique les surbrillances. Options : hex RGB, RRGGBB, noms, fonctions CSS, mode avant-plan ou arrière-plan. Sans dépendance externe.

## Comment c'est branché
```mermaid
flowchart TD
  A["plugin/colorizer.vim"] --> B["lua/colorizer.lua"]
  B --> C["lua/colorizer/trie.lua"]
  B --> D["lua/colorizer/nvim.lua"]
  F["doc/colorizer-lua.txt"] --> B
```

## Essayer
```lua
Plug 'norcalli/nvim-colorizer.lua'
require'colorizer'.setup()
```

## Coût et pièges
Gratuit. Requiert Neovim 0.4 ou plus et `termguicolors`. Dernier push en juillet 2024 : peu suivi.

## Ce que ce n'est pas
Pas compatible Vim classique : Neovim seulement, le README le dit. Pas de maintenance récente.

## Alternatives
hexokinase, cité dans le README comme performant mais parfois désynchronisé.

## Pour toi
Ignorer : cosmétique d'éditeur, et projet sans commit depuis 2024.

