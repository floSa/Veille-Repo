---
schema: 1
depot: elixir-tools/spitfire
source_readme_sha: b1debb01d1e11463
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# elixir-tools/spitfire

> Parseur Elixir tolérant aux erreurs, pour les outils d'édition qui analysent du code incomplet.

## Le problème
Le parseur standard d'Elixir échoue sur du code inachevé, ce qui prive les éditeurs d'intelligence de code en cours de frappe.

## Ce que ça fait vraiment
Parseur de Pratt écrit à la main : il produit un AST compatible avec le cœur d'Elixir et continue malgré les erreurs. Il expose aussi une API d'interrogation de l'environnement. Des tests de conformité le comparent au parseur officiel.

## Comment c'est branché
```mermaid
flowchart TD
  A["src/spitfire_tokenizer.erl"] --> C["lib/spitfire.ex"]
  B["src/spitfire_interpolation.erl"] --> A
  D["lib/spitfire/context.ex"] --> C
  C --> E["lib/spitfire/env.ex"]
  F["lib/spitfire/tracer.ex"] --> E
  G["test/conformance_test.exs"] --> C
```

## Essayer
```bash
# Aucune commande documentée dans le README
```

## Coût et pièges
Gratuit, mais réservé aux écosystèmes Elixir. Aucune installation documentée.

## Ce que ce n'est pas
Pas un outil pour utilisateur final : une brique pour auteurs d'outils d'éditeur Elixir. Pas de documentation d'usage.

## Alternatives
- Aucune alternative nommée dans le README (il cite rustc et Prism comme inspirations, pas comme concurrents).

## Pour toi
Ignorer : utile seulement si tu écris des outils d'éditeur pour Elixir, sans lien avec data / IA / MLOps.

