# lsp-plugins/lsp-plugins

> Collection of free audio plugins (CLAP, LV2, VST3, LADSPA) for studio work on Linux.

## The problem
Audio workstations on GNU/Linux lacked quality plugins (compressors, equalizers, effects) in open formats.

## What it actually does
Provides audio plugins in CLAP, LV2, VST2, VST3, LADSPA, GStreamer and standalone (JACK) formats. Since version 1.2.0, this repository no longer contains code: it fetches the subprojects of the lsp-plugins group in order to build. Full support on Linux x86_64 and aarch64, partial elsewhere. Tested hosts: Ardour, Reaper, Bitwig, Carla, Ableton Live (macOS, VST3).

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
    A["make config"] --> B["make fetch"]
    B --> C["Sous-projets lsp-plugins"]
    C --> D["make"]
    D --> E["make install"]
    E --> F["Hôte audio DAW"]
```

## Trying it
```bash
make clean
make config
make fetch
make
make install
```

## Cost and gotchas
Free, donations accepted. Building requires gcc or clang, cairo, libsndfile and libGL. No native Wayland support (XWayland required); on macOS, a modified bundle must be re-signed.

## What it is not
Not an AI or data tool: it is audio. This repository alone contains no plugin source code. Binaries are to be fetched from the releases.

## Alternatives
No alternative named in the README.

## For you
Ignore for a data / AI / MLOps profile: a good audio project, but outside your scope.
