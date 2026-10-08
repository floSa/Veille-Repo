---
schema: 1
depot: ollm/OpenComic
source_readme_sha: 6fad8a7e0b2d6dde
ecrite_le: 2026-10-08
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# ollm/OpenComic

> Lecteur de bandes dessinées et mangas Electron, multiplateforme, lisant archives, PDF et serveurs distants.

## Le problème
Lire des collections de comics dans divers formats (CBZ, CBR, PDF, EPUB) avec progression et réglages d'image.

## Ce que ça fait vraiment
- Lit images (JPG, AVIF, WEBP…), archives (RAR, ZIP, 7Z, CBZ…), PDF et EPUB (alpha).
- Accès à des serveurs smb, ftp, sftp, s3, webdav ; catalogues OPDS.
- Modes manga, webtoon, double page, loupe, filtres de couleur.
- Suivi AniList, MyAnimeList, Mangabaka, Bangumi.

## Comment c'est branché
```mermaid
flowchart LR
  MAIN["Window lifecycle (main.js)"] --> FM["File manager (file-manager.js)"]
  FM --> RC["Reading controller (reading.js)"]
  RC --> RD["Page rendering (render.js)"]
  FM --> SC["Remote connections (server-client.js)"]
  RC --> TR["Reading trackers (tracking-sites.js)"]
  RC --> ST["Persistent settings (storage.js)"]
```

## Essayer
```bash
git clone https://github.com/ollm/OpenComic.git
cd OpenComic
npm install
npm start
```

## Coût et pièges
Gratuit. Node et npm pour le développement ; sinon installeurs (exe, dmg, deb, flatpak, snap, AppImage). Si le build échoue : `npm install --force` dans `build/node-zstd-native-dependencies`.

## Ce que ce n'est pas
Pas un téléchargeur de comics. Pas de bibliothèque en ligne fournie.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : application de loisir sans rapport avec ton métier, même si elle est mûre (créée en 2017).

