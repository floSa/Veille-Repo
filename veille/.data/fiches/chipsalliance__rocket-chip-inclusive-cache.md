---
schema: 1
depot: chipsalliance/rocket-chip-inclusive-cache
source_readme_sha: 24da3e8eb36a7730
ecrite_le: 2026-10-29
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: fondation
alertes: [matière insuffisante]
verdict: ignorer
---

# chipsalliance/rocket-chip-inclusive-cache

> Générateur RTL de cache inclusif de dernier niveau cohérent pour SoC Rocket Chip, pour concepteurs de puces.

## Le problème
Un SoC multicœur a besoin d'un cache partagé qui maintient la cohérence entre ses clients.

## Ce que ça fait vraiment
Le contrôleur `InclusiveCache` impose la cohérence par invalidation sur le protocole TileLink 1.8.1, avec un répertoire en full-map stocké dans les tags de chaque bloc. Il remplace `tilelink.BroadcastHub` de Rocket-Chip et offre une interface logicielle de vidage par adresse physique. Paramétrable : taille, voies, banking, bande passante externe, tampons réseau.

## Comment c'est branché
```mermaid
graph TD
  A[Clients TileLink] --> B[InclusiveCache]
  B --> C[Répertoire full-map]
  B --> D[Interface vidage logiciel]
  B --> E[Mémoire externe]
```

## Essayer
```bash
# Aucune commande documentée dans le README
```

## Coût et pièges
Gratuit, mais exige l'écosystème Rocket Chip (Chisel, non détaillé dans le README). Tests unitaires annoncés « coming soon ».

## Ce que ce n'est pas
Pas un cache logiciel : c'est du matériel (RTL). Le README ne dit rien d'installation.

## Alternatives
`sifive/block-inclusivecache-sifive` : dépôt que celui-ci remplace.

## Pour toi
Ignorer : conception de puces, hors du périmètre data / IA / MLOps.

