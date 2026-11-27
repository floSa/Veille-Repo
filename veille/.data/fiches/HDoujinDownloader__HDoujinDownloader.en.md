# HDoujinDownloader/HDoujinDownloader

> Downloader for doujinshi and image galleries from many sites, as a portable executable.

## The problem
Fetching and organizing image galleries from various sites is done by hand, page by page.

## What it actually does
Portable executable, no installation. Downloads galleries, organizes them by their metadata, tracks new chapters, converts to ZIP/CBZ, RAR/CBR, PDF, CBW or 7Z and resizes images. Watches the clipboard to download copied URLs. Multilingual interface.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
    A["URL de galerie"] --> B["HDoujinDownloader"]
    B --> C["Téléchargement"]
    C --> D["Conversion"]
    D --> E["Collection organisée"]
```

## Trying it
No command documented. Download the latest release and run the executable.

## Cost and gotchas
Free. Very short README: the list of supported sites, the platform and the update mechanism are not documented. 248 open issues according to the catalog.

## What it is not
Not a generic scraping tool for data: it is designed for image galleries from specific sites. Complying with each site's terms of use remains your responsibility.

## Alternatives
No named alternative in the README.

## For you
Ignore: a gallery downloader unrelated to data or AI, and the README is too thin to judge further.
