---
schema: 1
depot: AfalpHy/sylvakru
source_readme_sha: 46f6b5b4ecd81953
ecrite_le: 2026-11-07
nature: app
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: []
verdict: ignorer
---

# AfalpHy/sylvakru

> Lecteur de musique multiplateforme (Flutter) pour bibliothèques locales et serveurs de médias auto-hébergés.

## Le problème
Les lecteurs musicaux grand public ne se branchent pas facilement sur Navidrome, Emby ou WebDAV depuis un seul client multiplateforme.

## Ce que ça fait vraiment
Application Flutter pour Android, iOS, Windows, Linux et macOS. Sources prises en charge : fichiers locaux, WebDAV, Navidrome, Emby, Feiniu Music. La lecture repose sur media_kit (mpv/FFmpeg) et les tags sur audio_tags_lofty. Une version iOS existe sur l'App Store selon le README.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
    A["Application Flutter"] --> B["media_kit : lecture"]
    A --> C["audio_tags_lofty : tags"]
    A --> D["Sources : local, WebDAV"]
    A --> E["Navidrome, Emby, Feiniu Music"]
```

## Essayer
```bash
git clone https://github.com/AfalpHy/sylvakru.git
cd sylvakru
flutter doctor -v
flutter run
flutter build linux
```

## Coût et pièges
Gratuit. La compilation exige Flutter et, sous Ubuntu/Debian, des paquets système (clang, cmake, libgtk-3-dev, libmpv-dev…).

## Ce que ce n'est pas
Pas un service de streaming : il lit tes propres fichiers ou ton serveur. Le mode USB exclusif Android est maintenu dans un fork à part.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : un lecteur de musique n'a pas de lien avec un travail data / IA / MLOps.

