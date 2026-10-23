---
schema: 1
depot: VoltAgent/awesome-claude-code-subagents
source_readme_sha: e1a0b3654ec9ba1b
ecrite_le: 2026-10-23
nature: liste
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# VoltAgent/awesome-claude-code-subagents

> Catalogue de plus de 161 sous-agents Claude Code en dix catégories, installables en plugins.

## Le problème
Écrire soi-même des sous-agents spécialisés (revue, sécurité, DevOps, data) prend du temps et diverge d'un projet à l'autre.

## Ce que ça fait vraiment
Un dépôt de fichiers markdown (frontmatter `name`, `description`, `tools`, `model`) répartis en dix catégories, dont data et IA (ml-engineer, mlops-engineer, llm-architect, prompt-engineer). Installation par marketplace de plugins Claude Code, copie manuelle vers `~/.claude/agents/`, script interactif ou `subagent-catalog`. Chaque agent route vers opus, sonnet ou haiku.

## Comment c'est branché
```mermaid
graph LR
  A["Agent definitions categories/*.md"] --> B["Plugin manifest plugin.json"]
  B --> C["Marketplace marketplace.json"]
  A --> D["Install script install-agents.sh"]
  C --> E["Local Claude Code agents"]
  D --> E
  F["Catalog skill search.md"] --> A
```

## Essayer
```bash
claude plugin marketplace add VoltAgent/awesome-claude-code-subagents
claude plugin install voltagent-data-ai
./install-agents.sh
```

## Coût et pièges
Gratuit. Les agents consomment les jetons de ton propre abonnement ou clé. La section finale du README contient du contenu sponsorisé (EveryFeed).

## Ce que ce n'est pas
Pas un framework d'orchestration : un catalogue de prompts. Les agents « méta » fonctionnent mieux avec d'autres catégories installées. La qualité varie d'un agent à l'autre, rien n'est mesuré.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pioche utile pour les agents data/MLOps, mais installe-les un par un après relecture.

