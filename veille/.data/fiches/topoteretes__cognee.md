---
schema: 1
depot: topoteretes/cognee
source_readme_sha: f89ea9f58197ea8e
ecrite_le: 2026-09-21
nature: bibliothèque
deploiement: pip
prerequis: [version de Python, clé d'API]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [licence à clauses commerciales, dépend d'un SaaS]
verdict: surveiller
---

# topoteretes/cognee

> Couche de mémoire persistante pour agents : texte et code deviennent graphe interrogeable.

## Le problème
Un agent repart de zéro à chaque session : décisions, correctifs et contexte projet sont perdus.
Assembler soi-même graphe + vecteurs + sessions + métadonnées demande quatre bases de données.

## Ce que ça fait vraiment
Quatre opérations : `remember` (stocker), `recall` (retrouver), `improve` (enrichir), `forget` (supprimer).
Le texte est découpé en entités et relations ; le code devient un graphe de symboles et dépendances.
Sans LLM, l'ingestion et la recherche fonctionnent via GLiNER local ; les étapes LLM sont sautées.
Plugins Claude Code, Codex, OpenClaw, MCP, SDK Python/TypeScript/Rust, API REST.

## Comment c'est branché
```mermaid
flowchart LR
  src["texte / code"] --> remember["cognee.remember"]
  remember --> graph["graphe entités+relations"]
  remember --> vect["chunks embarqués"]
  graph --> recall["cognee.recall"]
  vect --> recall
  recall --> app["agent / application"]
  improve["cognee.improve"] --> graph
```

## Essayer
```bash
uv pip install "cognee[gliner]"
cognee-cli remember "Marie Curie was born in Warsaw." -d local_quickstart
cognee-cli recall "Where was Marie Curie born?" -d local_quickstart
cognee-cli demo
docker compose --profile ui --profile mcp up
```

## Coût et pièges
Par défaut OpenAI pour LLM et embeddings : `LLM_API_KEY` à ta charge, appels facturés à l'ingestion.
L'image Docker par défaut n'inclut pas GLiNER ; l'UI locale réclame Node.js/npm et Docker pour le MCP.

## Ce que ce n'est pas
Ce n'est pas « tout Postgres » en production : le graphe sur Postgres est une démo, la version production est un produit sous licence.
Ce n'est pas une base gérée par défaut : authentification, stockage persistant et backends restent à configurer soi-même.
Les scores BEAM (0.79 / 0.67) viennent de configurations différentes et ne se comparent pas directement.

## Alternatives
Mem0, Letta, Zep, Graphiti : nommés comme sources d'import via le format COGX, donc concurrents directs sur la mémoire d'agent.
Cognee Cloud : l'option gérée si l'on ne veut pas opérer la stack soi-même.

## Pour toi
Le candidat sérieux si tu veux une mémoire d'agent versionnable sur tes propres données — teste d'abord le mode sans LLM.
