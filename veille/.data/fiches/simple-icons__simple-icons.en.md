# simple-icons/simple-icons

> Over 3,400 brand SVG icons, as an npm package and via CDN, for web developers.

## The problem
Displaying a brand's logo without having to find, clean up and recolor it yourself.

## What it actually does
A collection of SVG files with metadata (title, slug, hex color, source, optional license). Available by download, by CDN (jsDelivr, unpkg, and cdn.simpleicons.org with color), by npm, by Packagist or as a font. Third-party extensions and libraries (React, Vue, Python…) are listed.

## How it is wired
```mermaid
flowchart LR
  A[simple-icons.json] --> B[Fichiers SVG]
  B --> C[package.json npm]
  C --> D[sdk.mjs]
  B --> E[CDN]
  F[add-icon-data.js] --> A
  G[svglint.config.mjs] --> B
```

## Trying it
```bash
npm install simple-icons
composer require simple-icons/simple-icons
```
```js
import {siSimpleicons} from 'simple-icons';
```

## Cost and gotchas
Free. The README asks you to read the legal disclaimer before use. Pin a major version on the CDN (`@v16`), otherwise a removed icon returns a 404 with `@latest`.

## What it is not
Not a right to use the logos: each brand keeps its rights. The repository is under CC0, but the brands themselves are not.

## Alternatives
No alternative named in the README.

## For you
Worth watching: handy for a report or dashboard showing tool logos; follow each brand's legal guidelines.
