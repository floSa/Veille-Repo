---
schema: 1
depot: StackExchange/Survey
source_readme_sha: 70cc504bf54ec127
ecrite_le: 2026-11-25
nature: dataset
deploiement: autre
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# StackExchange/Survey

> Banque de questions et flux YAML du sondage annuel Stack Overflow, ouverts à la communauté.

## Le problème
Le questionnaire d'un grand sondage est opaque : on ne voit ni la formulation, ni l'ordre, ni les biais éventuels.

## Ce que ça fait vraiment
Les questions sont des fichiers YAML, le flux est dans `questions/survey.yaml`. Un outil Svelte prévisualise et valide le sondage, puis le synchronise vers Qualtrics. Le dépôt contient aussi le site des résultats et l'archive des années passées (résultats, schémas, PDF).

## Comment c'est branché
Schéma d'après le diagramme du code.

```mermaid
flowchart TD
  A["questions/ai/AIUse.yaml"] --> B["questions/survey.yaml"]
  C["question.schema.json"] --> D["scripts/validate.ts"]
  B --> D
  B --> E["src/App.svelte"]
  D --> F["scripts/qualtrics-sync.ts"]
  G["archive/2025/results.csv"] --> H["results/scripts/data.js"]
```

## Essayer
```bash
npm install
npm run dev -w survey
npm run validate -w survey
npm run dev -w results
```

## Coût et pièges
Gratuit. Node et npm requis. La synchronisation Qualtrics suppose un compte et l'accès de Stack Overflow.

## Ce que ce n'est pas
Pas un outil de sondage générique : c'est l'instrument d'un sondage précis, dont Stack Overflow décide seul du contenu final.

## Alternatives
Aucune citée dans le README.

## Pour toi
Surveiller : les résultats archivés (CSV) servent de données sur les pratiques des développeurs et l'usage de l'IA, le reste est spécifique.

