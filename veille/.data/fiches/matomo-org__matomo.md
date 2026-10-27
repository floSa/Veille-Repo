---
schema: 1
depot: matomo-org/matomo
source_readme_sha: 7b7bdc9b5b3de252
ecrite_le: 2026-10-27
nature: app
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: surveiller
---

# matomo-org/matomo

> Plateforme d'analytics web auto-hébergée en PHP/MySQL, alternative libre à Google Analytics.

## Le problème
Mesurer le trafic de sites sans confier ses données à un tiers.

## Ce que ça fait vraiment
Un tag JavaScript envoie les visites ; le gestionnaire de suivi les traite (visites, objectifs, e-commerce) et les stocke en base. Les rapports sont archivés puis servis par une API et un tableau de bord personnalisable. Fonctions en plugins ; contrôles de confidentialité intégrés.

## Comment c'est branché
```mermaid
flowchart LR
  A[Tracked website] --> B[Tracking handler]
  B --> C[Visit processing]
  C --> D[Analytics database]
  D --> E[Report archives]
  E --> F[Analytics API]
  F --> G[Dashboard UI]
```

## Essayer
Installation en interface (README) : télécharger Matomo, l'envoyer sur le serveur web, ouvrir le dossier dans le navigateur et suivre les étapes, puis coller le tag JavaScript. Aucune commande.

## Coût et pièges
Serveur : PHP ≥ 8.1, MySQL ≥ 8.0 ou MariaDB ≥ 10.6. Offre cloud payante (essai 21 jours). Plus de 2 500 issues ouvertes.

## Ce que ce n'est pas
Pas un outil de BI générique : de l'analytics de sites web.

## Alternatives
Google Analytics (cité comme référence à remplacer).

## Pour toi
Surveiller : intéressant pour une source de données comportementales que tu possèdes, mais la plateforme reste de l'analytics web, pas du ML.

