---
schema: 1
depot: Floorp-Projects/Floorp
source_readme_sha: 6c59421e83c95b98
ecrite_le: 2026-10-08
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft, télémétrie]
verdict: ignorer
---

# Floorp-Projects/Floorp

> Navigateur de bureau dérivé de Firefox, avec onglets d'espaces de travail et palette de commandes.

## Le problème
Les navigateurs courants offrent peu de personnalisation d'interface et d'organisation des onglets.

## Ce que ça fait vraiment
Fork de Firefox (MPL-2.0) avec palette de commandes (onglets, favoris, historique), barre latérale de panneaux, espaces de travail, vue scindée, onglets épinglés, page de notes, gestionnaire de profils. Installeurs Windows (signé), macOS (notarisé), Linux (PPA, Flatpak, tarball). Chaîne de build via Deno (`feles-build`).

## Comment c'est branché
```mermaid
flowchart LR
  A["Palette controller (controller.ts)"] --> B["Tab search (tab-provider.ts)"]
  A --> C["Palette config (config.ts)"]
  D["Panel sidebar (index.ts)"] --> E["Workspace data (data.ts)"]
  F["Notes page (App.tsx)"] --> G["Notes persistence (dataManager.ts)"]
```

## Essayer
```bash
winget install Ablaze.Floorp
brew install --cask floorp
```

## Coût et pièges
Gratuit. Windows 10+ x86_64 uniquement ; une politique de confidentialité existe, détail non précisé dans le README (alerte télémétrie par prudence, non prouvée).

## Ce que ce n'est pas
Pas affilié à Mozilla. Aucun lien avec data/IA.

## Alternatives
Aucune nommée (Firefox est la base).

## Pour toi
À ignorer : un navigateur ne relève pas de ta veille data/IA/MLOps ; Firefox suffit.

