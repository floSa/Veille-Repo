---
schema: 1
depot: 0x1-company/ios-monorepo
source_readme_sha: 4f13d783c9768b33
ecrite_le: 2026-11-25
nature: app
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft, dernier commit ancien]
verdict: ignorer
---

# 0x1-company/ios-monorepo

> Monorepo Swift de quatre applications iOS d'échange d'identifiants, avec une logique métier commune.

## Le problème
Une petite équipe ne peut pas maintenir quatre applications indépendantes.

## Ce que ça fait vraiment
Un paquet `MatchCore` (reducers TCA) partage la logique ; chaque marque (BeMatch, TapMatch, Trinket, PicMatch, TenMatch) n'a que son paquet d'interface. `Utility` et `Dependencies` (swift-dependencies) alimentent `MatchCore`. Les applications permettent de « liker » puis de discuter après un match.

## Comment c'est branché
Schéma d'après le README.

```mermaid
flowchart TD
  A["Dependencies"] --> C["MatchCore"]
  B["Utility"] --> C
  C --> D["BeMatch"]
  C --> E["TapMatch"]
  C --> F["Trinket"]
  C --> G["PicMatch"]
```

## Essayer
```bash
# Aucune commande documentée dans le README
```

## Coût et pièges
Gratuit. Compilation sous Xcode nécessaire (hors liste des prérequis). Dernier push en août 2025. Licence GPL-3.0 (copyleft).

## Ce que ce n'est pas
Pas un framework réutilisable : ce sont les applications d'une société, qui cherche surtout des partenaires.

## Alternatives
Aucune citée dans le README.

## Pour toi
Ignorer : exemple d'architecture TCA pour iOS, hors sujet pour un profil data / IA / MLOps.

