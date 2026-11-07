---
schema: 1
depot: NirDiamant/RAG_Techniques
source_readme_sha: 43619a413f8b3057
ecrite_le: 2026-11-07
nature: doc
deploiement: rien à installer
prerequis: [clé d'API, version de Python]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: adopter
---

# NirDiamant/RAG_Techniques

> Collection de plus de 40 notebooks exécutables présentant des techniques de RAG, du basique à l'avancé.

## Le problème
Les techniques RAG (chunking, requêtes, reranking, graphes, évaluation) sont dispersées en articles sans code comparable.

## Ce que ça fait vraiment
Notebooks Jupyter et scripts Python indépendants, un par technique : chunking sémantique, HyDE, HyPE, fusion, reranking, Self-RAG, CRAG, GraphRAG, RAPTOR, MemoRAG, évaluation (DeepEval, GroUSE, RAGAS, Open-RAG-Eval). Pas d'orchestrateur commun, juste un `helper_functions.py` partagé.

## Comment c'est branché
```mermaid
flowchart TD
  Nb["Notebooks [simple_rag.ipynb]"] --> Hf["helper_functions.py"]
  Sc["Scripts [simple_rag.py]"] --> Hf
  Doc["data/ corpus"] --> Ing["Load and split"]
  Ing --> Idx[("Embed and index")]
  Idx --> Ret["Retrieve"]
  Ret --> Gen["Generate answer"]
```

## Essayer
Le README fourni ne donne pas de commande d'installation.
```bash
# ouvrir all_rag_techniques/simple_rag.ipynb, ou lancer
# all_rag_techniques_runnable_scripts/simple_rag.py
```

## Coût et pièges
Les exemples appellent des modèles et services tiers (OpenAI, Contextual AI, Milvus, Ollama selon la technique), donc des clés à ta charge. Le README promeut des livres et une newsletter.

## Ce que ce n'est pas
Pas une bibliothèque installable ni un produit : des tutoriels indépendants. Licence non identifiée par GitHub. README tronqué en fin de document.

## Alternatives
Aucune nommée comme alternative ; dépôts voisins de l'auteur cités (Agents Towards Production, GenAI Agents, Agent Memory Techniques).

## Pour toi
À adopter comme référence d'apprentissage : chaque technique RAG est testable isolément, mais vérifie la licence avant de réutiliser du code.

