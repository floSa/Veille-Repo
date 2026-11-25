---
schema: 1
depot: marko-cerovac/material.nvim
source_readme_sha: 597320f7d1bc0e2b
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# marko-cerovac/material.nvim

> Thème de couleurs Neovim inspiré du thème Material, avec cinq styles.

## Le problème
Les thèmes anciens gèrent mal le LSP et Treesitter de Neovim.

## Ce que ça fait vraiment
Cinq styles (oceanic, deep ocean, palenight, lighter, darker), support de nombreux plugins, fonds distincts pour barres latérales, chargement asynchrone des surbrillances et bascule de style à chaud. Deux thèmes lualine et un sélecteur Telescope. Le tout se règle par `setup`.

## Comment c'est branché
```mermaid
flowchart TD
  CM["colors/material.lua"] --> IN["lua/material/init.lua"]
  IN --> CF["util/config.lua"]
  IN --> CO["colors/init.lua"]
  IN --> HI["highlights/init.lua"]
  HI --> HP["highlights/plugins/init.lua"]
```

## Essayer
```lua
vim.g.material_style = "deep ocean"
vim.cmd 'colorscheme material'
```

## Coût et pièges
Gratuit. Neovim 0.7 ou plus. Charger le thème après lualine, sinon le thème intégré de lualine prend le dessus.

## Ce que ce n'est pas
Pas un thème qui rend l'éditeur transparent, même si l'option `disable.background` permet de reprendre le fond du terminal.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : simple thème de couleurs, sans effet sur ton travail data / IA / MLOps.

