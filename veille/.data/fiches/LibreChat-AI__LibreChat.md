---
schema: 1
depot: LibreChat-AI/LibreChat
source_readme_sha: 84a943a2e911f9a3
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [Docker, clé d'API, service tiers]
cout: clé d'API à ta charge
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# LibreChat-AI/LibreChat

> Même dépôt que danny-avila/LibreChat sous un autre nom : chat IA auto-hébergé multi-fournisseurs.

## Le problème
Chaque fournisseur de modèles a son interface, ses comptes et sa facturation : pas de point d'entrée unique et privé.

## Ce que ça fait vraiment
Identité et README identiques à danny-avila/LibreChat (mêmes étoiles, dates et 1 157 issues) : doublon du catalogue. Chat multi-fournisseurs avec agents, MCP, interpréteur de code, recherche web, artefacts, fichiers, planification et déclencheurs d'agents, d'après le graphe fourni (liens surtout en pointillés, donc moins vérifiés).

## Comment c'est branché
```mermaid
flowchart TD
  UI["ChatView.tsx"] -.-> Svc["packages/data-provider/src/data-service.ts"]
  Svc -.-> Rt["api/server/routes/index.js"]
  Rt -.-> Run["Run management"]
  Run -.-> Mod["api/app/clients/BaseClient.js"]
  Rt -.-> Ag["controllers/agents/v1.js"]
  Ag -.-> Tool["services/ToolService.js"]
```

## Essayer
Aucune commande d'installation dans le README fourni : il renvoie vers librechat.ai/docs.

## Coût et pièges
Les appels aux modèles sont facturés par chaque fournisseur. Base de données requise, plus Redis ou S3 selon les options. Les espaces de travail attachés sont « très expérimentaux ».

## Ce que ce n'est pas
Pas un second projet : même contenu que danny-avila/LibreChat. Pas un modèle ni un proxy.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Même verdict que danny-avila/LibreChat, à ne traiter qu'une fois : adopte-le comme passerelle LLM auto-hébergée.

