# Bekaboo/dropbar.nvim

> IDE-style breadcrumb bar for Neovim, with drop-down menus and several symbol sources.

## The problem
In Neovim, knowing where you are in a large file (class, function, heading) and navigating it remains impractical.

## What it actually does
plugin/dropbar.lua loads the main module, which applies configs.lua and builds the winbar in bar.lua. The latter queries sources (LSP, Tree-sitter, path, Markdown, terminal) in cascade and opens drop-down menus by mouse or keyboard, with optional fuzzy search (fzf). No mandatory dependency.

## How it is wired
```mermaid
flowchart TD
  A["plugin/dropbar.lua"] --> B["lua/dropbar.lua"]
  B --> C["lua/dropbar/configs.lua"]
  C --> D["lua/dropbar/bar.lua"]
  D --> G["lua/dropbar/sources/lsp.lua"]
  D --> H["lua/dropbar/sources/treesitter.lua"]
  D --> E["lua/dropbar/menu.lua"]
  K["lua/dropbar/utils/fzf.lua"] --> E
```

## Trying it
```lua
require('lazy').setup({
  {
    'Bekaboo/dropbar.nvim',
    dependencies = { 'nvim-telescope/telescope-fzf-native.nvim', build = 'make' },
  }
})
```

## Cost and gotchas
Free, GPL-3.0. Requires Neovim 0.11+; a language server or a Tree-sitter parser must be installed for the symbols.

## What it is not
Not a file explorer nor an LSP: it displays the symbols that other components provide.

## Alternatives
No alternative named in the README.

## For you
Worth watching: pleasant if you navigate large Python files in Neovim, incidental otherwise.
