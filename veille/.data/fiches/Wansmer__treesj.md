---
schema: 1
depot: Wansmer/treesj
source_readme_sha: 62c7fe4b045474e1
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# Wansmer/treesj

> Plugin Neovim pour scinder ou joindre des blocs de code (tableaux, objets, instructions) via Tree-sitter.

## Le problème
Passer un tableau ou une liste d'arguments d'une ligne à plusieurs lignes, et inversement, se fait à la main et sans conscience de la syntaxe.

## Ce que ça fait vraiment
Détecte le nœud Tree-sitter sous le curseur, reconnaît le langage (y compris imbriqué) et le scinde ou le joint, récursivement si demandé, avec répétition par point. Des préréglages existent pour une quarantaine de langages (JavaScript, Python, Lua, Go, Rust, SQL, etc.) et se personnalisent par fonctions.

## Comment c'est branché
```mermaid
flowchart TD
  A["lua/treesj/init.lua"] --> B["settings.lua"]
  A --> C["search.lua"]
  C --> D["treesj/init.lua"]
  D --> E["format.lua"]
  D --> F["chold/init.lua"]
  C --> G["langs/init.lua"]
```

## Essayer
```lua
return {
  'Wansmer/treesj',
  keys = { '<space>m', '<space>j', '<space>s' },
  dependencies = { 'nvim-treesitter/nvim-treesitter' },
  config = function()
    require('treesj').setup({})
  end,
}
```
Commandes : `:TSJToggle`, `:TSJSplit`, `:TSJJoin`.

## Coût et pièges
Gratuit. Neovim 0.9 ou plus ; nvim-treesitter est optionnel si les parsers sont installés autrement. Un nœud avec erreur de syntaxe n'est pas formaté.

## Ce que ce n'est pas
Pas un formateur général : il ne met pas le code en forme hors scission ou jointure. Le README tronqué ne détaille pas la fin des options.

## Alternatives
- splitjoin.vim : fonctionnalité d'origine, utilisable en repli.

## Pour toi
Ignorer : confort d'édition pour utilisateurs de Neovim, sans lien avec un travail data, IA ou MLOps.

