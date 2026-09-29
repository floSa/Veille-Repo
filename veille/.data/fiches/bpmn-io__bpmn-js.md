---
schema: 1
depot: bpmn-io/bpmn-js
source_readme_sha: b26bdd21002564e7
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# bpmn-io/bpmn-js

> Visionneuse et éditeur de diagrammes BPMN 2.0 dans le navigateur, pour intégrer la modélisation de processus dans une application web.

## Le problème
Afficher ou éditer des processus métier BPMN dans une application web sans écrire un moteur de rendu de diagrammes.

## Ce que ça fait vraiment
Importe du XML BPMN 2.0, le rend dans un conteneur de page et permet de l'éditer (palette, menu contextuel, aimantation, outil d'espacement, règles BPMN). S'appuie sur `bpmn-moddle` (lecture/écriture XML) et `diagram-js` (rendu et édition). Extensible par modules.

## Comment c'est branché
```mermaid
flowchart TD
  A["Base Viewer / Modeler"] --> B["diagram-js"]
  A --> C["bpmn-moddle"]
  D["Importer"] --> C
  E["Modeling + Command Stack"] --> B
  F["BPMN Renderer"] --> B
  G["Palette / Context Pad"] --> E
```

## Essayer
```bash
npm install
npm run all
npm start
npm run dev
```

## Coût et pièges
Gratuit. La licence est présente mais non reconnue par GitHub : à lire avant tout usage commercial. Un peu de configuration est nécessaire pour construire le dernier instantané de développement.

## Ce que ce n'est pas
Ce n'est pas un moteur d'exécution de processus : il dessine et édite des diagrammes, il ne les exécute pas.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pertinent seulement si tu exposes des workflows (orchestration, validation) à des utilisateurs métier dans une interface web ; vérifier la licence d'abord.

