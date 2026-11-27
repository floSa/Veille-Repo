# hartator/wayback-machine-downloader

> Ruby command-line tool that downloads an entire site from the Wayback Machine.

## The problem
Recovering a vanished site from the archives means downloading every page and every version by hand.

## What it actually does
It downloads the latest version of every file of an archived site into `./websites/<domain>/`, keeping the original folder structure and creating `index.html` files. It offers filters (`--only`, `--exclude`), a date range, all snapshots, a JSON list mode and parallel downloading.

## How it is wired
```mermaid
graph LR
    A["wayback_machine_downloader"] --> B["Wayback Machine"]
    B --> C["Liste des instantanés"]
    C --> D["Filtres (only, exclude, from, to)"]
    D --> E["websites/example.com/"]
```
Simplified diagram based on the sheet, no diagram provided.

## Trying it
```bash
gem install wayback_machine_downloader
wayback_machine_downloader http://example.com
wayback_machine_downloader http://example.com --list
docker pull hartator/wayback-machine-downloader
```

## Cost and gotchas
Free. Requires Ruby 1.9.2 or later (not in the prerequisites list). Last push in February 2024: maintenance uncertain. A licence is present but not identified by GitHub.

## What it is not
It is not a copier of rendered pages: it fetches the original files, not rewritten by the Wayback Machine. It bypasses no limit of the archive service.

## Alternatives
The README names none.

## For you
Worth watching: handy for building a corpus from archived sites, but little maintained and the licence needs checking.
