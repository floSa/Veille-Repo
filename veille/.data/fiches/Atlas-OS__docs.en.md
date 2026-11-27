# Atlas-OS/docs

> AtlasOS documentation (installation, update, configuration), built with Material for MkDocs.

## The problem
AtlasOS users need a guide for installation, drivers and troubleshooting.

## What it actually does
Repository of Markdown pages: getting started, installation and upgrade, Atlas settings, hardware and drivers, software, toolbox, FAQ. Hosted on Cloudflare Pages. User-oriented content; the links between sections are not described.

## How it is wired
```mermaid
flowchart LR
  A[Pages Markdown] --> B[Material for MkDocs]
  B --> C[Cloudflare Pages]
  C --> D[Utilisateur AtlasOS]
```

## Trying it
```bash
pip install -r requirements.txt
mkdocs serve
```

## Cost and gotchas
Free. Windows: `locally-host.cmd` for convenience.

## What it is not
Not the operating system itself, only its docs. CC-BY-SA-4.0 license: share-alike.

## Alternatives
Hummingbot documentation (source of inspiration for the theme, cited in the credits).

## For you
Ignore: documentation for a modified Windows OS, no data/AI value, except to copy the MkDocs setup.
