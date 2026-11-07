---
schema: 1
depot: papers-we-love/papers-we-love
source_readme_sha: d5ea2bcd0f0583f8
ecrite_le: 2026-11-07
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence non déclarée]
verdict: surveiller
---

# papers-we-love/papers-we-love

> Répertoire communautaire d'articles académiques d'informatique, classés par thème, pour qui veut lire de la recherche.

## Le problème
Les articles fondateurs sont dispersés sur le web, parfois derrière des éditeurs. Sans curation, on ne sait pas lesquels valent la lecture.

## Ce que ça fait vraiment
Un dossier par grand thème de l'informatique, avec un README de liens vers les PDF. Quand la licence le permet, le PDF est hébergé (emoji :scroll:). Le script `scripts/download.sh` lit les fichiers markdown et télécharge les PDF dans leurs dossiers. Une CI (lychee) vérifie les liens.

## Comment c'est branché
```mermaid
flowchart TD
    Dev["Contributeur"] -->|"PR sur le README d'un thème"| Repo["Dossiers de thèmes"]
    Repo --> CI["lychee.yml (vérif des liens)"]
    CI -->|"statut"| Repo
    Dl["scripts/download.sh"] -->|"lit les liens"| Repo
    Ext["arXiv, éditeurs, sites de conférences"] -->|"HTTP GET"| Dl
    Dl -->|"écrit les PDF"| Repo
```

## Essayer
```bash
./scripts/download.sh
```

## Coût et pièges
Aucun coût. Le téléchargement dépend de liens externes qui peuvent casser ; le README renvoie à `scripts/README.md` pour les options.

## Ce que ce n'est pas
Pas un moteur de recherche d'articles : c'est une liste à parcourir à la main. Le nom et les logos « Papers We Love » sont protégés, la licence du dépôt n'est pas déclarée.

## Alternatives
- eugeneyan/applied-ml : articles centrés sur le ML appliqué en production.
- arXiv Paper Repository : sources primaires, à jour.
- alphaXiv : ajoute une couche de discussion sur les articles arXiv.

## Pour toi
À surveiller : bon vivier de lectures de fond (systèmes distribués, IA), mais rien à intégrer dans un pipeline.

