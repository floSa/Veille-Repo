---
schema: 1
depot: adriannovegil/awesome-observability
source_readme_sha: a10ea376aecd4faa
ecrite_le: 2026-10-29
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# adriannovegil/awesome-observability

> Liste commentée d'outils de logs, métriques, traces, APM, avec sections LLM et GPU.

## Le problème
Choisir parmi des centaines d'outils d'observabilité sans carte d'ensemble.

## Ce que ça fait vraiment
Classe les outils par étape : collecte, génération de charge, transport, collecteurs, stockage, visualisation, traitement et alertes, observabilité LLM et IA, GPU, APM, service mesh, SaaS, exemples. Les sections LLM (Langfuse, Arize Phoenix, Helicone, OpenLIT…) et GPU (DCGM Exporter, nvitop, NVTOP) sont directement utiles en MLOps.

## Comment c'est branché
```mermaid
flowchart LR
  A[Collect] --> B[Transport]
  B --> C[Collector]
  C --> D[Storage]
  D --> E[Visualization]
  E --> F[Analyze and Act]
```

## Essayer
Aucune commande : parcourir la liste. Le README cite des commandes de diagnostic Linux (`uptime`, `vmstat 1`, `iostat -xz 1`).

## Coût et pièges
Gratuit. Liste non vérifiée outil par outil : certaines entrées sont des SaaS payants ou très récentes ; plusieurs descriptions sont promotionnelles.

## Ce que ce n'est pas
Pas un guide de choix : peu de comparaisons, pas de critères.

## Alternatives
Les listes awesome-monitoring (crazy-canux, Enapiuz) citées dans les références.

## Pour toi
À adopter comme carte de départ : les sections LLM, GPU et anomalies couvrent ton domaine ; vérifie chaque outil avant usage.

