---
schema: 1
depot: pbatard/rufus
source_readme_sha: d785e1ef1c852af0
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# pbatard/rufus

> Utilitaire Windows pour formater des clés USB et créer des supports de démarrage à partir d'ISO.

## Le problème
Créer une clé USB bootable (Windows, Linux, FreeDOS) à partir d'une image sans outil lourd.

## Ce que ça fait vraiment
Formate en FAT32, NTFS, exFAT, ext2/3, etc. ; écrit des ISO et images disque (y compris compressées) ; contourne TPM/Secure Boot pour Windows 11 ; télécharge des ISO Windows officielles ; teste les blocs défectueux. Binaire portable, sans installation.

## Comment c'est branché
```mermaid
graph LR
  A[Rufus Controller rufus.c] --> B[Desktop UI ui.c]
  A --> C[Drive Manager drive.c]
  C --> D[Format Engine format.c]
  A --> E[ISO Reader iso9660_fs.c]
  E --> F[Boot Installer syslinux.c]
  A --> G[Image Downloader net.c]
```

## Essayer
Aucune commande d'usage : on télécharge le binaire depuis le site officiel. Pour compiler : ouvrir le `.sln` avec Visual Studio, ou `configure`/`make` avec MinGW.

## Coût et pièges
Gratuit. Windows uniquement ; le téléchargement d'ISO passe par les services Microsoft.

## Ce que ce n'est pas
Pas un outil multiplateforme ni un outil de déploiement de masse. GPL-3.0 : copyleft si tu réutilises le code.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile ponctuellement pour monter une machine Windows ou un live Linux, sans lien avec le travail data/IA.

