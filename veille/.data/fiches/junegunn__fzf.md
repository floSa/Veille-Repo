---
schema: 1
depot: junegunn/fzf
source_readme_sha: cf04eefdc64236ae
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# junegunn/fzf

> Filtre interactif en ligne de commande : on choisit un fichier, une commande ou une ligne en tapant quelques lettres.

## Le problème
Retrouver un fichier, une commande d'historique ou une branche dans un terminal oblige à retaper des chemins entiers ou à enchaîner des `grep`.

## Ce que ça fait vraiment
fzf lit une liste sur l'entrée standard, affiche un sélecteur à correspondance approximative et écrit l'élément choisi sur la sortie. Il s'intègre à bash, zsh, fish et Nushell (CTRL-T, CTRL-R, ALT-C, complétion avec `**`) et à Vim/Neovim. Des options (`--preview`, `--bind reload/become`) permettent d'en faire de petits outils interactifs.

## Comment c'est branché
```mermaid
graph LR
    A[Entrée standard ou reader.go] --> B[algo et pattern.go]
    B --> C[result.go]
    C --> D[terminal.go et tui]
    D --> E[Sélection en sortie]
    F[shell et plugin] --> D
```

## Essayer
```bash
brew install fzf
eval "$(fzf --bash)"
find * -type f | fzf > selected
fzf --bind 'enter:become(vim {})'
```

## Coût et pièges
Aucun coût. Le raccourci d'intégration shell doit être activé à la main (`eval "$(fzf --bash)"` ou équivalent). Ne pas mettre `--preview` dans `FZF_DEFAULT_OPTS` : le README le déconseille.

## Ce que ce n'est pas
Ce n'est pas un moteur de recherche indexé : il filtre ce qu'on lui envoie. Il ne remplace ni `ripgrep` ni `fd`, il se branche dessus.

## Alternatives
Aucune alternative nommée dans le README (renvoi vers le wiki « Related projects »).

## Pour toi
Adopter : dès que tu travailles en terminal sur des serveurs ou des dépôts, il fait gagner du temps sans rien coûter.

