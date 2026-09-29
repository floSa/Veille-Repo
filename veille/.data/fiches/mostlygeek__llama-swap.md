---
schema: 1
depot: mostlygeek/llama-swap
source_readme_sha: 1aa3290daaca64f7
ecrite_le: 2026-09-28
nature: outil
deploiement: binaire
prerequis: [GPU]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# mostlygeek/llama-swap

> Proxy Go qui charge et décharge à la volée le bon serveur d'inférence local.

## Le problème
Une machine ne tient qu'un ou deux modèles en mémoire, mais les clients en demandent dix.
Démarrer et arrêter `llama-server` à la main à chaque changement de modèle n'est pas tenable.

## Ce que ça fait vraiment
Il lit le champ `model` d'une requête OpenAI-compatible, démarre la configuration correspondante et remplace le serveur amont si ce n'est pas le bon — c'est le « swap ».
Il couvre les endpoints OpenAI (`chat/completions`, `responses`, `embeddings`, `audio/speech`, `images/generations`), Anthropic (`v1/messages`), ceux de llama-server (`rerank`, `infill`, `props`) et SDAPI de stable-diffusion.cpp.
La configuration minimale est un `cmd` par modèle avec un `${PORT}` auto-assigné ; s'ajoutent `ttl` pour décharger après inactivité, `matrix` pour faire tourner plusieurs modèles ensemble, `hooks`, `macros`, `aliases` et des filtres de requête.
Une UI web offre playground, métriques de tokens, inspection des requêtes, chargement manuel et streaming de logs ; `/metrics` sort du Prometheus.

## Comment c'est branché
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

## Essayer
```bash
docker pull ghcr.io/mostlygeek/llama-swap:unified-cuda13
docker run -it --rm --runtime nvidia -p 9292:8080 \
 -v /path/to/models:/models \
 -v /path/to/custom/config.yaml:/etc/llama-swap/config/config.yaml \
 ghcr.io/mostlygeek/llama-swap:unified-cuda13
```

## Coût et pièges
Gratuit, un binaire, zéro dépendance. Le piège documenté : garder `LLAMA_SWAP_LISTEN` sur `0.0.0.0` quand tu publies un port, sinon `localhost:8080` refuse la connexion.
Derrière nginx, il faut couper `proxy_buffering` sur les endpoints de streaming, sinon le SSE casse.

## Ce que ce n'est pas
Ce n'est pas un moteur d'inférence : il lance le tien. Ce n'est pas réservé à llama.cpp non plus, mais c'est là qu'il est le mieux supporté — vLLM et tabbyAPI sont recommandés via Docker/Podman pour le SIGTERM.
L'image « legacy » n'embarque ni génération d'image, ni voix, ni ik-llama-server.

## Alternatives
Aucune alternative n'est nommée dans le README.

## Pour toi
La bonne pièce si tu fais tourner plusieurs modèles locaux sur une seule machine : un binaire, un YAML, et les endpoints ne bougent plus.
