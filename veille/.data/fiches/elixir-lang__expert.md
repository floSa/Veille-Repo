---
schema: 1
depot: elixir-lang/expert
source_readme_sha: cbdf1fb3ffc7065c
ecrite_le: 2026-10-29
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: fondation
alertes: []
verdict: ignorer
---

# elixir-lang/expert

> Serveur de langage officiel d'Elixir, pour les développeurs Elixir dans leur éditeur.

## Le problème
Un éditeur a besoin d'un serveur LSP pour offrir l'intelligence de code sur Elixir.

## Ce que ça fait vraiment
- Binaire à télécharger par système, à placer dans le `$PATH`.
- Versions nocturnes via la CLI GitHub.
- Compilation depuis les sources en deux variantes : release normale (`just release`) ou « burrito » multi-systèmes (Zig 0.15.2 requis).
- Il faut passer `--stdio` à l'éditeur si celui-ci ne le fait pas.
- Parrainage possible via l'EEF.

## Comment c'est branché
```mermaid
flowchart LR
  A[Editeur] -->|stdio| B[expert]
  B --> C[Projet Elixir]
```

## Essayer
```bash
gh release download nightly --pattern 'expert_linux_amd64' --repo expert-lsp/expert
just release
just burrito-local
```

## Coût et pièges
Gratuit. Zig exactement 0.15.2 pour la variante burrito.

## Ce que ce n'est pas
Pas un compilateur ni un débogueur. Même contenu que expert-lsp/expert (README identique, mêmes étoiles) : probable miroir ou renommage.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf si tu fais de l'Elixir : sans lien avec un pipeline data / IA.

