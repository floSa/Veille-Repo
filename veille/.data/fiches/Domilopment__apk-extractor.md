---
schema: 1
depot: Domilopment/apk-extractor
source_readme_sha: 3035f3bcb0c86c26
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# Domilopment/apk-extractor

> Application Android pour sauvegarder, gérer et restaurer les APK des applications installées, sans root.

## Le problème
Android ne permet pas simplement de conserver le fichier d'installation d'une application pour la réinstaller ou la partager.

## Ce que ça fait vraiment
L'app extrait les APK, y compris les applications système, avec filtres et recherche. Elle sauvegarde en APK seul ou en bundle (.apks, .xapk), peut sauvegarder automatiquement à chaque mise à jour et réinstaller depuis ses sauvegardes. Elle propose une boîte d'installation pour les fichiers apks/xapk.

## Comment c'est branché
```mermaid
flowchart TD
  main["MainActivity.kt"] --> nav["ApkExtractorNavigation.kt"]
  nav --> alist["AppListScreen.kt"]
  alist --> vm["AppListViewModel.kt"]
  vm --> uc["SaveAppsUseCase.kt"]
  uc --> repo["ApplicationRepository.kt"]
  uc --> files["FilesRepository.kt"]
  files --> db["ApkDatabase.kt"]
```

## Essayer
Aucune commande documentée : le README décrit l'usage de l'interface et la marche à suivre pour ajouter une langue.

## Coût et pièges
Gratuit, sans root. L'installation du binaire n'est pas détaillée dans le README. Une sauvegarde de base.apk seul peut planter au lancement si des APK fractionnés manquent.

## Ce que ce n'est pas
Ce n'est pas une sauvegarde des données des applications, seulement des fichiers d'installation. Ce n'est pas un outil de data science.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer pour ton métier : utilitaire Android personnel, utile seulement si tu gères toi-même des APK.

