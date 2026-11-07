---
schema: 1
depot: webmozarts/assert
source_readme_sha: 799f39c1bf882659
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# webmozarts/assert

> Bibliothèque PHP d'assertions pour valider entrées et sorties, avec des messages d'erreur lisibles.

## Le problème
Valider les arguments d'une méthode demande beaucoup de code répétitif, et les messages d'erreur sont souvent inutilisables.

## Ce que ça fait vraiment
La classe `Assert` offre des vérifications de types, de comparaisons, de chaînes, de fichiers, d'objets et de tableaux, qui lèvent une `InvalidArgumentException`. Les préfixes `all*` et `nullOr*` s'appliquent à toutes. Les messages personnalisés suivent un ordre de paramètres cohérent.

## Comment c'est branché
```mermaid
flowchart LR
  EX["External Client"] --> AS["Assert"]
  AS --> IA["InvalidArgumentException"]
  GE["generate.php"] --> MI["Mixin"]
  TE["AssertTest.php"] --> AS
  CI["CI Workflow"] --> TE
```

## Essayer
```bash
composer require webmozart/assert
```

## Coût et pièges
Gratuit, installation par Composer. Rien de caché.

## Ce que ce n'est pas
Ce n'est pas un validateur de formulaires ni de schémas : ce sont des garde-fous qui lèvent une exception.

## Alternatives
- beberlei/assert : l'inspiration du projet, mais ordre des marqueurs `%s` irrégulier.

## Pour toi
À ignorer : bibliothèque PHP, hors de ta pile data / IA.

