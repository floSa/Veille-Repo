---
schema: 1
depot: olifolkerd/tabulator
source_readme_sha: 0ebd2aded03b9e55
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# olifolkerd/tabulator

> Bibliothèque JavaScript de tableaux interactifs à partir de HTML, tableaux JS ou JSON.

## Le problème
Afficher, trier et éditer de gros jeux de données tabulaires dans une page web demande beaucoup de code.

## Ce que ça fait vraiment
Génère un tableau depuis un élément HTML, un tableau JS ou du JSON. Modules d'édition, format, tri, filtre, colonnes gelées, redimensionnement, arbres, groupes, import/export. Marche avec React, Angular et Vue.

## Comment c'est branché
```mermaid
graph LR
  D[Données HTML/JS/JSON] --> T[Tabulator Core]
  T --> C[ColumnManager]
  T --> R[RowManager]
  T --> M[Modules: Sort, Filter, Edit]
  T --> X[Export / Download]
```

## Essayer
```bash
npm install tabulator-tables --save
npm run test:unit
npm run build
npx playwright test
```

## Coût et pièges
Gratuit (MIT). 400 issues ouvertes ; le README ne détaille pas la gouvernance.

## Ce que ce n'est pas
Ni un tableur ni un outil de BI ; c'est un composant front.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : pratique pour un tableau de bord ou une petite app de données en JS, sans être central.

