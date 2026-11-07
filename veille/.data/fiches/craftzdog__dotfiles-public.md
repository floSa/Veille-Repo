---
schema: 1
depot: craftzdog/dotfiles-public
source_readme_sha: a9b28799640ada61
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# craftzdog/dotfiles-public

> Fichiers de configuration personnels de Takuya (Neovim, tmux, Ghostty, fish, PowerShell), gérés avec chezmoi.

## Le problème
Reconstruire un poste de développement identique d'une machine à l'autre prend du temps sans configuration versionnée.

## Ce que ça fait vraiment
Dépôt de dotfiles géré avec chezmoi : config Neovim (0.12 minimum, plugins via `vim.pack`), herdr (gestionnaire de terminal pour agents IA), tmux, Ghostty, git et lazygit, fish, PowerShell, et listes de paquets Homebrew, apt, Scoop et winget. Le README renvoie à des vidéos de l'auteur.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
    Repo["dotfiles"] --> Chez["chezmoi"]
    Chez --> Nvim["Neovim"]
    Chez --> Term["Ghostty, tmux, herdr"]
    Chez --> Shell["fish, PowerShell"]
    Chez --> Pkg["Brewfile, apt, Scoop"]
```

## Essayer
Aucune commande documentée dans le README : il liste le contenu et les prérequis, et renvoie à des vidéos.

## Coût et pièges
Gratuit. Pas de licence déclarée. L'auteur prévient : ne pas utiliser sans comprendre, à tes risques. Neovim 0.12 et un compilateur C sont requis pour le côté Neovim.

## Ce que ce n'est pas
Pas un outil ni une distribution prête à l'emploi : c'est une configuration personnelle, à lire plutôt qu'à appliquer telle quelle.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer comme outil : source d'inspiration pour ton terminal et Neovim, sans licence et taillée pour les goûts d'une seule personne.

