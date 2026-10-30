---
schema: 1
depot: wux1an/wxapkg
source_readme_sha: 46d5d5a6df60bd0a
ecrite_le: 2026-10-30
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# wux1an/wxapkg

> Outil de bureau (Wails) pour déchiffrer et décompresser les mini-programmes WeChat `.wxapkg`.

## Le problème
Lire le code source d'un mini-programme WeChat distribué en paquet chiffré.

## Ce que ça fait vraiment
Scanne le dossier d'installation des mini-programmes, accepte un fichier ou dossier manuel, reconstitue l'arborescence source et embellit JSON, HTML et JavaScript. Windows et macOS. « Obtenir les infos du mini-programme » reste à faire. Références : déchiffrement pc_wxapkg_decrypt et notes de rétro-ingénierie.

## Comment c'est branché
```mermaid
flowchart LR
  A[Dossier mini-programmes] --> B[Scan automatique]
  B --> C[Déchiffrement .wxapkg]
  C --> D[Unpack]
  D --> E[Beautify JSON/HTML/JS]
```

## Essayer
```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
cd frontend && npm install && cd ..
wails build
```

## Coût et pièges
Gratuit. Le README impose un avertissement : étude seulement, responsabilité légale à l'utilisateur. Pas de licence.

## Ce que ce n'est pas
Pas un outil de sécurité complet. Rétro-ingénierie de code tiers : risque juridique selon l'usage.

## Alternatives
Aucune alternative nommée.

## Pour toi
Ignorer : outil de rétro-ingénierie hors de ton périmètre, sans licence et à risque juridique.

