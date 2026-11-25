---
schema: 1
depot: mawoka-myblock/ClassQuiz
source_readme_sha: ae0be7dacbdb7e05
ecrite_le: 2026-11-25
nature: app
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# mawoka-myblock/ClassQuiz

> Plateforme de quiz open source pour que des enseignants fassent jouer leurs élèves à distance.

## Le problème
Les outils de quiz interactifs populaires sont propriétaires, ce qui gêne l'usage éducatif.

## Ce que ça fait vraiment
Les enseignants créent des quiz joués en direct par les élèves. Backend FastAPI, ormar et python-socketio, frontend SvelteKit et TailwindCSS. S'appuie sur Postgres, Redis, Meilisearch, Caddy, un stockage local ou S3, plus Mapbox et hCaptcha (services fermés).

## Comment c'est branché
```mermaid
flowchart TD
  A["Navigateur"] --> B["Caddy"]
  B --> C["SvelteKit"]
  B --> D["FastAPI"]
  B --> E["Socket.IO"]
  D --> F["Postgres"]
  E --> G["Redis"]
  D --> H["Meilisearch"]
```

## Essayer
```bash
# Aucune commande dans le README : voir https://classquiz.de/docs/self-host
```

## Coût et pièges
Pile à héberger : Postgres, Redis, Meilisearch, Caddy. Dépend de Mapbox et hCaptcha. Une version hébergée existe sur classquiz.de (Allemagne).

## Ce que ce n'est pas
Pas un outil d'évaluation pédagogique avancé ; les instructions d'installation sont hors README.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Application éducative web sans enjeu data / IA : à ignorer.

