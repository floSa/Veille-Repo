---
schema: 1
depot: gto76/python-cheatsheet
source_readme_sha: 088a246d729e2ca0
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: adopter
---

# gto76/python-cheatsheet

> Aide-mémoire Python très dense, de la syntaxe de base à NumPy, Pandas et Plotly.

## Le problème
Retrouver vite la bonne syntaxe ou la bonne bibliothèque sans relire plusieurs documentations.

## Ce que ça fait vraiment
Le README est la fiche elle-même : collections, types, syntaxe, fichiers, formats (JSON, CSV, SQLite), threads, asyncio, puis paquets (NumPy, Pandas, Plotly, Pygame, Flask). Chaque bloc de code est commenté sur la ligne. Une page web (`index.html` + `parse.js`) lit le `README.md` dans le navigateur ; des scripts Python produisent les données des graphiques.

## Comment c'est branché
```mermaid
flowchart LR
  Dev[Developer] --> README[README.md]
  Dev --> Scripts[update_plots.py]
  Scripts --> Data[covid_cases.js]
  README --> Parse[parse.js]
  Parse --> Page[index.html]
  Page --> Pages[GitHub Pages]
```

## Essayer
```bash
# Aucune installation : lire le README ou la page web.
# Les exemples demandent leurs paquets, par exemple :
# pip3 install numpy
# pip3 install pandas matplotlib
# pip3 install plotly kaleido pandas
```

## Coût et pièges
Gratuit. Certains exemples (Selenium, scraping Yahoo Finance, jeu de données Covid distant) dépendent de sites externes qui peuvent changer.

## Ce que ce n'est pas
Pas un cours : il suppose que tu connais déjà les notions. Le catalogue n'indique aucune licence : la réutilisation du texte n'est pas cadrée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter comme référence de bureau pour un profil data : les sections NumPy, Pandas et Plotly sont directement utiles ; vérifie juste la licence avant de recopier du contenu.

