---
schema: 1
depot: ZhFahim/anchor
source_readme_sha: eef5ebde49fcd8a6
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# ZhFahim/anchor

> Application de notes hors ligne d'abord, auto-hébergeable, avec clients mobile et web.

## Le problème
Les apps de notes grand public stockent tes données chez un tiers et marchent mal sans réseau.

## Ce que ça fait vraiment
Éditeur riche, étiquettes, pièces jointes, rappels, historique, partage entre utilisateurs, corbeille. Les notes sont locales et synchronisées au retour du réseau. Import Google Keep et Markdown, export zip, authentification OIDC, panneau d'administration.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  MOB["App mobile Flutter"] --> API["Serveur Nest.js"]
  WEB["Web Next.js"] --> API
  API --> PG[("PostgreSQL via Prisma")]
  API --> DATA[("Volume /data")]
  API --> OIDC["Fournisseur OIDC"]
```

## Essayer
```bash
docker compose up -d
```
Avec un `docker-compose.yml` utilisant `ghcr.io/zhfahim/anchor:latest` (port 3000), puis ouvrir `http://localhost:3000`.

## Coût et pièges
Gratuit. Une base Postgres embarquée par défaut, ou externe via `PG_*`. Sauvegarde manuelle par export zip. L'image `next` est instable. iOS : bêta TestFlight.

## Ce que ce n'est pas
Pas un service hébergé. Pas de chiffrement de bout en bout annoncé. Licence AGPL : à vérifier si tu l'intègres à un service.

## Alternatives
Aucune alternative nommée dans le README, hormis Google Keep comme source d'import.

## Pour toi
À ignorer pour ton métier : bonne appli de notes perso auto-hébergée, mais hors de la veille data / IA / MLOps.

