---
schema: 1
depot: max-sixty/worktrunk
source_readme_sha: e53e027744625685
ecrite_le: 2026-11-23
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# max-sixty/worktrunk

> CLI qui simplifie les worktrees git pour lancer plusieurs agents IA en parallèle.

## Le problème
Créer un worktree git demande de taper trois fois le nom de branche et de changer de dossier à la main. Ingérable avec 5 à 10 agents en parallèle.

## Ce que ça fait vraiment
`wt switch`, `wt list`, `wt remove` adressent les worktrees par nom de branche, avec un chemin issu d'un modèle. S'y ajoutent des hooks (création, pré et post-fusion), `wt merge` (squash, rebase, fusion, nettoyage), un sélecteur interactif avec statut CI, des messages de commit générés par LLM et le partage de caches de build sur APFS, btrfs et XFS.

## Comment c'est branché
```mermaid
flowchart TD
    User(("Utilisateur")) --> Main["CLI Entry - main.rs"]
    Main --> Dispatch["Command Dispatch - cli/mod.rs"]
    Dispatch --> Switch["switch.rs / merge.rs / remove.rs"]
    Switch --> Hooks["Hooks - hooks.rs"]
    Switch --> Repo[("Git Repository - git/repository")]
    Hooks --> Shell["Shell Execution - shell_exec.rs"]
    Switch -.-> Agent["AI Agent"]
```

## Essayer
```bash
brew install worktrunk && wt config shell install
wt switch --create feature-auth
wt list
wt merge main
wt switch -x claude -c feature-a -- 'Add user authentication'
```

## Coût et pièges
Gratuit, installation par Homebrew, Cargo, winget, pacman ou conda. Sous Windows, `wt` entre en conflit avec Windows Terminal : utiliser `git-wt`. Les messages de commit LLM et le statut CI reposent sur un service externe configuré par toi.

## Ce que ce n'est pas
Pas un orchestrateur d'agents : il crée et range les worktrees, c'est tout. Pas un remplaçant de git.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter si tu lances plusieurs agents sur un même dépôt : petit outil, installation légère, gain immédiat sur le flux de travail.

