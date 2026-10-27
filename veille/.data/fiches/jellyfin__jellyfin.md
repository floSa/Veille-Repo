---
schema: 1
depot: jellyfin/jellyfin
source_readme_sha: 88a24330cd3fb606
ecrite_le: 2026-10-27
nature: service
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# jellyfin/jellyfin

> Serveur multimédia libre qui organise et diffuse vos médias vers les appareils des utilisateurs.

## Le problème
Plex et Emby sont propriétaires ; il faut un serveur média sans licence premium ni fonctionnalités verrouillées.

## Ce que ça fait vraiment
Backend .NET qui gère les bibliothèques, interroge les métadonnées, conserve l'état des utilisateurs et diffuse en HLS avec transcodage via ffmpeg. Le client web est un dépôt séparé, hébergé par défaut par le serveur. Descendant d'Emby 3.5.2.

## Comment c'est branché
```mermaid
flowchart LR
  C["Client device"] --> A["Media API"]
  A --> L["Library manager"]
  L --> I["Item repository"]
  A --> H["HLS streaming"]
  H --> T["Transcode manager"]
  L --> M["Metadata providers"]
```

## Essayer
```bash
git clone https://github.com/jellyfin/jellyfin.git
cd jellyfin
dotnet run --project Jellyfin.Server --webdir /absolute/path/to/jellyfin-web/dist
```

## Coût et pièges
Gratuit. Il faut le SDK .NET 10, ffmpeg et les fichiers du client web. FreeBSD reste incompatible. L'assistant d'installation ne marche pas si le client web est hébergé séparément.

## Ce que ce n'est pas
Le README de ce dépôt est orienté développement du serveur, pas utilisation : les téléchargements et le guide d'installation sont sur le site.

## Alternatives
Emby et Plex, cités comme alternatives propriétaires à Jellyfin.

## Pour toi
À ignorer pour la veille data / IA : serveur média personnel sans lien avec le métier.

