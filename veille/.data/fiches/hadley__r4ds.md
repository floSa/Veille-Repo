---
schema: 1
depot: hadley/r4ds
source_readme_sha: c577e190ea8a5320
ecrite_le: 2026-10-29
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier]
verdict: adopter
---

# hadley/r4ds

> Sources du livre « R for Data Science », construit avec Quarto, pour apprendre l'analyse de données en R.

## Le problème
Apprendre à importer, transformer et visualiser des données en R avec un guide de référence suivi.

## Ce que ça fait vraiment
Le dépôt contient le texte du livre, construit avec Quarto. Le README ne décrit que les consignes de fabrication : export des schémas Omnigraffle à 300 dpi, captures d'écran, génération des fichiers HTML pour O'Reilly avec `htmlbook`. Le contenu pédagogique lui-même n'est pas décrit ici.

## Comment c'est branché
```mermaid
flowchart LR
  A["Sources Quarto"] --> B["Livre HTML"]
  C["diagrams/ et screenshots/"] --> A
  B --> D["htmlbook::convert_book()"]
  D --> E["Dossier oreilly/ vers atlas"]
```

## Essayer
```r
# pak::pak("hadley/htmlbook")
htmlbook::convert_book()
```
Le README ne documente pas de commande de lecture : c'est un guide de production du livre.

## Coût et pièges
Gratuit. Construire le livre suppose R, Quarto et les outils d'édition de l'auteur. Licence présente mais non identifiée par GitHub.

## Ce que ce n'est pas
Pas un cours en ligne interactif ici : c'est le code source du livre. Le README est très court.

## Alternatives
Aucune citée dans le README.

## Pour toi
Adopter : référence reconnue pour l'analyse de données en R, dépôt actif en octobre 2026 ; à lire pour la méthode, pas pour le README.

