---
schema: 1
depot: bahamas10/ysap
source_readme_sha: eb81b65572432450
ecrite_le: 2026-11-25
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# bahamas10/ysap

> Dépôt de la série vidéo de Dave Eddy sur la programmation, surtout les scripts bash.

## Le problème
Les épisodes vidéo sont plus utiles avec le code et les notes sous la main.

## Ce que ça fait vraiment
Regroupe les scripts et notes des épisodes (episodes/), le code des vidéos hors série (code/), les outils de création, les scripts qui génèrent le site ysap.sh et des programmes pour les remerciements Patreon. Les démonstrations sont indépendantes : visualiseur d'inodes en Rust, doors illumos en C, serveur HTTP JSON.

## Comment c'est branché
```mermaid
flowchart TD
  EP["episodes/"] --> ME["website/make-episodes"]
  ME --> EH["episodes.html"]
  MI["website/make-index"] --> IH["index.html"]
  CSV["Patreon CSV"] --> MS["member-shoutouts"]
  IV["inode-visualizer"] --> FS["système de fichiers"]
```

## Essayer
```bash
curl ysap.sh/episodes
```

## Coût et pièges
Gratuit. Les démonstrations demandent chacune leur outillage (Rust, C, Node.js).

## Ce que ce n'est pas
Pas une application ni une bibliothèque : c'est du matériel pédagogique. Le catalogue ne déclare pas de licence, alors que le README annonce MIT.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : sauf si tu veux progresser en scripts bash, ces vidéos n'apportent rien de précis à un travail data / IA / MLOps.

