---
schema: 1
depot: ReVanced/revanced-cli
source_readme_sha: 72a2958e0f239ea7
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# ReVanced/revanced-cli

> Application en ligne de commande qui applique des patches ReVanced à des applications Android.

## Le problème
Modifier des applications Android avec un ensemble de patches demande un outil qui assemble, applique et installe le résultat.

## Ce que ça fait vraiment
MainCommand.kt répartit vers les sous-commandes : patch (utilise ReVanced Patcher), liste des patches d'un bundle, liste des versions compatibles et utilitaires d'installation et de désinstallation par ADB, par le gestionnaire de paquets ou en montage root. La construction passe par Gradle.

## Comment c'est branché
```mermaid
flowchart TD
  A["build.gradle.kts"] --> D["MainCommand.kt"]
  D --> E["PatchCommand.kt"]
  D --> F["ListPatchesCommand.kt"]
  D --> G["ListCompatibleVersions.kt"]
  D --> H["utility/UtilityCommand.kt"]
  H --> I["utility/InstallCommand.kt"]
  H --> J["utility/UninstallCommand.kt"]
```

## Essayer
Aucune commande dans le README : il renvoie à la documentation d'usage (docs/1_usage.md) et au lien de téléchargement.

## Coût et pièges
Gratuit, GPL-3.0. Fonctionne avec ADB pour l'installation. Le README ne précise pas la version de Java requise, mais le projet est écrit en Kotlin et se construit avec Gradle.

## Ce que ce n'est pas
Ce n'est pas un jeu de patches : ceux-ci viennent de bundles séparés.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : personnalisation d'applications Android sans lien avec la data, l'IA ou le MLOps.

