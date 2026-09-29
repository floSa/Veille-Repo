---
schema: 1
depot: Yuukiy/JavSP
source_readme_sha: 9ab0e356e89f8a71
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# Yuukiy/JavSP

> Scraper qui agrège des métadonnées de vidéos pour adultes et range les fichiers pour Emby, Jellyfin ou Kodi.

## Le problème
Renseigner à la main les métadonnées et pochettes d'une bibliothèque de vidéos pour adultes.

## Ce que ça fait vraiment
Extrait le numéro du nom de fichier, interroge plusieurs sites en parallèle, fusionne les données, génère un fichier NFO, télécharge la pochette et la recadre par analyse de corps (SlimeFace), traduit titre et synopsis. Configuration `config.yml` ou options en ligne de commande. Pas d'interface web.

## Comment c'est branché
```mermaid
flowchart LR
  CLI[CLI Layer] --> FM[File Manager]
  FM --> CM[Crawler Manager]
  CM --> W[Crawlers web/*.py]
  W --> AG[Aggregation Logic]
  AG --> NFO[NFO Generator]
```

## Essayer
```bash
JavSP -h
```
Le README ne donne pas d'autre commande ; l'usage détaillé est dans le wiki.

## Coût et pièges
Licence GPL-3.0 plus Anti 996, avec conditions supplémentaires : usage commercial interdit, pas de promotion sur certains réseaux chinois. Documentation en chinois uniquement. Dernier push en février 2025.

## Ce que ce n'est pas
Pas un outil d'IA générale ni de data : contenu adulte, hors périmètre professionnel.

## Alternatives
Le README ne nomme aucune alternative.

## Pour toi
À ignorer : contenu hors métier, licence restrictive et projet plus ancien qu'un an.
