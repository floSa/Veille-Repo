---
schema: 1
depot: readest/readest
source_readme_sha: fb350e8b297a831b
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# readest/readest

> Lecteur d'ebooks open source multiplateforme (Next.js et Tauri) avec annotations, synchro et lecture à voix haute.

## Le problème
Lire EPUB, PDF, MOBI et autres sur tous ses appareils avec annotations et progression synchronisées.

## Ce que ça fait vraiment
Formats EPUB, PDF, MOBI, FB2, CBZ, etc. ; recherche plein texte, surlignage, dictionnaires, traduction DeepL, synthèse vocale, lecture synchronisée, OPDS/Calibre, synchro avec Koreader. Disponible sur macOS, Windows, Linux, Android, iOS et Web.

## Comment c'est branché
```mermaid
graph TB
    UI["Frontend Next.js"] --> Store["State Management"]
    Store --> Core["Core Services"]
    Core --> Sync["Sync Service"]
    Core --> Book["Book Processing"]
    Core --> Native["Tauri native integration"]
    Core --> Ext["DeepL / Wikipedia APIs"]
```

## Essayer
```bash
nix run --accept-flake-config github:readest/readest
flatpak run com.bilingify.readest
```
Autres installations : App Store, site web, releases GitHub, Flathub.

## Coût et pièges
Gratuit. Sous Windows, WebView2 requis. Sous Wayland, XWayland nécessaire. Licence AGPL-3.0 : obligations en cas de redistribution.

## Ce que ce n'est pas
Pas un outil de data/IA : une application de lecture. Le résumé IA est seulement planifié.

## Alternatives
- Foliate : dont Readest est une réécriture.
- Koreader : synchronisable avec Readest.

## Pour toi
À ignorer pour ton travail data/MLOps : application grand public sans lien métier.

