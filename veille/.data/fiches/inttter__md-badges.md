---
schema: 1
depot: inttter/md-badges
source_readme_sha: b902616183de7434
ecrite_le: 2026-11-25
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: []
verdict: ignorer
---

# inttter/md-badges

> Catalogue de badges Shields.io statiques par catégorie, à copier dans un README Markdown.

## Le problème
Composer des badges homogènes (langages, outils, services) demande de retrouver à chaque fois l'URL et le style adéquats.

## Ce que ça fait vraiment
Liste classée par catégories (IA, base de données, data science, CI, cloud, éditeurs, langages, réseaux sociaux, etc.) avec, pour chaque badge, un aperçu et le code Markdown à copier. Un outil en ligne de commande séparé, mdbadges-cli, regroupe les mêmes badges.

## Comment c'est branché
```mermaid
flowchart TD
  CF["_config.yml"] --> RM["README.md"]
  CO["CONTRIBUTING.md"] --> RM
  CC["CODE_OF_CONDUCT.md"] --> CO
  LI["LICENSE"] --> RM
  GA[".gitattributes"] --> RM
```

## Essayer
Aucune commande documentée dans le README : on copie le code Markdown d'un badge dans son propre README.

## Coût et pièges
Gratuit. Les badges sont servis par Shields.io : dépendance à ce service d'images.

## Ce que ce n'est pas
Pas un générateur de badges dynamiques : seulement des badges statiques.

## Alternatives
Aucune alternative nommée dans le README (mdbadges-cli est cité comme outil compagnon).

## Pour toi
À ignorer : utile pour décorer des README, sans effet sur un travail data/IA/MLOps.

