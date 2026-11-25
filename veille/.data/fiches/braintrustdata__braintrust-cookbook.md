---
schema: 1
depot: braintrustdata/braintrust-cookbook
source_readme_sha: a4d68742b9500b5d
ecrite_le: 2026-11-25
nature: liste
deploiement: autre
prerequis: [compte à créer, clé d'API]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS, matière insuffisante]
verdict: surveiller
---

# braintrustdata/braintrust-cookbook

> Recueil de recettes d'évaluation de modèles de langage avec Braintrust, en notebooks, agents et applications.

## Le problème
Évaluer un LLM ou un agent demande des exemples concrets plutôt que la seule documentation de l'outil.

## Ce que ça fait vraiment
Le README est vide ; la description vient de l'architecture. On y trouve des notebooks (SimpleQA, Text2SQL), des agents TypeScript avec évaluations (AgentBehavior, AgentWhileLoop) et des applications complètes (RAG temps réel, recherche approfondie Temporal). Un `registry.yaml` liste les exemples et un Makefile outille le tout.

## Comment c'est branché
```mermaid
flowchart TD
  reg["registry.yaml"] --> ab["examples/AgentBehavior/agent.ts"]
  reg --> sq["examples/SimpleQA/SimpleQA.ipynb"]
  ab --> ev["examples/AgentBehavior/verify.eval.ts"]
  aw["examples/AgentWhileLoop/agent.eval.ts"] --> ev
  mk["Makefile"] --> reg
```

## Essayer
Aucune commande documentée dans le README.

## Coût et pièges
Un compte Braintrust et des clés d'API de modèles sont probablement nécessaires (non documenté). Licence présente mais non identifiée.

## Ce que ce n'est pas
Pas un outil installable : c'est un recueil d'exemples liés à la plateforme Braintrust.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : source d'exemples d'évaluation de LLM et d'agents utile à un profil IA, à condition d'accepter Braintrust.

