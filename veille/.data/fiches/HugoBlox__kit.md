---
schema: 1
depot: HugoBlox/kit
source_readme_sha: 265c2386037e505c
ecrite_le: 2026-11-07
nature: outil
deploiement: npm
prerequis: [Node, compte à créer]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# HugoBlox/kit

> Framework Hugo pour construire des sites en Markdown, avec génération de pages par IA.

## Le problème
Les générateurs de sites IA produisent du code difficile à maintenir ; les CMS enferment le contenu dans une base.

## Ce que ça fait vraiment
Des modèles Hugo + Tailwind avec plus de 20 types de contenu (landing, blog, publications BibTeX, docs, équipes, CV, slides reveal.js, notebooks Jupyter). Hugo Chat génère les pages en Markdown ; l'éditeur visuel Ownable CMS fonctionne dans VS Code. Sortie statique, déployable sur Netlify, Vercel ou GitHub Pages.

## Comment c'est branché
```mermaid
flowchart TD
  T[Template HugoBlox] --> MD[Pages Markdown]
  HC[Hugo Chat IA] --> MD
  OC[Ownable CMS VS Code] --> MD
  MD --> H[Hugo + Tailwind]
  H --> ST[Site statique]
  ST --> HO((Hébergeur statique))
```

## Essayer
```bash
npm install -g hugoblox
hugoblox create site
```

## Coût et pièges
Hugo Extended et Node requis. Hugo Chat offre des messages gratuits quotidiens ; édition visuelle, automatisations et import BibTeX sont réservés à l'offre Pro.

## Ce que ce n'est pas
Pas entièrement gratuit : la couche IA et l'édition visuelle poussent vers le payant. Les chiffres et témoignages du README sont autodéclarés.

## Alternatives
- Lovable, v0, Bolt (cités) : pour générer du code React plutôt que du Markdown.
- WordPress, Webflow (cités) : si tu veux un CMS à base de données.

## Pour toi
À surveiller : utile pour un site de recherche ou un portfolio statique, mais le dernier push date d'août 2026 et les fonctions IA passent par un service tiers.

