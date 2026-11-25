---
schema: 1
depot: Zidras/DBM-Warmane
source_readme_sha: 229604d9a487c386
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence non déclarée]
verdict: ignorer
---

# Zidras/DBM-Warmane

> Addon Deadly Boss Mods pour World of Warcraft 3.3.5a, serveurs Warmane, rétroporté de retail.

## Le problème
Les joueurs de raids WotLK sur Warmane manquent de minuteurs et d'alertes de boss précis.

## Ce que ça fait vraiment
Des modules de rencontres (raids, donjons, boss de monde, événements) alimentent un noyau DBM qui affiche minuteurs, alertes, vérification de portée, flèches et barre de vie. Packs vocaux et WeakAuras en option.

## Comment c'est branché
```mermaid
flowchart TD
  A["Client WoW"] --> B["Modules de rencontres"]
  B --> C["DBM-Core.lua"]
  C --> D["Minuteurs et alertes"]
  E["/dbm"] --> F["DBM-GUI.lua"]
  F --> G["AceDB-3.0 profils"]
```

## Essayer
```bash
# Pas de commande shell : copier les dossiers DBM-* dans Interface/Addons.
# En jeu : /dbm   puis   /dbm help
```

## Coût et pièges
Gratuit. L'installation efface les anciens profils DBM. Aucune licence déclarée.

## Ce que ce n'est pas
Pas un addon pour le client retail actuel : ciblé WotLK 3.3.5a et Warmane.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : addon de jeu sans rapport avec data, IA ou MLOps.

