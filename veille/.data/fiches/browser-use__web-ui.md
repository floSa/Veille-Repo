---
schema: 1
depot: browser-use/web-ui
source_readme_sha: 5047bcf2f0e92f0d
ecrite_le: 2026-09-29
nature: app
deploiement: docker
prerequis: [clé d'API, version de Python]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# browser-use/web-ui

> Interface Gradio pour piloter un agent browser-use sur ton propre navigateur.

## Le problème
Tester un agent qui navigue sur le web sans écrire de code, avec ses propres sessions déjà ouvertes, n'est pas simple.

## Ce que ça fait vraiment
Une interface Gradio au-dessus de `browser-use`.
Elle accepte plusieurs LLM : Google, OpenAI, Azure, Anthropic, DeepSeek, Ollama.
Elle peut utiliser ton Chrome (`BROWSER_PATH`, `BROWSER_USER_DATA`), avec une session qui persiste et un enregistrement d'écran.
En mode Docker, un VNC sur le port 6080 permet de regarder l'agent travailler.

## Comment c'est branché
```mermaid
graph TD
  A[Gradio Web UI webui.py] --> B[Controller Layer]
  B --> C[Agent System]
  C --> D[Browser Manager]
  D --> E[Chrome/Browser Instance]
  C --> F[LLM Providers]
```

## Essayer
```bash
git clone https://github.com/browser-use/web-ui.git
uv venv --python 3.11
uv pip install -r requirements.txt
playwright install --with-deps
python webui.py --ip 127.0.0.1 --port 7788
docker compose up --build
```

## Coût et pièges
Les clés de LLM sont à ta charge. Le mot de passe VNC par défaut (`youvncpassword`) doit être changé.

## Ce que ce n'est pas
Ce n'est pas une bibliothèque : c'est une démo au-dessus de browser-use. Ce n'est pas fait pour tourner sans supervision en production.

## Alternatives
Le README ne nomme que `browser-use`, dont c'est l'interface.

## Pour toi
À surveiller : pratique pour prototyper un agent web en quelques minutes, mais le vrai sujet reste la bibliothèque browser-use qui est dessous.
