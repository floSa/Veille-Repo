---
schema: 1
depot: run-llama/liteparse
source_readme_sha: 15d50a0926abad24
ecrite_le: 2026-10-25
nature: outil
deploiement: npm
prerequis: [Node, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: adopter
---

# run-llama/liteparse

> Analyseur PDF local rapide, sans LLM, qui rend texte, JSON avec boîtes englobantes ou Markdown.

## Le problème
Alimenter un RAG exige de convertir des PDF en texte structuré sans payer un parseur cloud ni lancer un modèle.

## Ce que ça fait vraiment
Noyau Rust sur PDFium, environ 2–5 ms par page. OCR sélectif (Tesseract intégré ou serveur HTTP type EasyOCR/PaddleOCR), reconstruction de la mise en page, sorties texte, JSON avec boîtes et Markdown par heuristiques. Convertit aussi les formats bureautiques via LibreOffice. Une commande `is-complex` signale les pages nécessitant de l'OCR.

## Comment c'est branché
```mermaid
flowchart LR
  A[Entrée PDF/Office] --> B[Input conversion conversion.rs]
  B --> C[Native extraction extract.rs]
  C --> D[OCR abstraction ocr/mod.rs]
  D --> E[OCR reconciliation ocr_merge.rs]
  E --> F[Geometry projection projection.rs]
  F --> G[Output renderers]
```

## Essayer
```bash
npm i -g @llamaindex/liteparse
lit parse document.pdf --format markdown -o output.md
lit is-complex document.pdf
lit screenshot document.pdf -o ./screenshots
```

## Coût et pièges
Gratuit, local. LibreOffice requis pour les formats Office. Les tableaux denses, colonnes multiples et scans restent faibles : le README oriente vers LlamaParse (cloud, payant).

## Ce que ce n'est pas
Pas un parseur à modèles : scores de graphiques proches de zéro, mathématiques à 0 % sur olmOCR-bench. Benchmarks produits par l'auteur.

## Alternatives
- LlamaParse : plus précis sur documents difficiles, mais cloud.
- opendataloader, pdf-inspector, markitdown : concurrents locaux comparés dans le README.

## Pour toi
À adopter comme premier étage d'un pipeline RAG sur PDF natifs : rapide, local, avec un détecteur pour router les documents complexes ailleurs.

