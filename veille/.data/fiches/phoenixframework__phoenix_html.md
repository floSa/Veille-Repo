---
schema: 1
depot: phoenixframework/phoenix_html
source_readme_sha: 76dbdaabacd1d55a
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# phoenixframework/phoenix_html

> Briques HTML pour le framework web Phoenix (Elixir) : échappement, formulaires et un petit JavaScript.

## Le problème
Générer du HTML côté serveur sans faille d'injection et sans réécrire à la main les champs de formulaire.

## Ce que ça fait vraiment
Fournit la sûreté HTML (échappement via `safe.ex`), le moteur de templates (`engine.ex`), des abstractions de formulaire (`form.ex`, `form_data.ex`, `form_field.ex`) et une minuscule bibliothèque JavaScript. Le README renvoie à la documentation pour le détail.

## Comment c'est branché
```mermaid
flowchart TD
  A["lib/phoenix_html.ex"] --> B["lib/phoenix_html/safe.ex"]
  C["lib/phoenix_html/engine.ex"] --> B
  D["lib/phoenix_html/form.ex"] --> E["lib/phoenix_html/form_data.ex"]
  D --> F["lib/phoenix_html/form_field.ex"]
  G["test/phoenix_html/form_test.exs"] --> D
```

## Essayer
```bash
# Aucune commande documentée dans le README : voir la documentation du projet.
```

## Coût et pièges
Gratuit. Nécessite un projet Elixir/Phoenix (Elixir n'est pas dans la liste des prérequis, d'où `aucun`). Se consomme comme dépendance Mix, pas comme outil autonome.

## Ce que ce n'est pas
Pas un framework web : c'est une dépendance de Phoenix. Aucun usage data ou IA direct.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : brique de rendu HTML Elixir, hors de ton périmètre data / IA / MLOps, sauf si tu écris une interface Phoenix.

