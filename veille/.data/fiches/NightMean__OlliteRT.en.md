# NightMean/OlliteRT

> Android app that turns a phone into an OpenAI-compatible LLM server on the local network.

## The problem
Hosting a local LLM requires a dedicated server, while an old phone sits unused.

## What it actually does
Loads `.litertlm` models through Google's LiteRT-LM runtime (GPU or CPU) and serves the OpenAI, Anthropic Messages and transcription APIs. Built-in benchmark, logs, Prometheus metrics, token authentication, API for Home Assistant. One model and one request at a time.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
  A[Client OpenAI : Open WebUI / Python] --> B[Serveur Ktor sur le téléphone]
  B --> C[LiteRT-LM]
  C --> D[Modèle .litertlm]
  B --> E[/metrics Prometheus]
```

## Trying it
```bash
# 1. installer l'APK  2. télécharger un modèle  3. Start Server
# endpoint : http://PHONE_IP:8000/v1
```

## Cost and gotchas
Android 12 or later, arm64, 6 GB of RAM minimum. No GGUF. Token counts are estimated. The phone heats up during prolonged use.

## What it is not
It is not a concurrent server: one model, requests queued. It is not as complete as Ollama on a computer.

## Alternatives
No alternative named in the README.

## For you
Watch: a practical curiosity for exposing a small local model on your network, too limited for a serious workload.
