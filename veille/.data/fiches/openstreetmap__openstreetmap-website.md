---
schema: 1
depot: openstreetmap/openstreetmap-website
source_readme_sha: e3b2cb6dab62d52e
ecrite_le: 2026-10-27
nature: app
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# openstreetmap/openstreetmap-website

> Application Ruby on Rails qui fait tourner le site et l'API d'OpenStreetMap.

## Le problème
OpenStreetMap a besoin d'un site web, de comptes et d'une API d'édition pour des millions de contributeurs.

## Ce que ça fait vraiment
Comptes, journaux, messagerie, API d'édition XML/JSON, pages de navigation sur les données, envoi et consultation de traces GPX. Rails sur PostgreSQL ; tâches asynchrones d'import/destruction de traces ; éditeur iD intégré. Une installation complète dépend de serveurs de tuiles et de géocodage tiers, que l'installation par défaut remplace par des services publics.

## Comment c'est branché
```mermaid
flowchart TD
  A["Navigateur"] --> B["Rails Application"]
  B --> C["API Layer"]
  B --> D["PostgreSQL"]
  B --> E["Background jobs - traces"]
  B --> F["Tuiles / Geocodage externes"]
```

## Essayer
Aucune commande dans le README ; il renvoie à INSTALL.md.

## Coût et pièges
Gratuit ; nombreuses dépendances et services tiers à installer. 669 issues ouvertes.

## Ce que ce n'est pas
Pas un moteur de rendu de cartes ni un jeu de données : c'est le site web.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer, sauf si tu veux comprendre l'architecture d'un grand site Rails ; hors périmètre data/IA direct.

