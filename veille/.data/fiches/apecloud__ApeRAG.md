---
schema: 1
depot: apecloud/ApeRAG
source_readme_sha: ce7eaafdf6729270
ecrite_le: 2026-09-30
nature: service
deploiement: docker
prerequis: [Docker, clé d'API, beaucoup de RAM]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# apecloud/ApeRAG

> Plateforme RAG auto-hébergée mêlant graphe, vecteurs et plein texte, avec agents et MCP, pour équipes IA.

## Le problème
Construire une base de connaissance interrogeable par LLM demande d'assembler parsing, index vectoriel, graphe, recherche plein texte et agents.

## Ce que ça fait vraiment
API FastAPI, interface React et tâches Celery. Cinq types d'index (vecteur, plein texte, graphe, résumé, vision), un moteur de graphe dérivé de LightRAG avec fusion d'entités, parsing avancé via MinerU (GPU optionnel), agents avec outils MCP et recherche web, journal d'audit. Déploiement Helm/KubeBlocks pour PostgreSQL, Redis, Qdrant, Elasticsearch, Neo4j.

## Comment c'est branché
```mermaid
flowchart LR
  API["FastAPI Routes (app.py)"] --> ING["Collection Ingestion"]
  ING --> PRS["Document Parsing (doc_parser.py)"]
  ING --> IDX["Index Manager (manager.py)"]
  IDX --> LR["LightRAG Engine (base.py)"]
  API --> AGT["Agent Chat"]
  AGT --> MCP["MCP Server (server.py)"]
  API --> DB["Relational Data (models.py)"]
```

## Essayer
```bash
git clone https://github.com/apecloud/ApeRAG.git
cd ApeRAG
cp envs/env.template .env
docker-compose up -d --pull always
```
Interface sur `http://localhost:3000/web/`, API sur `http://localhost:8000/docs`.

## Coût et pièges
Minimum 2 cœurs, 4 Go de RAM, Docker. Le service `doc-ray` demande 4+ cœurs et 8 Go+. Une clé de LLM est à ta charge (non détaillée dans ce README).

## Ce que ce n'est pas
Pas une simple bibliothèque : c'est une pile complète à quatre bases de données en mode Kubernetes. Les formulations « meilleur choix » du README sont du marketing.

## Alternatives
LightRAG : le moteur de graphe sur lequel ApeRAG s'appuie.

## Pour toi
À surveiller : pertinent si tu veux un RAG avec graphe clé en main et acceptes l'infrastructure ; pour un prototype, LightRAG seul est plus léger.

