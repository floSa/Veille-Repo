# run-llama/liteparse

> Fast local PDF parser, no LLM, that outputs text, JSON with bounding boxes or Markdown.

## The problem
Feeding a RAG requires converting PDFs into structured text without paying for a cloud parser or running a model.

## What it actually does
Rust core on PDFium, about 2-5 ms per page. Selective OCR (built-in Tesseract or HTTP server such as EasyOCR/PaddleOCR), layout reconstruction, text output, JSON with boxes and Markdown through heuristics. Also converts office formats via LibreOffice. An `is-complex` command flags pages that need OCR.

## How it is wired
```mermaid
flowchart LR
  A[Entrée PDF/Office] --> B[Input conversion conversion.rs]
  B --> C[Native extraction extract.rs]
  C --> D[OCR abstraction ocr/mod.rs]
  D --> E[OCR reconciliation ocr_merge.rs]
  E --> F[Geometry projection projection.rs]
  F --> G[Output renderers]
```

## Trying it
```bash
npm i -g @llamaindex/liteparse
lit parse document.pdf --format markdown -o output.md
lit is-complex document.pdf
lit screenshot document.pdf -o ./screenshots
```

## Cost and gotchas
Free, local. LibreOffice required for Office formats. Dense tables, multiple columns and scans remain weak: the README points to LlamaParse (cloud, paid).

## What it is not
Not a model-based parser: chart scores close to zero, math at 0% on olmOCR-bench. Benchmarks produced by the author.

## Alternatives
- LlamaParse: more accurate on difficult documents, but cloud.
- opendataloader, pdf-inspector, markitdown: local competitors compared in the README.

## For you
Adopt it as the first stage of a RAG pipeline on native PDFs: fast, local, with a detector to route complex documents elsewhere.
