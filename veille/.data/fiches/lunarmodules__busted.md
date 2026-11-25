---
schema: 1
depot: lunarmodules/busted
source_readme_sha: 2837dcdd27ddc143
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# lunarmodules/busted

> Framework de tests unitaires pour Lua, LuaJIT et MoonScript, à la syntaxe describe/it.

## Le problème
Tester du code Lua sans framework oblige à écrire ses propres assertions, mocks et rapports.

## Ce que ça fait vraiment
bin/busted délègue à runner.lua, qui lit la ligne de commande et la configuration, charge les fichiers de spécification, puis core.lua exécute les blocs describe et it dans un environnement dédié. Assertions enchaînables, mocks et spies, balises pour sélectionner des tests, sorties terminal, JSON, JUnit et TAP.

## Comment c'est branché
```mermaid
flowchart TD
  A["bin/busted"] --> B["busted/runner.lua"]
  B --> C["busted/modules/cli.lua"]
  C --> D["busted/modules/configuration_loader.lua"]
  D --> E["busted/modules/test_file_loader.lua"]
  E --> F["busted/core.lua"]
  F --> I["busted/outputHandlers/base.lua"]
  I --> K["busted/outputHandlers/junit.lua"]
```

## Essayer
```bash
luarocks remove busted --force
luarocks make
busted spec
```
```bash
docker pull ghcr.io/lunarmodules/busted:latest
docker run -v "$(pwd):/data" ghcr.io/lunarmodules/busted:latest
```

## Coût et pièges
Gratuit. Il faut Lua (5.1+ ou LuaJIT 2.0+) et luarocks ; l'image Docker, basée sur Alpine, est limitée si le projet a des dépendances système.

## Ce que ce n'est pas
Ce n'est pas un outil de test générique : il ne teste que du Lua.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utile seulement si tu écris du Lua (par exemple Neovim), pas pour des pipelines Python.

