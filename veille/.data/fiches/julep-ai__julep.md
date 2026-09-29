---
schema: 1
depot: julep-ai/julep
source_readme_sha: 84f43874063f9448
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# julep-ai/julep

> Framework Python d'agents IA comme dataflows durables, reprenables et audités, pour équipes d'ingénierie.

## Le problème
Les boucles d'agents ad hoc plantent sans reprise, rejouent des effets de bord et sont difficiles à expliquer.

## Ce que ça fait vraiment
`@flow` compile du Python ordinaire en IR figé : outils, fonctions pures, reasoners, branches, fan-out, retries, timeouts.
Exécution locale (`dry_run` avec reasoners factices) ou durable sur Temporal ou DBOS ; outils non autorisés refusés.
CLI « dbt pour agents » : `ls`, `graph`, `run`, `lint`, `test`, `trace`, `deploy`, `plan/apply` vers Kubernetes/Helm.
Plan de contrôle FastAPI, coffre de secrets, instantanés MCP figés, export OTel/Langfuse.

## Comment c'est branché
```mermaid
flowchart LR
  F[@flow] --> IR[IR figé]
  IR --> D[deploy / dry_run]
  D --> T[Temporal / DBOS]
  T --> TL[Tools / MCP]
  T --> R[Reasoner LLM]
  D --> CLI[julep CLI]
  T --> O[Langfuse / OTel]
```

## Essayer
```bash
pip install --pre julep
julep ls
julep run triage --input '"TICKET-42"'
julep lint +triage
julep serve api --migrate
```

## Coût et pièges
Base gratuite ; la production implique Temporal, Postgres, S3, Kubernetes et clés LLM.
Julep 3 est une release candidate, réécriture sans migration depuis v1.

## Ce que ce n'est pas
Pas la plateforme d'API d'agents Julep v1 (branche `v1`).
Pas un outil no-code : conçu pour des développeurs à l'aise avec l'infra.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : approche sérieuse de la fiabilité des agents (durabilité, IR, lint), à tester dès la 3.0 finale si tu industrialises des agents.
