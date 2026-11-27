# drupal-composer/drupal-scaffold

> Obsolete Composer plugin that used to download Drupal's scaffold files; replaced by drupal/core-composer-scaffold.

## The problem
A Drupal project under Composer must fetch `index.php`, `update.php` and other core files.

## What it actually does
The plugin downloads these files on every update of `drupal/core`, with the options `excludes`, `includes`, `initial`, `omit-defaults` in `composer.json`. The README begins with "DEPRECATED - DO NOT USE".

## How it is wired
```mermaid
flowchart LR
  A[composer update drupal/core] --> B[drupal-scaffold]
  B --> C[Source drupal.org]
  C --> D[Fichiers scaffold]
```

## Trying it
```bash
composer require drupal-composer/drupal-scaffold:dev-master
composer drupal:scaffold
```

## Cost and gotchas
Free but deprecated, last push in 2020, no declared license.

## What it is not
Not to be used for a new project: the README is marked "DEPRECATED - DO NOT USE". Nor is it a data or AI tool, just a Composer plugin for Drupal.

## Alternatives
drupal/core-composer-scaffold, recommended by the README.

## For you
Ignore: deprecated by its authors and unrelated to your profile.
