---
schema: 1
depot: D4Vinci/Scrapling
source_readme_sha: 1b20aad7aae634e9
ecrite_le: 2026-09-28
nature: bibliothèque
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# D4Vinci/Scrapling

> Framework de scraping Python dont le parser retrouve les éléments après un changement de site.

## Le problème
Un sélecteur CSS casse dès que le site change de structure, et il faut réécrire le scraper.
Les protections anti-bot bloquent les requêtes avant même d'atteindre le contenu.

## Ce que ça fait vraiment
Avec `auto_save=True` puis `adaptive=True`, le parser relocalise les éléments par similarité après un changement.
Trois fetchers : HTTP avec empreinte TLS imitée, navigateur complet, mode furtif qui passe Cloudflare Turnstile.
Framework de spiders proche de Scrapy : concurrence, throttling par domaine, pause/reprise par checkpoint, streaming.
Templates prêts : `CrawlSpider`, `SitemapSpider`, `XMLFeedSpider`, `CSVFeedSpider`, `ShopifySpider`, `SiteToMarkdownSpider`.
Serveur MCP qui expose le scraping aux agents, avec nettoyage des injections de prompt avant lecture.

## Comment c'est branché
```mermaid
flowchart TD
  spider["Spider (start_urls, parse)"] --> sessions["Sessions : HTTP / dynamique / furtive"]
  sessions --> resp["Response"]
  resp --> parser["Parser adaptatif (CSS / XPath / texte)"]
  parser --> items["Items"]
  items --> export["JSON / JSONL / CSV / XML"]
  spider --> ckpt[("crawldir — checkpoints")]
  mcp["Serveur MCP"] --> sessions
```

## Essayer
```bash
pip install "scrapling[fetchers]"
scrapling install
scrapling shell
scrapling extract get 'https://example.com' content.md
```

## Coût et pièges
Gratuit. Python 3.10+. Le `pip install scrapling` nu n'installe que le parser : importer un fetcher échoue.
Les extras (`fetchers`, `ai`, `rag`, `shell`, `all`) s'ajoutent, puis il faut encore `scrapling install` pour les navigateurs.

## Ce que ce n'est pas
Pas un contournement garanti : le README rappelle que l'usage doit respecter les CGU et robots.txt.
Les bancs de performance cités sont produits par le projet lui-même (`benchmarks.py`).
Pas d'agent : le LLM n'est nulle part dans la boucle de crawl, sauf via le serveur MCP.

## Alternatives
- `unclecode/crawl4ai` : plus orienté « page vers Markdown » que crawl structuré à grande échelle.
- `browser-use/browser-use` : quand la navigation doit être décidée par un modèle.

## Pour toi
Le parser adaptatif est l'argument réel : il réduit la maintenance des scrapers. À tester sur un site instable.
