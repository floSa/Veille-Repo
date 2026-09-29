---
schema: 1
depot: airbnb/javascript
source_readme_sha: fd1901ae2b1ab28c
ecrite_le: 2026-09-29
nature: doc
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# airbnb/javascript

> Guide de style JavaScript d'Airbnb, règle par règle, doublé de configurations ESLint publiées.

## Le problème
Sans conventions partagées, une équipe JavaScript perd du temps en revues de code sur la forme (`var`, portée, objets, citations).

## Ce que ça fait vraiment
Le README énumère des règles numérotées (1.1 types primitifs, 2.1 `const` plutôt que `var`, 3.x objets…), chacune avec un exemple bad/good, une justification (« Why? ») et la règle ESLint correspondante (`prefer-const`, `no-var`, `object-shorthand`…).
Le dépôt publie deux paquets : `eslint-config-airbnb-base` et `eslint-config-airbnb` (qui l'étend avec React), plus des guides annexes React et CSS-in-JavaScript.
Le guide suppose Babel (`babel-preset-airbnb`) et des polyfills (`airbnb-browser-shims`).

## Comment c'est branché
```mermaid
flowchart LR
  R[README.md] --> B[eslint-config-airbnb-base]
  B --> A[eslint-config-airbnb]
  R --> X[react]
  R --> C[css-in-javascript]
  L[linters] --> B
  W[GitHub Workflows] --> B
  W --> A
```

## Essayer
Aucune commande documentée dans la partie lue du README.

## Coût et pièges
Gratuit, MIT. Le guide suppose Babel et des polyfills : un projet sans eux ne s'y aligne pas tel quel.

## Ce que ce n'est pas
Pas un formateur de code : des règles et des configs ESLint, rien pour TypeScript dans la partie lue. La version ES5 est marquée dépréciée.

## Alternatives
Aucune alternative nommée dans le README (seulement les autres guides d'Airbnb : React, CSS & Sass, Ruby).

## Pour toi
Hors de ton périmètre data / IA : à ignorer, sauf si tu écris beaucoup de front JavaScript.
