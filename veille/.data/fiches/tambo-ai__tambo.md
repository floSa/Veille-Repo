---
schema: 1
depot: tambo-ai/tambo
source_readme_sha: 0872773b15c00cd8
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: npm
prerequis: [Node, clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# tambo-ai/tambo

> Boîte à outils React pour agents qui affichent des composants d'interface générés.

## Le problème
Un chatbot ne renvoie que du texte, alors que l'utilisateur veut des graphiques ou des formulaires interactifs.

## Ce que ça fait vraiment
On déclare ses composants React avec des schémas Zod ; ceux-ci deviennent des outils pour le modèle, qui choisit le composant et diffuse les props. SDK `@tambo-ai/react` (TamboProvider, hooks), backend de conversation et d'orchestration, intégration MCP, outils locaux, contexte et suggestions. Composants « interactables » persistants. Modèles au choix : OpenAI, Anthropic, Gemini, Mistral…

## Comment c'est branché
```mermaid
flowchart LR
  DEV["cli / create-tambo-app"] --> APP["Application React"]
  APP --> SDK["react-sdk (TamboProvider)"]
  SDK --> MCP["MCP Servers"]
  SDK --> LLM["LLM Providers"]
  SH["showcase"] --> SDK
```

## Essayer
```bash
npm create tambo-app my-tambo-app
cd my-tambo-app
npm run dev
```

## Coût et pièges
Clé d'API du fournisseur de modèle à ta charge. Tambo Cloud ferme le 31 octobre 2026 (données supprimées le 30 novembre) ; il faut auto-héberger via SELF-HOSTING.md.

## Ce que ce n'est pas
Plus un service hébergé : l'équipe passe à un autre produit (Charming). Reste open source MIT, mais l'avenir du dépôt est incertain.

## Alternatives
- Vercel AI SDK : plus manuel pour lier outils et composants.
- CopilotKit : orienté multi-agents.
- Assistant UI : centré sur le chat.

## Pour toi
À surveiller seulement : l'idée est bonne, mais le cloud s'arrête dans quatre jours ; n'adopte que l'option auto-hébergée.

