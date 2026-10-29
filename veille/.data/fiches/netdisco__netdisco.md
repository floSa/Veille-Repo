---
schema: 1
depot: netdisco/netdisco
source_readme_sha: e78a8d2be024b20d
ecrite_le: 2026-10-29
nature: outil
deploiement: pip
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# netdisco/netdisco

> Outil web de gestion de réseau qui localise machines et ports de commutateurs, pour administrateurs réseau.

## Le problème
Retrouver sur quel port de commutateur se trouve une machine et inventorier le matériel réseau.

## Ce que ça fait vraiment
Collecte adresses IP et MAC dans PostgreSQL par SNMP, CLI ou API d'équipements. Permet de localiser une machine, éteindre un port, changer VLAN ou PoE, faire l'inventaire par modèle et système, visualiser le réseau. Perl et Python ; serveur web léger, démon de collecte, CLI, configuration YAML.

## Comment c'est branché
```mermaid
flowchart LR
  A[Équipements réseau] --> B[Démon de collecte]
  B --> C[PostgreSQL]
  C --> D[Interface web]
  E[CLI] --> B
```

## Essayer
Aucune commande documentée dans le README : installation décrite sur CPAN, images de conteneur disponibles.

## Coût et pièges
Gratuit. Exige PostgreSQL et un accès SNMP aux équipements.

## Ce que ce n'est pas
Pas un outil de supervision de performance : un inventaire et localisation.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : administration réseau, hors de ton profil data/IA/MLOps.

