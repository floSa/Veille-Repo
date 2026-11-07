---
schema: 1
depot: mikeroyal/Self-Hosting-Guide
source_readme_sha: 9d9597a2083cf4a0
ecrite_le: 2026-11-07
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, dernier commit ancien, mainteneur unique]
verdict: surveiller
---

# mikeroyal/Self-Hosting-Guide

> Liste commentée d'outils pour s'auto-héberger : conteneurs, CI/CD, forges Git, serveurs web, LLM locaux.

## Le problème
Choisir parmi des centaines d'outils auto-hébergés sans point de départ organisé.

## Ce que ça fait vraiment
Un unique document markdown organisé en sections : conteneurs (Docker, Podman, Portainer, Dozzle, Watchtower), CI/CD (Drone, Woodpecker), développement et forges Git (Gitea, GitLab), serveurs web (Caddy, Nginx, Traefik), LLM locaux (llama.cpp, ollama, LocalAI). Des exemples de lancement de Chatbot UI et MiniGPT-4 sont inclus. Le texte fourni au bloc est tronqué avant la fin.

## Comment c'est branché
```mermaid
flowchart TD
  A["Self Hosting Guide"] --> B["Conteneurs"]
  A --> C["CI/CD"]
  A --> D["Développement / Git"]
  A --> E["Serveurs web"]
  A --> F["LLM"]
```

## Essayer
```bash
docker build -t chatgpt-ui .
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 chatgpt-ui
```

## Coût et pièges
Gratuit à lire ; chaque outil listé a ses coûts. L'exemple ChatGPT demande une clé OpenAI à ta charge ; MiniGPT-4 annonce environ 23 Go de GPU.

## Ce que ce n'est pas
Pas un tutoriel pas à pas ni une sélection testée. Dernier push en 2025-06-27 : certaines entrées peuvent être périmées.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller comme annuaire de départ pour auto-héberger une plateforme ; sans licence et sans mise à jour récente, vérifier chaque outil à la source.

