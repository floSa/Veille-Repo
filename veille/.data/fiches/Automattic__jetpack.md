---
schema: 1
depot: Automattic/jetpack
source_readme_sha: 2a2e3c7a05ff212e
ecrite_le: 2026-10-29
nature: extension
deploiement: autre
prerequis: [Docker, Node]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# Automattic/jetpack

> Monorepo des plugins WordPress Jetpack, de leurs paquets partagés et de l'outillage de développement.

## Le problème
Maintenir plusieurs plugins WordPress et leurs bibliothèques communes dans un seul dépôt cohérent.

## Ce que ça fait vraiment
Contient les plugins, des paquets Composer et JavaScript, des GitHub Actions et une CLI de monorepo (build, changelog). L'architecture met en évidence : automatisation de revue, génération de logos par IA, tableau de bord Backup (journal d'activité, offres de stockage). Pour un usage simple, le README recommande d'installer Jetpack depuis les sources pré-construites.

## Comment c'est branché
```mermaid
flowchart LR
  A[Développeur] --> B[cliRouter.js]
  B --> C[build.js]
  B --> D[changelog.js]
  A --> E[Review action main.js]
  F[Logo generator UI] --> G[logo-storage.ts]
  H[Backup dashboard] --> I[activity-log.ts]
```

## Essayer
```bash
ln -s /path/to/jetpack-monorepo/projects/plugins/jetpack /path/to/wordpress/wp-content/plugins/jetpack
```

## Coût et pièges
Le monorepo ne doit pas être cloné dans `wp-content/plugins`. Il faut construire le plugin avant usage ; 2 570 issues ouvertes.

## Ce que ce n'est pas
Pas une application unique : un monorepo de plusieurs produits ; la plupart des paquets ne sont pas détaillés.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : écosystème WordPress, sans valeur pour data/IA/MLOps.

