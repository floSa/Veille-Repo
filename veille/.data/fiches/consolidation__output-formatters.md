---
schema: 1
depot: consolidation/output-formatters
source_readme_sha: 32888da3ec203ad4
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# consolidation/output-formatters

> Bibliothèque PHP qui met en forme des données structurées (tableau, JSON, YAML) pour les commandes console.

## Le problème
Une commande console qui écrit elle-même son affichage est liée à Symfony Console et difficile à décliner en plusieurs formats.

## Ce que ça fait vraiment
La commande renvoie des données structurées (RowsOfFields, PropertyList…). Le FormatterManager les transforme selon les options utilisateur (--format, --fields) puis un formateur écrit le résultat. Tout nouveau format est disponible automatiquement pour les commandes compatibles.

## Comment c'est branché
```mermaid
flowchart TD
  d1["src/StructuredData/RowsOfFields.php"] --> m1["src/FormatterManager.php"]
  d2["src/StructuredData/PropertyList.php"] --> m1
  m2["src/Options/FormatterOptions.php"] --> m1
  m1 --> m3["src/Transformations/TableTransformation.php"]
  m3 --> f3["src/Formatters/TableFormatter.php"]
  m1 --> f1["src/Formatters/FormatterInterface.php"]
  f1 --> f2["src/Formatters/JsonFormatter.php"]
```

## Essayer
```bash
# composer.json
"require": {
    "consolidation/output-formatters": "^4"
}
```

## Coût et pièges
Gratuit ; il faut PHP et Composer (absents de la liste des prérequis). Le README renvoie à Consolidation/AnnotatedCommand pour l'usage normal.

## Ce que ce n'est pas
Pas un outil autonome : une brique pour d'autres projets (Drush). Ne produit pas de sortie XML fidèle à partir d'un simple tableau PHP.

## Alternatives
Aucune alternative nommée, hors les formateurs de Drush dont il s'inspire.

## Pour toi
À ignorer : brique PHP de ligne de commande, sans usage dans un travail data/IA/MLOps.

