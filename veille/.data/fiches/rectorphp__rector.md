---
schema: 1
depot: rectorphp/rector
source_readme_sha: e8e116d25f35a628
ecrite_le: 2026-10-30
nature: outil
deploiement: autre
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# rectorphp/rector

> Outil PHP de mise à niveau et de refactoring automatique du code, pour équipes PHP.

## Le problème
Migrer du PHP 5.3 vers 8.5 ou changer de version de Symfony/PHPUnit/Doctrine à la main prend du temps.

## Ce que ça fait vraiment
Applique des règles (seules ou en ensembles) sur l'AST via nikic/php-parser, configurées dans `rector.php`. Mode `--dry-run` pour voir le diff. Support commercial proposé par l'éditeur. Limites : mise en forme dégradée (il faut un outil de style comme ECS), cas PHP+HTML, Windows en mode parallèle.

## Comment c'est branché
```mermaid
flowchart LR
  A[rector.php] --> B[vendor/bin/rector]
  B --> C[php-parser AST]
  C --> D[Rules / Sets]
  D --> E[Diff ou fichiers modifiés]
```

## Essayer
```bash
composer require rector/rector --dev
vendor/bin/rector src --dry-run
vendor/bin/rector src
```

## Coût et pièges
Gratuit ; aide payante optionnelle. Prévoir un outil de formatage après passage.

## Ce que ce n'est pas
Pas un formateur de code ni un linter de style.

## Alternatives
Aucune alternative nommée ; ECS cité comme complément.

## Pour toi
Ignorer : réservé aux bases PHP, hors de ta pile.

