---
schema: 1
depot: uimaxbai/tidal-ui
source_readme_sha: 923bfc38f88cfd4e
ecrite_le: 2026-10-30
nature: app
deploiement: docker
prerequis: [Docker, compte à créer]
cout: payant
maturite: expérimental
gouvernance: une personne
alertes: [licence copyleft, archivé, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# uimaxbai/tidal-ui

> Interface web de streaming musical haute fidélité SvelteKit, avec téléchargement FLAC, désormais en retrait.

## Le problème
Une interface alternative pour écouter et télécharger de la musique Tidal en haute résolution.

## Ce que ça fait vraiment
Application SvelteKit et Tailwind. Téléchargement FLAC jusqu'à 24 bits/192 kHz. Certaines requêtes passent par la route proxy `/api/proxy` pour éviter le CORS. Cache Redis déprécié. L'auteur annonce qu'il retire le projet au profit de Monochrome et que le dépôt sera archivé.

## Comment c'est branché
```mermaid
graph LR
  Navigateur --> SvelteKit
  SvelteKit --> Proxy[/api/proxy]
  Proxy --> API[API externe]
  SvelteKit --> Docker[docker compose]
```

## Essayer
```bash
cp .env.example .env
docker compose up --build
```

## Coût et pièges
Compte Tidal actif requis. Le dépôt est archivé et la licence MPL-2.0. Le README précise que le piratage est illégal dans la plupart des pays.

## Ce que ce n'est pas
Pas un outil maintenu : « It works (kinda) » dit le README lui-même.

## Alternatives
Monochrome, cité par l'auteur comme successeur.

## Pour toi
À ignorer : archivé, risque juridique, sans rapport avec data/IA.

