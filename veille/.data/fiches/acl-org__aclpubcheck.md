---
schema: 1
depot: acl-org/aclpubcheck
source_readme_sha: 6f57e539c3153fb8
ecrite_le: 2026-10-08
nature: outil
deploiement: pip
prerequis: [version de Python, service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# acl-org/aclpubcheck

> Vérifie le format PDF d'un article ACL (marges, polices, auteurs, citations) avant soumission.

## Le problème
Les articles mal formatés coûtent des échanges avec les responsables des publications et distraient les relecteurs.

## Ce que ça fait vraiment
Analyse un PDF au style LaTeX ACL : marges, numérotation de pages, polices, références. Il écrit un rapport JSON et des images annotées. La vérification de citations extrait la bibliographie via l'API Scholarcy et la compare à ACL Anthology, DBLP et arXiv. Des outils pour chairs valident les métadonnées contre des feuilles Google Sheets.

## Comment c'est branché
```mermaid
flowchart LR
  A[Auteur] --> C[__main__.py]
  C --> F[formatchecker.py]
  F --> N[name_check.py]
  N --> S[Scholarcy API]
  N --> R[ACL Anthology / DBLP / arXiv]
  F --> J[Rapport JSON et images]
```

## Essayer
```bash
uvx --from git+https://github.com/acl-org/aclpubcheck aclpubcheck --paper_type PAPER_TYPE /path/to/paper.pdf
python3 -m aclpubcheck -p long example/2023.acl-tutorials.1.pdf
```

## Coût et pièges
Python 3.10+. À lancer sur la version camera-ready, pas sur la version à numéros de ligne. Les alertes de citation peuvent être fausses ; le contrôle utilise des services externes.

## Ce que ce n'est pas
Ne juge pas le contenu scientifique, seulement la forme.

## Alternatives
Une version Colab et un Space Hugging Face (teelinsan/aclpubcheck) évitent l'installation locale ; rebiber corrige les fichiers bib.

## Pour toi
À adopter si tu publies à ACL/NAACL : gratuit, maintenu, utilisé par les chairs, il évite des allers-retours inutiles.

