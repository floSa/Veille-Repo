---
schema: 1
depot: CopilotKit/CopilotKit
source_readme_sha: 7964714cd965f904
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: npm
prerequis: [Node, clé d'API]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# CopilotKit/CopilotKit

> SDK pour brancher un agent IA à une interface (React, Angular, Vue, Slack, Teams) avec état partagé.

## Le problème
Relier un agent à une vraie interface (UI générée, validation humaine, état partagé) demande beaucoup de colle sur mesure.

## Ce que ça fait vraiment
Fournit des hooks (`useAgent`, `useCopilotAction`) et des composants de chat côté front, un runtime côté serveur qui parle aux fournisseurs de LLM via des adaptateurs, et des SDK JS/Python pour les agents LangGraph. Le protocole AG-UI relie agent et UI. « CopilotKit Intelligence » (threads persistants, mémoires, apprentissage) est une offre à part, hébergée ou auto-hébergée.

## Comment c'est branché
```mermaid
graph LR
  A[User/App] --> B[@copilotkit/react-core]
  B --> C[@copilotkit/react-ui]
  B --> D[CopilotKit/runtime]
  D --> E[LangGraph Agents]
  D --> F[External AI Services]
  G[sdk-js / sdk-python] --> E
```

## Essayer
```bash
npx --yes copilotkit@latest onboard start
npx copilotkit@latest create
npx copilotkit@latest skills install
```

## Coût et pièges
Le SDK est MIT, mais les appels LLM restent à ta charge (clé d'API du fournisseur). Intelligence a des plans (contenu non détaillé dans le README).

## Ce que ce n'est pas
Pas un framework d'agents : il suppose un agent existant (LangGraph, CrewAI, Mastra, PydanticAI…). Les fonctions de persistance et d'apprentissage relèvent de l'offre Intelligence, pas du SDK de base.

## Alternatives
Aucune alternative nommée dans le README (seuls des frameworks d'agents compatibles y figurent).

## Pour toi
À surveiller si tu livres des agents avec une interface utilisateur ; sans front à construire, il n'apporte rien.

