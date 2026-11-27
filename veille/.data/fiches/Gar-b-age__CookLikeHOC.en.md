# Gar-b-age/CookLikeHOC

> Markdown recipe collection inspired by the traceability report of the Laoxiangji chain.

## The problem
Not documented beyond the theme: reproducing the dishes of a Chinese restaurant chain.

## What it actually does
Markdown recipes sorted by category, taken from Laoxiangji's "dish traceability report".
Static VitePress site (cooklikehoc.soilzhu.su) with automatic index generation.
Docker support and an AI-illustrated version.

## How it is wired
```mermaid
flowchart LR
  MD[Content Layer Markdown] --> GEN[Build Scripts]
  GEN --> VP[VitePress Config]
  TH[Theme Layer] --> VP
  VP --> HOST[Static Host/CDN]
  HOST --> BR[Browser Client]
```

## Trying it
No command documented in the README.

## Cost and gotchas
Free. No license declared; content copied from a commercial report. An unofficial site with the same name exists.

## What it is not
Not a technical tool; no link with data or AI.

## Alternatives
- How To Cook: recipe project cited as a neighbor.

## For you
Skip: recipe repository unrelated to a data/AI/MLOps profile.
