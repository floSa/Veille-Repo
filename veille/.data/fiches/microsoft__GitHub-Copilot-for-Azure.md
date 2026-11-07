---
schema: 1
depot: microsoft/GitHub-Copilot-for-Azure
source_readme_sha: da3f5b079e3cf800
ecrite_le: 2026-11-07
nature: extension
deploiement: autre
prerequis: [Node, compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# microsoft/GitHub-Copilot-for-Azure

> Extensions et skills pour interroger et gérer Azure depuis VS Code, Visual Studio et Claude Code.

## Le problème
Développer pour Azure oblige à passer entre portail, CLI et documentation ; ici l'assistant de l'IDE répond et agit sur les services Azure.

## Ce que ça fait vraiment
- Extensions VS Code et Visual Studio, plugin pour Copilot CLI et pour Claude Code.
- Installe des skills Azure, globalement ou par projet (commandes `@azure: Install Azure Skills ...`).
- Passe par le serveur MCP Azure (`@azure/mcp`, lancé avec `npx`).
- Configuration de nuages souverains (Azure Chine, US Government) par l'argument `--cloud`.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
graph LR
    IDE["VS Code / Claude Code / Copilot CLI"] --> Skills["Skills Azure"]
    Skills --> MCP["@azure/mcp (npx)"]
    MCP --> Auth["az / Azure PowerShell / azd"]
    Auth --> Azure["Azure"]
```

## Essayer
```bash
/plugin marketplace add microsoft/azure-skills
/plugin install azure@azure-skills
/plugin install azure@claude-plugins-official
```

## Coût et pièges
Git et Node.js sont requis ; sans Node, le serveur MCP échoue parfois sans message. Un compte Azure est nécessaire ; l'abonnement Copilot et le tarif ne sont pas dans le README. Authentification à faire sur le bon cloud avant de démarrer.

## Ce que ce n'est pas
Pas un outil généraliste : il ne vaut que pour Azure. Pas un remplaçant des CLI Azure, dont il dépend. Licence présente mais non identifiée par GitHub.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer sauf si tes charges IA tournent sur Azure ; dans ce cas, c'est un raccourci utile pour l'administration depuis l'assistant.

