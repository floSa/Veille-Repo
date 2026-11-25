---
schema: 1
depot: r-lib/devtools
source_readme_sha: deb3614cd94a2a87
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# r-lib/devtools

> Façade de fonctions R qui accélère les tâches courantes de développement de paquets R.

## Le problème
Développer un paquet R oblige à enchaîner chargement, documentation, tests, build et publication CRAN par des outils épars.

## Ce que ça fait vraiment
load_all simule l'installation, document génère la documentation, test lance testthat, check construit et vérifie le paquet, release prépare la soumission CRAN. Les install_* installent depuis GitHub, GitLab ou une URL. L'essentiel est délégué à pkgload, pkgbuild, roxygen2, rcmdcheck, revdepcheck et usethis, installés automatiquement.

## Comment c'est branché
```mermaid
flowchart TD
  D(("Développeur R")) --> F["devtools-package.R"]
  F --> L["pkgload.R"]
  F --> B["pkgbuild.R"]
  F --> O["document.R"]
  F --> Q["check.R"]
  F --> R["release.R"]
```

## Essayer
```r
install.packages("devtools")
pak::pak("r-lib/devtools")
```

## Coût et pièges
Gratuit. Il faut R. La licence est présente mais non identifiée par GitHub. Pour un paquet déployé, le README conseille de dépendre directement des paquets découpés, pas de devtools.

## Ce que ce n'est pas
Pas un outil d'analyse de données : il sert à écrire des paquets R.

## Alternatives
pak pour installer des paquets ; usethis pour automatiser la configuration d'un paquet ; testthat pour les tests.

## Pour toi
À ignorer sauf si tu publies des paquets R : la plupart des travaux data/IA actuels sont en Python.

