---
schema: 1
depot: stevearc/conform.nvim
source_readme_sha: 53b607a7784eb40d
ecrite_le: 2026-10-30
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# stevearc/conform.nvim

> Plugin Neovim de formatage de code qui préserve extmarks et plis, pour dizaines de formateurs.

## Le problème
La plupart des formateurs remplacent tout le buffer, ce qui casse extmarks, plis et position du curseur.

## Ce que ça fait vraiment
Calcule des diffs minimaux et les applique via les utilitaires LSP natifs. Fait du formatage par plage même sans support du formateur, corrige les serveurs LSP qui réécrivent tout le buffer, formate les blocs de code injectés (Markdown). Une longue liste de formateurs intégrés (black, ruff, prettier, stylua, sqlfluff...). Neovim 0.10+ requis.

## Comment c'est branché
```mermaid
flowchart LR
  A[conform.format] --> B[formatters_by_ft]
  B --> C[Formateur externe]
  B --> D[LSP fallback]
  C --> E[Diff minimal]
  E --> F[Buffer]
```

## Essayer
```lua
{ 'stevearc/conform.nvim', opts = {} }
require("conform").setup({ formatters_by_ft = { lua = { "stylua" }, python = { "isort", "black" } } })
```

## Coût et pièges
Gratuit ; chaque formateur doit être installé séparément. Réponse FAQ : pas de formateur « EslintFixAll » ni de code action.

## Ce que ce n'est pas
Pas un formateur lui-même : il pilote des outils externes.

## Alternatives
Aucune alternative nommée dans le README (sauf `vim.lsp.buf.format` comme modèle d'API).

## Pour toi
Surveiller : bon choix pour formater Python (ruff, black), SQL et YAML dans Neovim, si c'est ton éditeur.

