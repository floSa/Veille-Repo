---
schema: 1
depot: dropzone/dropzone
source_readme_sha: 60d602ca00b51d9a
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# dropzone/dropzone

> Bibliothèque JavaScript qui transforme un élément HTML en zone de glisser-déposer avec aperçus et envoi XHR.

## Le problème
Gérer l'envoi de fichiers par glisser-déposer (aperçus, progression, gros fichiers) demande beaucoup de code côté navigateur.

## Ce que ça fait vraiment
Écrite en TypeScript, elle livre ses propres types. Aperçus d'images, haute densité d'écran, envois multiples, progression, envois par morceaux, multipart S3, redimensionnement avant envoi, thème entièrement remplaçable. Version 6 : IE non supporté. Monorepo : bibliothèque, doc Docusaurus, site SvelteKit.

## Comment c'est branché
```mermaid
flowchart LR
  A["div#myId"] --> B["Dropzone class"]
  B --> C["Aperçus / thumbnail"]
  B --> D["Envoi XHR url"]
  B --> E["Événements addedfile"]
```

## Essayer
```bash
npm install dropzone
pnpm install
pnpm build
pnpm test
```
```js
import { Dropzone } from "dropzone";
const dropzone = new Dropzone("div#myId", { url: "/file/post" });
```

## Coût et pièges
Gratuit. Licence présente mais non identifiée par GitHub : à vérifier. Désinstaller `@types/dropzone` (obsolète, v5).

## Ce que ce n'est pas
Pas un serveur de réception : l'endpoint d'envoi reste à écrire.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Brique front pour un outil interne d'annotation ou d'import de données, rien de plus : à ignorer.

