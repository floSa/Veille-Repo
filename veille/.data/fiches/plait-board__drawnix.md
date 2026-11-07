---
schema: 1
depot: plait-board/drawnix
source_readme_sha: cd9b1fa40eb887c2
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# plait-board/drawnix

> Tableau blanc open source tout-en-un : cartes mentales, diagrammes et dessin libre, dans le navigateur.

## Le problème
Il manque un outil de tableau blanc libre combinant carte mentale, flowchart et dessin sans passer par un SaaS fermé.

## Ce que ça fait vraiment
Canevas infini avec cartes mentales, diagrammes, crayon, images, thèmes et mobile. Convertit une syntaxe Mermaid en diagramme et du Markdown en carte mentale. Export PNG et JSON `.drawnix`, sauvegarde automatique dans le cache du navigateur. Architecture à plugins sur le framework Plait, interface React, texte via Slate. README en chinois.

## Comment c'est branché
```mermaid
flowchart TD
  web["apps/web"] --> board["packages/react-board"]
  web --> editor["packages/drawnix (drawnix.tsx)"]
  editor --> plugins["plugins"]
  editor --> ttd["ttd-dialog (Mermaid/Markdown)"]
  editor --> text["packages/react-text"]
  plugins --> data[("data (JSON, image)")]
```

## Essayer
```bash
npm install
npm run start
docker pull pubuzhixing/drawnix:latest
```

## Coût et pièges
Gratuit. Sauvegarde dans le cache du navigateur : exporte régulièrement en JSON. Le README décrit le site drawnix.com comme application minimale.

## Ce que ce n'est pas
Pas un outil de collaboration temps réel : le README n'en mentionne aucune. Les diagrammes ne sont pas versionnés hors export.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pratique pour esquisser des schémas d'architecture ML, et Mermaid s'importe directement.

