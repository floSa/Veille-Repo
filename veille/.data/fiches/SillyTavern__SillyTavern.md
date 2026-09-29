---
schema: 1
depot: SillyTavern/SillyTavern
source_readme_sha: 4692e1e411a617b1
ecrite_le: 2026-09-29
nature: app
deploiement: autre
prerequis: [Node, clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft, matière insuffisante]
verdict: ignorer
---

# SillyTavern/SillyTavern

> Interface web locale pour discuter avec plusieurs LLM, destinée aux utilisateurs avancés.

## Le problème
Non documenté dans le README (une ligne : « LLM Frontend for Power Users »).

## Ce que ça fait vraiment
D'après l'architecture décrite : client navigateur (`script.js`) servi par un serveur HTTP Node (`server.js`, `server-main.js`) qui relaie vers des fournisseurs LLM, image, synthèse vocale et embeddings.
Moteur de macros de prompt, cartes de personnages, lorebooks, extensions (mémoire, TTS).
Embeddings locaux ou vLLM pour la recherche vectorielle.

## Comment c'est branché
```mermaid
graph LR
  U[User] --> WC[Web Client script.js]
  WC --> API[HTTP API server-main.js]
  API --> PE[Prompt Engine MacroEngine.js]
  PE --> LLM[LLM Adapters]
  API --> CM[Content Manager]
  API --> UD[User Data chats.js]
  WC --> EX[Extension Runtime]
```

## Essayer
Aucune commande documentée dans le README.

## Coût et pièges
Clés des fournisseurs LLM à ta charge (déduit de l'architecture). AGPL-3.0.

## Ce que ce n'est pas
Pas un outil de développement ni de MLOps : orienté conversation et jeu de rôle. README insuffisant pour juger du reste.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Une interface de discussion grand public pour LLM, pensée pour le jeu de rôle, pas pour un usage pro data ou MLOps. À ignorer.
