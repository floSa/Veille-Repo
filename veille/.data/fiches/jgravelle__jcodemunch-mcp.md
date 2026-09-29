---
schema: 1
depot: jgravelle/jcodemunch-mcp
source_readme_sha: 8388d31c6e30f7fb
ecrite_le: 2026-09-29
nature: outil
deploiement: pip
prerequis: [version de Python]
cout: freemium
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique, télémétrie]
verdict: surveiller
---

# jgravelle/jcodemunch-mcp

> Serveur MCP qui indexe un dépôt par arbre syntaxique pour que l'agent lise des symboles, pas des fichiers.

## Le problème
Les agents de code relisent des fichiers entiers ; le contexte se gaspille et les jetons coûtent.

## Ce que ça fait vraiment
Indexe le code avec tree-sitter (70+ langages) dans un index local SQLite (`~/.code-index/`). Outils : `search_symbols`, `get_symbol_source`, `find_importers`, `get_blast_radius`, `assemble_task_context`. Sur 3 dépôts publics, l'auteur mesure 28,3× moins de jetons qu'un agent qui lit les fichiers (méthodologie publiée).

## Comment c'est branché
```mermaid
graph LR
    A["MCP Client"] --> B["MCP Server (server.py)"]
    B --> C["Index Tools (index_repo.py)"]
    C --> D["AST Parser (extractor.py)"]
    D --> E["Symbol Index (index_store.py)"]
    B --> F["Query Tools (search_symbols.py)"]
    F --> E
```

## Essayer
```bash
uv tool install jcodemunch-mcp
jcodemunch-mcp init
claude mcp add -s user jcodemunch -- uvx jcodemunch-mcp
```

## Coût et pièges
Gratuit pour l'usage non commercial ; usage commercial payant (de 79 à 1 999 $ selon l'offre). Compteur d'économies anonyme par défaut (désactivable). Licence propre (« Dual-Use »), non reconnue par GitHub.

## Ce que ce n'est pas
Pas open source au sens usuel : interdit de renommer ou publier sur un registre. Aucun gain quand il faut lire tout le fichier. Chiffres marketing auto-déclarés.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : gain de jetons plausible et méthodologie publiée, mais licence à clauses commerciales à faire valider avant tout usage professionnel.
