---
schema: 1
depot: recharts/recharts
source_readme_sha: f855882c0ab7bfe0
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# recharts/recharts

> Bibliothèque de graphiques en composants React déclaratifs, basée sur D3 et SVG natif.

## Le problème
Écrire des graphiques dans une appli React sans manipuler D3 à la main.

## Ce que ça fait vraiment
Chaque élément (axe, tooltip, grille, ligne) est un composant React indépendant que l'on compose dans un `LineChart` ou autre. Rendu SVG. Une architecture interne avec état Redux, contextes et hooks, documentée via Storybook.

## Comment c'est branché
```mermaid
graph TD
    React["React"] --> Chart["src/chart"]
    Chart --> Container["src/container"]
    Container --> State["src/state"]
    State --> Context["src/context"]
    Hooks["src/hooks"] --> Context
    D3["D3"] --> Util["src/util"]
```

## Essayer
```bash
npm install recharts react-is
deno add recharts react-is
```

## Coût et pièges
Gratuit. `react-is` doit correspondre à ta version de `react`.

## Ce que ce n'est pas
Pas un outil de BI ni de dataviz Python : uniquement des graphiques côté front React.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À adopter si tu construis un dashboard React pour des métriques ML : simple, mature et très actif.

