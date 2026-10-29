---
schema: 1
depot: expert-lsp/expert
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

# expert-lsp/expert

> Serveur de langage officiel d'Elixir, pour les développeurs Elixir dans leur éditeur.

## Le problème
Un éditeur a besoin d'un serveur LSP pour offrir l'intelligence de code sur Elixir.

## Ce que ça fait vraiment
- Binaire par système à placer dans le `$PATH` ; versions nocturnes disponibles.
- Compilation depuis les sources : release normale ou « burrito » (Zig 0.15.2 exigé).
- Option `--stdio` à passer si l'éditeur ne le fait pas.
- Parrainage entreprise via l'EEF, individuel via GitHub Sponsors.

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
Gratuit. Zig exactement 0.15.2 pour burrito.

## Ce que ce n'est pas
Pas un débogueur. README identique à elixir-lang/expert : l'un des deux est un miroir ou un ancien nom, le README ne dit pas lequel.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf pour Elixir : aucun rapport avec un travail data / IA.

