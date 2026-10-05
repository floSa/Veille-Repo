---
schema: 1
depot: imbue-ai/mngr
source_readme_sha: d02cde241bddfb6a
ecrite_le: 2026-10-05
nature: outil
deploiement: pip
prerequis: [version de Python, service tiers]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# imbue-ai/mngr

> CLI Unix pour lancer, lister et piloter des agents de code locaux ou distants, via SSH, git et tmux.

## Le problème
Gérer des dizaines d'agents de code sur plusieurs machines sans service cloud propriétaire est bricolé.

## Ce que ça fait vraiment
`mngr create` lance un agent (Claude, Codex, OpenCode…) dans une session tmux sur un hôte local, Docker ou Modal ; `list`, `connect`, `message`, `transcript`, `exec`, `snapshot`, `clone`, `migrate`, `push/pull`, `pair`. Les hôtes se mettent en pause quand les agents sont inactifs. Plugins pour fournisseurs (AWS, Azure, GCP). Dépôt miroir du dépôt interne d'Imbue.

## Comment c'est branché
```mermaid
flowchart LR
  U[Utilisateur] --> C[mngr CLI main.py]
  C --> P[Plugin manager]
  P --> V[Providers Docker Modal AWS]
  V --> H[Hôte SSH]
  H --> T[Session tmux]
  T --> A[Agent]
```

## Essayer
```bash
curl -fsSL https://raw.githubusercontent.com/imbue-ai/mngr/main/scripts/install.sh | bash
mngr create my-task codex
mngr list
mngr transcript agent-1
```

## Coût et pièges
CLI gratuit ; inférence et calcul distant (Modal, etc.) à ta charge. Nécessite git, tmux, jq. 238 issues ouvertes ; `snapshot` et `plugin` sont expérimentaux.

## Ce que ce n'est pas
Pas un agent ni un modèle : un orchestrateur. Licence non identifiée par GitHub.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : pratique pour lancer des agents en parallèle sur du calcul distant, après avoir confirmé la licence.

