---
schema: 1
depot: The-PR-Agent/pr-agent
source_readme_sha: 47903df85332f845
ecrite_le: 2026-11-06
nature: outil
deploiement: pip
prerequis: [clé d'API, version de Python]
cout: clé d'API à ta charge
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# The-PR-Agent/pr-agent

> Agent open source qui relit, décrit et améliore des pull requests avec un LLM, pour équipes de dev.

## Le problème
Les revues de PR sont lentes et le contexte d'un gros diff dépasse vite la fenêtre d'un modèle.

## Ce que ça fait vraiment
- Commandes `/review`, `/describe`, `/improve`, `/ask`, `/similar_issue`, en commentaire de PR ou en CLI.
- Chaque outil fait un seul appel LLM (~30 s d'après le README).
- Compresse les gros PR dans le budget de jetons avant l'appel.
- Prompts et réglages en TOML, surchargeables par dépôt. Modèles via LiteLLM : OpenAI, Claude, Gemini, Ollama, etc.

## Comment c'est branché
```mermaid
flowchart TD
  E["cli.py / action.yaml / github_app.py"] --> A{{"PRAgent (pr_agent.py)"}}
  A --> T["pr_reviewer.py / pr_code_suggestions.py / pr_description.py"]
  T --> P["pr_processing.py"]
  P --> G{{"git_provider.py"}}
  T --> L{{"litellm_ai_handler.py"}}
  A --> C["config_loader.py + configuration.toml"]
```

## Essayer
```bash
pip install "pr-agent[github]"
export OPENAI_KEY=your_key_here
pr-agent --pr_url https://github.com/owner/repo/pull/123 review
```
Ou la GitHub Action `the-pr-agent/pr-agent@main` avec `OPENAI_KEY` et `GITHUB_TOKEN`.

## Coût et pièges
Clé d'API LLM à ta charge. `/help_docs` est désactivé depuis v0.36.1 (fuite d'identifiants, #2445). Images Docker désormais sous `pragent/pr-agent` (0.34.2+).

## Ce que ce n'est pas
Pas l'offre commerciale de Qodo : projet legacy maintenu par la communauté. Le contenu du PR part chez le fournisseur LLM choisi.

## Alternatives
- Offre Qodo pour l'open source : citée par le README comme plus riche et contextuelle.

## Pour toi
À adopter si tu veux une revue de PR automatisée et auto-hébergée, modèle au choix (y compris local via Ollama) ; MIT et activité récente.

