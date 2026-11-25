---
schema: 1
depot: lanyeeee/bilibili-video-downloader
source_readme_sha: 95110b55fba8fe18
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# lanyeeee/bilibili-video-downloader

> Application de bureau pour télécharger des vidéos Bilibili avec sous-titres et danmaku.

## Le problème
Récupérer des vidéos Bilibili avec leurs métadonnées pour une médiathèque locale est manuel.

## Ce que ça fait vraiment
Une application Tauri v2 (interface Vue, backend Rust) télécharge vidéos, séries, cours, audio, sous-titres, danmaku (convertis en ASS) et pochettes, par fragments avec reprise. Elle écrit des fichiers NFO pour Emby et des marqueurs de chapitres et de publicités. Un système de plugins par bibliothèque dynamique existe, sans aucune restriction de sécurité. Le README est en chinois.

## Comment c'est branché
```mermaid
flowchart TD
  DP["DownloadPane.vue"] --> BN["bindings.ts"]
  BN --> CMD["commands.rs"]
  CMD --> BC["bili_client.rs"]
  CMD --> DM["download_manager.rs"]
  DM --> VT["video_task.rs"]
  VT --> DX["danmaku_xml_to_ass.rs"]
```

## Essayer
```bash
git clone https://github.com/lanyeeee/bilibili-video-downloader.git
cd bilibili-video-downloader
pnpm install
pnpm tauri build
```

## Coût et pièges
Gratuit ; compilation avec Rust, Node et pnpm. Le README prévient de faux positifs antivirus et de plugins non sécurisés : ne charger aucun binaire tiers.

## Ce que ce n'est pas
Ce n'est pas un outil de veille ou de data. L'auteur décline toute responsabilité quant aux droits et à la légalité.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : un téléchargeur de vidéos Bilibili ne sert pas un travail data, IA ou MLOps, et pose des questions de droits.

