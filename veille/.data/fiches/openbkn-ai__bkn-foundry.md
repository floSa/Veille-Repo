---
schema: 1
depot: openbkn-ai/bkn-foundry
source_readme_sha: c7d4cb7a117c80a7
ecrite_le: 2026-09-29
nature: service
deploiement: autre
prerequis: [service tiers, clé d'API]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# openbkn-ai/bkn-foundry

> Socle backend d'un réseau de connaissances métier par ontologie, pour donner du contexte fiable aux agents.

## Le problème
Les agents connectés à des données propriétaires subissent explosion de contexte, hallucinations et actions non contrôlées.

## Ce que ça fait vraiment
Backend sans interface web : moteur BKN (objets, relations, risques, actions, langage BKN en Markdown), chargeur de contexte (rappel puis classement), virtualisation de données VEGA, fabrique d'exécution d'outils MCP, contrôle d'accès et traçage des preuves. Le code montre les API BKN et métriques, la requête Cypher et l'accès via Vega ; le reste est décrit par le README.

## Comment c'est branché
```mermaid
flowchart LR
  A["CLI or API client"] --> B["BKN API (bkn_handler.go)"]
  B --> C["BKN service (bkn_service.go)"]
  C --> D["Cypher query (query_service.go)"]
  D --> E["Vega data access"]
  E --> F["Data connectors"]
  C --> G["Evidence trace (evidence.go)"]
```

## Essayer
```bash
git clone https://github.com/openbkn-ai/bkn-foundry.git
cd bkn-foundry/deploy
sudo bash ./preflight.sh
./deploy.sh openbkn install
sudo bash ./onboard.sh
npm install -g @openbkn/bkn-sdk
```

## Coût et pièges
Cible Linux avec Kubernetes, kubectl, helm et containerd ; le script `onboard.sh` enregistre un LLM et un modèle d'embedding, donc clés à votre charge. Le mot de passe par défaut de l'utilisateur `test` est 111111 ; 191 issues ouvertes.

## Ce que ce n'est pas
Pas une application clé en main : pas de console web dans ce dépôt (BKN Studio est ailleurs). Les benchmarks (99,31 % de précision, comparaison à Dify et RAGFlow) sont publiés par les auteurs et non reproduits ici.

## Alternatives
- Dify, RAGFlow, BiSheng : plateformes comparées dans le README, plus simples à déployer.

## Pour toi
À surveiller pour la gouvernance des agents (traçage, contrôle d'accès), mais déploiement lourd, licence à vérifier et résultats non indépendants.
