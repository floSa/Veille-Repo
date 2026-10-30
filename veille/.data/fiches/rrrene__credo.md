---
schema: 1
depot: rrrene/credo
source_readme_sha: b095f509a308b996
ecrite_le: 2026-10-30
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# rrrene/credo

> Analyse statique pour Elixir, axée sur la pédagogie et la cohérence du code.

## Le problème
Garder un code Elixir cohérent et repérer erreurs courantes et complexité sans relecture manuelle.

## Ce que ça fait vraiment
Propose des pistes de refactoring, repère les fragments complexes, les erreurs fréquentes, les incohérences de nommage et peut imposer un style. S'ajoute comme dépendance Mix. Intégrations : IntelliJ, Atom, VSCode, Emacs flycheck, Kakoune, Neovim via null-ls, Codacy.

## Comment c'est branché
```mermaid
flowchart LR
  A[mix.exs] --> B[mix credo]
  B --> C[Analyse du code Elixir]
  C --> D[Avertissements / refactoring]
  E[IDE / Codacy] --> B
```

## Essayer
```bash
# mix.exs : {:credo, "~> 1.7", only: [:dev, :test], runtime: false}
mix deps.get
mix credo
```

## Coût et pièges
Gratuit. Doc complète sur Hexdocs.

## Ce que ce n'est pas
Pas un formateur de code ni un vérificateur de types.

## Alternatives
Aucune alternative nommée.

## Pour toi
Ignorer : ne sert qu'aux bases Elixir.

