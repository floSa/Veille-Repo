---
schema: 1
depot: mpfaffenberger/code_puppy
source_readme_sha: 6e2aa8707ec280dc
ecrite_le: 2026-09-29
nature: outil
deploiement: pip
prerequis: [clé d'API, version de Python]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# mpfaffenberger/code_puppy

> Agent de code en terminal, multi-fournisseurs et personnalisable, pour qui veut éviter les IDE payants.

## Le problème
Les IDE assistés par IA restreignent l'accès aux modèles et augmentent leurs prix, selon l'auteur.

## Ce que ça fait vraiment
Agent CLI avec outils fichiers, grep et shell, agents Python ou JSON (`/agent`), règles `AGENTS.md`, commandes slash personnalisées, serveurs MCP, distribution round-robin de modèles et catalogue de plus de 65 fournisseurs via models.dev. Un plugin DBOS optionnel journalise les runs pour les reprendre. Sessions, undo et hooks sont présents dans le code.

## Comment c'est branché
```mermaid
flowchart LR
  A["CLI Entrypoint (main.py)"] --> B["Command Router"]
  B --> C["Agent Manager"]
  C --> D["Tool Registry"]
  C --> E["Model Factory"]
  E --> F["Provider Clients"]
  C --> G["MCP Manager"]
  C --> H["Session Storage"]
```

## Essayer
```bash
uvx code-puppy -i
pip install "code-puppy[durable]"
/add_model
/agent agent-creator
```

## Coût et pièges
Python 3.11+ et une clé du fournisseur choisi (OpenAI, Anthropic, Gemini, Cerebras, Ollama…) à votre charge. Le README se contredit sur DBOS : « désactivé par défaut » d'un côté, « activé par défaut » de l'autre. 197 issues ouvertes.

## Ce que ce n'est pas
Pas un IDE. L'affirmation « zéro télémétrie » est une déclaration de l'auteur ; vos prompts partent chez le fournisseur de modèle sauf serveur local.

## Alternatives
- Windsurf et Cursor : IDE complets, mais c'est justement ce que l'auteur voulait éviter (prix, accès aux modèles).

## Pour toi
À surveiller : agent de code ouvert et multi-modèles, utile hors des IDE payants, mais tenu par une seule personne avec un tracker chargé.
