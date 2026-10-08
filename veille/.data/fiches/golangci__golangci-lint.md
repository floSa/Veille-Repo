---
schema: 1
depot: golangci/golangci-lint
source_readme_sha: 9b6f3887cd903b75
ecrite_le: 2026-10-08
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: adopter
---

# golangci/golangci-lint

> Exécuteur parallèle de linters Go avec cache et configuration YAML, pour développeurs Go.

## Le problème
Lancer séparément des dizaines de linters Go est lent et difficile à configurer de façon homogène.

## Ce que ça fait vraiment
La commande `run` charge la configuration, sélectionne les linters, analyse les paquets en parallèle (avec cache), traite les problèmes trouvés et imprime les résultats dans le format choisi. Plus de cent linters, correctifs automatiques, commande de formatage et migration de configuration. Intégré aux principaux IDE. Le README fourni est très court : la doc est sur golangci-lint.run.

## Comment c'est branché
```mermaid
graph LR
  A[main.go] --> B[run.go]
  B --> C[manager.go]
  C --> D[context.go]
  D --> E[processor.go]
  E --> F[fixer.go]
  E --> G[printer.go]
  D --> H[cache.go]
```

## Essayer
```bash
# Aucune commande dans le README fourni (il renvoie à la page d'installation en ligne).
```

## Coût et pièges
Gratuit. Licence GPL-3.0 : sans conséquence pour un outil qu'on exécute, à vérifier si on l'embarque.

## Ce que ce n'est pas
Pas un analyseur de types ni un testeur : il agrège des linters.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter seulement si tu écris du Go (outils MLOps, opérateurs Kubernetes) ; sinon sans objet.

