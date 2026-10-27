---
schema: 1
depot: OpenTabletDriver/OpenTabletDriver
source_readme_sha: 1824677b975fcca8
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# OpenTabletDriver/OpenTabletDriver

> Pilote de tablette graphique open source, multiplateforme, en mode utilisateur, avec daemon et interface.

## Le problème
Les pilotes constructeurs de tablettes (Wacom, XP-Pen, Huion…) sont lourds, propriétaires et inégaux selon l'OS.

## Ce que ça fait vraiment
Un daemon lit les rapports bruts de la tablette via des bibliothèques natives par OS, les interprète avec des configurations JSON par modèle, applique filtres et plugins puis pilote le curseur. L'interface (WPF, GTK ou MacOS) et la console parlent au daemon par RPC.

## Comment c'est branché
```mermaid
flowchart LR
  A[Native.Linux / Windows / MacOS] --> B[Configurations + Parsers]
  B --> C[OpenTabletDriver.Daemon]
  C --> D[Plugin Manager]
  C --> E[UX.Gtk / Wpf / MacOS]
  C --> F[OpenTabletDriver.Console]
```

## Essayer
```bash
./eng/bash/package.sh
./eng/bash/package.sh --package Debian
./build.sh linux
```

## Coût et pièges
Gratuit. Compiler demande le SDK .NET 10 et des paquets système (libx11, libevdev2, GTK+3 sur Linux). Sur Windows, la sortie Windows Ink exige un plugin et le pilote VMulti. Signature obligatoire des paquets macOS arm64.

## Ce que ce n'est pas
Pas un logiciel de dessin. Pas un outil data ou IA. Le support dépend de la présence du modèle dans les configurations.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : utile si tu as une tablette graphique, hors de ton périmètre data / IA / MLOps.

