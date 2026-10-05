---
schema: 1
depot: vanzan01/claude-code-sub-agent-collective
source_readme_sha: 8da503a96e15ce51
ecrite_le: 2026-10-05
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# vanzan01/claude-code-sub-agent-collective

> Installeur npx de plus de 30 agents Claude Code imposant le développement piloté par les tests.

## Le problème
Les agents de code livrent sans tests, devinent les API et suivent des méthodes incohérentes d'un projet à l'autre.

## Ce que ça fait vraiment
`init` copie dans le projet un CLAUDE.md, des agents, des hooks et un cadre de tests Vitest. La commande `/van` route vers `@task-orchestrator`, qui délègue à des spécialistes (composants, features, tests, qualité, devops) ; recherche de docs via Context7 ; hooks de TDD (rouge, vert, refactor) et validation de livraison.

## Comment c'est branché
```mermaid
flowchart LR
  I[Collective CLI installer.js] --> T[Templates]
  T --> V[/van van.md]
  V --> O[Task orchestrator]
  O --> S[Specialist agents]
  S --> H[TDD hooks]
  O --> R[research-agent.md]
```

## Essayer
```bash
npx claude-code-collective init
npx claude-code-collective validate
npx claude-code-collective status
```

## Coût et pièges
Gratuit, mais consomme beaucoup de tokens (30+ agents, recherche parfois lente). Redémarrage de Claude Code requis. Dernier push avril 2026.

## Ce que ce n'est pas
L'auteur le dit : expérimental, non production-ready, pas de standard officiel, opiniâtre sur le TDD.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : intéressant pour voir une orchestration hub-and-spoke avec hooks, mais teste sur un projet jetable.

