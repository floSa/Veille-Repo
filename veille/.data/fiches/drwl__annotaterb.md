---
schema: 1
depot: drwl/annotaterb
source_readme_sha: 643d5869f350ada8
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# drwl/annotaterb

> Gemme Ruby qui ajoute en commentaire le schéma des tables dans les modèles et routes Rails.

## Le problème
Dans un projet Rails, les colonnes d'une table ne sont pas visibles dans le modèle qui s'y rapporte.

## Ce que ça fait vraiment
Génère un commentaire de schéma (colonnes, index, clés étrangères) dans les modèles, fixtures, tests, factories et `routes.rb`. Une tâche rake relance l'annotation après les migrations. La configuration vit dans `.annotaterb.yml`, avec de nombreuses options de position et de tri.

## Comment c'est branché
```mermaid
flowchart TD
  A["exe/annotaterb"] --> B["runner.rb"]
  B --> C["parser.rb"]
  B --> D["annotate_models.rb"]
  B --> E["annotate_routes.rb"]
  D --> F["project_annotator.rb"]
  F --> G["model_wrapper.rb"]
```

## Essayer
```bash
gem install annotaterb
bin/rails g annotate_rb:install
bin/rails db:migrate
```

## Coût et pièges
Gratuit. Il faut Ruby et un projet Rails, Ruby n'existant pas dans la liste des prérequis. Licence présente mais non identifiée par GitHub. Fork de la gemme Annotate.

## Ce que ce n'est pas
Pas un générateur de documentation de base de données autonome : il annote des fichiers Rails.

## Alternatives
Annotate (AnnotateModels), dont il est un fork.

## Pour toi
À ignorer : outil Rails, hors Python et IA.

