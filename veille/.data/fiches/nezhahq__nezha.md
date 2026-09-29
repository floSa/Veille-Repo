---
schema: 1
depot: nezhahq/nezha
source_readme_sha: c07dc5a4d214e2ad
ecrite_le: 2026-09-28
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [matière insuffisante, licence non déclarée]
verdict: ignorer
---

# nezhahq/nezha

> Outil de supervision de serveurs à thèmes interchangeables, documenté en chinois et anglais.

## Le problème
Non documenté dans ce README : le texte fourni ne décrit ni le besoin ni le fonctionnement.

## Ce que ça fait vraiment
Le README disponible se limite à des liens : guide utilisateur (anglais et chinois), canaux Telegram,
traductions hébergées sur Weblate, captures d'écran d'un front utilisateur (`hamster1963/nezha-dash`)
et d'une console d'administration (`nezhahq/admin-frontend`). Les thèmes se déclarent en ajoutant une
entrée dans `service/singleton/frontend-templates.yaml`. Rien d'autre n'est décrit.

## Comment c'est branché
```mermaid
flowchart LR
    Doc[User Guide EN / ZH] --> Depot[nezhahq/nezha]
    Depot --> Front[nezha-dash]
    Depot --> Admin[admin-frontend]
    Depot --> Templates[frontend-templates.yaml]
    Weblate[Hosted Weblate] --> Depot
```

## Essayer
Aucune commande documentée dans ce README.

## Coût et pièges
Non documenté : ni prérequis, ni installation, ni dépendances ne figurent dans le texte fourni.

## Ce que ce n'est pas
Impossible de le dire depuis ce README : il ne contient ni description fonctionnelle, ni limites,
ni licence. Matière insuffisante pour trancher — tout jugement supposerait d'aller lire la documentation
externe, hors de portée de cette fiche.

## Alternatives
Aucun dépôt alternatif n'est nommé dans le README.

## Pour toi
À écarter en l'état : rien dans le README ne permet d'évaluer l'outil.
