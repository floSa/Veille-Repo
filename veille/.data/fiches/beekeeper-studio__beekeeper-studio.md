---
schema: 1
depot: beekeeper-studio/beekeeper-studio
source_readme_sha: 148dd3f4f6fd0754
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# beekeeper-studio/beekeeper-studio

> Éditeur SQL et gestionnaire de bases de données multiplateforme, simple d'usage, avec options payantes.

## Le problème
Les clients SQL libres sont souvent chargés de fonctions et peu agréables à utiliser.

## Ce que ça fait vraiment
Application Electron/Vue : éditeur SQL avec autocomplétion, onglets, filtre et tri des données, requêtes sauvegardées et historique, import/export, sauvegarde/restauration, vue JSON. D'après le code, de nombreux clients de bases vivent dans `src-commercial`, avec un UI Kit partagé.

## Comment c'est branché
```mermaid
flowchart TD
  A["Renderer Vue (App.vue)"] --> B["IPC"]
  B --> C["Electron main (background.js)"]
  C --> D["Database Clients"]
  C --> E["Import/Export"]
  C --> F["Migration"]
  A --> G["UI Kit (apps/ui-kit)"]
```

## Essayer
```bash
git clone git@github.com:<your-username>/beekeeper-studio.git beekeeper-studio
cd beekeeper-studio/
mise install
pnpm install
pnpm run bks:dev
```

## Coût et pièges
Téléchargement gratuit sans compte ; fonctions premium sous licence payante. Licence présente mais non identifiée par GitHub : à vérifier.

## Ce que ce n'est pas
Pas entièrement libre : la majorité est en GPLv3, les fonctions payantes sont sous licence commerciale source-available dans le même dépôt.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : bon client SQL de bureau, mais le mélange GPL et licence commerciale demande de vérifier ce que ta version gratuite couvre.

