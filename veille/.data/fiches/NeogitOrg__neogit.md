---
schema: 1
depot: NeogitOrg/neogit
source_readme_sha: 2ff6ab243485ed90
ecrite_le: 2026-10-29
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: adopter
---

# NeogitOrg/neogit

> Interface Git pour Neovim inspirée de Magit, pour qui veut commiter sans quitter l'éditeur.

## Le problème
Enchaîner commandes Git et terminal coupe le flux dans Neovim.

## Ce que ça fait vraiment
Ouvre une vue d'état et des popups pour staging, commit, branches, stash, rebase, merge, push, pull, cherry-pick, bisect et worktrees. Offre des vues log, diff, refs, reflog et commit. S'intègre à diffview ou codediff, et à telescope, fzf-lua, mini.pick ou snacks. Émet des événements `Neogit*` et un hook `PreBranchCheckout`.

## Comment c'est branché
```mermaid
flowchart LR
  U[Utilisateur] --> N[Commande Neogit / API Lua]
  N --> V[Vues : status, log, diff]
  N --> P[Popups d'actions]
  P --> C[cli.lua + process.lua]
  C --> G[Dépôt Git]
```

## Essayer
```lua
-- spec lazy.nvim
{ "NeogitOrg/neogit", cmd = "Neogit",
  keys = { { "<leader>gg", "<cmd>Neogit<cr>", desc = "Show Neogit UI" } } }
```
```vim
:Neogit
```

## Coût et pièges
Gratuit. Dépendances optionnelles pour diffs et pickers. Le suivi de l'état peut coûter cher sur un gros dépôt : `auto_refresh` et `commit_order` se règlent.

## Ce que ce n'est pas
Pas un client Git graphique ni un clone complet de Magit. Diffs inline seulement, sauf avec diffview.

## Alternatives
Aucune alternative nommée dans le README (diffview.nvim est une dépendance).

## Pour toi
À adopter si Neovim est ton éditeur : Git sans quitter l'éditeur, MIT, bien configurable.

