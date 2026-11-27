# steven-jianhao-li/zotero-AI-Butler

> A Zotero plugin that has an LLM read and summarize PDFs, for researchers who accumulate papers.

## The problem
Papers pile up in Zotero unread, and manually sending each PDF to an AI is tedious. Forgotten summaries force you to reread everything.

## What it actually does
Scans new PDFs (option disabled by default), queues them and sends the text or the PDF in Base64 to the configured model. The result is stored as a Markdown note under the Zotero entry. Extras: multi-round deep reading, multi-paper literature review, mind map, "one-image summary" (poster generation), a sidebar with chat and LaTeX formulas. Editable prompts.

## How it is wired
```mermaid
flowchart LR
  Z["Entrée Zotero"] --> H["hooks.ts"]
  H --> Q["taskQueue.ts"]
  Q --> P["pdfExtractor.ts"]
  P --> L["llmService.ts"]
  L --> N["noteGenerator.ts"]
  N --> S["aiNoteService.ts"]
```

## Trying it
```bash
# Pas de ligne de commande : installation par fichier .xpi
# 1. Télécharger le .xpi depuis la page Releases du dépôt
# 2. Zotero > Outils > Plugins > glisser-déposer le .xpi
# 3. Configurer la clé d'API (Gemini recommandé) puis « Tester la connexion »
```
No shell command is documented.

## Cost and gotchas
You must provide an API key (OpenAI, Gemini, Anthropic, OpenAI-compatible, Volcengine, Ollama). The README warns that the image summary and the "multiple rounds" mode consume a lot of tokens; automatic image generation is disabled by default.

## What it is not
Not a hosted service: no model proxy is provided. PDFs go to the provider you choose (except local Ollama). The README is in Chinese first; note quality depends on the model and the prompts.

## Alternatives
- zotero-ainote: a project whose code served as a reference, cited in the README.

## For you
Worth watching: useful if you read many papers in Zotero and accept sending PDFs to an API; keep the AGPL license and the single maintainer in mind.
