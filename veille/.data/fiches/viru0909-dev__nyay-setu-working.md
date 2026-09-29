---
schema: 1
depot: viru0909-dev/nyay-setu-working
source_readme_sha: dc5461b8cf63c0c0
ecrite_le: 2026-09-29
nature: app
deploiement: docker
prerequis: [clé d'API, Node, service tiers, version de Python]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique, dépend d'un SaaS]
verdict: surveiller
---

# viru0909-dev/nyay-setu-working

> Plateforme judiciaire indienne avec assistant juridique IA, gestion de dossiers et audiences virtuelles.

## Le problème
Millions d'affaires en attente en Inde, avec des citoyens sans avocat : le README vise à outiller tout le circuit judiciaire.

## Ce que ça fait vraiment
Monorepo : front React/Vite, backend Spring Boot (JWT, dossiers, coffre de preuves SHA-256, PostgreSQL), `nlp-orchestrator` FastAPI (recherche profonde en SSE, Groq, Gemini, Indian Kanoon), service RAG `lawgpt-service` (FAISS), traduction Bhashini, signalisation WebRTC et pipeline média RabbitMQ/FFmpeg.

## Comment c'est branché
```mermaid
flowchart LR
  U[Frontend React/Vite] --> B[Backend Spring Boot]
  B --> DB[(PostgreSQL)]
  B --> L[LawGPT RAG - FAISS]
  B --> G[Groq / Ollama]
  U --> N[NLP Orchestrator FastAPI]
  N --> K[Gemini / Indian Kanoon]
```

## Essayer
```bash
cd frontend/nyaysetu-frontend && npm install && npm run dev
cd backend/nyaysetu-backend && mvn spring-boot:run
cd nlp-orchestrator && pip install -r requirements.txt && python main.py
```

## Coût et pièges
Clés Groq et Gemini, PostgreSQL 15+, Java 17, Node 20+, Python 3.12+. Licence présente mais non identifiée : à vérifier. 583 issues ouvertes.

## Ce que ce n'est pas
Pas un conseil juridique validé ; le README ne cite aucune évaluation de l'assistant. Le README mélange plusieurs documents (pipeline média incomplet) et les versions prérequises divergent.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Surveiller : l'assemblage RAG (FAISS) et recherche en SSE est instructif à lire, mais projet jeune, à un seul auteur, licence floue et non évalué.

