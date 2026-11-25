---
schema: 1
depot: DNLHC/glance.nvim
source_readme_sha: fd0df0e875df94b3
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

# DNLHC/glance.nvim

> Plugin Neovim qui ouvre un aperçu éditable des définitions et références LSP, comme VSCode.

## Le problème
Aller à une définition ou une référence fait quitter le fichier courant et perdre le contexte.

## Ce que ça fait vraiment
Affiche dans une fenêtre flottante ou intégrée les définitions, types, références et implémentations fournis par le LSP. On peut y éditer, ouvrir en split ou onglet, ou envoyer tout au quickfix. Prend en charge des méthodes LSP personnalisées et des hooks.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  A["plugin/glance.lua"] --> B["lua/glance/init.lua"]
  B --> D["lua/glance/lsp.lua"]
  D --> E["lua/glance/list.lua"]
  E --> F["lua/glance/renderer.lua"]
  F --> G["lua/glance/preview.lua"]
```

## Essayer
```bash
# lazy.nvim : { 'dnlhc/glance.nvim', cmd = 'Glance' }
# puis dans Neovim :
:Glance definitions
:Glance references
```

## Coût et pièges
Gratuit. Demande Neovim 0.9 ou plus et un client LSP configuré ; l'option de contexte requiert Neovim 0.10.

## Ce que ce n'est pas
Pas un serveur LSP : il affiche ce que ton LSP fournit. Pas de configuration utile sans LSP actif.

## Alternatives
- nvim-telescope/telescope.nvim
- glepnir/lspsaga.nvim
- rmagatti/goto-preview

## Pour toi
À surveiller si tu codes Python dans Neovim : il rend la navigation LSP plus confortable, sans lien avec l'IA elle-même.

