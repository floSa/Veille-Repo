---
schema: 1
depot: primefaces/primereact
source_readme_sha: 45750937f775b7b2
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# primefaces/primereact

> Bibliothèque de composants React, désormais figée côté open source et poursuivie sous PrimeUI.

## Le problème
Construire une interface React riche (tableaux, calendriers, dialogues) sans réécrire chaque composant.

## Ce que ça fait vraiment
Bibliothèque de composants UI en modes stylé et sans style, avec thèmes. Le dépôt n'est plus développé : il ne reçoit que des correctifs de sécurité, les tickets sont en lecture seule et le développement continue chez PrimeUI. Les versions MIT existantes restent MIT.

## Comment c'est branché
```mermaid
flowchart LR
  L["Component Library components/lib"] --> A["API components/lib/api"]
  L --> U["Utils components/lib/utils"]
  T["Public Themes"] --> L
  D["Demo Pages pages"] --> L
  G["Gulpfile / Jest / GitHub Workflows"] --> L
```

## Essayer
Aucune commande documentée dans ce README, qui renvoie à primereact.dev et à l'annonce du changement.

## Coût et pièges
Gratuit pour les versions MIT. Pour des fonctions nouvelles, il faut passer chez PrimeUI dont le modèle de licence n'est pas décrit ici.

## Ce que ce n'est pas
Pas une bibliothèque en évolution : les demandes de fonctionnalités n'y sont plus traitées.

## Alternatives
- PrimeUI / primereact.dev : la suite officielle du projet.

## Pour toi
À ignorer : composants front sans rapport direct avec la data/IA, et le dépôt n'évolue plus.

