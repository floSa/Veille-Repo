# threlte/threlte

> Svelte library to build 3D web applications, on top of Three.js.

## The problem
Writing imperative Three.js inside a Svelte application is heavy and barely reactive.

## What it actually does
Declarative, reactive API that exposes Three.js objects as Svelte components, with hooks, plugins, events and interactivity. Packages: `@threlte/core`, `extras`, `gltf` (converts GLTF into components), `rapier` (physics), `theatre` (animation), `xr`, `flex`.

## How it is wired
```mermaid
graph LR
  A[@threlte/core] --> B[Three.js]
  C[@threlte/extras] --> A
  D[@threlte/rapier] --> A
  E[@threlte/theatre] --> A
  F[@threlte/xr] --> A
  G[Docs Astro] --> A
```

## Trying it
```bash
# non documenté dans le README : voir les instructions d'installation en ligne
```

## Cost and gotchas
pnpm monorepo; a technical grounding in Svelte and Three.js is essential.

## What it is not
Not a game engine nor a ready-to-use data visualization tool.

## Alternatives
- None cited in the README.

## For you
Ignore unless you need interactive 3D web visualization; outside the core data/AI business.
