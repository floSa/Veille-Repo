---
schema: 1
depot: OpenBMB/ChatDev
source_readme_sha: 0f1bdd4ad88f9e2b
ecrite_le: 2026-09-29
nature: app
deploiement: autre
prerequis: [clé d'API, version de Python, Node]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: surveiller
---

# OpenBMB/ChatDev

> Plateforme sans code d'orchestration multi-agents LLM, configurée en YAML, pour prototyper des workflows.

## Le problème
Monter un système multi-agents demande d'écrire l'orchestration, les boucles et la gestion d'état à la main.

## Ce que ça fait vraiment
ChatDev 2.0 (DevAll) : backend FastAPI (`server/`) + console Vue 3 avec canevas visuel pour définir agents, nœuds et flux.
Le runtime valide la config, construit le graphe (cycles inclus), exécute en DAG, appelle modèles, skills et outils, archive sessions et artefacts.
Workflows fournis dans `yaml_instance/` : visualisation de données, 3D Blender, deep research, jeu vidéo, vidéo pédagogique.
SDK Python (`chatdev` sur PyPI) ; ChatDev 1.0 (« entreprise virtuelle ») conservé en legacy.

## Comment c'est branché
```mermaid
graph LR
  VW[Vue Workbench App.vue] --> API[API Server app.py]
  YAML[Workflow YAML] --> CV[Config Validation check.py]
  API --> RB[Runtime Builder]
  RB --> GM[Graph Manager]
  GM --> DAG[Workflow Execution dag_executor.py]
  DAG --> AE[Agent Executor]
  AE --> SS[Session Store]
```

## Essayer
```bash
uv sync
cd frontend && npm install
cp .env.example .env
make dev
docker compose up --build
```

## Coût et pièges
`API_KEY` et `BASE_URL` d'un fournisseur LLM requis : chaque workflow multi-agents consomme beaucoup de jetons. Python 3.12+, Node 18+, uv.

## Ce que ce n'est pas
Pas un générateur de logiciel fiable « clé en main » ; les workflows 3D exigent Blender et blender-mcp. Gouvernance non précisée (laboratoire académique OpenBMB supposé).

## Alternatives
Aucune alternative nommée dans le README (OpenClaw est cité comme client, pas comme concurrent).

## Pour toi
Bon terrain d'expérimentation pour des pipelines d'agents déclaratifs ; surveille la facture de jetons.
