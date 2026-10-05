---
schema: 1
depot: llm-d/llm-d-router
source_readme_sha: cbc0537bb86ca6f3
ecrite_le: 2026-10-05
nature: service
deploiement: docker
prerequis: [Docker, GPU, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: surveiller
---

# llm-d/llm-d-router

> Routeur d'inférence Kubernetes qui place les requêtes LLM selon la charge et le cache KV.

## Le problème
Répartir le trafic entre réplicas de modèles sans tenir compte du cache de préfixes et de la charge gaspille du GPU.

## Ce que ça fait vraiment
L'Endpoint Picker (EPP) évalue chaque requête contre l'état de l'InferencePool (localité du cache KV, charge, priorité) et choisit l'endpoint, via le protocole ext-proc d'Envoy. Ajoute les API InferenceObjective et InferenceModelRewrite, un contrôle de flux, un sidecar de désagrégation P/D et E/P/D. Deux modes : standalone (Helm, Envoy) ou Gateway API.

## Comment c'est branché
```mermaid
flowchart LR
  P[Envoy proxy] --> X[ext-proc server.go]
  X --> E[EPP runner.go]
  E --> F[Flow control controller.go]
  E --> K[KV prefix cache]
  E --> D[Endpoint data layer]
  E --> M[Modèles vLLM]
```

## Essayer
Aucune commande documentée dans le README (renvoi vers le chart Helm, `config/charts/README.md`).

## Coût et pièges
Suppose un cluster Kubernetes, des serveurs de modèles et des GPU. Seul le mode `FULL_DUPLEX_STREAMED` d'Envoy est supporté. 334 issues ouvertes.

## Ce que ce n'est pas
Pas un serveur d'inférence : il route vers les serveurs existants. « Inference Scheduler » est l'ancien nom.

## Alternatives
- Gateway API Inference Extension : héberge désormais l'API InferencePool.

## Pour toi
À surveiller : utile si tu opères du serving LLM multi-réplicas sur Kubernetes ; sinon trop d'infrastructure.

