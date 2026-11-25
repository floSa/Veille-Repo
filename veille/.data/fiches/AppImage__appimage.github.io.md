---
schema: 1
depot: AppImage/appimage.github.io
source_readme_sha: 1e2ca1018321cbaf
ecrite_le: 2026-11-25
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# AppImage/appimage.github.io

> Annuaire collaboratif d'AppImages testées, avec un flux JSON pour boutiques d'applications Linux.

## Le problème
Pas de catalogue central des AppImages disponibles auprès de leurs auteurs.

## Ce que ça fait vraiment
On propose une application par fichier dans `data/` (lien vers le dépôt d'une release). Une action GitHub télécharge l'AppImage, la lance sans réseau sur la plus ancienne Ubuntu LTS encore supportée et publie une capture d'écran ou l'erreur dans la pull request. Le flux est servi sur `appimage.github.io/feed.json`, repris par des boutiques et des outils en ligne de commande listés.

## Comment c'est branché
```mermaid
flowchart TD
  A["Auteur de l'application"] --> D["Fichier data/NOM"]
  D --> P["Pull request"]
  P --> T["Test GitHub Actions"]
  T --> F["feed.json"]
  F --> S["Boutiques et outils tiers"]
```

## Essayer
```bash
# Aucune commande : ajouter un fichier data/<Nom> contenant l'URL du dépôt, puis ouvrir une pull request.
# Commentaire /retest pour relancer le test.
```

## Coût et pièges
Gratuit. 5 466 issues ouvertes. Le format du flux n'est pas stabilisé.

## Ce que ce n'est pas
Ne distribue aucun fichier, ne suit pas les versions et ne garantit rien : n'implique pas la confiance dans les applications listées.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : annuaire de logiciels de bureau Linux, hors de ton usage data / IA / MLOps.

