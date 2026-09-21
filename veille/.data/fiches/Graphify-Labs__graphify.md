---
schema: 1
depot: Graphify-Labs/graphify
source_readme_sha: 0a5f76b2c4e6cfee
ecrite_le: 2026-09-21
nature: outil
deploiement: pip
prerequis: [version de Python]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# Graphify-Labs/graphify

> CLI qui transforme un projet en graphe de connaissances interrogeable au lieu d'être grepé.

## Le problème
Un agent qui doit comprendre un dépôt lit les fichiers un par un et brûle son contexte.
Les index vectoriels rendent des extraits plausibles sans montrer comment les choses se relient.

## Ce que ça fait vraiment
Parse le code localement avec tree-sitter (~37 grammaires), sans LLM et sans sortie de données.
Produit trois fichiers : `graph.html` cliquable, `GRAPH_REPORT.md` et `graph.json` réinterrogeable.
Trois requêtes : `query` (sous-graphe pour une question), `path` (chemin entre deux nœuds), `explain`.
Chaque arête est étiquetée `EXTRACTED`, `INFERRED` ou `AMBIGUOUS` — on sait ce qui est lu et ce qui est déduit.

## Comment c'est branché
```mermaid
flowchart TD
  u(("Développeur")) --> skill["/graphify dans l'assistant"]
  skill --> extract["Extraction tree-sitter locale"]
  skill -.-> sem["Passe sémantique docs/médias"] -.-> llm["Modèle de l'assistant"]
  extract --> graph[("graph.json")]
  graph --> html["graph.html"]
  graph --> report["GRAPH_REPORT.md"]
  graph --> q["query / path / explain"]
```

## Essayer
```bash
uv tool install graphifyy
graphify install
graphify explain "APIRouter"
graphify path "FastAPI" "ModelField"
```

## Coût et pièges
Le paquet PyPI est `graphifyy` (deux y) ; les autres `graphify*` ne sont pas affiliés.
Le code est gratuit et local ; docs, PDF, images et vidéos passent par le modèle de ton assistant.

## Ce que ce n'est pas
Pas un index vectoriel : pas d'embeddings, donc pas de recherche par similarité sémantique sur le code.
Pas entièrement local : l'entreprise pousse une plateforme hébergée, et la passe sémantique appelle un backend.
Les chiffres LOCOMO/LongMemEval du README sont auto-rapportés, sur un banc choisi par l'éditeur.

## Alternatives
- `microsoft/markitdown` : si le besoin est de convertir des documents, pas de cartographier du code.

## Pour toi
L'extraction locale sans LLM est un vrai argument sur du code propriétaire. À tester sur un dépôt réel.
