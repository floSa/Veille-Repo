---
schema: 1
depot: langchain-ai/langgraph
source_readme_sha: 3a13e257af121696
ecrite_le: 2026-09-28
nature: bibliothèque
deploiement: pip
prerequis: [clé d'API]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: adopter
---

# langchain-ai/langgraph

> Framework d'orchestration bas niveau pour agents à état qui tournent longtemps.

## Le problème
Un agent qui s'exécute pendant des heures doit survivre aux pannes, garder son état et accepter
une intervention humaine — trois choses qu'une boucle `while` ne donne pas.

## Ce que ça fait vraiment
Fournit l'infrastructure sous-jacente d'un workflow à état : exécution durable qui reprend
exactement là où elle s'est arrêtée après un échec.
Permet d'inspecter et de modifier l'état de l'agent à n'importe quel point de l'exécution
(human-in-the-loop). Gère une mémoire courte pour le raisonnement en cours et une mémoire longue
persistante entre sessions. S'intègre à LangSmith pour visualiser les chemins d'exécution,
les transitions d'état et les métriques. Le README cite Klarna, Replit et Elastic comme utilisateurs.

## Comment c'est branché
```mermaid
flowchart TD
  graph["Graphe d'états (ton agent)"] --> runtime["Runtime LangGraph"]
  runtime --> ckpt[("Checkpoints : exécution durable")]
  runtime --> mem[("Mémoire courte + longue")]
  runtime --> hitl["Point d'arrêt human-in-the-loop"]
  runtime --> ls["LangSmith (traces, évals)"]
  deep["Deep Agents"] --> runtime
```

## Essayer
```bash
pip install -U langgraph
```

## Coût et pièges
La bibliothèque est gratuite ; les modèles appelés sont à ta charge. LangSmith, présenté comme
le compagnon pour le débogage, les évaluations et l'observabilité, est un service de l'éditeur.
Le déploiement mis en avant, LangSmith Deployment, l'est aussi.

## Ce que ce n'est pas
Ce n'est pas un framework haut niveau : le README renvoie à **Deep Agents** pour construire vite.
Ce n'est pas LangChain : ce sont deux paquets, LangChain fournissant les intégrations et composants.
Ce n'est pas une plateforme d'observabilité, c'est LangSmith qui la porte.

## Alternatives
- **Deep Agents** : paquet de plus haut niveau bâti dessus, pour agents qui planifient et
  délèguent à des sous-agents.
- **LangGraph.js** : l'équivalent JavaScript/TypeScript.

## Pour toi
Le bon niveau d'abstraction quand ton agent doit reprendre après une coupure et se faire relire.
