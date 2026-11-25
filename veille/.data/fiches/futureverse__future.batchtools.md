---
schema: 1
depot: futureverse/future.batchtools
source_readme_sha: c78b61ec229f3d9a
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: adopter
---

# futureverse/future.batchtools

> Backend R pour exécuter des futures sur des grappes HPC via batchtools, sans changer le code.

## Le problème
Faire tourner du code R en parallèle sur un cluster Slurm, SGE ou LSF oblige à écrire des scripts de soumission à la main.

## Ce que ça fait vraiment
Fournit des plans future comme batchtools_slurm, batchtools_sge, batchtools_lsf, batchtools_torque, batchtools_local et batchtools_custom. Les backends HPC rendent un gabarit de script de job avant de soumettre le calcul. Les ressources (temps, mémoire, modules) se passent dans plan().

## Comment c'est branché
```mermaid
flowchart TD
  A["R/batchtools_slurm.R"] --> C["BatchtoolsTemplateFutureBackend-class.R"]
  B["R/batchtools_sge.R"] --> C
  C --> D["BatchtoolsFutureBackend-class.R"]
  C --> E["R/render_template.R"]
  E --> F["inst/templates/slurm.tmpl"]
  E --> G["inst/templates/sge.tmpl"]
```

## Essayer
```r
install.packages("future.batchtools")
library(future)
plan(future.batchtools::batchtools_slurm)
f <- future({ Sys.sleep(5); 3.14 })
value(f)
```

## Coût et pièges
Il faut un cluster avec un ordonnanceur ; sans cluster, batchtools_local reste séquentiel. La licence n'est pas reconnue par GitHub.

## Ce que ce n'est pas
Pas un ordonnanceur : il soumet des jobs à Slurm ou SGE, il ne les remplace pas.

## Alternatives
- Le paquet future : plans locaux ou cluster sans ordonnanceur.

## Pour toi
Adopter si tu fais du R sur un cluster HPC : un simple changement de plan() remplace des scripts de soumission.

