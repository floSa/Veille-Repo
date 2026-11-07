---
schema: 1
depot: FriesI23/mhabit
source_readme_sha: 882fd69f7be780b8
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# FriesI23/mhabit

> Suivi d'habitudes multiplateforme, hors ligne, avec synchronisation WebDAV, pour qui veut garder ses données.

## Le problème
Les applis d'habitudes imposent un compte, de la publicité ou un cloud propriétaire, et ne comptent souvent que des séries de jours.

## Ce que ça fait vraiment
Application Flutter pour Android, iOS, macOS, Windows et Linux. Elle calcule un score de régularité avec courbes de progression, stocke tout dans SQLite et synchronise par WebDAV (Nextcloud, Koofr). Elle gère rappels, thèmes, import et export JSON, et migre depuis Loop Habit Tracker.

## Comment c'est branché
```mermaid
flowchart TD
    A["main.dart"] --> B["pages et widgets"]
    B --> C["providers"]
    C --> D["storage/db (SQLite)"]
    C --> E["app_sync.dart"]
    E --> F["Serveur WebDAV"]
    C --> G["reminders"]
```

## Essayer
```bash
brew tap FriesI23/brew-repo
brew install table-habit
flatpak install flathub io.github.friesi23.mhabit
git clone https://github.com/FriesI23/mhabit.git
cd mhabit
make bootstrap
```

## Coût et pièges
Gratuit, Apache-2.0, sans publicité ni télémétrie annoncée. Pour synchroniser, il faut ton propre serveur WebDAV. 96 issues ouvertes.

## Ce que ce n'est pas
Pas un outil d'équipe ni de productivité en entreprise : un suivi personnel. La synchronisation n'est pas un service fourni.

## Alternatives
- Loop Habit Tracker : l'appli dont mhabit sait importer les données.

## Pour toi
À ignorer pour le métier : utile en usage perso, mais rien pour un profil data / IA / MLOps.

