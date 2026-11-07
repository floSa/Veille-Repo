---
schema: 1
depot: database64128/youtube-dl-wpf
source_readme_sha: af7fc3cf82883449
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# database64128/youtube-dl-wpf

> Interface graphique Windows (WPF) pour youtube-dl et yt-dlp.

## Le problème
Les options en ligne de commande de yt-dlp sont nombreuses à retenir.

## Ce que ça fait vraiment
Habille youtube-dl ou yt-dlp : liste des formats, choix audio et vidéo, sous-titres, vignettes, métadonnées, playlists, proxy, chemin FFmpeg, modèle de sortie, arguments libres. Met à jour le téléchargeur au démarrage. Aucun téléchargeur n'est fourni.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  UI["youtube-dl-wpf"] --> DL["yt-dlp ou youtube-dl"]
  DL --> FF["FFmpeg"]
  DL --> OUT["Fichier téléchargé"]
```

## Essayer
```bash
dotnet build -c Release
dotnet publish YoutubeDl.Wpf -c Release
dotnet publish YoutubeDl.Wpf -c Release -r win-x64 --self-contained
```

## Coût et pièges
Gratuit. Il faut télécharger soi-même yt-dlp et idéalement FFmpeg. Le binaire non autonome demande .NET. Les bugs de playlist viennent de l'amont.

## Ce que ce n'est pas
Pas un téléchargeur : un simple wrapper. WPF implique Windows. Le téléchargement parallèle (v2.0) n'existe pas encore.

## Alternatives
- yt-dlp et youtube-dl en ligne de commande : sans interface, mais directs.

## Pour toi
À ignorer : utilitaire Windows sans rapport avec le travail data / IA / MLOps.

