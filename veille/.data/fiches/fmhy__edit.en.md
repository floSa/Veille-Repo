# fmhy/edit

> Community wiki of links to free resources on the web, edited collectively.

## The problem
Finding free sites sorted by theme is scattered; this wiki gathers them.

## What it actually does
Markdown pages (`docs/`) rendered by VitePress and published on GitHub Pages, with a feed of articles. An API (`api/`, Cloudflare workers) serves page search and feedback collection, with rate limiting. The README states that neither the site nor GitHub hosts any files.

## How it is wired
```mermaid
flowchart LR
  W["Wiki pages (Markdown)"] --> V["VitePress config + hooks"]
  V --> TH["Theme + composants"]
  TH --> SITE["fmhy.net (GitHub Pages)"]
  API["API routes (single-page, feedback)"] --> G["API guards"]
  SITE --> API
```

## Trying it
No command in the README; contribution goes through the guide and the Discord.

## Cost and gotchas
Free. No license declared. The content is about third-party links whose legality I cannot judge from the README.

## What it is not
Not a tool nor a vetted directory: it is a community list of links.

## Alternatives
No alternative named in the README.

## For you
Ignore: general-purpose list unrelated to data/AI/MLOps, and without an explicit license.
