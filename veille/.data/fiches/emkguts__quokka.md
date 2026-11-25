---
schema: 1
depot: emkguts/quokka
source_readme_sha: 06248c3b9cbe84d0
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# emkguts/quokka

> Plugin Elixir de formatage qui réécrit le code selon les règles Credo, fork de Styler.

## Le problème
Credo signale des problèmes de style que le développeur doit ensuite corriger à la main.

## Ce que ça fait vraiment
Lit la configuration Quokka et Credo pour choisir les règles, puis réécrit l'arbre syntaxique avec un zipper (pipes, blocs, directives de module, tests, nombres). Les règles controversées dépendent de ta config Credo. Un mode « sauts de ligne seulement » existe et des plugins sont possibles.

## Comment c'est branché
```mermaid
flowchart TD
  e1["lib/styler.ex"] --> e2["lib/quokka/config.ex"]
  e2 --> e3["lib/quokka/config/credo.ex"]
  e1 --> o2["lib/style.ex"]
  o2 --> s1["lib/style/pipes.ex"]
  o2 --> s2["lib/style/blocks.ex"]
  s1 --> o1["lib/zipper.ex"]
```

## Essayer
```elixir
{:quokka, "~> 2.13", only: [:dev, :test], runtime: false},
# .formatter.exs
[plugins: [Quokka]]
```

## Coût et pièges
Le README avertit que Quokka peut changer le comportement du programme : relire les changements. La première exécution est lente.

## Ce que ce n'est pas
Pas un simple vérificateur : il modifie les fichiers.

## Alternatives
Styler, le projet dont il est le fork : à comparer si tu veux la version d'origine plutôt que cette variante. Le README ne nomme pas d'autre alternative.

## Pour toi
À ignorer : utile seulement aux équipes Elixir.

