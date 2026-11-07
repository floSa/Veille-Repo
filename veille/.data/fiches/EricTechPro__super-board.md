---
schema: 1
depot: EricTechPro/super-board
source_readme_sha: dea9676bbe66c9b3
ecrite_le: 2026-11-07
nature: extension
deploiement: autre
prerequis: [service tiers, clé d'API]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# EricTechPro/super-board

> Plugin Claude Code qui fait avancer un tableau GitHub de tickets via des voies construction, test et revue.

## Le problème
Orchestrer plusieurs agents de code sur un backlog, avec tests et revue, reste manuel.

## Ce que ça fait vraiment
Un routeur classe chaque carte (facile, moyen, difficile) et choisit le modèle. Trois voies : Build en worktree avec PR brouillon, QA avec revue de sécurité du diff, Review avec garde de fusion. Hooks de protection (secrets, clés, suppression hors projet, push protégé). Neuf compétences au total, mode Codex possible.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A[Cartes Ready] --> B[Routeur]
  B --> C[super-build]
  C --> D[super-qa]
  D --> E[super-review]
  E --> F[Fusion si verify_commands passent]
```

## Essayer
```bash
curl -fsSL https://raw.githubusercontent.com/EricTechPro/super-board/main/get.sh | bash
/super-board onboard
/super-board run my-app
```

## Coût et pièges
Nécessite Claude Code, `gh` avec accès au tableau, jq, bash et Python 3.9. Chaque carte consomme des jetons de modèles Opus ou Sonnet à ta charge. L'installation passe par un script distant exécuté directement.

## Ce que ce n'est pas
Ce n'est pas une garantie de fusion sûre : elle dépend de tes `verify_commands`. Ce n'est pas autonome sans configuration du tableau.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : intéressant pour automatiser un backlog avec des agents, mais coûteux en jetons et mono-mainteneur.

