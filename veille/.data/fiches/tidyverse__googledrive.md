---
schema: 1
depot: tidyverse/googledrive
source_readme_sha: 0ecfc88b8c908856
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [compte à créer]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS]
verdict: surveiller
---

# tidyverse/googledrive

> Paquet R pour lister, téléverser et télécharger des fichiers Google Drive depuis R.

## Le problème
Récupérer ou déposer des fichiers sur Drive depuis un script R oblige à manipuler l'API et l'authentification.

## Ce que ça fait vraiment
`drive_find`, `drive_upload` et `drive_download` construisent des requêtes vers l'API Drive v3. `drive_auth` fournit le jeton, et les résultats reviennent sous forme de tableau `dribble`, compatible avec le tidyverse.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  B["R/zzz.R"] --> A["R/drive_auth.R"]
  C["R/drive_endpoints.R"] --> D["R/request_generate.R"]
  D --> E["R/request_make.R"]
  A --> E
  G["R/drive_find.R"] --> D
  G --> F["R/dribble.R"]
```

## Essayer
```bash
Rscript -e 'install.packages("googledrive")'
Rscript -e 'pak::pak("tidyverse/googledrive")'
Rscript -e 'library("googledrive"); drive_find(n_max = 25)'
```

## Coût et pièges
Gratuit. Un compte Google et une autorisation OAuth sont nécessaires. La licence est présente mais non identifiée par GitHub.

## Ce que ce n'est pas
Ce n'est pas un client de synchronisation de dossiers. Il dépend entièrement de Google Drive.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique si tes données partagées vivent sur Drive et que tu travailles en R.

