---
schema: 1
depot: jupyterlab/jupyter-ai
source_readme_sha: bd69c600c4e2a05e
ecrite_le: 2026-09-29
nature: extension
deploiement: pip
prerequis: [version de Python, service tiers]
cout: freemium
maturite: utilisable
gouvernance: fondation
alertes: []
verdict: adopter
---

# jupyterlab/jupyter-ai

> Extension JupyterLab qui intègre des agents IA (Claude, Codex, Copilot…) dans un chat natif.

## Le problème
Utiliser un agent de code sur des notebooks oblige à sortir de JupyterLab et à copier le contexte à la main.

## Ce que ça fait vraiment
Le README décrit une interface de chat native reliée à des agents via l'Agent Client Protocol (ACP). Les agents lisent et écrivent des fichiers, lancent des commandes et manipulent les notebooks par un serveur MCP intégré, avec approbation préalable des actions. Il gère plusieurs chats en parallèle, l'ajout de cellules ou fichiers en contexte, la collaboration en temps réel et des serveurs MCP personnalisés. Le diagramme fourni décrit une ancienne version (magics `%%ai`), donc à ne pas reprendre tel quel.

## Comment c'est branché
```mermaid
flowchart LR
  U["Utilisateur (chat JupyterLab)"] --> J["Jupyter AI (extension)"]
  J --> ACP["Agent Client Protocol"]
  ACP --> AG["Agent (Claude, Codex, Copilot…)"]
  AG --> MCP["Serveur MCP Jupyter"]
  MCP --> NB["Notebooks / fichiers / terminal"]
```

## Essayer
```bash
# Le README racine renvoie à la documentation (Getting Started).
# Aucune commande d'installation n'y figure.
```

## Coût et pièges
L'extension est gratuite ; les agents peuvent exiger un abonnement ou une clé. Le README note que le projet est en incubation dans l'organisation JupyterLab. 306 issues ouvertes.

## Ce que ce n'est pas
Pas un modèle : l'extension héberge des agents tiers. Le README ne détaille pas l'installation.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter si tu travailles sous JupyterLab : intégration native, permissions explicites et standards ouverts (ACP, MCP), sous gouvernance de la communauté Jupyter.
