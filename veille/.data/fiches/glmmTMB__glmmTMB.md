---
schema: 1
depot: glmmTMB/glmmTMB
source_readme_sha: 6579d0f58d37b8c1
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence non déclarée]
verdict: surveiller
---

# glmmTMB/glmmTMB

> Paquet R pour ajuster des modèles linéaires mixtes généralisés, avec zéro-inflation, pour statisticiens et data scientists.

## Le problème
Les modèles mixtes standard gèrent mal les comptages en excès de zéros, la dispersion variable et l'autocorrélation.

## Ce que ça fait vraiment
glmmTMB ajuste des GLMM sur Template Model Builder (CppAD, Eigen). Il gère plusieurs familles (gaussienne, Poisson, binomiale, binomiale négative, Beta). Il permet effets fixes et aléatoires sur la composante conditionnelle et la zéro-inflation, et des effets fixes sur la dispersion. L'aide utilisateur est surtout sur le site GitHub Pages.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  fam["R/family.R"] --> glm["R/glmmTMB.R"]
  glm --> cpp["src/glmmTMB.cpp"]
  cpp --> dist["src/distrib.h"]
  glm --> pred["R/predict.R"]
  glm --> vc["R/VarCorr.R"]
  tst["tests/testthat/test-basics.R"] --> glm
```

## Essayer
Aucune commande d'installation dans le README, qui renvoie au site de documentation.

## Coût et pièges
Gratuit. Il faut R et un compilateur C++ pour la version de développement. La licence n'est pas déclarée dans le catalogue. Les questions vont aux listes dédiées.

## Ce que ce n'est pas
Ce n'est pas un outil de machine learning prédictif, mais de la statistique inférentielle. Le README n'explique pas l'usage : tout est sur le site.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : référence si tu fais de la statistique appliquée en R, peu utile pour du ML pur.

