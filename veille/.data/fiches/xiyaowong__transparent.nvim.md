---
schema: 1
depot: xiyaowong/transparent.nvim
source_readme_sha: 759302d7cdd6a4dc
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

# xiyaowong/transparent.nvim

> Plugin Neovim qui efface les couleurs de fond pour rendre l'éditeur transparent.

## Le problème
Les thèmes Neovim imposent un fond opaque qui masque l'image ou la couleur du terminal.

## Ce que ça fait vraiment
Il vide les groupes de surbrillance (Normal, Comment, LineNr, etc.) pour laisser voir le terminal. La liste peut être étendue ou réduite, y compris par fonction, et un préfixe entier peut être effacé pour les plugins d'interface. L'état est mis en cache et réappliqué au démarrage suivant.

## Comment c'est branché
```mermaid
flowchart TD
  PV["plugin/transparent.vim"] --> IN["lua/transparent/init.lua"]
  IN --> CF["lua/transparent/config.lua"]
  IN --> CA["lua/transparent/cache.lua"]
  CA --> IN
```

## Essayer
```lua
require("transparent").setup({ extra_groups = { "NormalFloat" } })
```
Commandes : `:TransparentEnable`, `:TransparentDisable`, `:TransparentToggle`.

## Coût et pièges
Gratuit. Éviter le chargement différé du plugin. Les fenêtres flottantes transparentes rendent mal.

## Ce que ce n'est pas
Pas un thème de couleurs : il ne fait que retirer les fonds. Ne règle pas la transparence du terminal lui-même.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : un gadget esthétique pour Neovim, sans effet sur ta productivité data / IA / MLOps.

