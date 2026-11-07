---
schema: 1
depot: google/A2UI
source_readme_sha: d8ae182a0ea9e640
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: npm
prerequis: [Node, clé d'API]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# google/A2UI

> Format déclaratif JSON et moteurs de rendu pour que des agents génèrent des interfaces sûres.

## Le problème
Un agent distant ne peut pas envoyer de code exécutable à une application cliente, mais doit pouvoir présenter une interface riche.

## Ce que ça fait vraiment
L'agent envoie du JSON décrivant l'intention de l'UI ; le client la rend avec son propre catalogue de composants approuvés (Flutter, Angular, Lit, React, SwiftUI). La liste de composants est plate, avec des références par identifiant, pour être générée progressivement. Le transport passe par A2A ou AG-UI. Paquets Python, TypeScript, Dart et Swift ; certains « Not published yet ».

## Comment c'est branché
```mermaid
flowchart TD
  SP["specification/ (v0_8, v0_9, v0_10)"] --> AG["Agent SDK (a2a_agents)"]
  AG -->|"A2UI JSON"| T["Transport A2A / AG-UI"]
  T --> R["renderers/ (angular, lit, web_core)"]
  R --> H["Host Application UI"]
```

## Essayer
```bash
git clone https://github.com/a2ui-project/a2ui.git
cd a2ui
export GEMINI_API_KEY="your_gemini_api_key"
corepack enable
yarn install
cd samples/client/lit
yarn demo:restaurant
npm install @a2ui/react
```

## Coût et pièges
La démo demande une clé d'API Gemini, Node.js 18+ et uv. Plusieurs paquets ne sont pas encore publiés ; la prise en charge couvre Web ou Flutter.

## Ce que ce n'est pas
Pas un framework d'agents. Le README dit qu'un chat React seul peut s'en passer : il sert surtout au multiplateforme ou aux agents distants.

## Alternatives
- AG-UI : transport compatible, avec scaffolding via create-ag-ui-app.
- genui : paquet Flutter remplacé par a2ui_flutter.

## Pour toi
Surveiller : pertinent si tu fais des agents distants à interface générée ; le projet bouge vite et plusieurs paquets sont à venir.

