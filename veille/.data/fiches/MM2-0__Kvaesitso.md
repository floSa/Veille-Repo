---
schema: 1
depot: MM2-0/Kvaesitso
source_readme_sha: b9e922ab1f747583
ecrite_le: 2026-10-28
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft]
verdict: ignorer
---

# MM2-0/Kvaesitso

> Lanceur Android libre centré sur la recherche, pour utilisateurs avancés.

## Le problème
Les lanceurs classiques rendent la recherche d'applications, contacts et fichiers lente et dispersée.

## Ce que ça fait vraiment
Remplace l'écran d'accueil par une recherche unifiée : applications, contacts, agenda, fichiers, météo, convertisseur d'unités, Wikipédia, sites web. Modules Gradle séparés (core, data, services) et un SDK de plugins. Android 8+, Pixel Android 11+ recommandé.

## Comment c'est branché
```mermaid
flowchart LR
  A["Launcher UI"] --> B["Searchable"]
  B --> C["Applications"]
  B --> D["Contacts"]
  B --> E["Files"]
  A --> F["Preferences"]
```

## Essayer
Aucune commande : installation via F-Droid (dépôt `https://fdroid.mm20.de/repo/`), IzzyOnDroid ou APK de la page des releases.

## Coût et pièges
Gratuit. La version F-Droid officielle retire les fonctions dépendant d'API non libres.

## Ce que ce n'est pas
Pas un outil de productivité de bureau.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : lanceur mobile, sans rapport avec data / IA / MLOps.

