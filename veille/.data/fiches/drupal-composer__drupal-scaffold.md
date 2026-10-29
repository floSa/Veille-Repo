---
schema: 1
depot: drupal-composer/drupal-scaffold
source_readme_sha: 36c0a0e92c397231
ecrite_le: 2026-10-29
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence non déclarée, dernier commit ancien]
verdict: ignorer
---

# drupal-composer/drupal-scaffold

> Plugin Composer obsolète qui téléchargeait les fichiers scaffold de Drupal ; remplacé par drupal/core-composer-scaffold.

## Le problème
Un projet Drupal sous Composer doit récupérer `index.php`, `update.php` et d'autres fichiers du coeur.

## Ce que ça fait vraiment
Le plugin télécharge ces fichiers à chaque mise à jour de `drupal/core`, avec options `excludes`, `includes`, `initial`, `omit-defaults` dans `composer.json`. Le README commence par « DEPRECATED - DO NOT USE ».

## Comment c'est branché
```mermaid
flowchart LR
  A[composer update drupal/core] --> B[drupal-scaffold]
  B --> C[Source drupal.org]
  C --> D[Fichiers scaffold]
```

## Essayer
```bash
composer require drupal-composer/drupal-scaffold:dev-master
composer drupal:scaffold
```

## Coût et pièges
Gratuit mais déprécié, dernier push 2020, sans licence déclarée.

## Ce que ce n'est pas
Pas à utiliser pour un nouveau projet : le README est marqué « DEPRECATED - DO NOT USE ». Ce n'est pas non plus un outil de data ou d'IA, seulement un plugin Composer pour Drupal.

## Alternatives
drupal/core-composer-scaffold, recommandé par le README.

## Pour toi
À ignorer : déprécié par ses auteurs et sans rapport avec ton profil.

