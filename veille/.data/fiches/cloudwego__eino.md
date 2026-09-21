---
schema: 1
depot: cloudwego/eino
source_readme_sha: 9f357f5737206307
ecrite_le: 2026-09-21
nature: bibliothèque
deploiement: autre
prerequis: [clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# cloudwego/eino

> Framework Go de développement d'applications LLM, agents et workflows composables.

## Le problème
Les frameworks LLM sont pensés pour Python ; en Go il faut recoder l'orchestration, le streaming et
les abstractions de composants.

## Ce que ça fait vraiment
Eino s'inspire de LangChain et de Google ADK tout en suivant les conventions Go. Il fournit des
composants réutilisables (`ChatModel`, `Tool`, `Retriever`, `Embedding`, `ChatTemplate`) avec
implémentations officielles pour OpenAI, Claude, Gemini, Ark, Ollama, Elasticsearch. Son ADK
construit des agents avec usage d'outils, coordination multi-agents, interruption et reprise pour le
human-in-the-loop ; `ChatModelAgent` gère la boucle ReAct en interne, `DeepAgent` décompose les
tâches et délègue à des sous-agents. Le paquet `compose` assemble graphes et workflows, qui peuvent
à leur tour être exposés comme outils d'agent via `graphtool`. Le streaming est géré automatiquement
par le framework entre les nœuds, et des callbacks (OnStart, OnEnd, OnError…) injectent logs,
traces et métriques.

## Comment c'est branché
```mermaid
flowchart LR
  model[ChatModel OpenAI/Claude/Ollama] --> agent[adk.ChatModelAgent]
  tools[tool.BaseTool] --> agent
  agent --> runner[adk.NewRunner → iter]
  graph[compose.NewGraph] --> nodes[Lambda · ChatModel · format]
  graph --> gt[graphtool: graphe exposé en outil]
  gt --> agent
  agent --> cb[callbacks: log · trace · metrics]
```

## Essayer
```bash
golangci-lint run ./...
```
Aucune commande d'installation n'est documentée ; le README donne du code Go
(`openai.NewChatModel`, `adk.NewChatModelAgent`, `compose.NewGraph`) et renvoie au manuel
utilisateur et au guide de démarrage rapide.

## Coût et pièges
Go 1.18 minimum. Clé d'API du fournisseur à ta charge (`OPENAI_API_KEY` dans l'exemple). DeepAgent
peut exécuter des commandes shell, du code Python et des recherches web : les outils qu'on lui
confie définissent son rayon d'action.

## Ce que ce n'est pas
Ce dépôt ne contient que les définitions de types, le mécanisme de streaming, les abstractions de
composants, l'orchestration, les implémentations d'agents et les aspects. Les implémentations
concrètes de composants sont dans EinoExt, le débogage visuel dans Eino Devops, les applications
d'exemple dans EinoExamples.

## Alternatives
Le README cite ses sources d'inspiration : LangChain et Google ADK, dont il reprend les idées en les
adaptant aux conventions Go.

## Pour toi
À regarder seulement si ta plateforme est en Go ; côté Python l'écosystème est plus riche et Eino
n'apporte rien de spécifique à la data.
