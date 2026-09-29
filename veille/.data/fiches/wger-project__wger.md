---
schema: 1
depot: wger-project/wger
source_readme_sha: 11b4826a7357eabd
ecrite_le: 2026-09-29
nature: app
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# wger-project/wger

> Gestionnaire libre d'entraînement et de nutrition, auto-hébergeable, avec applications mobiles.

## Le problème
Suivre programmes d'entraînement, poids, mesures et calories sans confier ses données à un service fermé.

## Ce que ça fait vraiment
Application Django : routines avec progression automatique, suivi du poids et des mesures, journal alimentaire adossé à Open Food Facts, galerie de progression, wiki d'exercices, gestion basique de salle de sport, API REST. Tâches asynchrones via Celery, front React, images Docker de production.

## Comment c'est branché
```mermaid
graph LR
  A["Web React et apps mobiles"] --> B["REST API"]
  B --> C["Django core"]
  C --> D["Exercises Nutrition Weight Manager"]
  C --> E["Celery Workers"]
  D --> F["Open Food Facts"]
  C --> G["Base de données"]
```

## Essayer
```bash
docker compose up -d
```

## Coût et pièges
Gratuit ; auto-hébergement par Docker Compose (la documentation détaillée est en ligne). Licence AGPL-3.0 : les modifications servies en réseau doivent être publiées.

## Ce que ce n'est pas
Pas un outil de santé médical : c'est un journal de suivi personnel.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : application de fitness auto-hébergée, hors du périmètre data/IA/MLOps, sauf si tu veux un exemple de projet Django complet.

