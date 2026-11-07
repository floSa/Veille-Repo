---
schema: 1
depot: plantuml/plantuml
source_readme_sha: 05f4e378f356a2fd
ecrite_le: 2026-11-07
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: adopter
---

# plantuml/plantuml

> Génère des diagrammes UML et autres à partir de descriptions textuelles, pour développeurs et documentation.

## Le problème
Les diagrammes dessinés à la souris se versionnent mal et se désynchronisent du code.

## Ce que ça fait vraiment
Transforme du texte en séquence, déploiement, activité et d'autres diagrammes (EBNF, sudoku figurent dans le code). Hyperliens, texte riche Creole, icônes OpenIconic et sprites. Peut être compilé en JavaScript avec TeaVM pour un rendu entièrement côté navigateur. Un serveur MCP en Node (`@plantuml/mcp-js`) est cité.

## Comment c'est branché
```mermaid
flowchart TD
  A["Run.java"] --> B["Diagram processing"]
  B --> C["Graphviz.java"]
  B --> D["Smetana layout"]
  B --> E["TextBlock.java"]
  F["main.js (TeaVM)"] --> B
  G["server.js (MCP)"]
```

## Essayer
```sh
./gradlew jar
ant
./gradlew clean teavm -Pfast
```
(construction depuis les sources ; le guide d'installation est sur le site officiel).

## Coût et pièges
Gratuit. Java requis ; Graphviz nécessaire pour certains diagrammes de type dot. LGPL-3.0.

## Ce que ce n'est pas
Pas un éditeur graphique. Pas de rendu natif dans GitHub (l'extension navigateur est citée à part). Ce README ne détaille pas la syntaxe des diagrammes.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter pour documenter architectures et pipelines MLOps en texte versionné ; ancien, très suivi, et le serveur MCP sert aux assistants IA.

