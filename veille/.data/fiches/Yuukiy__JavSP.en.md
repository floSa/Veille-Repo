# Yuukiy/JavSP

> Scraper that aggregates metadata for adult videos and organizes the files for Emby, Jellyfin or Kodi.

## The problem
Filling in by hand the metadata and covers of an adult video library.

## What it actually does
Extracts the ID number from the file name, queries several sites in parallel, merges the data, generates an NFO file, downloads the cover and crops it using body analysis (SlimeFace), translates title and synopsis. Configuration via `config.yml` or command-line options. No web interface.

## How it is wired
```mermaid
flowchart LR
  CLI[CLI Layer] --> FM[File Manager]
  FM --> CM[Crawler Manager]
  CM --> W[Crawlers web/*.py]
  W --> AG[Aggregation Logic]
  AG --> NFO[NFO Generator]
```

## Trying it
```bash
JavSP -h
```
The README gives no other command; detailed usage is in the wiki.

## Cost and gotchas
GPL-3.0 license plus Anti 996, with additional conditions: commercial use forbidden, no promotion on certain Chinese networks. Documentation in Chinese only. Last push in February 2025.

## What it is not
Not a general AI or data tool: adult content, outside the professional scope.

## Alternatives
The README names no alternative.

## For you
Ignore: off-topic content, restrictive license and a project more than a year old.
