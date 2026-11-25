---
schema: 1
depot: WordPress/plugin-check
source_readme_sha: 2817c5a2dff2ea80
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# WordPress/plugin-check

> Extension WordPress qui analyse un autre plugin pour vérifier les règles du répertoire WordPress.org.

## Le problème
Un auteur de plugin ne sait pas à l'avance si son code respectera les exigences de WordPress.org.

## Ce que ça fait vraiment
Plugin Check analyse un plugin installé depuis l'écran Outils d'administration ou avec `wp plugin check`. Il enchaîne des contrôles statiques (PHP_CodeSniffer, expressions régulières) et d'exécution (hooks WordPress). Les développeurs ajoutent des contrôles via des classes de base et des interfaces.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  P["plugin.php"] --> M["Plugin_Main.php"]
  M --> C["Plugin_Check_Command.php"]
  M --> A["Admin_Page.php"]
  C --> R["Abstract_Check_Runner.php"]
  A --> R
  R --> D["Default_Check_Repository.php"]
```

## Essayer
```bash
wp plugin check hello.php
wp plugin check hello.php --require=./wp-content/plugins/plugin-check/cli.php
npm run wp-env start
npm run wp-env:start:tests
```

## Coût et pièges
Gratuit. Il faut un site WordPress ; déconseillé en production. Docker est requis pour l'environnement de développement intégré. Les contrôles d'exécution demandent un contournement avec WP-CLI.

## Ce que ce n'est pas
Ce n'est pas un scanner de sécurité complet. Il vérifie surtout la conformité au répertoire.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : ne sert qu'à publier des plugins WordPress, hors de ton domaine.

