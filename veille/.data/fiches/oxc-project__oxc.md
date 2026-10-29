---
schema: 1
depot: oxc-project/oxc
source_readme_sha: 324ce0bf668dd2ad
ecrite_le: 2026-10-29
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# oxc-project/oxc

> Boîte à outils JavaScript/TypeScript en Rust : parseur, linter, formateur, minifieur, résolveur, pour développeurs front.

## Le problème
Les chaînes d'outils JS en JS (lint, format, build) sont lentes sur de gros dépôts.

## Ce que ça fait vraiment
Fournit un parseur, un transformeur (TS, JSX), un minifieur et un résolveur de modules, plus Oxlint et Oxfmt en ligne de commande. Sert de base à Rolldown et au parsing de Nuxt ; Preact, Shopify, ByteDance utilisent oxlint.

## Comment c'est branché
```mermaid
graph TD
  P[Parser] --> T[Transformer]
  T --> M[Minifier]
  P --> L[Oxlint]
  P --> F[Oxfmt]
  R[Resolver] --> RD[Rolldown]
```

## Essayer
```bash
npx oxlint@latest
npx oxfmt@latest
```

## Coût et pièges
Gratuit. Couverture des règles ESLint partielle selon le README (non détaillé ici).

## Ce que ce n'est pas
Pas un outil Python/data. Pas un bundler seul : Rolldown est un projet voisin.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : utile seulement si tu as du JS/TS (dashboards, apps IA) à linter vite ; hors cœur de métier data.

