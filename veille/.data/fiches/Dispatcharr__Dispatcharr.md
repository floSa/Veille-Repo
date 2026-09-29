---
schema: 1
depot: Dispatcharr/Dispatcharr
source_readme_sha: 28b38452ce0ea84c
ecrite_le: 2026-09-29
nature: service
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# Dispatcharr/Dispatcharr

> Serveur auto-hébergé qui centralise flux IPTV, guides EPG et VOD pour Plex, Emby et Jellyfin.

## Le problème
Multiplier les fournisseurs IPTV, playlists et guides rend la gestion des chaînes et des enregistrements difficile.

## Ce que ça fait vraiment
Monolithe Django avec front React : import M3U/Xtream Codes, appariement EPG, proxy de flux avec basculement, DVR, VOD, émulation HDHomeRun, profils de transcodage FFmpeg, comptes multi-utilisateurs, plugins et webhooks. Celery, Redis (pub/sub), Postgres.

## Comment c'est branché
```mermaid
flowchart LR
  F["Frontend React"] --> A["API Django"]
  A --> DB[("Postgres")]
  A --> R[("Redis")]
  A --> C["Celery jobs"]
  A --> P["Proxy layer (live, VOD)"]
  P --> H["HDHomeRun / M3U / XC"]
```

## Essayer
```bash
docker pull ghcr.io/dispatcharr/dispatcharr:latest
docker run -d \
  -p 9191:9191 \
  --name dispatcharr \
  -v dispatcharr_data:/data \
  ghcr.io/dispatcharr/dispatcharr:latest
```

## Coût et pièges
Il faut fournir ses propres abonnements IPTV. La première configuration web est limitée aux réseaux privés par défaut ; derrière un proxy, régler `DISPATCHARR_TRUSTED_PROXIES`.

## Ce que ce n'est pas
Ne fournit aucun contenu. Compilation depuis les sources « non officiellement supportée ».

## Alternatives
- Aucune alternative citée dans le README.

## Pour toi
À ignorer : outil de médiacentre domestique, sans lien avec les métiers data/IA/MLOps.

