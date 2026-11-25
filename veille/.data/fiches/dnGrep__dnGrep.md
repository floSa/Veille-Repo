---
schema: 1
depot: dnGrep/dnGrep
source_readme_sha: 14362d8df45dad8f
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: surveiller
---

# dnGrep/dnGrep

> Utilitaire Windows de recherche dans les fichiers texte, Office, PDF et archives, pour qui fouille de gros dossiers.

## Le problème
La recherche Windows ne sait pas fouiller le contenu de documents Office, PDF et archives avec expressions régulières ou requêtes phonétiques.

## Ce que ça fait vraiment
Recherche par texte, regex, XPath et phonétique dans fichiers texte, Word, Excel, PowerPoint, PDF et archives ; moteurs par type, recherche hexadécimale, moteurs en plugin. Aperçu, remplacement et rapport des résultats. Vérifie les nouvelles versions sur github.com sans envoyer de données (désactivable).

## Comment c'est branché
```mermaid
flowchart TD
  UI["MainView.xaml.cs"] --> VM["MainViewModel.cs"]
  VM --> GC["GrepCore.cs"]
  GC --> FF["FileFilter.cs"]
  GC --> EF["GrepEngineFactory.cs"]
  EF --> PDF["GrepEnginePdf.cs"]
  GC --> RES["GrepSearchResult.cs"]
```

## Essayer
Aucune commande documentée dans le README : l'installation passe par le site principal.

## Coût et pièges
Gratuit. Windows uniquement ; installateurs MSI signés via SignPath depuis la v3.0. Licence GPL-3.0 (copyleft).

## Ce que ce n'est pas
Pas un outil d'indexation continue ni multiplateforme : une application de bureau Windows.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller si tu travailles sous Windows avec des corpus mixtes (PDF, Office) ; sinon sans intérêt pour du MLOps.

