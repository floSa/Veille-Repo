---
schema: 1
depot: HandsOnLLM/Hands-On-Large-Language-Models
source_readme_sha: f0d3c93d4f3f631e
ecrite_le: 2026-11-07
nature: doc
deploiement: rien à installer
prerequis: [GPU, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: []
verdict: adopter
---

# HandsOnLLM/Hands-On-Large-Language-Models

> Code d'accompagnement du livre « Hands-On Large Language Models », notebooks par chapitre pour apprendre les LLM.

## Le problème
Comprendre tokenisation, embeddings, recherche sémantique, RAG et fine-tuning demande des exemples exécutables, pas seulement de la théorie.

## Ce que ça fait vraiment
Un dossier de notebooks par chapitre (12 chapitres), un dossier `.setup` pour l'environnement (conda, requirements) et un dossier `bonus` de guides visuels (Mamba, quantisation, mixture of experts, raisonnement). Les notebooks sont conçus pour Google Colab.

## Comment c'est branché
```mermaid
flowchart TD
  E["Environment Setup (.setup)"] --> C1["Chapter 01"]
  C1 --> C2["Chapter 02"]
  C2 --> Cn["... Chapter 12"]
  E --> B["Bonus Resources"]
  C1 --> X["Google Colab"]
```

## Essayer
Le README ne documente aucune commande ; l'environnement est décrit dans `.setup`.
```bash
# aucune commande documentée dans le README fourni
```

## Coût et pièges
Gratuit ; le livre est payant. Un GPU est utile : Colab est la voie prévue. Dernier push en avril 2026.

## Ce que ce n'est pas
Pas un outil ni une bibliothèque : le code n'a de sens qu'avec le livre. Le README est surtout un recueil d'avis.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À adopter pour te former ou former une équipe : exemples reproductibles, sous Apache-2.0, couvrant tout le cycle des LLM.

