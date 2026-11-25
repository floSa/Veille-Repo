---
schema: 1
depot: googleprojectzero/0days-in-the-wild
source_readme_sha: 15ac35e71186de95
ecrite_le: 2026-11-25
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [matière insuffisante]
verdict: surveiller
---

# googleprojectzero/0days-in-the-wild

> Référence d'analyses de cause racine de failles 0-day exploitées dans la nature, pour chercheurs en sécurité.

## Le problème
Comprendre comment des failles 0-day réelles ont été exploitées demande des analyses publiques regroupées.

## Ce que ça fait vraiment
Site Jekyll : chaque analyse de cause racine est un fichier Markdown par année dans `0day-RCAs/`, écrit d'après `template.md`. Une table suit les failles. Le README renvoie vers les GitHub Pages et précise que ce n'est pas un produit Google officiel.

## Comment c'est branché
```mermaid
flowchart TD
  A["index.md"] --> B["_layouts/rca-home.html"]
  C["_config.yml"] --> B
  D["_data/settings.yml"] --> E["_includes/rca-table.html"]
  F["0day-RCAs/template.md"] --> G["0day-RCAs/2021/CVE-2021-1732.md"]
  G --> E
```

## Essayer
Aucune commande documentée : consulter googleprojectzero.github.io/0days-in-the-wild.

## Coût et pièges
Gratuit. README très court. Le contenu décrit des failles, il ne contient pas d'outil.

## Ce que ce n'est pas
Pas un outil d'attaque ni un scanner : de la documentation d'analyse.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : lecture utile pour la culture sécurité d'un MLOps, hors usage quotidien.

