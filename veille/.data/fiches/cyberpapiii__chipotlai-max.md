---
schema: 1
depot: cyberpapiii/chipotlai-max
source_readme_sha: b72a7fb2374901f3
ecrite_le: 2026-11-07
nature: outil
deploiement: compilation
prerequis: [Node, service tiers]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# cyberpapiii/chipotlai-max

> Fork parodique d'OpenCode qui utilise le chatbot de support de Chipotle comme modèle par défaut.

## Le problème
Obtenir une inférence de code gratuite sans clé d'API, en détournant un bot d'entreprise.

## Ce que ça fait vraiment
Fork d'OpenCode dont le modèle par défaut, `pepper-1`, passe par un proxy local compatible OpenAI. Ce proxy parle au chatbot Pepper de Chipotle par WebSocket, d'après le README. D'autres bots (Home Depot, Sephora, Nordstrom, Lowe's, IKEA, Expedia) sont câblés mais sans adaptateur autorisé.

## Comment c'est branché
```mermaid
flowchart LR
  CLI["Chipotlai Max fork OpenCode"] --> Proxy["chipotle-llm-provider :3000/v1"]
  Proxy --> Bot["Chatbot Pepper Amelia"]
```
Schéma simplifié d'après la fiche, sans diagramme fourni.

## Essayer
```bash
git clone --recursive https://github.com/cyberpapiii/chipotlai-max.git
cd chipotlai-max
bun install
./start-chipotlai.sh
```

## Coût et pièges
Gratuit, mais le README admet une violation probable des conditions d'utilisation de Chipotle. Le proxy peut casser à tout moment et les sessions anonymes sont limitées.

## Ce que ce n'est pas
Pas un outil sérieux ni durable : projet meme, déconseillé pour tout code de production selon le README lui-même. Licence non identifiée par GitHub.

## Alternatives
`OpenCode` : l'agent d'origine, sous licence MIT, sans détournement.

## Pour toi
À ignorer : dépend d'un service détourné qui peut disparaître et expose à un risque juridique, sans aucun usage fiable.

