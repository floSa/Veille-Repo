---
schema: 1
depot: aiming-lab/AutoResearchClaw
source_readme_sha: e83d072a1dc975d0
ecrite_le: 2026-09-29
nature: outil
deploiement: pip
prerequis: [clé d'API, Docker, version de Python]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: communauté
alertes: []
verdict: surveiller
---

# aiming-lab/AutoResearchClaw

> Pipeline d'agents qui transforme un sujet de recherche en article LaTeX avec expériences exécutées.

## Le problème
Revue de littérature, conception d'expériences, exécution, analyse et rédaction prennent des semaines, avec risque de références inventées.

## Ce que ça fait vraiment
Pipeline de 23 étapes : cadrage, collecte OpenAlex/Semantic Scholar/arXiv, hypothèses par débat multi-agents, génération de code.
Expériences en sandbox local, Docker ou SSH, détection GPU, réparation automatique ; décision PROCEED/REFINE/PIVOT.
Rédaction en gabarits NeurIPS/ICLR/ICML, vérification des citations sur 4 niveaux, garde anti-fabrication.
Modes humain-dans-la-boucle (co-pilot, gate-only…), budgets de coût ; LLM via API compatible OpenAI ou agent ACP (Claude Code, Codex…).

## Comment c'est branché
```mermaid
flowchart LR
  A[CLI cli.py] --> B[Pipeline runner runner.py]
  B --> C[Stages stages.py]
  C --> D[Literature __init__.py]
  C --> E[Experiment runtime __init__.py]
  C --> F[LLM layer __init__.py]
  C --> G[Paper verifier paper_verifier.py]
  B --> H[HITL __init__.py]
```

## Essayer
```bash
git clone https://github.com/aiming-lab/AutoResearchClaw.git
cd AutoResearchClaw
pip install -e .
researchclaw setup
researchclaw init
researchclaw run --config config.arc.yaml --topic "Your research idea" --auto-approve
```

## Coût et pièges
Appels LLM facturés (budget configurable) ; Docker et LaTeX vérifiés par `setup`. GPU utile pour les expériences.

## Ce que ce n'est pas
Pas un garant de validité scientifique : les articles restent à relire. Dépôt très jeune (mars 2026).

## Alternatives
- AI Scientist (Sakana AI) : pionnier cité comme inspiration.
- AutoResearch (Andrej Karpathy) : automatisation de bout en bout, citée aussi.

## Pour toi
À surveiller : l'idée d'outiller revue de littérature et baselines est utile, mais le « un sujet, un article » demande un contrôle humain serré.
