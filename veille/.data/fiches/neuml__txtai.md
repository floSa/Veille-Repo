---
schema: 1
depot: neuml/txtai
source_readme_sha: bb16e5a56ca961c7
ecrite_le: 2026-09-21
nature: bibliothèque
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# neuml/txtai

> Framework tout-en-un pour recherche sémantique, orchestration de LLM et workflows de modèles.

## Le problème
Monter un RAG demande d'assembler un index vectoriel, une base relationnelle, un graphe et une
couche de prompts, chacun avec sa propre bibliothèque.

## Ce que ça fait vraiment
Le composant central est une base d'embeddings : union d'index vectoriels (creux et denses), de
réseaux en graphe et de bases relationnelles. Elle permet la recherche vectorielle avec SQL,
stockage d'objets, modélisation de sujets, analyse de graphe et indexation multimodale (texte,
documents, audio, images, vidéo). Par-dessus : des pipelines pilotés par modèles de langage
(prompts LLM, question-réponse, étiquetage, transcription, traduction, résumé), des workflows qui
les enchaînent, et des agents bâtis sur smolagents — compatibles Hugging Face, llama.cpp, OpenAI,
Claude et AWS Bedrock via LiteLLM, avec prise en charge des fichiers `agents.md` et `skill.md`. API
web et MCP incluses, avec liaisons JavaScript, Java, Rust et Go.

## Comment c'est branché
```mermaid
flowchart LR
  data[texte · documents · audio · images] --> emb[base d'embeddings]
  emb --> vec[index vectoriels creux + denses]
  emb --> graph[réseau en graphe]
  emb --> sql[base relationnelle / SQL]
  emb --> pipe[pipelines LLM · QA · résumé]
  pipe --> wf[workflows]
  wf --> agents[agents smolagents]
  emb --> api[API web + MCP]
```

## Essayer
```bash
pip install txtai
```
```python
import txtai
embeddings = txtai.Embeddings()
embeddings.index(["Correct", "Not what we hoped"])
embeddings.search("positive", 1)
```
```bash
CONFIG=app.yml uvicorn "txtai.api:app"
curl -X GET "http://localhost:8000/search?query=positive"
```

## Coût et pièges
Gratuit, Apache 2.0, Python 3.10+. L'empreinte de départ est faible mais les dépendances
s'ajoutent par composant. Les modèles recommandés (all-MiniLM-L6-v2, Gemma 4 31B, Whisper, BLIP)
se téléchargent depuis le Hub — prévoir le disque et, pour les gros LLM, le GPU. NeuML, la société
derrière, vend du conseil et prépare une offre hébergée `txtai.cloud`.

## Ce que ce n'est pas
Ce n'est pas une base vectorielle nue : l'index n'est qu'un des trois composants de la base
d'embeddings. Ce n'est pas un service managé : tout tourne en local par défaut, ce que le README
revendique comme un avantage.

## Alternatives
Aucun concurrent nommé ; le README liste plutôt les applications construites dessus (`rag`,
`ncoder`, `paperai`, `annotateai`) et les frameworks intégrés (smolagents, LiteLLM, llama.cpp).

## Pour toi
Le meilleur rapport couverture/effort pour un RAG local : tu obtiens index, graphe, SQL et agents
sans coller quatre bibliothèques, et plus de 70 notebooks pour démarrer.
