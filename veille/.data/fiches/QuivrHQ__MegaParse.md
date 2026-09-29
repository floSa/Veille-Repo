---
schema: 1
depot: QuivrHQ/MegaParse
source_readme_sha: ee53de345e82fb0d
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [clé d'API, version de Python, service tiers]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: surveiller
---

# QuivrHQ/MegaParse

> Parseur de documents (PDF, Word, PowerPoint, Excel, CSV) vers du texte structuré, avec option vision LLM.

## Le problème
Extraire proprement tableaux, titres et mise en page de documents variés avant un pipeline RAG.

## Ce que ça fait vraiment
Bibliothèque Python avec plusieurs parseurs (unstructured, doctr, LlamaParse, MegaParse Vision), détection de mise en page par modèles ONNX, formateurs de tableaux. Existe aussi en API (Makefile, docs sur localhost:8000). Le README publie un benchmark interne où MegaParse Vision obtient 0,87 de similarité.

## Comment c'est branché
```mermaid
flowchart LR
  C[Client / SDK] --> API[API Service]
  API --> I[Document Ingestion]
  I --> L[Layout Detection]
  L --> P[Parsing Modules]
  P --> F[Formatters]
  P --> LLM[Language Model Integration]
```

## Essayer
```bash
pip install megaparse
make dev
python evaluations/script.py
```

## Coût et pièges
Poppler et Tesseract à installer (libmagic sur Mac). Clé OpenAI ou Anthropic pour le mode vision, donc envoi de tes documents à un tiers. Benchmark fourni par les auteurs.

## Ce que ce n'est pas
Pas garanti « sans perte » : c'est un objectif annoncé. Les chantiers (post-traitement modulaire, sortie structurée) sont encore en cours.

## Alternatives
- unstructured et llama_parser : comparés dans le benchmark du README.

## Pour toi
À surveiller : intéressant en amont d'un RAG, à tester sur tes propres documents avant de croire le benchmark.
