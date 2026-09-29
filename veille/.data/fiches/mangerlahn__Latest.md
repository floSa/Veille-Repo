---
schema: 1
depot: mangerlahn/Latest
source_readme_sha: 5ec7d0f75c97c3d4
ecrite_le: 2026-09-29
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# mangerlahn/Latest

> Petite appli macOS qui vérifie si tes applications sont à jour, App Store et Sparkle.

## Le problème
Savoir quelles applis Mac ont une mise à jour, sans les ouvrir une à une.

## Ce que ça fait vraiment
Un `UpdateCheckCoordinator` lance des vérifications (App Store via CommerceKit, Sparkle, Homebrew) et alimente `UpdateRepository` et son cache. Les mises à jour passent par une `UpdateQueue`. Architecture MVVM, sans serveur : tout tourne en local.

## Comment c'est branché
```mermaid
flowchart LR
    UI["Storyboard, ViewControllers, Views"] --> VM["View Model"]
    VM --> C["UpdateCheckCoordinator"]
    C --> S["SparkleCheckerOperation"]
    C --> M["MacAppStoreCheckerOperation"]
    C --> R["UpdateRepository"]
    VM --> Q["UpdateQueue"]
```

## Essayer
```bash
brew install --cask latest
```

## Coût et pièges
Gratuit ; don optionnel. Développé sur le temps libre : mises à jour occasionnelles. L'usage de frameworks privés Apple pour l'App Store est décrit dans l'architecture.

## Ce que ce n'est pas
Ne couvre que l'App Store et Sparkle selon le README (Homebrew apparaît dans l'architecture, pas dans le README).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utilitaire de poste Mac, hors périmètre data/IA/MLOps.

