---
schema: 1
depot: pdone/lx-music-source
source_readme_sha: bb05c8c7124342fd
ecrite_le: 2026-10-08
nature: liste
deploiement: rien à installer
prerequis: [service tiers]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# pdone/lx-music-source

> Collection de scripts de sources musicales à importer dans le client LX Music.

## Le problème
Le client LX Music a besoin de sources externes pour obtenir des liens audio.

## Ce que ça fait vraiment
Fournit des scripts `latest.js` (SixYin, Huibq, Flower, LX, ChangQing, HuanYin, ikun, Grass, Juhe, QDY) à importer par URL, avec liens bruts et liens via proxys d'accélération. Certains appellent des API distantes (Migu, Huibq, ikun, Juhe). Contenu « issu du réseau » selon le README.

## Comment c'est branché
```mermaid
flowchart LR
  A["LX Music user"] --> B["LX Music client"]
  B --> C["SixYin latest.js"]
  B --> D["Huibq latest.js"]
  D --> E["Huibq API"]
  B --> F["ikun latest.js"]
  F --> G["ikun API server"]
```

## Essayer
```bash
# URL à coller dans LX Music :
https://raw.githubusercontent.com/pdone/lx-music-source/main/sixyin/latest.js
```

## Coût et pièges
Gratuit, mais dépend de serveurs tiers non maîtrisés ; exécute du JavaScript tiers dans ton client. Aucune licence.

## Ce que ce n'est pas
Pas un lecteur : seulement des sources. Statut légal du contenu non précisé. README en chinois.

## Alternatives
Aucune ; le README renvoie à lx-music-desktop, lx-music-mobile, lx-music-sync-server et any-listen (clients/compagnons).

## Pour toi
À ignorer : hors périmètre data/IA, sans licence et dépendant de services opaques.

