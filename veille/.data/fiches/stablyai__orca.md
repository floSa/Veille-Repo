---
schema: 1
depot: stablyai/orca
source_readme_sha: 859864c42d8e59b5
ecrite_le: 2026-10-25
nature: app
deploiement: binaire
prerequis: [clé d'API, compte à créer]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [matière insuffisante]
verdict: surveiller
---

# stablyai/orca

> Application de bureau qui fait tourner plusieurs agents de code en parallèle, chacun dans son worktree git.

## Le problème
Lancer Codex, Claude Code ou OpenCode en parallèle sur un même dépôt provoque conflits et perte de suivi.

## Ce que ça fait vraiment
Orca ouvre chaque agent dans un worktree isolé, avec terminaux scindables, éditeur, revue de diffs annotables renvoyés à l'agent, intégration GitHub et Linear, worktrees SSH distants, mode design (envoi d'éléments HTML/CSS d'une page à l'agent) et CLI scriptable. Une app mobile compagnon permet de surveiller les agents. Le README est surtout une liste de fonctions ; le détail renvoie à la documentation.

## Comment c'est branché
```mermaid
flowchart LR
  A["Orca desktop"] --> B["Parallel worktrees"]
  B --> C["Terminal splits"]
  C --> D["CLI agents"]
  A --> E["Diff review / Review annotations"]
  A --> F["GitHub and Linear"]
  A --> G["Mobile companion"]
```

## Essayer
```bash
brew install --cask stablyai/orca/orca
yay -S stably-orca-bin
```

## Coût et pièges
L'app est gratuite ; les abonnements ou clés des agents restent à ta charge. Le relais de l'app mobile est dans le dépôt (dossier cloud/). Plus de 9 000 issues ouvertes.

## Ce que ce n'est pas
Pas un agent : c'est un orchestrateur d'interface. Le slogan « 100x builders » n'est pas démontré. La « Computer Use » donne aux agents la main sur ton bureau.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour comparer plusieurs agents sur une même tâche dans des worktrees séparés ; mesure l'écart avec un simple `git worktree` avant de l'adopter.

