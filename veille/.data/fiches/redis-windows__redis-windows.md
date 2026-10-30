---
schema: 1
depot: redis-windows/redis-windows
source_readme_sha: e18c83c624f11b09
ecrite_le: 2026-10-30
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# redis-windows/redis-windows

> Builds de Redis compilés pour Windows, avec un service wrapper, pour le développement local.

## Le problème
Redis n'est pas fourni nativement pour Windows.

## Ce que ça fait vraiment
Binaires compilés depuis les sources officielles via MSYS2/Cygwin. `RedisService.exe` (wrapper .NET 10) lance Redis ou l'installe comme service Windows et convertit les chemins Windows en chemins Cygwin ; `redis-server.exe` direct exige des chemins `/cygdrive/...`.

## Comment c'est branché
```mermaid
flowchart LR
  A[RedisService.exe] --> B[Conversion chemins Windows-Cygwin]
  B --> C[redis-server.exe: runtime Cygwin]
  C --> D[Répertoire --dir]
  E[redis-cli] --> C
```

## Essayer
```cmd
RedisService.exe run --foreground --port 6379 --dir C:\redis-data
RedisService.exe install -c C:\config\redis.conf --dir D:\data\redis --port 6379
net start Redis
```

## Coût et pièges
Gratuit. Toujours passer `--dir` et arrêter proprement (`redis-cli SHUTDOWN`) sinon les données sont perdues.

## Ce que ce n'est pas
Pas un produit de Redis Ltd. : non affilié. Recommandé pour le dev local seulement, pas la production.

## Alternatives
Redis officiel sous Linux, recommandé par le README pour la production.

## Pour toi
Ignorer, sauf poste Windows sans WSL : prends Redis sous Linux ou Docker pour tout usage sérieux.

