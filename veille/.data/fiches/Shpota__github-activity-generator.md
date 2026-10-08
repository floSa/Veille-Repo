---
schema: 1
depot: Shpota/github-activity-generator
source_readme_sha: ea42f8d6c9b66393
ecrite_le: 2026-10-08
nature: outil
deploiement: autre
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# Shpota/github-activity-generator

> Script Python qui fabrique des commits datés pour remplir artificiellement le graphe de contributions GitHub.

## Le problème
Obtenir un graphe d'activité GitHub rempli sans avoir réellement codé.

## Ce que ça fait vraiment
`contribute.py` initialise un dépôt git vide, modifie un fichier texte pour chaque jour de l'année écoulée (0 à 20 commits par jour), puis le pousse vers un dépôt distant si l'on donne `--repository`. Options : fréquence, maximum par jour, week-ends, plage de dates.

## Comment c'est branché
```mermaid
graph TD
  User[User] --> CLI[CLI arguments : contribute.py]
  CLI --> Sched[Date scheduler : contribute.py]
  Sched --> Commit[Commit creation : contribute.py]
  Commit --> Git[Git]
  Git --> Remote[Remote repository]
```

## Essayer
```bash
python contribute.py --repository=git@github.com:user/repo.git
python contribute.py --max_commits=12 --frequency=60 --repository=git@github.com:user/repo.git
python contribute.py --no_weekends
```

## Coût et pièges
Gratuit. Python et Git requis. Le README met en garde : ne pas s'en servir pour tromper sur son activité professionnelle.

## Ce que ce n'est pas
Pas un outil de productivité : il ne produit aucun travail réel, seulement un graphe truqué. Dernier push en janvier 2025.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : fausser ton graphe de contributions nuit à ta crédibilité, et l'outil n'apporte rien d'utile.

