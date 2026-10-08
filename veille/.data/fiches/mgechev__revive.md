---
schema: 1
depot: mgechev/revive
source_readme_sha: b19ab352bc4bb901
ecrite_le: 2026-10-08
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: surveiller
---

# mgechev/revive

> Linter Go configurable et extensible, remplaçant direct de golint.

## Le problème
golint est figé : non configurable, lent, sans désactivation par commentaire sur une plage de lignes.

## Ce que ça fait vraiment
Exécute plus de 90 règles configurables par un fichier TOML, avec sévérité, niveau de confiance et exclusions par règle. Directives `//revive:disable` par ligne ou plage, formateurs (default, friendly, stylish, JSON, NDJSON, Checkstyle, SARIF), codes de sortie réglables. Peut s'utiliser comme bibliothèque pour ajouter ses règles. Le README annonce un facteur 2x plus rapide que golint avec vérification de types, jusqu'à 6x sans.

## Comment c'est branché
```mermaid
flowchart LR
  D[Développeur Go] --> MN["main.go"]
  MN --> CF["config.go"]
  MN --> RN["core.go lint runner"]
  RN --> PK["package.go"]
  PK --> RL["rule.go + règles"]
  RL --> FM["friendly.go / sarif.go"]
```

## Essayer
```bash
brew install revive
go install github.com/mgechev/revive@latest
revive -config revive.toml -formatter friendly ./...
```

## Coût et pièges
Gratuit. Les règles « typées » dépendent de GOROOT et GOPATH et peuvent mal fonctionner avec `-trimpath` ou sur GitHub Actions. Avec une configuration fournie, seules les règles nommées sont actives.

## Ce que ce n'est pas
Pas un formateur de code ni un analyseur de bugs profond : c'est un linter de style et de conventions.

## Alternatives
golint : prédécesseur figé ; golangci-lint et MegaLinter : agrégateurs qui l'intègrent.

## Pour toi
Surveiller : standard de lint Go dans les CI ; utile seulement si tu écris du Go.

