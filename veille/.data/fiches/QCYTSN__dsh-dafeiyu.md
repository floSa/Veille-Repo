---
schema: 1
depot: QCYTSN/dsh-dafeiyu
source_readme_sha: ec2da8b9dd294404
ecrite_le: 2026-10-30
nature: extension
deploiement: npm
prerequis: [Node, service tiers, clé d'API]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# QCYTSN/dsh-dafeiyu

> Plugin compagnon de bureau pour DeepSeek Harness : un personnage animé affiche l'état de l'agent et le solde.

## Le problème
Pendant qu'un agent travaille, tu ne vois pas son état (réflexion, exécution, attente d'approbation) hors de la fenêtre de l'outil.

## Ce que ça fait vraiment
- Fenêtre native transparente, toujours au premier plan, lancée par le plugin DSH.
- Affiche l'état issu des événements de session DSH, la progression des tâches et le solde DeepSeek (API ou compte).
- Réglages : taille, bulles, sons, mode réduit ; notifications d'approbation.
- Helpers natifs : Windows, Linux x64 (Qt), macOS (Swift, expérimental), Python/PySide6 sur Linux arm64.

## Comment c'est branché
```mermaid
graph LR
  A[DSH Host] --> B[plugin dsh-dafeiyu]
  B --> C[Helper natif Qt / Swift / Python]
  C --> D[Personnage à l'écran]
  B --> E[/user/balance DeepSeek]
  A --> F[Événements de session]
  F --> B
```

## Essayer
```bash
dsh plugin --profile web add dsh-dafeiyu@0.1.23
dsh web
```

## Coût et pièges
Plugin gratuit ; le solde interroge DeepSeek avec ta clé via DSH. Premier lancement : environ 100 Mo de Qt décompressés. Plugin web non visible dans le desktop (profils séparés). Actifs sous licence différente pour le code et les images (ASSET_LICENSE.md).

## Ce que ce n'est pas
Pas un agent ni un outil de monitoring : il ne lit pas l'écran et n'affiche que ce que DSH expose. Ne fait aucun appel au modèle.

## Alternatives
Aucune alternative nommée dans le README (personnages issus de PC2005-cloud/dsh-pet, inspiration keshing/balance-display).

## Pour toi
Ignorer : gadget cosmétique lié à DeepSeek Harness, jeune (créé en août 2026) et à mainteneur unique ; seul le suivi de solde est utile.

