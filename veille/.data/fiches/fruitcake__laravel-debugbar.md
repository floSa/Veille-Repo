---
schema: 1
depot: fruitcake/laravel-debugbar
source_readme_sha: e18c853a8a51a6c8
ecrite_le: 2026-10-27
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# fruitcake/laravel-debugbar

> Barre de débogage pour applications Laravel : requêtes SQL, vues, logs, timing, mémoire.

## Le problème
Comprendre pourquoi une page Laravel est lente ou ce qu'elle exécute oblige à ajouter des `dump` partout.

## Ce que ça fait vraiment
Un ServiceProvider injecte une barre dans la réponse HTML ; des collecteurs capturent requêtes (avec bindings et durée), routes, vues, événements, logs, mails, cache, mémoire, exceptions. Les requêtes précédentes sont stockées et consultables ; un « explain » des requêtes est proposé. Façade `Debugbar` pour messages et mesures, extensions Twig, vues Clockwork/Telescope optionnelles.

## Comment c'est branché
```mermaid
flowchart LR
  A["Laravel Application"] --> B["Service Provider"]
  B --> C["Debugbar Middleware"]
  C --> D["Collector Providers"]
  D --> E["Request Storage"]
  E --> F["Debug Toolbar widget.js"]
```

## Essayer
```shell
composer require fruitcake/laravel-debugbar --dev
php artisan vendor:publish --provider='Fruitcake\LaravelDebugbar\ServiceProvider'
```

## Coût et pièges
Gratuit. Le README avertit : développement uniquement ; la barre fuit des informations de requêtes par conception et ralentit l'application. Actif quand `APP_DEBUG=true` hors production.

## Ce que ce n'est pas
Pas un outil d'observabilité de production ni un profileur distribué.

## Alternatives
Clockwork et Telescope, mentionnés comme vues optionnelles.

## Pour toi
Sans intérêt hors écosystème PHP/Laravel : à ignorer.

