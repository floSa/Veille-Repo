---
schema: 1
depot: ash-project/ash_ai
source_readme_sha: 6dabdd87f4ad6ca0
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [clé d'API, service tiers]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: communauté
alertes: [licence non déclarée]
verdict: surveiller
---

# ash-project/ash_ai

> Extension Elixir pour le framework Ash : exposer des actions en outils LLM et en serveur MCP.

## Le problème
Brancher un LLM sur les actions d'une application Ash demande de réécrire les outils, l'authentification et la boucle d'appels à la main.

## Ce que ça fait vraiment
Un DSL déclare des outils sur les ressources Ash. Ils sont exposés au LLM par la boucle d'outils (ToolLoop, ReqLLM) et aux clients externes par un serveur MCP protégé par OAuth 2.1 ou clés d'API. Elle ajoute des actions adossées à un prompt, des actions d'évaluation, des embeddings (vectorisation) et un chat généré.

## Comment c'est branché
```mermaid
flowchart TD
  a1["lib/ash_ai/dsl.ex"] --> a2["lib/ash_ai/tool/builder.ex"]
  a2 --> a3["lib/ash_ai/tool/execution.ex"]
  l1["lib/ash_ai/tool_loop.ex"] --> a3
  l2["lib/ash_ai/actions/prompt.ex"] --> l1
  m1["lib/ash_ai/mcp/router.ex"] --> m2["lib/ash_ai/mcp/server.ex"]
  m3["lib/ash_ai/mcp/oauth.ex"] --> m1
  m2 --> a3
```

## Essayer
```bash
mix igniter.install ash_ai
mix ash_ai.gen.mcp
mix ash_ai.gen.chat --live
```

## Coût et pièges
Clé d'API du fournisseur LLM (OpenAI par défaut, via ReqLLM) à ta charge ; Postgres et Phoenix pour le chat généré. L'en-tête du README indique MIT mais le catalogue ne voit aucune licence.

## Ce que ce n'est pas
Pas un framework d'agents indépendant : il ne sert que dans une application Ash/Elixir. Le chat généré est présenté comme expérimental.

## Alternatives
Aucune alternative nommée (migration depuis LangChain vers ReqLLM mentionnée).

## Pour toi
À surveiller : bon exemple de serveur MCP avec OAuth, mais utile seulement si tu travailles déjà en Elixir/Ash.

