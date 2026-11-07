---
schema: 1
depot: tianma-if/edgeever
source_readme_sha: 6a90a203b00adef8
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [compte à créer, Docker]
cout: freemium
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: surveiller
---

# tianma-if/edgeever

> Base de connaissances et prise de notes à trois panneaux, avec MCP natif, sur Cloudflare ou Docker.

## Le problème
Evernote est devenu lourd et cher, Obsidian synchronise mal, et peu d'outils ouverts exposent tes notes à des agents IA.

## Ce que ça fait vraiment
Éditeur riche ou Markdown, notebooks, tags, recherche plein texte, synchronisation hors ligne vers un serveur Hono. Un point MCP distant permet à des agents (Claude Code, Cursor) de lire et écrire les notes. Clients web, bureau (Electron), Android, iOS et extension de clipping. Import depuis Evernote, Obsidian, Joplin.

## Comment c'est branché
```mermaid
flowchart TD
    A["apps/web, mobile, ios, desktop"] --> B["apps/api (Hono)"]
    B --> C["Cloudflare D1 et R2"]
    B --> D["Docker : SQLite et fichiers ou S3"]
    E["Agents IA"] --> F["Endpoint MCP"]
    F --> B
```

## Essayer
```bash
curl -fsSL https://edgeever.org/install.sh | bash
bun install
bun run dev
```

## Coût et pièges
Le plan gratuit Cloudflare suffit, mais activer R2 demande un moyen de paiement. Les fonctions IA fonctionnent avec ta propre clé (OpenAI, Claude, Gemini). Le script d'installation est à auditer avant exécution. Licence AGPL.

## Ce que ce n'est pas
Pas un produit affilié à Evernote. La démo publique est réinitialisée chaque jour : n'y mets rien de privé. Projet jeune (créé en 2026).

## Alternatives
Evernote, Obsidian, Joplin, Memos et SiYuan, comparés dans le README.

## Pour toi
À surveiller : un point MCP pour nourrir tes agents avec tes notes est attrayant, mais le dépôt est récent, et l'AGPL pèse si tu l'intègres.

