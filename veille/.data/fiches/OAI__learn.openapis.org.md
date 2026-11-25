---
schema: 1
depot: OAI/learn.openapis.org
source_readme_sha: 6faf2747143e5525
ecrite_le: 2026-11-25
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [licence à vérifier]
verdict: surveiller
---

# OAI/learn.openapis.org

> Site pédagogique de l'OpenAPI Initiative pour apprendre OpenAPI, Arazzo et Overlay.

## Le problème
Les spécifications OpenAPI sont denses ; il manque un parcours d'apprentissage progressif.

## Ce que ça fait vraiment
Site Jekyll organisé par thèmes (spécification, Arazzo, overlay, références). Les exemples YAML sont validés par des tests JavaScript. Le README se limite au lancement local.

## Comment c'est branché
```mermaid
flowchart TD
  A["_config.yml"] --> B["index.md"]
  B --> C["introduction.md"]
  C --> D["specification/structure.md"]
  D --> E["examples/v3.1/tictactoe.yaml"]
  E --> F["tests/v3.1/examples.test.js"]
```

## Essayer
```bash
# Aucune commande exacte : le README renvoie au Quickstart Jekyll.
```

## Coût et pièges
Gratuit. Lancer le site en local demande Jekyll (Ruby), hors liste des prérequis. Contenu sous CC-BY-4.0.

## Ce que ce n'est pas
Pas la spécification elle-même, ni un outil : un site de documentation.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : bonne base pour apprendre à décrire des API de modèles ou de services, à lire à la demande.

