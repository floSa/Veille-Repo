---
schema: 1
depot: ddsjoberg/gtsummary
source_readme_sha: bba15877d79e8cc1
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier]
verdict: surveiller
---

# ddsjoberg/gtsummary

> Paquet R pour fabriquer des tableaux de synthèse et de régression prêts à publier.

## Le problème
Produire le « Table 1 » d'un article ou le tableau d'un modèle demande beaucoup de code de mise en forme.

## Ce que ça fait vraiment
tbl_summary résume un jeu de données (variables détectées, valeurs manquantes), tbl_regression met en forme des modèles (régression logistique, Cox), add_p ajoute des tests, tbl_merge juxtapose, tbl_hierarchical produit des tableaux d'événements indésirables. Chaque tableau est calculé à partir d'un jeu de résultats d'analyse (ARD) auditable via gather_ard. Export gt, flextable, Word, HTML, LaTeX.

## Comment c'est branché
```mermaid
flowchart TD
  API1["tbl_summary()"] --> DS["add_p() / add_overall()"]
  API2["tbl_regression()"] --> RH["add_glance()"]
  API4["tbl_merge()"] --> TM["modify_table_styling()"]
  DS --> OC["as_gt()"]
  RH --> OC
  ED["broom, gt, labelled"] --> API1
```

## Essayer
```bash
# Dans R :
install.packages("gtsummary")
pak::pkg_install("ddsjoberg/gtsummary", dependencies = TRUE)
```

## Coût et pièges
Gratuit. Licence présente mais non reconnue par GitHub : à vérifier. Dépend de gt, broom, cards et cardx.

## Ce que ce n'est pas
Pas un outil Python. Pas un logiciel statistique : il met en forme des résultats.

## Alternatives
gt, dont il est le complément, et flextable pour les sorties Word.

## Pour toi
À surveiller : très utile si tu rapportes des résultats en R (essais cliniques, régression), sans intérêt dans un flux Python.

