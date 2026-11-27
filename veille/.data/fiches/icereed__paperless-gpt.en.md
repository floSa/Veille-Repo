# icereed/paperless-gpt

> Companion to paperless-ngx that generates titles, tags and LLM-assisted OCR, for self-hosters.

## The problem
Sorting hundreds of scanned documents by hand takes hours.
Classic OCR fails on poor-quality scans, complex layouts and handwriting.

## What it actually does
LLM-enhanced OCR (OpenAI, Ollama, Mistral, Anthropic), or dedicated services: Google Document AI,
Azure Document Intelligence, a self-hosted Docling server.
Generates titles, tags, creation date, correspondents, and fills custom fields using
three write modes (append, update, replace). Produces searchable PDFs with a transparent text layer
positioned word by word, via hOCR. Prompts are editable from the web UI, with manual review
or automatic processing, and ad hoc analysis of a selection of documents with a free-form prompt.

## How it is wired
```mermaid
flowchart LR
  A[paperless-ngx API] --> B[paperless-gpt :8080]
  B --> C[OCR_PROVIDER llm / google_docai / azure / docling]
  C --> D[hOCR]
  D --> E[PDF couche de texte]
  E --> F[PDF_UPLOAD vers paperless-ngx]
  B --> G[LLM_PROVIDER titres / tags / champs]
  B --> H[/app/prompts UI web]
```

## Trying it
```bash
git clone https://github.com/icereed/paperless-gpt.git
mkdir prompts
docker build -t paperless-gpt .
docker run -d -e PAPERLESS_BASE_URL='http://your_paperless_ngx_url' -e PAPERLESS_API_TOKEN='your_paperless_api_token' -e LLM_PROVIDER='openai' -e LLM_MODEL='gpt-4o' -e OPENAI_API_KEY='your_openai_api_key' -v $(pwd)/prompts:/app/prompts -p 8080:8080 paperless-gpt
```

## Cost and gotchas
No built-in authentication: the UI and `/api/*` are open to anyone who can reach the port, and by default
it listens on all interfaces — so use an authenticated reverse proxy, a VPN, or nothing at all.
The LLM or Document AI bill is on you. `PDF_REPLACE: "true"` deletes the original after upload,
irreversibly. Text layer generation and hOCR only work with Google Document AI.
`OCR_LIMIT_PAGES` does not apply in `whole_pdf` mode.

## What it is not
It is not a document manager: it only works attached to a paperless-ngx instance.
It is not a chat over your documents — the README explicitly distances itself from that.
Metadata copying is partial: ID, date added, date modified, notes and fields
from other plugins do not carry over.

## Alternatives
Docling, cited as a self-hosted alternative to cloud OCR; Google Document AI, the only one that allows
searchable PDFs; Azure Document Intelligence for volume on structured documents.

## For you
Solid if you self-host paperless-ngx, but put it behind authentication before anything else.
