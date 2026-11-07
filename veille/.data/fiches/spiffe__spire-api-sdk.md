---
schema: 1
depot: spiffe/spire-api-sdk
source_readme_sha: aeb56fc33accdbfa
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [matière insuffisante]
verdict: ignorer
---

# spiffe/spire-api-sdk

> Définitions de services et stubs générés pour les API publiques de SPIRE, pour développeurs d'intégrations.

## Le problème
Les clients des API SPIRE ont besoin de définitions de services et de code généré à jour.

## Ce que ça fait vraiment
Le dépôt contient les définitions de services et les stubs générés des API publiques de SPIRE. Il est étiqueté avec les mêmes versions que SPIRE, même sans changement d'API. La compatibilité des API est maintenue entre versions.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  A["Définitions des API"] --> B["Stubs générés"]
  B --> C["Client SPIRE"]
```

## Essayer
```bash
# Aucune commande documentée dans le README.
```

## Coût et pièges
Non documenté. Pour migrer depuis le module Go `github.com/spiffe/spire/proto/spire`, le README renvoie à MIGRATING.

## Ce que ce n'est pas
Ce n'est pas SPIRE lui-même : ce sont seulement les interfaces. Le README ne dit pas dans quels langages les stubs sont générés.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utile seulement si tu écris un client SPIRE, hors des préoccupations data / IA courantes.

