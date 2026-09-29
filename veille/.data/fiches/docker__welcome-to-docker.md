---
schema: 1
depot: docker/welcome-to-docker
source_readme_sha: e34063bb32b5e455
ecrite_le: 2026-09-29
nature: app
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée, matière insuffisante]
verdict: ignorer
---

# docker/welcome-to-docker

> Petite application React de démonstration servie dans un conteneur, pour débuter avec Docker.

## Le problème
Un débutant Docker a besoin d'un premier conteneur qui affiche quelque chose dans le navigateur.

## Ce que ça fait vraiment
README minimal (moins de 800 caractères). Il donne une commande `docker run` qui expose le port 8088 et une procédure de build local. D'après le code, c'est une SPA React (App.js, Confetti.js) servie en statique, sans backend.

## Comment c'est branché
```mermaid
flowchart LR
  A["src/ (App.js, Confetti.js)"] --> B["Build Stage (npm install & npm run build)"]
  B --> C["Dockerfile"]
  C --> D["Docker Image"]
  D --> E["Container Runtime (Web Server)"]
  E --> F["Browser"]
```

## Essayer
```bash
docker run -d -p 8088:80 --name welcome-to-docker docker/welcome-to-docker
docker build -t welcome-to-docker .
docker run -d -p 8088:3000 --name welcome-to-docker welcome-to-docker
```

## Coût et pièges
Rien à payer ; il faut Docker. Le port du conteneur diffère entre l'image publiée (80) et le build local (3000).

## Ce que ce n'est pas
Ni un tutoriel détaillé ni un modèle d'application : le README renvoie à MAINTAINERS.md pour la maintenance. Aucune licence déclarée au catalogue.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : c'est une démo d'accueil de Docker, sans valeur pour un profil data / IA, et sans licence explicite.
