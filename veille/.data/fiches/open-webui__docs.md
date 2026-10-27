---
schema: 1
depot: open-webui/docs
source_readme_sha: adfa11d8011b69b5
ecrite_le: 2026-10-27
nature: doc
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence non déclarée, matière insuffisante]
verdict: surveiller
---

# open-webui/docs

> Sources de la documentation officielle d'Open WebUI, interface auto-hébergée pour LLM, bâtie avec Docusaurus.

## Le problème
Les utilisateurs d'Open WebUI ont besoin de guides d'installation, d'API, de pipelines et de RAG à jour.

## Ce que ça fait vraiment
Site Docusaurus avec contenu (`docs`, `blog`), assets, composants personnalisés (sponsors, bannières), styles Tailwind/PostCSS, configuration TypeScript/ESLint, déploiement via GitHub Actions vers GitHub Pages. Le README annonce guides d'installation, plugins, API et pipelines, envois de fichiers et RAG, guide du contributeur.

## Comment c'est branché
```mermaid
flowchart LR
  C["docs / blog (MDX)"] --> B["Docusaurus build"]
  S["Tailwind / PostCSS"] --> B
  B --> O["Site statique"]
  G["GitHub Actions"] --> P["GitHub Pages"]
  O --> P
```

## Essayer
Aucune commande documentée dans le README.

## Coût et pièges
Gratuit. Aucune licence déclarée : réemploi des textes à clarifier. README très court.

## Ce que ce n'est pas
Pas Open WebUI lui-même : seulement sa documentation.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À surveiller seulement comme référence en ligne si tu déploies Open WebUI ; le dépôt n'a rien à installer.

