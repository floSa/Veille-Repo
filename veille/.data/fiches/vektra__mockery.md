---
schema: 1
depot: vektra/mockery
source_readme_sha: 68d43dda1a4d24a4
ecrite_le: 2026-10-08
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# vektra/mockery

> Générateur de mocks pour interfaces Go, basé sur testify/mock, pour développeurs Go.

## Le problème
Écrire à la main les mocks d'interfaces Go pour les tests unitaires est répétitif.

## Ce que ça fait vraiment
Charge la configuration, découvre les paquets et interfaces configurés, construit des données typées, applique des gabarits (locaux ou distants) et écrit les fichiers de mocks. Les commandes `init`, `migrate` et `showconfig` gèrent la configuration. Le README est très bref et renvoie à un site GitHub Pages pour la documentation ; l'installation n'y est pas décrite.

## Comment c'est branché
```mermaid
flowchart LR
  A["main.go"] --> B["Configuration (config.go)"]
  B --> C["Go package parser (parse.go)"]
  C --> D["Interface model (interface.go)"]
  D --> E["Template data model (data.go)"]
  E --> F["Template execution (template.go)"]
  F --> G["Generated mocks"]
```

## Essayer
```bash
go mod download -x
task test
```
(Commandes de développement du README, pas d'usage.)

## Coût et pièges
Gratuit. L'usage réel est dans la documentation externe, non couverte ici.

## Ce que ce n'est pas
Pas un framework de test : il produit seulement du code de mock pour testify.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utile seulement si tu écris du Go avec testify ; ton stack data/IA est surtout Python.

