---
schema: 1
depot: scratchfoundation/scratch-gui
source_readme_sha: 945cb7d28718b7bf
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [licence copyleft, archivé]
verdict: ignorer
---

# scratchfoundation/scratch-gui

> Composants React de l'interface de Scratch 3.0, désormais migrés vers le mono-dépôt scratch-editor.

## Le problème
Fournir l'interface pour créer et exécuter des projets Scratch 3.0.

## Ce que ça fait vraiment
Ensemble de composants React : éditeur de blocs, scène, éditeurs de costumes et de sons, bibliothèques, tutoriels, sac à dos, connexion cloud. Un automate d'états (`project-state.js`) gère chargement, affichage et sauvegarde. Le projet tourne sur la VM Scratch.

## Comment c'est branché
```mermaid
graph TD
  Entry[GUI entry : index.js] --> State[App state : app-state-hoc.jsx]
  State --> Layout[Editor layout : gui.jsx]
  Layout --> Blocks[Block workspace : blocks.jsx]
  Layout --> Stage[Stage view : stage.jsx]
  Blocks --> VM[VM lifecycle : vm-manager-hoc.jsx]
  State --> PS[Project state : project-state.js]
```

## Essayer
```bash
git clone https://github.com/scratchfoundation/scratch-gui.git
cd scratch-gui
npm install
npm start
```

## Coût et pièges
Gratuit. Dépôt archivé : nouvelles issues et PR ailleurs. Licence AGPL-3.0 : obligations de publication du code pour un service réseau. Historique git lourd (`--depth=1` conseillé).

## Ce que ce n'est pas
Pas la version maintenue : la suite vit dans scratch-editor, publiée sous `@scratch/scratch-gui`.

## Alternatives
- scratch-editor : le mono-dépôt qui remplace ce dépôt.

## Pour toi
À ignorer : archivé et sous AGPL ; si Scratch t'intéresse, pars du mono-dépôt.

