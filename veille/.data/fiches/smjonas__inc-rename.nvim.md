---
schema: 1
depot: smjonas/inc-rename.nvim
source_readme_sha: 6fff11544952632d
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# smjonas/inc-rename.nvim

> Petit plugin Neovim qui prévisualise en direct les renommages LSP pendant la saisie.

## Le problème
Un renommage LSP classique n'affiche rien avant validation, on ne sait pas ce qui change.

## Ce que ça fait vraiment
La commande `:IncRename` remplace les occurrences en direct grâce à la prévisualisation de commande de Neovim. Elle peut utiliser noice.nvim, dressing.nvim ou snacks.nvim pour la saisie. Avec `inccommand=split`, un tampon liste tous les identifiants touchés dans plusieurs fichiers.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  A["lua/inc_rename/init.lua"] --> B["lua/inc_rename/utils.lua"]
  C["tests/init_spec.lua"] --> A
  D["tests/utils_spec.lua"] --> B
  E["README.md"] --> A
```

## Essayer
```lua
-- lazy.nvim : { "smjonas/inc-rename.nvim", opts = {} }
vim.keymap.set("n", "<leader>rn", ":IncRename ")
```

## Coût et pièges
Gratuit. Neovim 0.8 ou plus et un LSP actif. Des conflits connus avec `traces.vim` et `custom-elements-languageserver`. Penser à `:wa` après un renommage multi-fichiers.

## Ce que ce n'est pas
Pas un moteur de refactoring : il utilise le renommage de ton serveur LSP.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller si tu refactores du Python dans Neovim : petit, utile, sans risque.

