# presenton/presenton

> Self-hosted presentation generator, under Apache 2.0, exporting truly editable PPTX.

## The problem
AI slide generators are closed SaaS products: data sent elsewhere, mandatory subscription,
frozen export, and no way to impose your own branding or template.

## What it actually does
Generates a presentation from a prompt, an imported document or a PowerPoint used as a template,
then exports to editable PPTX or PDF. Customizable HTML/Tailwind templates, built-in MCP server,
per-presentation memory (Mem0 + Qdrant + local SQLite), image generation (Pexels, Pixabay, DALL-E 3,
Gemini Flash, ComfyUI), multi-user workspaces with an admin panel. Interchangeable model providers:
OpenAI, Gemini, Vertex, Azure, Bedrock, Anthropic, Ollama, LM Studio, compatible endpoints.

## How it is wired
```mermaid
flowchart LR
    Entree[Prompt ou document] --> FastAPI[Backend FastAPI]
    FastAPI --> LLM[Fournisseur LLM choisi]
    FastAPI --> Images[Fournisseur d'images]
    LLM --> Template[Template HTML/Tailwind]
    Images --> Template
    Template --> Export[PPTX / PDF]
    MCP[/mcp] --> FastAPI
```

## Trying it
```bash
docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest
```

## Cost and gotchas
Apache 2.0 and BYOK: you pay for your model and image calls. Anonymous telemetry is on by default,
to be turned off via `DISABLE_ANONYMOUS_TRACKING=true`. The "Community" gallery calls a cloud service:
`PRESENTON_COMMUNITY_ENABLED=false` in an isolated environment. Separate Cloud and Enterprise offerings.

## What it is not
Not free end to end if you do not host the model. Not a full PowerPoint editor.
The configuration surface is huge (dozens of environment variables): a clean deployment
takes time. README truncated at the source: the API/MCP part is not complete here.

## Alternatives
- **Ollama / LM Studio** as a local backend, if privacy matters more than quality.

## For you
The only credible candidate for industrializing decks without sending the sources to a SaaS.
