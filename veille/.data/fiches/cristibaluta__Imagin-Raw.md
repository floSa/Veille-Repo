---
schema: 1
depot: cristibaluta/Imagin-Raw
source_readme_sha: f23bbbd3056cb4cf
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: freemium
maturite: utilisable
gouvernance: une personne
alertes: []
verdict: ignorer
---

# cristibaluta/Imagin-Raw

> Application macOS native pour parcourir, trier et noter des photos RAW, alternative légère à Adobe Bridge.

## Le problème
Adobe Bridge est lourd (environ 2 Go) et lent pour trier de grandes séries de photos RAW.

## Ce que ça fait vraiment
Navigation multi-dossiers sans import, surveillance du disque en temps réel, notes et étiquettes écrites dans des fichiers XMP, rejet des photos, déduplication RAW/JPEG, recherche Spotlight, import de carte SD, détection de doublons et export de vidéo ou de PDF de présentation client. Décodage RAW par LibRaw via un pont Objective-C++.

## Comment c'est branché
```mermaid
flowchart TD
  u1["app/screens/Main/MainView.swift"] --> u3["Thumbs Grid/ThumbGridView.swift"]
  u1 --> u2["Sidebar/SidebarView.swift"]
  u2 --> m1["model/FileSystemMonitor.swift"]
  m1 --> m2["model/PhotosModel.swift"]
  m2 --> m3["metadata/XmpMetadata.swift"]
  m2 --> d1["decoder/LibRawDecoder.swift"]
  d1 --> d2["decoder/RawWrapper.mm"]
```

## Essayer
```bash
# Pas de commande : achat sur l'App Store, téléchargement depuis Releases, ou compilation depuis les sources.
```

## Coût et pièges
Version App Store payante pour soutenir le projet ; macOS 14.6 minimum. Pas de mise à jour automatique pour la version téléchargée.

## Ce que ce n'est pas
Ne reproduit pas les aperçus Camera Raw d'Adobe (il affiche les JPEG intégrés). Le code subit des refactorings et les contributions de code sont déconseillées.

## Alternatives
Adobe Bridge : meilleur pour les aperçus retraités.

## Pour toi
À ignorer : application de photographie macOS, sans rapport avec un travail data/IA.

