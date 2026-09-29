---
schema: 1
depot: NVIDIA-AI-Blueprints/video-search-and-summarization
source_readme_sha: 1becb32b2592ef6d
ecrite_le: 2026-09-29
nature: service
deploiement: docker
prerequis: [GPU, Docker, clé d'API, compte à créer, beaucoup de RAM]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS]
verdict: surveiller
---

# NVIDIA-AI-Blueprints/video-search-and-summarization

> Blueprint NVIDIA d'agents vidéo GPU : recherche, résumé, Q&A et alertes sur flux ou archives.

## Le problème
Exploiter de gros volumes de vidéo (stockée ou en direct) avec des VLM/LLM demande une pile complète d'ingestion, d'analytique et d'agents.

## Ce que ça fait vraiment
Trois couches : intelligence vidéo temps réel (embeddings, VLM, résultats publiés sur un broker), analytique aval (trajectoires, incidents, alertes vérifiées par VLM) et agents hors ligne (recherche, Q&A, rapports, résumé de longues vidéos, via MCP). Monorepo : agent Python, UI Next.js, analytics, charts Helm/Compose, skills.

## Comment c'est branché
```mermaid
graph LR
A["Agent API"] --> B["Agent orchestrator (top_agent.py)"]
B --> C["Video search (search_agent.py)"]
B --> D["Q&A and reports (report_agent.py)"]
B --> E["MCP tool access"]
F["Real-time VLM (vlm_pipeline.py)"] --> G["Behavior analytics"]
G --> H["Alert verification"]
```

## Essayer
Le README fourni est tronqué avant les commandes de déploiement. Il pointe seulement vers le notebook `deploy/docker/scripts/deploy_vss_launchable.ipynb` (Brev) et un déploiement Docker Compose ; aucune commande n'est présente.

## Coût et pièges
Licence NVIDIA AI Enterprise pour héberger les NIM, ou clés du catalogue NVIDIA/NGC. Prérequis stricts : drivers 595.x, Docker Engine entre 28.3.3 et 29.5.0, NVIDIA Container Toolkit. Exemple Brev : 2 x RTX PRO 6000 SE.

## Ce que ce n'est pas
Pas une bibliothèque légère : c'est une architecture de référence lourde. Les images `develop-*` et `nightly-*` sont « AS IS » ; la recherche vidéo est marquée alpha.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pertinent seulement avec des GPU NVIDIA et un vrai cas vidéo ; sinon la complexité et la licence à vérifier freinent.
