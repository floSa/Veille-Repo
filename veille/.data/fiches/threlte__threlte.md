---
schema: 1
depot: threlte/threlte
source_readme_sha: c3b5b55c50a5a2e2
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# threlte/threlte

> Bibliothèque Svelte pour construire des applications 3D web, au-dessus de Three.js.

## Le problème
Écrire du Three.js impératif dans une application Svelte est lourd et peu réactif.

## Ce que ça fait vraiment
API déclarative et réactive qui expose les objets Three.js sous forme de composants Svelte, avec hooks, plugins, événements et interactivité. Paquets : `@threlte/core`, `extras`, `gltf` (convertit des GLTF en composants), `rapier` (physique), `theatre` (animation), `xr`, `flex`.

## Comment c'est branché
```mermaid
graph LR
  A[@threlte/core] --> B[Three.js]
  C[@threlte/extras] --> A
  D[@threlte/rapier] --> A
  E[@threlte/theatre] --> A
  F[@threlte/xr] --> A
  G[Docs Astro] --> A
```

## Essayer
```bash
# non documenté dans le README : voir les instructions d'installation en ligne
```

## Coût et pièges
Monorepo pnpm ; cadre technique Svelte et Three.js indispensable.

## Ce que ce n'est pas
Pas un moteur de jeu ni un outil de visualisation de données prêt à l'emploi.

## Alternatives
- Aucune citée dans le README.

## Pour toi
À ignorer sauf besoin de visualisation 3D web interactive ; hors du cœur de métier data/IA.

