---
schema: 1
depot: Bambu-Research-Group/RFID-Tag-Guide
source_readme_sha: 1e6c837b1c145cc9
ecrite_le: 2026-10-29
nature: doc
deploiement: pip
prerequis: [version de Python, service tiers]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence non déclarée, dernier commit ancien]
verdict: ignorer
---

# Bambu-Research-Group/RFID-Tag-Guide

> Guide de recherche sur les puces RFID des bobines Bambu Lab, avec petits scripts de dérivation de clés.

## Le problème
Les données de filament des imprimantes Bambu sont dans des puces chiffrées non documentées.

## Ce que ça fait vraiment
Documente les structures de données des puces (Bambu, Creality) et fournit `deriveKeys.py` (clés dérivées de l'UID), `parse.py` (analyse des dumps) et la reprise de clés de traces héritées. Les puces sont signées RSA : les modifier est rejeté, les cloner possible. Cartes RFID rétro-conçues (gerbers et BOM).

## Comment c'est branché
```mermaid
flowchart LR
  A[UID de la puce] --> B[deriveKeys.py]
  B --> C[keys.dic]
  C --> D[Lecteur Proxmark3 / Flipper]
  D --> E[Dump]
  E --> F[parse.py]
```

## Essayer
```bash
python3 deriveKeys.py [UID] > ./keys.dic
pm3
hf mf dump -k ./keys.dic
script run fm11rf08s_recovery
```

## Coût et pièges
Gratuit, mais un lecteur compatible (Proxmark3 Iceman, Flipper Zero) est nécessaire. Aucune licence déclarée ; dernier push en septembre 2025.

## Ce que ce n'est pas
Pas un outil pour créer des puces valides : la signature RSA l'empêche sans firmware modifié.

## Alternatives
OpenTag3D, standard ouvert déplacé dans son propre dépôt (cité dans le README).

## Pour toi
À ignorer : rétro-ingénierie de matériel d'impression 3D, hors data/IA/MLOps et sans licence.

