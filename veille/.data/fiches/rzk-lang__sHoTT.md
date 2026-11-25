---
schema: 1
depot: rzk-lang/sHoTT
source_readme_sha: 646a0b63e3ad8f98
ecrite_le: 2026-11-25
nature: liste
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence non déclarée]
verdict: ignorer
---

# rzk-lang/sHoTT

> Bibliothèque de formalisation en théorie des types homotopiques simpliciaux, pour la théorie des ∞-catégories.

## Le problème
Vérifier par machine des résultats de théorie des ∞-catégories synthétiques tirés de plusieurs articles de recherche.

## Ce que ça fait vraiment
Des fichiers `.rzk.md` formalisent la théorie des types homotopiques, puis les types simpliciaux, jusqu'au lemme de Yoneda. L'assistant de preuve `rzk`, expérimental, les vérifie. Un site MkDocs publie les fichiers avec coloration syntaxique.

## Comment c'est branché
```mermaid
flowchart TD
  cfg["rzk.yaml"] --> c["src/hott/00-common.rzk.md"]
  c --> p["src/hott/01-paths.rzk.md"]
  p --> eq["src/hott/03-equivalences.rzk.md"]
  eq --> seg["src/simplicial-hott/05-segal-types.rzk.md"]
  seg --> yo["src/simplicial-hott/09-yoneda.rzk.md"]
  doc["mkdocs.yml"] --> c
```

## Essayer
```bash
rzk typecheck
```

## Coût et pièges
Il faut installer l'assistant de preuve `rzk`. Aucune licence déclarée : réutilisation incertaine.

## Ce que ce n'est pas
Pas une bibliothèque de programmation ni un outil de data : c'est un corpus de preuves mathématiques.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : mathématiques formelles sans usage dans un travail data, IA ou MLOps.

