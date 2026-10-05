---
schema: 1
depot: jesseduffield/lazydocker
source_readme_sha: 2a7f5167853a9992
ecrite_le: 2026-10-05
nature: outil
deploiement: binaire
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# jesseduffield/lazydocker

> Interface terminal pour Docker et Docker Compose : conteneurs, logs, métriques et actions en une touche.

## Le problème
Suivre ses conteneurs oblige à enchaîner `docker-compose ps`, `logs`, `restart` dans plusieurs terminaux, en retenant les commandes.

## Ce que ça fait vraiment
Un TUI en Go (gocui) affiche l'état des conteneurs et services, leurs logs, des graphes ASCII de métriques personnalisables, et permet d'attacher, redémarrer, supprimer, reconstruire, voir les couches d'une image et purger conteneurs/images/volumes. Souris prise en charge.

## Comment c'est branché
```mermaid
flowchart LR
  A["CLI entry - main.go"] --> B["App bootstrap - app.go"]
  B --> C["GUI runtime - gui.go"]
  C --> D["Services panel"]
  C --> E["Docker commands - docker.go"]
  E --> F["Docker daemon"]
  C --> G["Task manager - tasks.go"]
```

## Essayer
```bash
brew install jesseduffield/lazydocker/lazydocker
go install github.com/jesseduffield/lazydocker@latest
lazydocker
```

## Coût et pièges
Gratuit. Requiert Docker ≥ 29.0.0 ; Compose ≥ 1.23.2 optionnel. Les logs sont limités à la dernière heure par défaut ; dans un conteneur Docker, logs et CPU sont un bug connu.

## Ce que ce n'est pas
Pas un outil de création/configuration de conteneurs : il gère l'existant. Pas d'interface web.

## Alternatives
- docui : plutôt pour créer et configurer des conteneurs.
- Portainer : même besoin dans le navigateur, avec Swarm.

## Pour toi
À adopter : gain de temps immédiat pour qui jongle avec des stacks Docker en local (serveurs d'inférence, bases), sans coût ni dépendance.

