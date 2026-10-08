---
schema: 1
depot: MuhammedKalkan/OpenLens
source_readme_sha: 941653356bbbfe6a
ecrite_le: 2026-10-08
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# MuhammedKalkan/OpenLens

> Dépôt de binaires signés du code ouvert de Lens, l'IDE Kubernetes, sans connexion obligatoire.

## Le problème
Lens a fermé son code source ; la partie ouverte n'est plus distribuée en binaires.

## Ce que ça fait vraiment
Ne modifie pas le code source : il fournit des builds signés d'OpenLens. D'après le code, de petits scripts éditent le manifeste amont (`update.js`) et choisissent des compilateurs Linux (`beforeBuild.js`). Un auto-updater est annoncé. Installation via Homebrew, Scoop, Winget, Chocolatey ou binaires.

## Comment c'est branché
```mermaid
graph TD
  Maint[Build maintainer] --> Cfg[Build configuration : update.js]
  Cfg --> Manifest[OpenLens manifest]
  Maint --> Linux[Linux compiler setup : beforeBuild.js]
  Cfg --> Bins[Signed binaries]
  Bins --> Upd[Auto updater]
  Upd --> User[OpenLens user]
```

## Essayer
```bash
brew install --cask openlens
scoop bucket add extras
scoop install openlens
winget install openlens
```

## Coût et pièges
Gratuit. Le README avertit que Lens a fermé son code : plus de mises à jour à attendre. Dernier push en mai 2024. Aucune licence déclarée sur ce dépôt de build. Binaires tiers : confiance dans le mainteneur.

## Ce que ce n'est pas
Pas le code de Lens : les problèmes logiciels se signalent au dépôt Lens. Pas une version maintenue activement.

## Alternatives
- Lens IDE : la distribution officielle de Mirantis, sous EULA classique.

## Pour toi
À ignorer : figé depuis 2024, binaires d'un tiers sans licence déclarée ; mieux vaut un client Kubernetes suivi.

