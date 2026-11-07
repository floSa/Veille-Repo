---
schema: 1
depot: XiaomiMiMo/MiMo-Code
source_readme_sha: 2cb0ebfb7b28aa28
ecrite_le: 2026-11-07
nature: outil
deploiement: binaire
prerequis: [compte à créer, clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# XiaomiMiMo/MiMo-Code

> Assistant de code en terminal avec mémoire persistante, sous-agents et workflows, branchable sur la plupart des LLM.

## Le problème
Les assistants de code perdent le contexte entre sessions et ont du mal à tenir les tâches longues sans coût excessif.

## Ce que ça fait vraiment
Agent de terminal qui lit et écrit du code, lance des commandes et gère Git. Mémoire de projet (SQLite FTS5), points de contrôle de session, suivi de tâches en arbre, sous-agents en parallèle, commande `/goal` avec juge indépendant, workflows JavaScript (deep-research, fact-check, research-experiment) et skills intégrés. Se connecte à Xiaomi MiMo, Codex, Claude Code ou à toute API compatible OpenAI. Une application de bureau l'utilise comme moteur. README tronqué.

## Comment c'est branché
Aucun diagramme fourni. Le README décrit agents build et plan, mémoire, sous-agents, workflows et skills. Non documenté en détail.

## Essayer
```bash
curl -fsSL https://mimo.xiaomi.com/install | bash
mimo
mimo serve --port 4096
```

## Coût et pièges
Gratuit côté outil, mais tu paies le fournisseur de modèle choisi ou te connectes par OAuth. Le script d'installation `curl | bash` est à examiner. Le terminal macOS par défaut n'est pas pris en charge. Le mode sans demande de permission est dangereux.

## Ce que ce n'est pas
Pas limité aux modèles Xiaomi. La saisie vocale et certaines fonctions dépendent de la plateforme MiMo. Plus de 1 000 issues ouvertes.

## Alternatives
- Cursor, Cline, Zed : autres outils où les modèles MiMo fonctionnent aussi.

## Pour toi
À surveiller : un agent de code complet avec mémoire persistante, à comparer à ton outil actuel avant de migrer.

