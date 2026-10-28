---
schema: 1
depot: expressjs/expressjs.com
source_readme_sha: 9f29c2b43b5fb10d
ecrite_le: 2026-10-28
nature: doc
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [licence à vérifier, matière insuffisante]
verdict: ignorer
---

# expressjs/expressjs.com

> Site et documentation officiels d'Express.js, construits avec Astro, TypeScript et MDX.

## Le problème
La documentation d'Express doit exister en plusieurs versions et langues.

## Ce que ça fait vraiment
README minimal. D'après l'architecture : collections de contenu, menus, sélecteur de version, recherche Orama, exports `llms.txt` et flux RSS, flux de vulnérabilités, réécriture de liens pour la localisation.

## Comment c'est branché
```mermaid
flowchart LR
  A["content.config.ts"] --> B["Version config"]
  A --> C["Search modal"]
  C --> D["Orama service"]
  A --> E["llms.txt.ts"]
  A --> F["feed.xml.ts"]
```

## Essayer
```bash
npm install
npm run dev
```
Serveur sur `http://localhost:4321` ; Node >= 24.15.0 et npm >= 11.0.0.

## Coût et pièges
Gratuit. Versions de Node très récentes exigées.

## Ce que ce n'est pas
Pas le framework Express : seulement son site.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : utile uniquement pour contribuer à la doc d'Express.

