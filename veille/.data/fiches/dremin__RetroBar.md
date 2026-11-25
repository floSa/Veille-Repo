---
schema: 1
depot: dremin/RetroBar
source_readme_sha: 845bc0aa43bfbaa5
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

# dremin/RetroBar

> Remplace la barre des tâches Windows par un style classique 95, XP ou Vista, pour nostalgiques.

## Le problème
La barre des tâches moderne de Windows ne se règle pas et ne ressemble plus aux anciennes versions.

## Ce que ça fait vraiment
Application WPF qui remplace la barre native : liste des tâches avec glisser-déposer, zone de notification, lancement rapide, horloge, sélecteur de langue, multi-écrans, miniatures de style Vista. Plusieurs thèmes inclus ; thèmes et langues personnalisés en fichiers XAML. Elle s'appuie sur la bibliothèque ManagedShell.

## Comment c'est branché
Schéma d'après le diagramme fourni.

```mermaid
flowchart TD
  A["App.xaml.cs"] --> B["WindowManager.cs"]
  B --> C["Taskbar.xaml.cs"]
  C --> D["TaskList.xaml.cs"]
  C --> E["Clock.xaml.cs"]
  A --> F["ManagedShell services"]
  G["Settings.cs"] --> H["SettingsManager.cs"]
```

## Essayer
Le README ne donne pas de commande : installateur ou version portable, avec .NET Desktop Runtime téléchargé au besoin.

## Coût et pièges
Gratuit. Windows 7 SP1 à 11 requis. Le runtime .NET est installé automatiquement par l'installateur. 498 issues ouvertes.

## Ce que ce n'est pas
Pas un nouveau menu Démarrer : il ouvre celui de Windows. Réglages conseillés si tu utilises Open-Shell.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : cosmétique Windows sans lien avec ton travail.

