---
schema: 1
depot: AzuraCast/AzuraCast
source_readme_sha: 2da15f3c8923a811
ecrite_le: 2026-10-27
nature: service
deploiement: docker
prerequis: [Docker, beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# AzuraCast/AzuraCast

> Suite auto-hébergée de gestion de webradio, distribuée en Docker, avec interface web et API.

## Le problème
Monter une webradio impose d'assembler à la main serveur de diffusion, automation des playlists et administration.

## Ce que ça fait vraiment
Backend PHP (Doctrine, MariaDB) et frontend Vue pilotent des stations : un AutoDJ construit les files d'attente, une couche génère la configuration Liquidsoap, Icecast diffuse. Files de messages, Redis, Centrifugo pour le temps réel, webhooks, stockage Flysystem (local, S3, SFTP…).

## Comment c'est branché
```mermaid
flowchart LR
  A[index.php] --> B[AppFactory.php]
  B --> C[Station.php + MariaDB]
  C --> D[Scheduler.php AutoDJ]
  D --> E[Liquidsoap ConfigWriter.php]
  E --> F[Liquidsoap / Icecast]
  B --> G[QueueManager.php]
```

## Essayer
Aucune commande dans le README : renvoi au guide d'installation en ligne (`docker-compose.sample.yml` existe dans l'arbre).

## Coût et pièges
Gratuit. Docker et un serveur Linux ; ligne de commande indispensable à l'installation. Le projet refuse les contributions assistées par IA.

## Ce que ce n'est pas
Pas un service hébergé : tu opères le serveur. Pas un outil data. Compte démo public non destiné à la production.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : mature et sérieux, mais c'est de la radio ; seul intérêt, un exemple d'empilement Docker multiservice.

