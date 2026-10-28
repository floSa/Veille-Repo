---
schema: 1
depot: deckerst/aves
source_readme_sha: 7719bff6ad304ef9
ecrite_le: 2026-10-28
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# deckerst/aves

> Galerie Android et explorateur de métadonnées en Flutter, pour photographes et amateurs de médias.

## Le problème
Les galeries standards gèrent mal formats exotiques, métadonnées et navigation par lieux ou tags.

## Ce que ça fait vraiment
Lit JPEG, MP4, TIFF multipage, SVG, AVI anciens ; détecte photos animées, panoramas, vidéos 360°, GeoTIFF. Navigation albums, tags, cartes. S'intègre à Android (widgets, économiseur d'écran, recherche globale, sélecteur de médias, TV).

## Comment c'est branché
```mermaid
flowchart LR
  A["MainActivity.kt"] --> B["Method handlers"]
  B --> C["AvesEntry.kt"]
  C --> D["Metadata.kt"]
  C --> E["RegionFetcher.kt"]
  B --> F["StorageUtils.kt"]
```

## Essayer
```
scripts/apply_flavor_play.sh
./flutterw run -t lib/main_play.dart --flavor play
```
Il faut aussi `android/key.properties` pour signer le build.

## Coût et pièges
Gratuit. Permissions étendues, dont MANAGE_MEDIA. Le projet n'accepte pas de PR.

## Ce que ce n'est pas
Pas un outil de gestion de photos côté serveur.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : galerie mobile, hors périmètre data / IA / MLOps.

