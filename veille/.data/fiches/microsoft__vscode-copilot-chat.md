---
schema: 1
depot: microsoft/vscode-copilot-chat
source_readme_sha: c33813a0bb4e7ad1
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [compte à créer]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [archivé, télémétrie, dépend d'un SaaS]
verdict: ignorer
---

# microsoft/vscode-copilot-chat

> Extension GitHub Copilot Chat pour VS Code : agents, complétions et chat intégrés à l'éditeur.

## Le problème
Coder avec un assistant demande de quitter l'éditeur ou de copier-coller du contexte.

## Ce que ça fait vraiment
Propose des suggestions en ligne, un chat, des modifications ciblées (Ctrl+I) et des agents qui éditent des fichiers, lancent des commandes et corrigent leurs erreurs. Supporte des instructions personnalisées, des skills, des agents spécialisés et des serveurs MCP. Le développement a migré dans le dépôt principal de VS Code.

## Comment c'est branché
```mermaid
flowchart TD
  C["Contributions (commandes, chat)"] --> W["extension.ts (worker Node)"]
  W --> E["Endpoint providers"]
  W --> A["Authentication Service"]
  E --> K["GitHub Copilot CAPI"]
  E --> O["OpenAI / Anthropic API"]
```

## Essayer
Aucune commande documentée dans le README : l'extension s'active dans VS Code avec un abonnement GitHub Copilot (offre gratuite possible).

## Coût et pièges
Abonnement Copilot requis, offre Free limitée. Cette extension envoie des données d'usage à Microsoft (réglage telemetry.telemetryLevel). Chaque version exige le dernier VS Code.

## Ce que ce n'est pas
Pas un projet vivant : le dépôt est archivé. Pas une solution hors ligne ni auto-hébergée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer ici : le dépôt est archivé, suis microsoft/vscode ; l'outil reste utile mais dépend du service Copilot.

