---
schema: 1
depot: ustclug/Linux101-docs
source_readme_sha: 7cc2f47f3bf6b7f8
ecrite_le: 2026-11-07
nature: doc
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft, matière insuffisante]
verdict: ignorer
---

# ustclug/Linux101-docs

> Sources du cours d'introduction à Linux « Linux 101 », en chinois, construites avec MkDocs.

## Le problème
Les débutants d'une université chinoise ont besoin d'un support de cours Linux ouvert et maintenable.

## Ce que ça fait vraiment
Le README ne décrit que la construction : un environnement virtuel, l'installation des dépendances, puis `mkdocs serve`. Le contenu du cours n'est pas détaillé dans la fiche fournie. Licence CC-BY-SA-4.0.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  A[Pages Markdown] --> B[mkdocs]
  C[requirements.txt] --> B
  B --> D[Site local]
```

## Essayer
```bash
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

## Coût et pièges
Gratuit. Le contenu est en chinois, et la licence CC-BY-SA impose le partage à l'identique en cas de réutilisation.

## Ce que ce n'est pas
Pas un outil logiciel : c'est un support de cours. Le README est trop court pour juger la couverture.

## Alternatives
Linux 201, cité dans les liens amis du README, pour la suite du cursus.

## Pour toi
À ignorer : cours d'initiation en chinois, sans lien avec un profil data ou MLOps déjà à l'aise sous Linux.

