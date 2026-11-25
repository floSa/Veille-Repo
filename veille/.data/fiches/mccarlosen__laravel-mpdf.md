---
schema: 1
depot: mccarlosen/laravel-mpdf
source_readme_sha: 5c755501fb121ce9
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence non déclarée, dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# mccarlosen/laravel-mpdf

> Paquet Laravel qui génère des PDF depuis des vues Blade avec la bibliothèque mPDF.

## Le problème
Produire un PDF à partir d'un modèle Blade sans coder soi-même l'intégration de mPDF.

## Ce que ça fait vraiment
Une façade `PDF` charge une vue, du HTML brut ou un fichier ; le constructeur fusionne `config/pdf.php` et les surcharges ponctuelles, configure mPDF et sort le PDF en chaîne, fichier, téléchargement ou flux. Gère en-têtes et pieds de page, polices personnalisées, filigranes, et un découpage du HTML volumineux (`chunkLoadView`).

## Comment c'est branché
```mermaid
flowchart TD
  C(("Contrôleur")) --> F["Façade PDF (LaravelMpdf.php)"]
  F --> W["LaravelMpdfWrapper.php"]
  W --> B["Blade"]
  W --> P["LaravelMpdf.php"]
  P --> M["Moteur mPDF"]
  P --> S["Flux HTTP / fichier"]
```

## Essayer
```bash
composer require carlos-meneses/laravel-mpdf
php artisan vendor:publish --tag=mpdf-config
```

## Coût et pièges
Nécessite PHP et Laravel (testé depuis Laravel 5.4). mPDF dépasse le temps imparti sur un serveur mono-thread (`artisan serve`). Aucune licence déclarée, dernier push en novembre 2024.

## Ce que ce n'est pas
Pas un générateur de rapports décisionnels : un convertisseur HTML vers PDF.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : spécifique à Laravel, sans licence claire et peu actif.

