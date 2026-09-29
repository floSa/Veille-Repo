---
schema: 1
depot: Azure-Samples/graphrag-accelerator
source_readme_sha: 7ce28a89876542c9
ecrite_le: 2026-09-29
nature: service
deploiement: autre
prerequis: [compte à créer, service tiers, Docker]
cout: payant
maturite: expérimental
gouvernance: entreprise
alertes: [archivé, dernier commit ancien, dépend d'un SaaS]
verdict: ignorer
---

# Azure-Samples/graphrag-accelerator

> Démonstration Microsoft qui déploie la bibliothèque graphrag en API hébergée sur Azure, désormais abandonnée.

## Le problème
Indexer un corpus en graphe de connaissances et l'interroger demande d'assembler soi-même plusieurs services cloud et un pipeline d'indexation.

## Ce que ça fait vraiment
Enveloppe le paquet Python `graphrag` dans une API (`graphrag_app`) déployée sur AKS derrière Azure API Management. Des jobs Kubernetes indexent les données stockées en Blob vers Cosmos DB et Cognitive Search, avec Azure OpenAI pour les LLM. Un frontend Streamlit et deux notebooks servent de démonstration. Le déploiement passe par des modules Bicep et un chart Helm.

## Comment c'est branché
```mermaid
flowchart LR
  U["Streamlit UI / Notebooks"] --> A["Azure API Management"]
  A --> G["graphrag_app"]
  G --> O["Azure OpenAI"]
  G --> B["Blob Storage"]
  B --> S["Cognitive Search + Cosmos DB"]
  I["Bicep + Helm"] --> K["AKS Cluster"]
```

## Essayer
Le README ne donne aucune commande : il renvoie à un guide de déploiement et à un notebook Quickstart.
```bash
# aucune commande documentée dans le README
```

## Coût et pièges
Le README avertit que les services Azure peuvent coûter « substantiellement » et que l'indexation est chère : commencer avec peu de données. Compte Azure et déploiement complet requis.

## Ce que ce n'est pas
Pas maintenu (dépôt archivé, dernier push 2025-05-27) et pas une offre Microsoft officiellement supportée. Ce n'est pas la bibliothèque graphrag elle-même.

## Alternatives
- graphrag (la bibliothèque) : le README y renvoie pour les évolutions futures.

## Pour toi
Ignorer : archivé et lié à un déploiement Azure coûteux ; suis plutôt la bibliothèque graphrag si le GraphRAG t'intéresse.
