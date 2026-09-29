---
schema: 1
depot: pterodactyl/wings
source_readme_sha: 1a127c7b00b52895
ecrite_le: 2026-09-29
nature: service
deploiement: binaire
prerequis: [Docker, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# pterodactyl/wings

> Démon de contrôle de serveurs de jeu de Pterodactyl, avec API HTTP et SFTP intégré.

## Le problème
Un panneau d'hébergement de serveurs de jeu a besoin d'un agent sur chaque machine pour piloter les conteneurs.

## Ce que ça fait vraiment
Expose une API HTTP pour agir sur les serveurs (cycle de vie, logs, sauvegardes), un WebSocket, un SFTP intégré avec les mêmes identifiants que le panel. D'après le schéma généré : pilote Docker, système de fichiers, sauvegardes locales ou S3, transferts, événements. Les issues se déposent sur le dépôt pterodactyl/panel.

## Comment c'est branché
```mermaid
flowchart LR
  P["Panel API"] --> H["HTTP API Server"]
  H --> S["Server Manager"]
  S --> D["Docker Environment Manager"]
  S --> F["File System Handler"]
  F --> B["Backup System (local / S3)"]
  H --> W["WebSocket + SFTP"]
```

## Essayer
Aucune commande dans le README ; installation via la documentation Wings (lien).

## Coût et pièges
Nécessite le panel Pterodactyl et Docker. Les sauvegardes S3 sont un service tiers. Aucun prérequis GPU ou API.

## Ce que ce n'est pas
Pas utilisable seul : c'est l'agent du panel Pterodactyl. Ce n'est pas un outil data ou IA.

## Alternatives
Le README ne cite aucune alternative.

## Pour toi
À ignorer : hébergement de serveurs de jeu, sans rapport avec un profil data/IA/MLOps.
