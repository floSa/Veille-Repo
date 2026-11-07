---
schema: 1
depot: microsoft/intelligent-terminal
source_readme_sha: bc7483c401e80db2
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [service tiers]
cout: freemium
maturite: expérimental
gouvernance: entreprise
alertes: [télémétrie]
verdict: surveiller
---

# microsoft/intelligent-terminal

> Fork expérimental de Windows Terminal avec un volet agent compatible avec tout agent ACP.

## Le problème
Pour demander de l'aide à un agent sur une erreur de terminal, on copie-colle la sortie et le contexte entre deux fenêtres.

## Ce que ça fait vraiment
Il ajoute à Windows Terminal un volet agent qui reçoit le contexte des shells (PowerShell, Bash/WSL). Il détecte les erreurs de commande, propose des correctifs et lance des tâches en arrière-plan depuis la palette de commandes. Il fonctionne avec tout agent compatible ACP (Copilot, Claude, Codex, Gemini, OpenCode, Antigravity), y compris des fournisseurs maison via BYOK. Aucune commande n'est exécutée sans ton accord.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
  A["Shells: PowerShell, Bash/WSL"] --> B["Intelligent Terminal"]
  B --> C["Volet agent"]
  C --> D["CLI d'agent via ACP (stdio)"]
  B --> E["Détection d'erreurs"]
  E --> C
  B --> F["Gestion des sessions"]
```

## Essayer
```powershell
winget install --id Microsoft.IntelligentTerminal -e
```

## Coût et pièges
Il faut un agent et son abonnement ; GitHub Copilot est le défaut et s'installe via WinGet. Windows 10 2004 ou plus. Selon l'agent choisi, tes prompts et ton contexte shell partent chez son fournisseur. Des données d'usage sont envoyées à Microsoft, désactivables.

## Ce que ce n'est pas
Ce n'est pas un agent : il transporte tes prompts et le contexte vers l'agent choisi. Il n'appelle aucune API cloud lui-même. Le README le dit en phase expérimentale ; il s'installe à côté de Windows Terminal.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller si tu travailles sous Windows ou WSL avec des agents de code : le volet intégré épargne le copier-coller, mais l'outil est expérimental et envoie de la télémétrie.

