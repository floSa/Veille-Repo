---
schema: 1
depot: facebookresearch/ParlAI
source_readme_sha: 91034c89dead0e55
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: pip
prerequis: [version de Python, GPU]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [archivé]
verdict: ignorer
---

# facebookresearch/ParlAI

> Cadre Python pour entraîner et évaluer des modèles de dialogue sur plus de 100 jeux de données.

## Le problème
Comparer des modèles de dialogue exige des jeux de données hétérogènes et des protocoles d'évaluation distincts.

## Ce que ça fait vraiment
Fournit une API commune pour plus de 100 jeux de données (PersonaChat, SQuAD, etc.), des modèles de référence et préentraînés, des scripts d'entraînement et d'évaluation, ainsi que l'intégration d'Amazon Mechanical Turk et de Facebook Messenger. Les données se téléchargent dans `~/ParlAI/data`.

## Comment c'est branché
```mermaid
flowchart LR
  R[Chercheur] --> PA[params.py + opt.py]
  PA --> W[worlds.py]
  W --> T[teachers.py : jeux de données]
  W --> AG[agents.py + torch_agent.py]
  AG --> RAG[rag.py + retrievers.py]
  W --> ME[metrics.py]
```

## Essayer
```bash
python3.8 -m venv venv
venv/bin/pip install parlai
parlai display_data -t squad
parlai eval_model -m ir_baseline -t personachat -dt valid
```

## Coût et pièges
Gratuit. Python 3.8+, PyTorch 1.6+, Windows non supporté. L'installation depuis les sources peut échouer sur PyTorch.

## Ce que ce n'est pas
Le dépôt est archivé : plus de corrections à attendre. Il date d'avant les LLM modernes et ne les couvre pas.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À ignorer : archivé et antérieur aux LLM actuels ; à ne consulter que pour d'anciens jeux de données de dialogue.

