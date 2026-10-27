---
schema: 1
depot: microsoft/semantic-kernel
source_readme_sha: 166fb81995eeeaf3
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: pip
prerequis: [clé d'API, version de Python]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# microsoft/semantic-kernel

> SDK Microsoft pour agents et systèmes multi-agents, désormais remplacé par Microsoft Agent Framework.

## Le problème
Orchestrer des LLM, des outils et des mémoires dans une appli demande beaucoup de code répétitif.

## Ce que ça fait vraiment
SDK Python, .NET et Java : agents de conversation avec plugins (fonctions natives, modèles de prompts, OpenAPI, MCP), connecteurs de modèles (OpenAI, Azure OpenAI, Hugging Face, Ollama, ONNX), bases vectorielles, un framework de processus et des systèmes multi-agents. Le README annonce que Microsoft Agent Framework 1.0 en est le successeur.

## Comment c'est branché
```mermaid
flowchart LR
  A["Application cliente"] --> B["Core Kernel"]
  B --> C["Service Connectors (LLM)"]
  B --> D["Memory / Vector Stores"]
  B --> E["Plugins / Agents"]
  B --> F["Template Engine"]
  B --> G["Process Orchestration"]
```

## Essayer
```bash
export AZURE_OPENAI_API_KEY=AAA....
export OPENAI_API_KEY=sk-...
pip install semantic-kernel
dotnet add package Microsoft.SemanticKernel
```

## Coût et pièges
Les appels aux modèles sont facturés par le fournisseur. L'avertissement du README indique que le projet cède la place à Agent Framework : risque de maintenance réduite.

## Ce que ce n'est pas
Pas le produit à privilégier pour un nouveau projet selon le README lui-même.

## Alternatives
Microsoft Agent Framework, successeur cité par le README.

## Pour toi
À surveiller : à n'utiliser que pour du code existant ; pour un nouveau projet, pars du successeur annoncé.

