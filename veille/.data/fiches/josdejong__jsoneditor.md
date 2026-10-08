---
schema: 1
depot: josdejong/jsoneditor
source_readme_sha: 8416d192a2c38a2e
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# josdejong/jsoneditor

> Composant web pour voir, éditer, formater et valider du JSON, en modes arbre, code, texte et aperçu.

## Le problème
Éditer du JSON à la main dans une interface web, avec validation, est pénible sans composant dédié.

## Ce que ça fait vraiment
Mode arbre (ajout, déplacement, tri, undo/redo, recherche, requêtes JMESPath), mode code (Ace), mode texte, mode aperçu (documents jusqu'à 500 Mio). Réparation du JSON et validation par schéma via ajv. Le README annonce un successeur, svelte-jsoneditor, qui n'est pas un remplacement strict.

## Comment c'est branché
```mermaid
flowchart LR
  APP[Application hôte] --> J[JSONEditor.js]
  J --> TR[treemode.js]
  J --> TX[textmode.js]
  J --> PV[previewmode.js]
  TR --> JM[jmespathQuery.js]
  J --> VA[validationUtils.js]
```

## Essayer
```bash
npm install jsoneditor
npm run build
npm test
```

## Coût et pièges
Gratuit. Navigateurs testés : Chrome, Firefox, Safari, Edge.

## Ce que ce n'est pas
Pas un éditeur autonome : c'est un composant à intégrer. Le projet est à l'origine de jsoneditoronline.org.

## Alternatives
- svelte-jsoneditor : successeur cité dans le README.

## Pour toi
À ignorer en priorité : utile seulement si tu construis une interface web qui édite des configs ou des schémas JSON.

