---
schema: 1
depot: fmhy/edit
source_readme_sha: a0c99bdea3766ed3
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence non déclarée]
verdict: ignorer
---

# fmhy/edit

> Wiki communautaire de liens vers des ressources gratuites sur le web, édité collectivement.

## Le problème
Retrouver des sites gratuits classés par thème est dispersé ; ce wiki les rassemble.

## Ce que ça fait vraiment
Pages Markdown (`docs/`) rendues par VitePress et publiées sur GitHub Pages, avec un fil d'articles. Une API (`api/`, workers Cloudflare) sert la recherche de page et la collecte de retours, avec limitation de débit. Le README précise que ni le site ni GitHub n'hébergent de fichiers.

## Comment c'est branché
```mermaid
flowchart LR
  W["Wiki pages (Markdown)"] --> V["VitePress config + hooks"]
  V --> TH["Theme + composants"]
  TH --> SITE["fmhy.net (GitHub Pages)"]
  API["API routes (single-page, feedback)"] --> G["API guards"]
  SITE --> API
```

## Essayer
Aucune commande dans le README ; contribution via le guide et le Discord.

## Coût et pièges
Gratuit. Aucune licence déclarée. Le contenu porte sur des liens tiers dont je ne peux pas juger la légalité d'après le README.

## Ce que ce n'est pas
Pas un outil ni un annuaire vérifié : c'est une liste communautaire de liens.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : liste généraliste sans rapport avec la data/IA/MLOps, et sans licence explicite.

