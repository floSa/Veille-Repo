---
schema: 1
depot: gastownhall/beads
source_readme_sha: a2f98e079bcfc37a
ecrite_le: 2026-09-21
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# gastownhall/beads

> Suivi d'issues en graphe, versionné par Dolt, conçu pour la mémoire des agents de code.

## Le problème
Les plans en markdown d'un agent se perdent, se dupliquent et n'expriment pas les dépendances.
Plusieurs agents ou branches qui écrivent le même fichier de tâches produisent des conflits de fusion.

## Ce que ça fait vraiment
Chaque tâche est un « bead » dans un graphe de dépendances ; `bd ready` ne rend que les tâches sans bloqueur ouvert.
`bd update --claim` réserve atomiquement une tâche (assignation + statut), `bd close` libère les tâches bloquées.
Les identifiants sont des hachages (`bd-a1b2`), donc sans collision entre agents ou branches ; hiérarchie `bd-a3f8.1.1` pour les épiques.
Compaction sémantique des tâches closes pour économiser le contexte, messages avec fils, `bd remember` pour une mémoire projet réinjectée par `bd prime`.

## Comment c'est branché
```mermaid
flowchart LR
  create["bd create"] --> graph["graphe de dépendances"]
  graph --> ready["bd ready"]
  ready --> claim["bd update --claim"]
  claim --> close["bd close"]
  close --> graph
  graph <--> remote["bd dolt push / pull"]
  graph --> jsonl[".beads/issues.jsonl (export)"]
```

## Essayer
```bash
curl -fsSL https://raw.githubusercontent.com/gastownhall/beads/main/scripts/install.sh | bash
bd init
bd setup claude
brew install beads
npm install -g @beads/bd
bd ready --json
bd prime
```

## Coût et pièges
`bd init` modifie ton dépôt : il crée ou met à jour `AGENTS.md` et installe des intégrations Claude/Codex sauf `--skip-agents` ou `--stealth`.
Les montées de version peuvent franchir une migration de schéma : un seul clone lance `bd migrate` puis `bd dolt push`, les autres `bd bootstrap`.

## Ce que ce n'est pas
Ce n'est pas un fichier plat : `.beads/issues.jsonl` est un export d'interopérabilité, ni source de vérité ni sauvegarde.
Ce n'est pas multi-écrivain par défaut : le mode embarqué a un seul écrivain, le mode serveur exige un `dolt sql-server` externe.
Ce n'est pas à cloner dans ton projet : c'est un CLI installé une fois, utilisé partout.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Intéressant si tu fais tourner plusieurs agents en parallèle sur un même dépôt — vérifie les sommes de contrôle avant d'installer le binaire.
