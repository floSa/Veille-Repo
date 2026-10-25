---
schema: 1
depot: iFurySt/open-computer-use
source_readme_sha: 6ef777b1daedfaba
ecrite_le: 2026-10-25
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# iFurySt/open-computer-use

> Serveur MCP open source qui laisse un agent piloter macOS, Linux ou Windows par l'accessibilité.

## Le problème
L'utilisation d'ordinateur par agent est surtout proposée en offre fermée, liée à un client.

## Ce que ça fait vraiment
Un paquet npm qui expose neuf outils natifs (`list_apps`, `get_app_state`, `press_key`…) en MCP, plus `query` sur macOS. La CLI `open-computer-use` (`ocu`) installe la config dans Codex, Claude Code, Gemini CLI, opencode, puis permet d'appeler un outil, d'évaluer du JavaScript ou de lancer un REPL. Sous macOS : permissions Accessibilité et Enregistrement d'écran.

## Comment c'est branché
```mermaid
flowchart LR
  A["Client MCP (Codex, Claude Code)"] --> B["open-computer-use mcp"]
  B --> C["Runtime natif"]
  C --> D["API d'accessibilité"]
  C --> E["Capture d'écran"]
  F["ocu js / repl"] --> B
```

## Essayer
```bash
npm i -g open-computer-use
open-computer-use install-codex-mcp
open-computer-use call list_apps
open-computer-use doctor
```

## Coût et pièges
Gratuit. macOS 14+ et deux permissions système. Node 18+ pour le lanceur. L'agent pilote tout le poste.

## Ce que ce n'est pas
Ce n'est pas une copie officielle du produit d'OpenAI : le README dit en être inspiré. Le projet est mené par une seule personne et largement généré par IA.

## Alternatives
Aucune alternative nommée dans le README (renvoie vers open-browser-use pour le navigateur).

## Pour toi
À surveiller : brique MCP simple pour tester le contrôle d'ordinateur, risque élevé sur une machine de travail.

