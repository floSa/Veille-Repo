# upbound/build

> Archived build repository for Crossplane providers, replaced by crossplane/build.

## The problem
Provide a shared build foundation for Crossplane providers.

## What it actually does
The README only describes its end of life: the repository is no longer maintained and you must switch to crossplane/build by changing the submodule URL. The build content is not described: undocumented.

## How it is wired
```mermaid
graph LR
  A[submodule build upbound] --> B[set-url]
  B --> C[crossplane/build]
```

## Trying it
```bash
git submodule set-url -- build https://github.com/crossplane/build
git submodule sync
cd build
git checkout main
git pull
```

## Cost and gotchas
Archived, last push in 2024. Do not adopt it.

## What it is not
No longer maintained: not a base to use for a new project.

## Alternatives
- crossplane/build, recommended by the README.

## For you
Ignore: archived and replaced by crossplane/build.
