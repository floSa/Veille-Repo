---
schema: 1
depot: ClementTsang/bottom
source_readme_sha: d930fddcb5ee1bcf
ecrite_le: 2026-11-07
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# ClementTsang/bottom

> Moniteur système et de processus en terminal, multiplateforme et personnalisable, inspiré de htop.

## Le problème
Surveiller CPU, mémoire, réseau, disques et processus demande souvent des outils différents selon l'OS.

## Ce que ça fait vraiment
Affiche en terminal des graphiques CPU, RAM, réseau, température et disque, des widgets d'information et un tableau de processus avec recherche, tri, mode arbre et signaux d'arrêt. Thèmes, disposition et filtres se règlent par options ou fichier de configuration généré au premier lancement. Linux, macOS et Windows sont officiellement pris en charge.

## Comment c'est branché
```mermaid
flowchart TD
  Runtime[lib.rs] --> App[app.rs]
  Runtime --> Collector[collection.rs]
  Collector --> Procs[processes.rs]
  App --> Canvas[canvas.rs]
  Options[options.rs] --> App
```

## Essayer
```bash
cargo install bottom --locked
brew install bottom
btm
```

## Coût et pièges
Gratuit. Beaucoup de gestionnaires de paquets sont listés ; le paquet COPR Fedora semble non maintenu d'après le README.

## Ce que ce n'est pas
Pas un outil de supervision distribuée : il surveille une seule machine. Les plateformes non officielles ont un support limité.

## Alternatives
- htop, gtop, gotop : cités comme sources d'inspiration, sans comparaison détaillée.

## Pour toi
À adopter pour surveiller CPU, RAM et processus pendant des entraînements ou des jobs locaux, directement en terminal.

