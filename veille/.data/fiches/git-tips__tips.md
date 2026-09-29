---
schema: 1
depot: git-tips/tips
source_readme_sha: e4e73be0d8906ff2
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# git-tips/tips

> Recueil de commandes Git classées par thème, pour qui veut des astuces prêtes à copier.

## Le problème
Git compte des dizaines de commandes peu mémorisables : nettoyer des branches, retrouver un commit fautif, annuler proprement.

## Ce que ça fait vraiment
Un README long qui liste, sous forme de titre et de bloc `sh`, des tips groupés : opérations de base, branches, journal et historique, fusion et rebase, remotes, configuration, stash, sous-modules, étiquettes, annulation. Souvent avec des « alternatives ». Un outil CLI `git-tip` est mentionné à part. Les commandes sont annoncées testées sur Git 2.7.4 (Apple Git-66).

## Comment c'est branché
```mermaid
flowchart LR
  Contrib[Contributeur] --> Tips["tips.json / README.md"]
  Tips --> Doxie["Doxie inject/render"]
  Doxie --> README["README.md mis à jour"]
  README --> GH[GitHub]
  GH --> Lecteurs[Lecteurs]
```

## Essayer
```bash
git checkout -
git bisect start
git commit --fixup <SHA-1>
git stash push -m <message>
git worktree add -b <branch-name> <path> <start-point>
```

## Coût et pièges
Gratuit, rien à installer. Attention aux commandes destructrices (`git reset --hard`, `git clean -f -d`, `git push -f`), présentes sans garde-fou. Certaines astuces datent de versions anciennes de Git.

## Ce que ce n'est pas
Pas un tutoriel : aucune explication du modèle de Git. Ce n'est pas un outil, c'est un aide-mémoire.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
Adopter en marque-page : tout profil qui versionne du code ou des expériences y trouvera des réflexes utiles, sans coût.

