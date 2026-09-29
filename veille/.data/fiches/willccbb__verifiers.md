---
schema: 1
depot: willccbb/verifiers
source_readme_sha: c9014d16fcb4d6ff
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée, matière insuffisante]
verdict: surveiller
---

# willccbb/verifiers

> Bibliothèque pour créer des environnements d'entraînement et d'évaluation de LLM, liée à un hub d'environnements.

## Le problème
Entraîner ou évaluer un LLM par renforcement demande des environnements reproductibles avec récompenses vérifiables.

## Ce que ça fait vraiment
README minimal (moins de 800 caractères) : il annonce une bibliothèque d'environnements, intégrée à l'Environments Hub, à prime-rl et à une plateforme d'entraînement hébergée. D'après la description du code : abstractions Environment, Parser, Rubric, un GRPOTrainer et un client vLLM. Le README ne détaille rien de plus.

## Comment c'est branché
```mermaid
flowchart LR
  USER["Scripts utilisateur"] --> ENV["verifiers/envs"]
  ENV --> PARS["verifiers/parsers"]
  ENV --> RUB["verifiers/rubrics"]
  ENV --> INF["verifiers/inference vLLM"]
  RUB --> TRAIN["verifiers/trainers GRPO"]
```

## Essayer
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv tool install prime
```

## Coût et pièges
Non documenté dans le README. L'écosystème mentionné (Hosted Training) est une plateforme hébergée, sans tarif indiqué.

## Ce que ce n'est pas
Ce n'est pas documenté ici : le README renvoie aux docs et à AGENTS.md. Ne pas déduire d'API depuis ce texte.

## Alternatives
- prime-rl : le cadre d'entraînement cité par le README, avec lequel verifiers s'intègre.

## Pour toi
À surveiller : sujet pertinent pour le RL sur LLM, mais matière insuffisante et licence non déclarée pour trancher davantage.
