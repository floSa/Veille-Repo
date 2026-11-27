# github/training-kit

> Git and GitHub cheat sheets in Jekyll, published by GitHub's Professional Services team.

## The problem
Teams need practical Git/GitHub cheat sheets to distribute, sometimes behind a firewall.

## What it actually does
Repository of Git and GitHub cheat sheets, in several languages, and guides, on a Jekyll site styled with Primer CSS. The rest of the older content (training courses, videos) has been removed. A script packages the site into an archive for an internal server.

## How it is wired
```mermaid
flowchart LR
  A["Markdown content"] --> B["Jekyll Engine"]
  C["_layouts and _includes"] --> B
  D["assets scss"] --> B
  B --> E["_site Output"]
  E --> F["GitHub Pages"]
```

## Trying it
```bash
script/package
mkdir -p test_site/kit
tar -xzf release-XXXXXXX.tgz -C test_site/kit
cd test_site
python -m http.server
```

## Cost and gotchas
Free. Content under CC-BY-4.0 (attribution), code under CC0-1.0.

## What it is not
No longer a full training course: the old content is in the history.

## Alternatives
No alternative cited in the README.

## For you
Worth watching: practical Git sheets to print or host internally, nothing more.
