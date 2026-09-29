---
schema: 1
depot: remoteintech/remote-jobs
source_readme_sha: ef59fc2c5b45b23b
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence à vérifier, matière insuffisante]
verdict: ignorer
---

# remoteintech/remote-jobs

> Code source du site remoteintech.company, annuaire communautaire d'entreprises tech favorables au télétravail.

## Le problème
Le README ne le dit pas ; l'objet est de lister des entreprises tech qui acceptent le travail à distance.

## Ce que ça fait vraiment
README minimal (moins de 800 caractères) : ce dépôt est le code du site, l'annuaire se consulte sur remoteintech.company. Le site est construit avec Eleventy Excellent (Lene Saile) et exige Node.js 22+. D'après l'architecture : fiches d'entreprises en Markdown, index, générateur de site, outils de validation, CI et hébergement statique.

## Comment c'est branché
```mermaid
flowchart LR
  P["Company Profiles"] --> G["Site Generator"]
  V["Validation Tools"] --> G
  G --> C["CI/CD Pipeline"]
  C --> H["GitHub Pages"]
```

## Essayer
```bash
npm install
npm run start
npm run build
```

## Coût et pièges
Gratuit. Licence présente mais non identifiée par GitHub : à vérifier avant réutilisation. Le contenu des fiches n'est pas décrit dans le README.

## Ce que ce n'est pas
Pas une offre d'emploi ni une plateforme de recrutement : un annuaire d'entreprises.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
Ignorer : un annuaire d'entreprises remote ne fait pas partie d'un flux data/IA/MLOps, sauf pour ta recherche d'emploi.

