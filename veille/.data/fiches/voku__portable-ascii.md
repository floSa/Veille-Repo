---
schema: 1
depot: voku/portable-ascii
source_readme_sha: 96b4a3ba0732a97b
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

# voku/portable-ascii

> Bibliothèque PHP sans dépendance pour translittérer et nettoyer du texte en ASCII.

## Le problème
Convertir du texte Unicode en ASCII (slugs, noms de fichiers) dépend souvent d'extensions PHP absentes du serveur.

## Ce que ça fait vraiment
Une classe statique `ASCII.php` charge à la demande des tables par langue et par plan Unicode (dossier `data`). Méthodes : `to_ascii`, `to_transliterate`, `to_slugify`, `to_filename`, `clean`, `normalize_msword`, `remove_invisible_characters`. Aucune extension requise (PCRE seulement).

## Comment c'est branché
```mermaid
flowchart TD
  A["src/voku/helper/ASCII.php"]
  B["data/ascii_by_languages.php"] --> A
  D["data/ascii_ord.php"] --> A
  E["data/x000.php"] --> A
  F["tests/AsciiTest.php"] --> A
  I["composer.json"] --> A
```

## Essayer
```bash
composer require voku/portable-ascii
./vendor/bin/phpunit
```

## Coût et pièges
Gratuit. PHP 7.1 minimum. Un exemple du README contient des caractères corrompus. La translittération perd des informations.

## Ce que ce n'est pas
Ce n'est pas un outil de normalisation Unicode complet ni de traduction.

## Alternatives
- voku/Stringy : version orientée objet, citée dans le README.

## Pour toi
À ignorer : bibliothèque PHP ; en Python, une translittération équivalente existe déjà dans l'écosystème.

