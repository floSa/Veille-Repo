---
schema: 1
depot: fengshao1227/ccg-workflow
source_readme_sha: 7d83d25137ad4113
ecrite_le: 2026-09-21
nature: outil
deploiement: npm
prerequis: [Node, service tiers]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: surveiller
---

# fengshao1227/ccg-workflow

> Moteur de workflow qui fait de Claude Code l'orchestrateur de Codex, Grok et Kimi.

## Le problème
Un seul modèle sur une tâche complexe garde ses angles morts, et l'état de la tâche disparaît à la compaction du contexte.
Faire travailler plusieurs CLI ensemble suppose de recopier le contexte à la main entre elles.

## Ce que ça fait vraiment
Dix stratégies auto-sélectionnées selon type et complexité, de `direct-fix` (zéro surcoût) à `full-collaborate` (double analyse parallèle + équipes d'agents + revue croisée).
Quatre hooks JavaScript réinjectent l'état à chaque tour, au démarrage de session, dans les prompts de sous-agents, et routent la connaissance de domaine par mots-clés.
Les tâches de complexité moyenne ou supérieure obtiennent un répertoire `.ccg/tasks/<nom>/` persistant : `task.json`, `requirements.md`, `plan.md`, `context.jsonl`, `review.md`.
Un binaire Go (`codeagent-wrapper`) fait le pont vers les modèles externes ; des portes qualité (`verify-security`, `verify-quality`) se déclenchent sur seuils.

## Comment c'est branché
```mermaid
graph TD
  A[/ccg:go «ajoute JWT»] --> B[classification: type, complexité, risque]
  B --> C[sélection d'une des 10 stratégies]
  C --> D[.ccg/tasks/nom/task.json]
  D --> E[codeagent-wrapper — Codex, Grok, Kimi]
  E --> F[plan → HARD STOP approbation]
  F --> G[Agent Teams en parallèle]
  G --> H[portes qualité + revue croisée]
```

## Essayer
```bash
npx ccg-workflow              # assistant interactif en 4 étapes
npx ccg-workflow init --skip-prompt
npx ccg-workflow doctor
# variante plugin natif, skills seules :
claude plugin marketplace add fengshao1227/ccg-workflow
claude plugin install ccg@ccg
```

## Coût et pièges
Node.js 20+ et Claude Code CLI obligatoires ; Codex, Grok, Kimi et Antigravity sont optionnels mais ce sont eux qui activent le multi-modèle — et leurs abonnements.
Le mode `full-collaborate` lance deux analyses externes en parallèle plus des équipes d'agents : le coût par tâche n'est pas annoncé.

## Ce que ce n'est pas
Ce n'est pas autonome : Claude Code reste l'orchestrateur obligatoire, et le plugin natif (option B) perd les commandes multi-modèles.
Ce n'est pas un outil isolé non plus — l'auteur y greffe son propre annuaire de plugins DSH, mentionné dès le haut du README.

## Alternatives
- `cexll/myclaude` : cité comme inspiration du `codeagent-wrapper`.
- `mindfold-ai/Trellis` : cité pour les patterns d'état de workflow par hooks.
- `UfoMiao/zcf` : cité comme référence pour les outils Git.

## Pour toi
L'idée des hooks qui survivent à la compaction est la bonne part ; le reste empile des dépendances à quatre CLI payantes.
