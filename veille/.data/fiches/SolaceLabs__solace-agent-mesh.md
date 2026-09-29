---
schema: 1
depot: SolaceLabs/solace-agent-mesh
source_readme_sha: e9821a7a841e7f1e
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [clé d'API, service tiers, version de Python]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: [archivé]
verdict: ignorer
---

# SolaceLabs/solace-agent-mesh

> Framework Python déprécié pour systèmes multi-agents pilotés par événements, sur le courtier Solace.

## Le problème
Faire coopérer plusieurs agents spécialisés sans couplage fort, avec une messagerie d'événements.

## Ce que ça fait vraiment
Hôte d'agents A2A qui combine Google ADK et Solace AI Connector : orchestrateur qui délègue, passerelle HTTP/SSE avec interface web, Slack et REST, outils SQL/JQ/visualisation, embeds dynamiques, gestion d'artefacts, workflows, planificateur et plugins. Commandes `sam init`, `sam run`, `sam add agent`.

## Comment c'est branché
```mermaid
flowchart LR
  UI[Web UI] --> GW[HTTP SSE Gateway]
  GW --> OR[Task Orchestrator]
  OR --> BR[Solace Event Broker]
  BR --> AG[Agent Tools]
  AG --> LLM[LLM Provider]
  AG --> AS[Artifact Service]
```

## Essayer
```bash
pip3 install solace-agent-mesh
sam init --gui
sam run
```

## Coût et pièges
Le dépôt est archivé et la version Python est dépréciée : plus de fonctions, corrections ni mises à jour de sécurité. Nécessite un courtier Solace et une clé de fournisseur LLM.

## Ce que ce n'est pas
Ce n'est plus la version à suivre : le README renvoie vers une nouvelle version et une application bureau gratuite, hors de ce dépôt.

## Alternatives
Le README renvoie vers la nouvelle version de Solace Agent Mesh (documentation Solace).

## Pour toi
À ignorer : archivé et déprécié, sans correctifs de sécurité ; ne pas démarrer de projet dessus.
