---
schema: 1
depot: sqshq/sampler
source_readme_sha: 4c204f9e0eaea6df
ecrite_le: 2026-10-05
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, dernier commit ancien, mainteneur unique]
verdict: surveiller
---

# sqshq/sampler

> Outil de terminal qui exécute des commandes shell à intervalle et les affiche en graphiques, via un fichier YAML.

## Le problème
Surveiller une métrique obtenue par une commande shell sans monter Prometheus et Grafana.

## Ce que ça fait vraiment
Lit un YAML, exécute les commandes (`sample`) au rythme voulu et affiche run charts, sparklines, barres, jauges, zones de texte, ASCII art. Des déclencheurs lancent alerte visuelle, son ou script. Un shell interactif (`init`) garde une session ouverte vers une base, SSH, JMX.

## Comment c'est branché
```mermaid
flowchart LR
  A["main.go"] --> B["config.go"]
  B --> C["sampler.go"]
  C --> D["consumer.go"]
  D --> E["runchart.go / gauge.go / textbox.go"]
  C --> F["trigger.go"]
  G["handler.go"] --> E
```

## Essayer
```bash
brew install sampler
sampler -c config.yml
docker build --tag sampler .
docker run --interactive --tty --volume $(pwd)/config.yml:/root/config.yml sampler --config /root/config.yml
```

## Coût et pièges
Gratuit. Sous Linux, `libasound2-dev` pour le son. Windows « expérimental ». Dernier push février 2024.

## Ce que ce n'est pas
Pas un système de monitoring complet (le README le dit) : ni stockage ni serveur. GPL-3.0.

## Alternatives
- Prometheus avec Grafana : cités par le README pour un suivi à grande échelle.

## Pour toi
À surveiller : pratique pour un tableau de bord jetable en terminal, mais sans commit depuis février 2024 ; pour de la production, préférer Prometheus et Grafana.

