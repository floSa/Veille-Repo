---
schema: 1
depot: matt8707/ha-fusion
source_readme_sha: 63b69262c16ba831
ecrite_le: 2026-10-29
nature: app
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# matt8707/ha-fusion

> Tableau de bord Home Assistant moderne en Svelte, désormais repris par un fork.

## Le problème
Les tableaux de bord Lovelace par défaut sont peu souples pour des tablettes murales.

## Ce que ça fait vraiment
Interface personnalisable installable en add-on ou en conteneur Docker, avec paramètres d'URL (`?view=`, `?menu=false`), raccourcis clavier et chart Kubernetes. Le README signale que le dépôt n'est plus maintenu et pointe vers knowald/ha-fusion (Svelte 5).

## Comment c'est branché
```mermaid
graph TD
  B[Navigateur] --> S[ha-fusion SvelteKit]
  S --> HA[Home Assistant]
  S --> D[/app/data]
```
Schéma d'après le README, pas de diagramme fourni.

## Essayer
```bash
docker-compose up -d ha-fusion
docker-compose pull ha-fusion
```

## Coût et pièges
Gratuit. Plus de maintenance : risque de dérive avec Home Assistant.

## Ce que ce n'est pas
Pas le projet actif : utiliser le fork cité.

## Alternatives
knowald/ha-fusion (fork maintenu) : c'est la suite recommandée par le README, qui signale que ce dépôt n'est plus maintenu.

## Pour toi
Ignorer : abandonné et sans lien avec data/IA/MLOps ; aller au fork si besoin.

