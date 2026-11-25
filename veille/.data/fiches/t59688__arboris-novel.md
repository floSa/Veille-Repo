---
schema: 1
depot: t59688/arboris-novel
source_readme_sha: 6fef475469825536
ecrite_le: 2026-11-25
nature: app
deploiement: docker
prerequis: [clé d'API, Docker]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: surveiller
---

# t59688/arboris-novel

> Application web d'aide à l'écriture de romans avec un LLM : fiches de personnages, plan et versions multiples.

## Le problème
Les auteurs perdent le fil de leur univers (personnages, lieux, règles) et butent sur le prochain chapitre.

## Ce que ça fait vraiment
Le bureau d'écriture Vue appelle des routeurs FastAPI. Un orchestrateur utilise llm_service avec des prompts Markdown et un magasin vectoriel pour proposer un plan, des chapitres et plusieurs versions à comparer. Les romans sont stockés en SQLite (par défaut) ou MySQL. Compatible avec toute API OpenAI-compatible.

## Comment c'est branché
```mermaid
flowchart TD
  A["frontend/src/views/WritingDesk.vue"] --> C["frontend/src/api/novel.ts"]
  C --> D["backend/app/main.py"]
  D --> E["backend/app/api/routers/writer.py"]
  E --> G["backend/app/services/pipeline_orchestrator.py"]
  G --> H["backend/app/services/llm_service.py"]
  G --> I["backend/app/services/vector_store_service.py"]
  H --> J["backend/prompts/writing.md"]
```

## Essayer
```bash
cp .env.example .env
docker compose up -d
```
Le `.env` doit renseigner SECRET_KEY, OPENAI_API_KEY et ADMIN_DEFAULT_PASSWORD.

## Coût et pièges
Clé d'API LLM à ta charge, modèle par défaut gpt-3.5-turbo. Aucune licence déclarée : réutilisation incertaine. Le README signale des erreurs fréquentes de JSON avec les modèles faibles.

## Ce que ce n'est pas
Pas un générateur de romans autonome : l'auteur reste pilote. Pas de support clair en dehors du chinois.

## Alternatives
novel-kit est cité pour un usage en ligne de commande avec un éditeur.

## Pour toi
À surveiller : exemple propre de pipeline FastAPI, Vue et LLM avec magasin vectoriel, mais sans licence et centré sur l'écriture.

