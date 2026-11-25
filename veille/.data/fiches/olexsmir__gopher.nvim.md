---
schema: 1
depot: olexsmir/gopher.nvim
source_readme_sha: 82265b7e6cc9856e
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# olexsmir/gopher.nvim

> Plugin Neovim minimaliste en Lua qui ajoute des commandes d'outillage Go : tags, tests, impl, iferr.

## Le problème
Les outils Go (`gomodifytags`, `gotests`, `impl`, `iferr`) s'utilisent en ligne de commande, hors de l'éditeur.

## Ce que ça fait vraiment
Expose des commandes comme `:GoTagAdd`, `:GoTestAdd`, `:GoImpl`, `:GoIfErr`, `:GoJson` (JSON vers structure Go), `:GoNew`, `:GoGet`, `:GoMod`. `_utils/runner.lua` exécute les outils externes, installés par `:GoInstallDeps`. Ce n'est pas un outil LSP.

## Comment c'est branché
```mermaid
flowchart TD
  P["plugin/gopher.lua"] --> I["lua/gopher/init.lua"]
  I --> T["struct_tags.lua"]
  I --> G["gotests.lua"]
  I --> M["impl.lua"]
  I --> E["iferr.lua"]
  T --> R["_utils/runner.lua"]
```

## Essayer
```bash
# init.lua :
# vim.pack.add { "https://github.com/olexsmir/gopher.nvim" }
# require("gopher").setup {}
:GoInstallDeps
:GoTagAdd json
:GoImpl io.Reader
```

## Coût et pièges
Neovim 0.10+, Go, parseur tree-sitter `go`. Le développement des fonctions nouvelles se fait sur la branche `develop`.

## Ce que ce n'est pas
Pas un serveur de langage, ni un remplaçant de `gopls`.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : utile à qui code en Go sous Neovim, hors de ton périmètre.

