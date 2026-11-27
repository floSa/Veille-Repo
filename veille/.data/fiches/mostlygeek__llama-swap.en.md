# mostlygeek/llama-swap

> Go proxy that loads and unloads the right local inference server on the fly.

## The problem
A machine holds only one or two models in memory, but clients ask for ten.
Starting and stopping `llama-server` by hand at every model change is not sustainable.

## What it actually does
It reads the `model` field of an OpenAI-compatible request, starts the matching configuration and replaces the upstream server if it is not the right one — that is the "swap".
It covers the OpenAI endpoints (`chat/completions`, `responses`, `embeddings`, `audio/speech`, `images/generations`), Anthropic (`v1/messages`), those of llama-server (`rerank`, `infill`, `props`) and the SDAPI of stable-diffusion.cpp.
The minimal configuration is one `cmd` per model with an auto-assigned `${PORT}`; on top come `ttl` to unload after inactivity, `matrix` to run several models together, `hooks`, `macros`, `aliases` and request filters.
A web UI offers a playground, token metrics, request inspection, manual loading and log streaming; `/metrics` outputs Prometheus.

## How it is wired
```mermaid
graph TD
  A[client OpenAI / Anthropic] --> B[llama-swap]
  B --> C{champ model}
  C --> D[config.yaml — cmd + PORT]
  D --> E[llama-server / vllm / ComfyUI]
  B --> F[ttl → déchargement auto]
  B --> G[/ui, /logs/stream, /metrics]
  B --> H[matrix — modèles concurrents]
```

## Trying it
```bash
docker pull ghcr.io/mostlygeek/llama-swap:unified-cuda13
docker run -it --rm --runtime nvidia -p 9292:8080 \
 -v /path/to/models:/models \
 -v /path/to/custom/config.yaml:/etc/llama-swap/config/config.yaml \
 ghcr.io/mostlygeek/llama-swap:unified-cuda13
```

## Cost and gotchas
Free, one binary, zero dependencies. The documented gotcha: keep `LLAMA_SWAP_LISTEN` on `0.0.0.0` when you publish a port, otherwise `localhost:8080` refuses the connection.
Behind nginx, you must turn off `proxy_buffering` on streaming endpoints, otherwise SSE breaks.

## What it is not
It is not an inference engine: it launches yours. It is not limited to llama.cpp either, but that is where it is best supported — vLLM and tabbyAPI are recommended via Docker/Podman for SIGTERM.
The "legacy" image ships with neither image generation, nor voice, nor ik-llama-server.

## Alternatives
No alternative is named in the README.

## For you
The right piece if you run several local models on a single machine: one binary, one YAML, and the endpoints stop moving.
