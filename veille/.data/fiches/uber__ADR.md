---
schema: 1
depot: uber/ADR
source_readme_sha: f28a5d6c252b7df4
ecrite_le: 2026-09-29
nature: outil
deploiement: autre
prerequis: [clé d'API, version de Python]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# uber/ADR

> Système de détection et réponse pour agents IA : capteur d'endpoints, benchmark d'attaques et détecteur.

## Le problème
Les agents de code (Claude Code, Cursor, Codex) exécutent des outils et des serveurs MCP sur les postes sans que la sécurité voie ce qu'ils font.

## Ce que ça fait vraiment
Le dépôt publie quatre briques : Discovery (inventaire d'applis IA et de serveurs MCP), Sensor (télémétrie normalisée depuis Claude Code, Cursor, Codex, Gemini CLI, etc.), ADR-Bench (300+ tâches, 134 serveurs MCP simulés, basé sur AgentDojo) et le détecteur double agent, avec LlamaFirewall comme alternative sans clé. La prévention et l'Explorer hors ligne ne sont pas publiés.

## Comment c'est branché
```mermaid
flowchart LR
  CLI[Sensor/adr_sensor/cli.py] --> Observer[observer.py]
  Observer --> Parsers[parsers par produit]
  Parsers --> Events[agent_event_schema.py]
  Detect[main_detector.py] --> Adr[adr_baseline.py]
  Adr --> Context[context_providers]
  Bench[main_benchmark.py] --> Suites[task suites AgentDojo]
```

## Essayer
```bash
git clone https://github.com/uber/ADR
cd ADR/Detection
uv sync
export ANTHROPIC_API_KEY="..." OPENAI_API_KEY="..."
```

## Coût et pièges
Le détecteur par défaut appelle les API Anthropic et OpenAI : coût à ta charge. Pour un essai sans clé, `--detector llamafirewall`. Les données du benchmark sont synthétiques (faux identifiants, injections de prompt) : usage défensif seulement.

## Ce que ce n'est pas
Pas un produit complet : la prévention est absente. Le README annonce 300+ tâches puis 304 dans le tableau ; le déploiement chez Uber n'est pas reproductible avec ce dépôt seul.

## Alternatives
LlamaFirewall (baseline fournie), AgentDojo (embarqué pour le benchmark).

## Pour toi
À surveiller : référence utile pour évaluer la sécurité d'agents IA (benchmark reproductible), à tester avant tout déploiement sur des postes.
