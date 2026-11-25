---
schema: 1
depot: scalameta/nvim-metals
source_readme_sha: 6e2581bbefb3adc3
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# scalameta/nvim-metals

> Plugin Neovim en Lua qui branche le serveur de langage Scala Metals, pour développeurs Scala.

## Le problème
La configuration Metals fournie par nvim-lspconfig est minimale, sans commandes ni extensions propres à Metals.

## Ce que ça fait vraiment
Installe et met à jour Metals via Coursier, détermine la racine du projet, expose des commandes, un arbre de vue, le doctor et une extension Telescope. Intégrations avec nvim-dap et Telescope.

## Comment c'est branché
```mermaid
flowchart TD
  A["lua/metals.lua"] --> B["lua/metals/setup.lua"]
  B --> C["lua/metals/config.lua"]
  B --> D["lua/metals/install.lua"]
  C --> E["lua/metals/handlers.lua"]
  E --> F["lua/metals/commands.lua"]
  E --> G["lua/metals/tvp/init.lua"]
```

## Essayer
```bash
# Aucun shell : spécification lazy.nvim dans le README
# (ft = scala, sbt, java ; require("metals").initialize_or_attach(metals_config)).
```

## Coût et pièges
Neovim 0.11 ou plus et Coursier installé. Ne pas configurer Metals aussi via nvim-lspconfig. Un JDK est utile pour Metals, besoin non précisé.

## Ce que ce n'est pas
Pas un serveur de langage : il pilote Metals. Il ne touche pas aux autres langages.

## Alternatives
- nvim-lspconfig (configuration Metals minimale).

## Pour toi
À ignorer : réservé à Scala sous Neovim ; peu d'intérêt hors de cet usage.

