---
schema: 1
depot: fex-team/kityminder
source_readme_sha: c8df624e4bfb31fb
ecrite_le: 2026-10-08
nature: app
deploiement: compilation
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [dernier commit ancien]
verdict: ignorer
---

# fex-team/kityminder

> Éditeur de cartes mentales en ligne basé sur SVG, issu de l'équipe FEX de Baidu.

## Le problème
Éditer des cartes mentales dans le navigateur avec une expérience proche d'un outil natif.

## Ce que ça fait vraiment
Application web SVG : édition de nœuds, mises en page, connecteurs, import/export (MindManager, XMind via un export PHP), partage par lien et synchronisation cloud via le service en ligne de Baidu. Le README déconseille de partir de ce dépôt pour du développement.

## Comment c'est branché
```mermaid
graph TD
  UI[Editor interface : ui.js] --> Minder[Minder controller : minder.js]
  Minder --> Nodes[Map nodes : node.js]
  Minder --> Render[SVG rendering : render.js]
  Minder --> Layout[Map layouts : layout.js]
  UI --> Share[Share links : share.js]
  Export[export.php] --> Parser[Parser.class.php]
```

## Essayer
```bash
git clone https://github.com/fex-team/kityminder.git
git submodule init && git submodule update
npm install
bower install
grunt
```

## Coût et pièges
Gratuit. Chaîne de build ancienne (bower, grunt, sous-modules). Dernier push en 2019. Le cloud et le partage reposent sur naotu.baidu.com.

## Ce que ce n'est pas
Pas la brique recommandée : le README oriente vers kityminder-core (visualisation) et kityminder-editor (édition).

## Alternatives
- kityminder-core : pour la visualisation de cartes.
- kityminder-editor : pour l'édition intégrée.

## Pour toi
À ignorer : dépôt inactif depuis 2019, dont l'auteur lui-même redirige vers d'autres modules.

