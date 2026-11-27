# rectorphp/rector

> PHP tool for automatic code upgrading and refactoring, for PHP teams.

## The problem
Migrating PHP 5.3 to 8.5 or changing Symfony/PHPUnit/Doctrine versions by hand takes time.

## What it actually does
Applies rules (alone or in sets) on the AST via nikic/php-parser, configured in `rector.php`. `--dry-run` mode to see the diff. Commercial support offered by the maintainer. Limits: degraded formatting (a style tool such as ECS is needed), PHP+HTML cases, Windows in parallel mode.

## How it is wired
```mermaid
flowchart LR
  A[rector.php] --> B[vendor/bin/rector]
  B --> C[php-parser AST]
  C --> D[Rules / Sets]
  D --> E[Diff ou fichiers modifiés]
```

## Trying it
```bash
composer require rector/rector --dev
vendor/bin/rector src --dry-run
vendor/bin/rector src
```

## Cost and gotchas
Free; optional paid help. Plan a formatting tool after the run.

## What it is not
Not a code formatter nor a style linter.

## Alternatives
No alternative named; ECS cited as a complement.

## For you
Ignore: reserved for PHP codebases, outside your stack.
