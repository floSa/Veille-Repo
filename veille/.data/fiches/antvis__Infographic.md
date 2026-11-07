---
schema: 1
depot: antvis/Infographic
source_readme_sha: 7ebe3d1d001ff661
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# antvis/Infographic

> Moteur déclaratif d'AntV qui génère des infographies SVG à partir d'une syntaxe texte, adaptée aux sorties d'IA.

## Le problème
Produire des infographies propres à partir d'un texte demande du design manuel, et la sortie brute d'un LLM n'est pas directement affichable.

## Ce que ça fait vraiment
Une syntaxe déclarative décrit un gabarit et des données ; `infographic.render()` produit un SVG. Une centaine de gabarits (environ 200 annoncés) et des thèmes sont fournis, avec un éditeur intégré. La syntaxe tolère les sorties partielles, donc on peut afficher le flux d'un LLM au fil de l'eau. Des skills pour Claude Code et Codex génèrent la syntaxe.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
    T["Texte ou sortie LLM"] --> S["Syntaxe infographic"]
    S --> I["Infographic.render"]
    I --> G["Gabarits et thèmes"]
    G --> V["SVG"]
    V --> E["Éditeur intégré"]
```

## Essayer
```bash
npm install @antv/infographic
```
```ts
import { Infographic } from '@antv/infographic';
const infographic = new Infographic({ container: '#container', width: '100%', height: '100%', editable: true });
infographic.render(`infographic list-row-simple-horizontal-arrow
data
  lists
    - label Step 1
      desc Start`);
```

## Coût et pièges
Gratuit, MIT. Côté IA, c'est ton propre LLM qui génère la syntaxe : la qualité et la facture dépendent de lui.

## Ce que ce n'est pas
Pas un outil de BI ni de graphiques statistiques : c'est de l'infographie narrative (listes, étapes). Le README ne documente pas de rendu côté serveur.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour mettre en forme des synthèses générées par LLM dans un rapport ou une appli web, moins pour l'analyse de données.

