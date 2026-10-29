---
schema: 1
depot: GhostenEditor/Ghosten-Player
source_readme_sha: ee6bcdaf14826071
ecrite_le: 2026-10-29
nature: app
deploiement: autre
prerequis: [compte à créer, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# GhostenEditor/Ghosten-Player

> Lecteur vidéo Android (téléphone et TV) avec scraping de métadonnées, IPTV et lecture depuis des disques cloud.

## Le problème
Organiser une médiathèque personnelle sur Android TV sans serveur dédié.

## Ce que ça fait vraiment
Scrape les métadonnées (TMDB, nfo), lit depuis Aliyun Drive, Quark, WebDAV, fichiers locaux, Emby et Jellyfin ; gère l'IPTV avec EPG, les gestes, les sous-titres, DLNA. Fonctionne en local sans backend (15 Mo environ). Android 6+ ; versions Windows et macOS en développement. README en chinois.

## Comment c'est branché
```mermaid
flowchart LR
  A[App Android / TV] --> B[Sources: WebDAV, cloud, Emby/Jellyfin]
  A --> C[Scraping TMDB / nfo]
  A --> D[IPTV + EPG]
  A --> E[Lecteur: gestes, sous-titres]
```

## Essayer
Aucune commande : télécharger l'APK adapté à l'architecture dans les Releases (téléphone ou TV, paquets séparés depuis la v1.6.0).

## Coût et pièges
Gratuit ; sponsoring demandé. Les services de disque cloud relèvent de leurs fournisseurs ; le README prévient de risques de bannissement de compte et de limitation de débit.

## Ce que ce n'est pas
Ne fournit aucun contenu. Pas un serveur multimédia : il lit des sources existantes.

## Alternatives
Emby et Jellyfin (pris en charge comme sources, pas des remplaçants).

## Pour toi
À ignorer : application de loisir Android, hors périmètre data/IA/MLOps.

