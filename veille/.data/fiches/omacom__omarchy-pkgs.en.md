# omacom/omarchy-pkgs

> Recipes and build tooling for the Arch packages distributed by the pkgs.omarchy.org repository.

## The problem
Distributing signed Arch packages across several architectures and channels requires a reproducible build, signing and promotion pipeline.

## What it actually does
One folder per package with a PKGBUILD. CI builds each architecture (x86_64 and aarch64), signs and publishes to the `edge` channel. Packages then move to `rc` and then `stable` by promotion. A bot proposes upstream updates based on releases or tags.

## How it is wired
```mermaid
graph LR
  A["PR sur pkgbuilds"] --> B["build-pr.yml"]
  B --> C["merge sur master"]
  C --> D["publish.yml"]
  D --> E["canal edge"]
  E --> F["promote.yml : rc puis stable"]
```

## Trying it
```bash
bin/add-package my-package --local --scaffold
bin/build --package my-package --dry-run
bin/build --package my-package
bin/build --package my-package --arch aarch64
```

## Cost and gotchas
Docker or Podman is required to build. CI builds run on paid machines, hence a prior approval for unverified authors. An `epoch` is only set after agreement.

## What it is not
Not a general-purpose package manager: it serves the Omarchy ecosystem. A recipe imported from AUR is no longer synchronized with AUR.

## Alternatives
No alternative named in the README.

## For you
Ignore: it is Arch distribution tooling, useful only if you contribute to Omarchy.
