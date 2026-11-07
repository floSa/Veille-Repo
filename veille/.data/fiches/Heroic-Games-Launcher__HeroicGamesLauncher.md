---
schema: 1
depot: Heroic-Games-Launcher/HeroicGamesLauncher
source_readme_sha: 3aac1cf3e7f3bec0
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# Heroic-Games-Launcher/HeroicGamesLauncher

> Lanceur de jeux open source pour les boutiques Epic, GOG et Amazon, sur Linux, Windows et macOS.

## Le problème
Les lanceurs officiels n'existent pas toujours sur Linux, ni ne rassemblent plusieurs boutiques.

## Ce que ça fait vraiment
Application Electron (React) qui se connecte à Epic via Legendary, à GOG via gogdl et à Amazon via Nile. Elle installe, met à jour, déplace les jeux, lance via Wine ou Proton (Crossover sur macOS), gère une file de téléchargements et affiche les infos ProtonDB.

## Comment c'est branché
```mermaid
flowchart TD
  app["App React : App.tsx"] --> preload["Preload API : index.ts"]
  preload --> ipc["IPC : ipc.ts"]
  ipc --> stores["Store managers : index.ts"]
  ipc --> queue["downloadqueue.ts"]
  ipc --> launcher["launcher.ts"]
  launcher --> compat["Wine et Proton : runtimes.ts"]
```

## Essayer
```bash
sudo dpkg -i Heroic*amd64.deb
winget install Heroic
brew install --cask --no-quarantine heroic
pnpm install
pnpm dist:linux
```

## Coût et pièges
Gratuit. Les anti-triche dépendent du jeu sous Linux et macOS. Il faut un compte sur chaque boutique.

## Ce que ce n'est pas
Pas un magasin : il pilote des outils tiers. Autres boutiques seulement « prévues ». Licence GPL-3.0.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : application de jeu sans rapport avec la data, l'IA ou le MLOps.

