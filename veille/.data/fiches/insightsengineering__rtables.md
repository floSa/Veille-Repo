---
schema: 1
depot: insightsengineering/rtables
source_readme_sha: b3df00fc81f52bbf
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# insightsengineering/rtables

> Package R pour créer des tableaux de rapport complexes, notamment pour les soumissions réglementaires cliniques.

## Le problème
Les tableaux d'essais cliniques exigent des valeurs non arrondies accessibles, plusieurs valeurs par cellule et une pagination fine.

## Ce que ça fait vraiment
On décrit la mise en page par des découpages (split_cols_by, split_rows_by) et des fonctions d'analyse, puis build_table produit un arbre de tableau. On peut le trier, le paginer et l'exporter en texte, HTML, PDF ou PowerPoint ; rtf est en développement.

## Comment c'est branché
```mermaid
flowchart TD
  A["colby_constructors.R"] --> B["tt_dotabulation.R"]
  C["custom_split_funs.R"] --> B
  B --> D["00tabletrees.R"]
  D --> E["tt_sort.R"]
  D --> F["tt_paginate.R"]
  F --> G["tt_toString.R"]
  D --> H["as_html.R"]
```

## Essayer
```r
install.packages("rtables")
library(rtables)
lyt <- basic_table() |> split_cols_by("ARM") |> analyze("AGE")
build_table(lyt, ex_adsl)
```

## Coût et pièges
Gratuit. Le README annonce une licence Apache 2 de Roche, mais le catalogue la voit comme non identifiée.

## Ce que ce n'est pas
Pas un tableur ni un moteur de graphiques : un moteur de tableaux de reporting.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile si tu produis des tableaux de reporting en R, notamment pour la pharma.

