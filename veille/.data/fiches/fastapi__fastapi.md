---
schema: 1
depot: fastapi/fastapi
source_readme_sha: 63efc8b172d4ec8d
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# fastapi/fastapi

> Framework Python pour construire des API web à partir des annotations de types, avec documentation automatique.

## Le problème
Écrire une API demande de valider les entrées, convertir les types et maintenir une documentation, le tout à la main.

## Ce que ça fait vraiment
On déclare des routes avec des fonctions Python annotées ; FastAPI valide les paramètres (chemin, requête, corps, en-têtes, cookies, formulaires, fichiers), convertit les données, injecte les dépendances, sérialise la réponse et génère un schéma OpenAPI avec deux interfaces de documentation (Swagger UI, ReDoc). Il s'appuie sur Starlette (web) et Pydantic (données), avec WebSockets, SSE et tâches de fond.

## Comment c'est branché
```mermaid
flowchart LR
  C["Client HTTP"] --> A["FastAPI app (applications.py)"]
  A --> M["Middleware stack"]
  M --> R["Route dispatch (routing.py)"]
  R --> D["Dependency solving (utils.py)"]
  D --> E["User endpoint"]
  E --> S["Response encoding (encoders.py)"]
```

## Essayer
```bash
uv add "fastapi[standard]"
uv run fastapi dev
uv run fastapi deploy
```
Le fichier `main.py` de l'exemple (`FastAPI()` et deux routes `@app.get`) est dans le README.

## Coût et pièges
Gratuit. `fastapi deploy` envoie l'application vers FastAPI Cloud, service de la même équipe, optionnel ; on peut déployer ailleurs. Les chiffres de gain de productivité du README viennent d'une estimation interne, non vérifiable.

## Ce que ce n'est pas
Ni un ORM ni un serveur : il faut Uvicorn (fourni par l'extra `standard`) et, pour la persistance, une autre bibliothèque. Pas de front-end.

## Alternatives
- Typer : pour une application en ligne de commande plutôt qu'une API web.
- Starlette : la base sur laquelle FastAPI est construit.
- Strawberry : cité pour l'intégration GraphQL.

## Pour toi
À adopter : c'est le choix courant pour exposer un modèle en API (validation Pydantic, docs auto), avec un code court.

