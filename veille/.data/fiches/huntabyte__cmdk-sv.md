---
schema: 1
depot: huntabyte/cmdk-sv
source_readme_sha: 37a81e3d48f3a13b
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [archivé, dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# huntabyte/cmdk-sv

> Composant Svelte de menu de commandes accessible, portage de cmdk, pour développeurs front.

## Le problème
Construire à la main un menu de type ⌘K avec filtre, tri et accessibilité prend du temps.

## Ce que ça fait vraiment
Composants Command (Root, Dialog, Input, List, Item, Group, Empty, Loading) qui filtrent et classent les entrées, avec filtre personnalisable, états contrôlés, sans style imposé. Le dialogue repose sur Bits UI.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  A["Command.Root"] --> B["Command.Input"]
  A --> C["Command.List"]
  C --> D["Command.Group"]
  D --> E["Command.Item"]
  F["Command.Dialog (Bits UI)"] --> A
```

## Essayer
```bash
npm install cmdk-sv
```

## Coût et pièges
Gratuit. Dépôt archivé, dernier push en mars 2025 : plus de correctifs attendus. Le raccourci ⌘K reste à brancher soi-même.

## Ce que ce n'est pas
Pas un framework d'interface complet : il ne fournit aucun style.

## Alternatives
- cmdk (version React dont il est le portage).

## Pour toi
À ignorer : composant d'interface Svelte archivé, hors de ton métier data / IA.

