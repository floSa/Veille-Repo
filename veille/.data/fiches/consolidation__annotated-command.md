---
schema: 1
depot: consolidation/annotated-command
source_readme_sha: afc4a740bf5e6433
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

# consolidation/annotated-command

> Bibliothèque PHP qui crée des commandes Symfony Console depuis des méthodes annotées ou à attributs.

## Le problème
Déclarer arguments, options et aide d'une commande Symfony Console demande beaucoup de code de configuration.

## Ce que ça fait vraiment
La fabrique lit docblocks ou attributs PHP 8 et produit des `AnnotatedCommand`. Le `CommandProcessor` les exécute avec dix types de hooks, puis `ResultWriter` formate la sortie. Utilisée par Robo, Drush et Terminus. Le README est tronqué.

## Comment c'est branché
```mermaid
flowchart TD
  A["CommandInfo.php"] --> B["AnnotatedCommandFactory.php"]
  B --> C["AnnotatedCommand.php"]
  C --> D["CommandProcessor.php"]
  D --> E["HookManager.php"]
  D --> F["CommandResult.php"]
  F --> G["ResultWriter.php"]
```

## Essayer
```bash
# composer.json : "consolidation/annotated-command": "^4"
```

## Coût et pièges
Gratuit. PHP et Composer requis (hors liste). Licence présente mais non identifiée.

## Ce que ce n'est pas
Pas un framework complet : Robo, bâti dessus, est recommandé pour démarrer.

## Alternatives
Robo : framework bâti sur cette bibliothèque.

## Pour toi
À ignorer : outillage PHP/Symfony sans rapport avec ta pile data/IA/MLOps.

