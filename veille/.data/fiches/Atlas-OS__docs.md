---
schema: 1
depot: Atlas-OS/docs
source_readme_sha: 8d97a81918f74cb8
ecrite_le: 2026-10-29
nature: doc
deploiement: rien à installer
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# Atlas-OS/docs

> Documentation d'AtlasOS (installation, mise à jour, configuration), construite avec Material for MkDocs.

## Le problème
Les utilisateurs d'AtlasOS ont besoin d'un guide d'installation, de pilotes et de dépannage.

## Ce que ça fait vraiment
Dépôt de pages Markdown : démarrage, installation et mise à niveau, réglages Atlas, matériel et pilotes, logiciels, boîte à outils, FAQ. Hébergé sur Cloudflare Pages. Contenu orienté utilisateur, les liens entre sections ne sont pas décrits.

## Comment c'est branché
```mermaid
flowchart LR
  A[Pages Markdown] --> B[Material for MkDocs]
  B --> C[Cloudflare Pages]
  C --> D[Utilisateur AtlasOS]
```

## Essayer
```bash
pip install -r requirements.txt
mkdocs serve
```

## Coût et pièges
Gratuit. Windows : `locally-host.cmd` pour le confort.

## Ce que ce n'est pas
Pas le système d'exploitation lui-même, seulement sa doc. Licence CC-BY-SA-4.0 : partage à l'identique.

## Alternatives
Hummingbot documentation (source d'inspiration du thème, citée dans les crédits).

## Pour toi
À ignorer : documentation d'un OS Windows modifié, sans valeur data/IA, sauf pour copier le montage MkDocs.

