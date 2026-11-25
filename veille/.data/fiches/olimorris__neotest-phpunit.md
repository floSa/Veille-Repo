---
schema: 1
depot: olimorris/neotest-phpunit
source_readme_sha: 0768903257f84e97
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

# olimorris/neotest-phpunit

> Adaptateur Neovim pour lancer des tests PHPUnit depuis le framework Neotest.

## Le problème
Lancer un test PHPUnit depuis l'éditeur évite de basculer vers un terminal.

## Ce que ça fait vraiment
`init.lua` découvre les tests PHPUnit ; `config.lua` règle la commande (`vendor/bin/phpunit`), les fichiers racines, les dossiers filtrés et l'environnement. On lance une méthode, un fichier, un dossier ou toute la suite, et le débogage passe par nvim-dap avec Xdebug.

## Comment c'est branché
```mermaid
flowchart TD
  cfg["lua/neotest-phpunit/config.lua"] --> init["lua/neotest-phpunit/init.lua"]
  utl["lua/neotest-phpunit/utils.lua"] --> init
  init --> ut["tests/Examples/UserTest.php"]
  init --> unit["tests/Unit/ExampleTest.php"]
  ut --> user["src/User.php"]
  spec["specs/utils_spec.lua"] --> utl
```

## Essayer
```bash
# dans la configuration Neovim (lazy.nvim)
require("neotest").setup({ adapters = { require("neotest-phpunit") } })
```
```lua
require("neotest").run.run()
```

## Coût et pièges
Neovim, Neotest et un projet PHP avec PHPUnit. Le débogage demande nvim-dap, vscode-php-debug et Xdebug.

## Ce que ce n'est pas
Pas un exécuteur de tests autonome : il n'existe qu'à l'intérieur de Neotest. Pas compatible Pest sans réglage.

## Alternatives
Aucune alternative nommée dans le README (l'adaptateur Pest est évoqué sans nom de dépôt).

## Pour toi
À ignorer : extension Neovim pour PHP, sans lien avec la data ou l'IA.

