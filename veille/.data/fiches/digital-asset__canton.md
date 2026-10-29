---
schema: 1
depot: digital-asset/canton
source_readme_sha: 26b610c767c75793
ecrite_le: 2026-10-29
nature: service
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# digital-asset/canton

> Protocole d'interopérabilité de registres Daml avec confidentialité et autorisations, par Digital Asset.

## Le problème
Les registres distribués classiques peinent à concilier confidentialité, passage à l'échelle et droit à l'oubli.

## Ce que ça fait vraiment
Partitionne l'état global ; l'authentification et le transport passent par des synchronizers déployables à volonté, permissionnés mais fédérables. Le README le présente comme adapté à des systèmes conformes RGPD. Opération documentée ailleurs.

## Comment c'est branché
```mermaid
flowchart LR
  A[Participant node] --> B[Synchronizer]
  B --> C[Autre synchronizer]
  A --> D[Modèles Daml]
```

## Essayer
Aucune commande documentée ; voir la documentation externe.

## Coût et pièges
Gratuit ; mise en oeuvre exigeante, détails non dans ce README.

## Ce que ce n'est pas
Ni une blockchain publique ni une bibliothèque légère.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : registre distribué sans lien avec data/IA/MLOps.

