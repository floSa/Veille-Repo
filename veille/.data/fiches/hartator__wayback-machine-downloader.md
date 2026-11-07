---
schema: 1
depot: hartator/wayback-machine-downloader
source_readme_sha: b398820345d82bd7
ecrite_le: 2026-11-07
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, dernier commit ancien, mainteneur unique]
verdict: surveiller
---

# hartator/wayback-machine-downloader

> Outil Ruby en ligne de commande qui télécharge un site entier depuis la Wayback Machine.

## Le problème
Récupérer un site disparu depuis les archives demande de télécharger à la main chaque page et chaque version.

## Ce que ça fait vraiment
Il télécharge la dernière version de chaque fichier d'un site archivé vers `./websites/<domaine>/`, avec la structure de dossiers d'origine et des `index.html` créés. Il propose des filtres (`--only`, `--exclude`), une plage de dates, tous les instantanés, un mode liste en JSON et un téléchargement parallèle.

## Comment c'est branché
```mermaid
graph LR
    A["wayback_machine_downloader"] --> B["Wayback Machine"]
    B --> C["Liste des instantanés"]
    C --> D["Filtres (only, exclude, from, to)"]
    D --> E["websites/example.com/"]
```
Schéma simplifié d'après la fiche, sans diagramme fourni.

## Essayer
```bash
gem install wayback_machine_downloader
wayback_machine_downloader http://example.com
wayback_machine_downloader http://example.com --list
docker pull hartator/wayback-machine-downloader
```

## Coût et pièges
Gratuit. Il faut Ruby 1.9.2 ou plus (hors liste de prérequis). Dernier push en février 2024 : suivi incertain. Licence présente mais non identifiée par GitHub.

## Ce que ce n'est pas
Ce n'est pas un copieur de pages rendues : il récupère les fichiers originaux, non réécrits par la Wayback Machine. Il ne contourne aucune limite du service d'archives.

## Alternatives
Le README n'en nomme aucune.

## Pour toi
À surveiller : pratique pour constituer un corpus à partir de sites archivés, mais peu entretenu et à vérifier côté licence.

