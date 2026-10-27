---
schema: 1
depot: tidyverse/ggplot2
source_readme_sha: 4fc85fb04f961937
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: surveiller
---

# tidyverse/ggplot2

> Paquet R de graphiques déclaratifs fondé sur la grammaire des graphiques, pour analystes et data scientists.

## Le problème
Les outils de tracé impératifs obligent à décrire chaque détail graphique au lieu de relier données et esthétiques.

## Ce que ça fait vraiment
Tu fournis un jeu de données, `aes()` associe variables et aspects visuels, puis tu empiles des couches (`geom_*`), échelles, facettes et systèmes de coordonnées. Le code s'appuie sur `ggproto` (objets), thèmes, guides. Le README note qu'il change peu : l'innovation se trouve dans les extensions.

## Comment c'est branché
```mermaid
flowchart LR
  G[ggplot - API] --> A[aes - Aesthetics]
  A --> L[Geometric Layers]
  L --> S[Statistical Transformations]
  S --> C[Scales & Guides]
  C --> K[Coordinate Systems]
  K --> T[Themes & Styling]
```
Moteur commun : `ggproto`.

## Essayer
```r
install.packages("tidyverse")
install.packages("ggplot2")
pak::pak("tidyverse/ggplot2")

library(ggplot2)
ggplot(mpg, aes(displ, hwy, colour = class)) +
  geom_point()
```

## Coût et pièges
Gratuit, mais requiert R (pas Python). Licence « présente mais non identifiée par GitHub » : à vérifier.

## Ce que ce n'est pas
Pas pour Python ; pas de tableaux de bord interactifs.

## Alternatives
Aucune alternative nommée dans le README (extensions communautaires mentionnées).

## Pour toi
À surveiller : référence pour la visualisation en R ; si ton stack est Python, il ne s'y intègre pas directement.

