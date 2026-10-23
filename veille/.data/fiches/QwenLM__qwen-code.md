---
schema: 1
depot: QwenLM/qwen-code
source_readme_sha: 4a0ebab59ff1b820
ecrite_le: 2026-10-23
nature: outil
deploiement: npm
prerequis: [Node, clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# QwenLM/qwen-code

> Agent de code open source pour terminal, éditeur, bureau, navigateur et messageries.

## Le problème
Les agents de code populaires sont liés à un fournisseur ; il faut un agent compatible avec plusieurs protocoles et modèles locaux.

## Ce que ça fait vraiment
Agent en ligne de commande (`qwen`) avec sous-agents, équipes d'agents, mémoire et compétences automatiques, MCP, mode plan, hooks et LSP. Protocoles OpenAI, Anthropic, Gemini, Qwen et modèles locaux (Ollama, vLLM). Autres surfaces : application de bureau, interface Web (`qwen serve`, expérimental), plugins IDE, SDK TypeScript/Python/Java et canaux Telegram, DingTalk, WeChat, Feishu. Basé sur Gemini CLI v0.8.2 à l'origine.

## Comment c'est branché
```mermaid
graph LR
  A["Terminal CLI cli.ts"] --> B["Agent Session Session.ts"]
  B --> C["LLM Client baseLlmClient.ts"]
  C --> D["OpenAI Pipeline pipeline.ts"]
  B --> E["MCP Runtime mcp.ts"]
  F["Channel Runtime runtime.ts"] --> B
  G["ACP Bridge bridge.ts"] --> B
```

## Essayer
```bash
npm install -g @qwen-code/qwen-code@latest
cd /path/to/your-project
qwen
qwen -p "..."
```

## Coût et pièges
Node 22+ ; fournisseur et clé à configurer par `/auth`. Le script d'installation autonome est hébergé sur un stockage objet Alibaba Cloud. 2 055 issues ouvertes.

## Ce que ce n'est pas
Le tableau de parité avec Claude Code est une comparaison déclarée par l'équipe. L'évaluation SWE-bench citée (76,4 à 77,8 %) repose sur un modèle précis qui n'est pas forcément disponible chez toi.

## Alternatives
Claude Code (comparaison du README) ; Gemini CLI (origine du code).

## Pour toi
À surveiller : agent multi-protocole pertinent si tu veux tester des modèles ouverts dans un flux d'agent, avec beaucoup de surface expérimentale.

