---
schema: 1
depot: suitenumerique/docs
source_readme_sha: 27fa1bf1a2c3ee21
ecrite_le: 2026-11-12
nature: app
deploiement: docker
prerequis: [Docker, Node]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# suitenumerique/docs

> Éditeur collaboratif auto-hébergeable, alternative à Notion et Google Docs, porté par les États français et allemand.

## Le problème
Les équipes et administrations veulent de l'édition collaborative en temps réel sans confier leurs documents à un SaaS étranger.

## Ce que ça fait vraiment
Édition riche et Markdown, curseurs en direct, commentaires, droits d'accès fins, sous-pages, mode hors ligne, présentations, import `.docx`/`.md`, export `.docx`/`.odt`/`.pdf`. Fonctions IA optionnelles, agnostiques du modèle (une clé d'API et une URL). API serveur à serveur pour intégrer par exemple les transcriptions de Meet. Architecture : backend Django REST, frontend Next.js avec BlockNote, serveur temps réel Yjs.

## Comment c'est branché
```mermaid
flowchart TD
  U["User (Browser)"] --> FE["Docs Frontend (Next.js + BlockNote.js)"]
  FE -->|REST| BE["Docs Backend (Django + DRF)"]
  FE -->|WebSocket| RT["Real-Time Collaboration Server (y-provider)"]
  BE --> DB["PostgreSQL Database"]
  BE --> OS["Object Storage (Minio/S3)"]
```

## Essayer
```bash
make bootstrap FLUSH_ARGS='--no-input'
make run
make demo
```

## Coût et pièges
Docker, Docker Compose et GNU Make requis. L'export PDF s'appuie sur des paquets BlockNote XL sous GPL, non compatibles MIT ; la construction avec `PUBLISH_AS_MIT=true` les retire.

## Ce que ce n'est pas
Pas un outil léger : il faut PostgreSQL, un stockage objet et un serveur temps réel. Identifiants par défaut (impress/impress) réservés au développement.

## Alternatives
Notion et Google Docs sont cités comme références à remplacer.

## Pour toi
À surveiller : intéressant pour une base de connaissances souveraine, mais vérifie la question GPL avant toute redistribution.

