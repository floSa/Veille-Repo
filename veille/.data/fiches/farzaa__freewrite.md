---
schema: 1
depot: farzaa/freewrite
source_readme_sha: 3e30294166a8d774
ecrite_le: 2026-09-29
nature: app
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, matière insuffisante]
verdict: ignorer
---

# farzaa/freewrite

> Petite app Mac open source pour écrire au fil de la plume, à cloner et à remixer.

## Le problème
Écrire sans se censurer demande un outil sans distraction.

## Ce que ça fait vraiment
README de quelques lignes : cloner, ouvrir dans Xcode, compiler. D'après le code, une app SwiftUI locale sans serveur ni base ; elle embarque une police et un texte par défaut, plus des vues d'enregistrement et de lecture vidéo dont le rôle n'est pas décrit.

## Comment c'est branché
```mermaid
graph LR
A["freewriteApp.swift"] --> B["ContentView.swift"]
B --> C["VideoRecordingView"]
B --> D["VideoPlayerView"]
B --> E["default.md"]
B --> F["Assets et polices"]
```

## Essayer
Aucune commande : le README décrit trois étapes (cloner le dépôt, l'ouvrir dans Xcode, cliquer sur Build).

## Coût et pièges
Xcode et un Mac requis. Les droits d'accès vidéo (entitlements) ne sont pas expliqués. Le mainteneur compile lui-même les versions à partir des PR.

## Ce que ce n'est pas
Pas une application multiplateforme ni un outil de prise de notes structurées. La description de l'architecture est en partie déduite des noms de fichiers.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : outil d'écriture personnel pour Mac, sans lien avec la data ou l'IA, README trop maigre pour aller plus loin.

