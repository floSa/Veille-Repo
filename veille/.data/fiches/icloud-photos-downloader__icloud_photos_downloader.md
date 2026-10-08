---
schema: 1
depot: icloud-photos-downloader/icloud_photos_downloader
source_readme_sha: b4a296c87b6b4618
ecrite_le: 2026-10-08
nature: outil
deploiement: pip
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [dépend d'un SaaS, mainteneur unique]
verdict: surveiller
---

# icloud-photos-downloader/icloud_photos_downloader

> Outil en ligne de commande qui télécharge ta photothèque iCloud sur disque local.

## Le problème
Sortir ses photos d'iCloud et les garder synchronisées sans passer par l'application Apple.

## Ce que ça fait vraiment
`icloudpd` s'authentifie (avec 2FA), liste les bibliothèques, télécharge les photos avec déduplication, gère Live Photos et RAW. Trois modes : copie, synchronisation (suppression locale si supprimé sur iCloud) et déplacement (suppression sur iCloud). Peut tourner en continu et mettre à jour les dates EXIF.

## Comment c'est branché
```mermaid
flowchart LR
  U[Utilisateur] --> CLI[cli.py + config.py]
  CLI --> AU[authentication.py]
  AU --> IC[iCloud : base.py + session.py]
  IC --> PH[photos.py]
  PH --> DL[download.py]
  DL --> FS[Fichiers locaux]
```

## Essayer
```bash
icloudpd --directory /data --username my@email.address --watch-with-interval 3600
icloudpd --username my@email.address --password my_password --auth-only
```

## Coût et pièges
Gratuit. Prérequis iCloud : activer l'accès web aux données et désactiver la protection avancée des données. Les modes sync et move suppriment des fichiers.

## Ce que ce n'est pas
Le dépôt cherche un mainteneur (annonce en tête du README). Dépend des serveurs Apple, qui peuvent renvoyer ACCESS_DENIED.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique pour sauvegarder des photos ou constituer un jeu d'images, mais le besoin d'un mainteneur et la dépendance à Apple rendent l'avenir incertain.

