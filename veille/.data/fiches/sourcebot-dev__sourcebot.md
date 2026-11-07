---
schema: 1
depot: sourcebot-dev/sourcebot
source_readme_sha: 80e6483a6ad214bb
ecrite_le: 2026-11-07
nature: service
deploiement: docker
prerequis: [Docker, Node, clé d'API]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: adopter
---

# sourcebot-dev/sourcebot

> Couche de contexte de code auto-hébergée : indexe vos dépôts pour la recherche, les humains et les agents.

## Le problème
Les agents et les équipes ne voient que les dépôts clonés localement : trouver les appelants d'une API dans d'autres services est lent.

## Ce que ça fait vraiment
Indexe des dépôts GitHub, GitLab, Bitbucket, Azure DevOps ou locaux, avec recherche par regex et booléens. Expose un serveur MCP (recherche, lecture de fichiers, définitions et références de symboles). « Ask Sourcebot » répond aux questions sur le code via un modèle de langage que tu configures avec ta clé. Les permissions de l'hébergeur de code sont synchronisées.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  R["Dépôts (GitHub, GitLab, local)"] --> I["Index Sourcebot"]
  I --> S["Code Search (web)"]
  I --> M["Serveur MCP"]
  I --> A["Ask Sourcebot"]
  M --> C["Claude Code, Codex, Cursor"]
  A --> L["Modèle de langage (ta clé)"]
```

## Essayer
```sh
npx setup-sourcebot
```

## Coût et pièges
Il faut Node.js (24 LTS recommandé), Docker et Docker Compose. Ask utilise ta propre clé de modèle ; des plans payants existent (page de tarifs).

## Ce que ce n'est pas
Ce n'est pas un assistant de code complet : c'est un index et une couche de requête. Le code envoyé à Ask part chez le fournisseur de modèle que tu choisis.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter pour donner à tes agents un accès MCP à tout ton code indexé : un gain réel quand les dépôts sont nombreux.

