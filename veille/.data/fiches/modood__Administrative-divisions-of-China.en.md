# modood/Administrative-divisions-of-China

> **China's five-level administrative divisions as JSON, CSV and SQLite files, ready to load.**

## The problem

Chinese administrative division codes (province, city, district, township, village) are issued
by the National Bureau of Statistics in a form that is awkward to consume, and the README notes
that from October 2024 the detailed codes are no longer published publicly. Without a
consolidated dataset you have to go and assemble them yourself.

## What it actually does

The repository ships the five levels of the administrative division of the People's Republic of
China as downloadable files: `provinces`, `cities`, `areas`, `streets`, `villages`, each in JSON
and CSV. It also provides cascading-list files for dependent dropdowns: `pc` (province/city),
`pca` (plus district), `pcas` (plus township), each with a "with code" variant (`pc-code`,
`pca-code`, `pcas-code`). The README states there is no five-level cascade file. Every record
carries a `code`, a `name` and the codes of its parent levels (`provinceCode`, `cityCode`,
`areaCode`, `streetCode`), as the preview tables in the README show. The data is kept in a
SQLite file (`dist/data.sqlite`) that the README suggests migrating to MySQL, Oracle or MSSQL.

## How it is wired

```mermaid
graph LR
  SRC[Bureau national des statistiques] --> DB[(dist/data.sqlite)]
  DB --> NIV[Fichiers par niveau provinces cities areas streets villages]
  DB --> CASC[Fichiers en cascade pc pca pcas]
  NIV --> FMT[JSON et CSV]
  CASC --> FMT
  FMT --> REL[Releases pour tout telecharger]
  FMT --> NPM[Paquet npm china-division]
```

The README describes a one-way chain: the official source feeds a SQLite database, from which
the per-level files and the cascade files are derived and published as JSON and CSV under
`dist/`. The README points to the Releases page for a bundled download and shows an npm badge
for the `china-division` package. It does not document the code that produces those files.

## Trying it

```
# No install or build command is documented in the README.
# It links to the files under dist/ and to the Releases page for a bundled download.
```

The README offers download links only: grab the file for the level you need, or `data.sqlite`,
and load it yourself. A badge points to an npm package named `china-division`, but no install
line is written down — nothing is reconstructed here.

## Cost and traps

Nothing to pay, no API key, no third-party service: these are static files. The trap is stated
plainly in the README: **the data is no longer updated**, announced at the top of the sources
section. The latest state matches the 2023 codes (cut-off 2023-06-30, published 2023-09-11).
The README also recalls that since October 2024 the National Bureau of Statistics no longer
publishes the detailed codes, so refreshing it yourself is not straightforward. The village
level is inherently large, a size the README does not quantify.

## What it is not

It is not an API or a queryable service: no server, no requests, just files to download. Nor is
it a living source — the repository is frozen on the 2023 state and will not follow later
mergers, creations or renamings of divisions. It is not a geocoder either: nothing in the README
mentions coordinates, boundaries or polygons, only codes, names and parent links.

## Alternatives

No comparable alternative in the catalogue: the suggested neighbours (`Asabeneh/30-Days-Of-JavaScript`,
a JavaScript learning course, and `pinojs/pino`, a Node logger) have nothing to do with an
administrative-division dataset. The README names no competing project, only the official source
at the National Bureau of Statistics.

## For you

Useful if you work on geographic data or analytics covering China: a clean, hierarchical code
reference you can join straight onto your tables. Treat it as a 2023-dated snapshot rather than
a current source — check freshness before relying on it in production.
