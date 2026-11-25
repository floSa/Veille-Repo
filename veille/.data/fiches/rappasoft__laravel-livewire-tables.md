---
schema: 1
depot: rappasoft/laravel-livewire-tables
source_readme_sha: b2ac69415ae348f4
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# rappasoft/laravel-livewire-tables

> Composant Livewire pour afficher des tables de données dynamiques dans une application Laravel.

## Le problème
Construire des tableaux triables, filtrables et paginés dans Laravel demande beaucoup de code répétitif.

## Ce que ça fait vraiment
Classe DataTableComponent où l'on déclare le modèle et les colonnes (triables). Fonctionne avec Livewire 3 et 4, démos Bootstrap 4, Bootstrap 5 et Tailwind. Le README minimal renvoie à la documentation en ligne.

## Comment c'est branché
```mermaid
flowchart TD
  PH["Composant PHP UsersTable"] --> DT["DataTableComponent"]
  DT --> CO["Column::make"]
  DT --> MO["Modèle Eloquent"]
  DT --> LW["Livewire 3 / 4"]
```

## Essayer
```bash
composer require rappasoft/laravel-livewire-tables
composer test
```

## Coût et pièges
Gratuit. Requiert PHP, Laravel et Livewire. Livewire embarque Alpine.js : ne pas en charger une seconde copie.

## Ce que ce n'est pas
Pas un outil de BI ou de data science : c'est un composant d'interface Laravel.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : composant PHP/Laravel, hors de ta stack data/IA.

