---
schema: 1
depot: spyder-ide/spyder
source_readme_sha: 8d5092a82933686a
ecrite_le: 2026-10-08
nature: app
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# spyder-ide/spyder

> Environnement de développement Python de bureau pour scientifiques, ingénieurs et analystes de données.

## Le problème
Explorer des données en Python demande d'unir éditeur, console interactive, inspection de variables et débogage dans un seul outil.

## Ce que ça fait vraiment
IDE Qt (PyQt5) avec éditeur multi-langage (analyse pyflakes/pylint, complétion jedi/rope via serveurs de langage), consoles IPython multiples, explorateur de variables (NumPy, pandas, images), visionneuse de documentation Sphinx, débogueur, profileur, projets et recherche dans les fichiers. Système de plugins extensible.

## Comment c'est branché
```mermaid
flowchart LR
  A["Main window (mainwindow.py)"] --> B["Code editor (codeeditor.py)"]
  B --> C["Language servers (provider.py)"]
  A --> D["IPython console (client.py)"]
  D --> E["Spyder kernel (kernel.py)"]
  A --> F["Plugin registry (registry.py)"]
```

## Essayer
Le README ne donne pas de commande, seulement la méthode recommandée : installer via Anaconda et `conda`. Alternatives listées : pip, WinPython, MacPorts, gestionnaires de paquets Linux.

## Coût et pièges
Gratuit. Support limité hors installation Anaconda, selon le README. Python 3.11+ et PyQt5 5.15+ requis. 1 350 issues ouvertes.

## Ce que ce n'est pas
Pas un notebook : c'est un IDE de bureau à la MATLAB. Pas d'assistance IA décrite dans le README.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À adopter si tu préfères un IDE scientifique avec explorateur de variables ; mûr, MIT, activement maintenu.

