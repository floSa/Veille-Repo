---
schema: 1
depot: apify/crawlee
source_readme_sha: e030e9713e818a65
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# apify/crawlee

> Bibliothèque Node.js de web scraping et d'automatisation de navigateur, HTTP ou headless.

## Le problème
Écrire des crawlers fiables qui gèrent file d'URL, retries, proxies et blocages anti-bots.

## Ce que ça fait vraiment
Interface unique pour HTTP (Cheerio, JSDOM) et navigateurs (Playwright, Puppeteer), file de requêtes persistante, autoscaling selon CPU et mémoire, rotation de proxies et sessions, empreintes de navigateur, stockage de datasets dans `./storage`. CLI de démarrage et Dockerfiles prêts.

## Comment c'est branché
```mermaid
flowchart TD
    Crawlee["crawlee (umbrella)"] --> Basic["BasicCrawler"]
    Basic --> Pool["AutoscaledPool"]
    Basic --> Queue["Request queue"]
    Http["HttpCrawler / Cheerio"] --> Basic
    Pw["PlaywrightCrawler"] --> Basic
    Pw --> BP["BrowserPool"]
```

## Essayer
```bash
npx crawlee create my-crawler
cd my-crawler
npm start
npm install crawlee playwright
```

## Coût et pièges
Node 22.13 ou plus. Playwright à installer séparément. Proxies éventuels à ta charge ; déploiement Apify optionnel.

## Ce que ce n'est pas
Pas un service hébergé : la plateforme Apify est facultative. Ne garantit pas de passer toutes les protections.

## Alternatives
- Crawlee for Python : version Python du même projet.

## Pour toi
À adopter pour alimenter un jeu de données par scraping : mature, bien outillé, version Python disponible.

