---
schema: 1
depot: erlang-ls/erlang_ls
source_readme_sha: 2ee9b63bc25f3254
ecrite_le: 2026-10-29
nature: outil
deploiement: compilation
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [archivé, dernier commit ancien]
verdict: ignorer
---

# erlang-ls/erlang_ls

> Serveur de langage Erlang (LSP 3.17), aujourd'hui archivé au profit d'ELP.

## Le problème
Les éditeurs ont besoin d'un serveur LSP pour offrir complétion et navigation en Erlang.

## Ce que ça fait vraiment
Un escript Erlang qui implémente LSP 3.17, en transport tcp (défaut, port 10000) ou stdio, configurable par `erlang_ls.config` ou `erlang_ls.yaml`. Le README annonce le projet non maintenu.

## Comment c'est branché
```mermaid
flowchart LR
  A[Éditeur] --> B[escript erlang_ls]
  C[erlang_ls.config] --> B
  B --> D[Projet Erlang]
```

## Essayer
```bash
make
make install
PREFIX=/path/to/directory make install
```

## Coût et pièges
Gratuit. Prérequis : Erlang OTP 24+ et rebar3 3.9.1+. Dépôt archivé, dernier push août 2025.

## Ce que ce n'est pas
Ce n'est plus maintenu ; ne pas le choisir pour un nouveau poste.

## Alternatives
Erlang Language Platform (ELP) : recommandé par le README, activement maintenu.

## Pour toi
À ignorer : archivé et sans lien avec data/IA ; passe directement à ELP si tu écris de l'Erlang.

