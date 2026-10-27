---
schema: 1
depot: tranxuanthang/lrcget
source_readme_sha: 1c21c6c1f6d63e03
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# tranxuanthang/lrcget

> Application de bureau qui télécharge en masse des paroles synchronisées LRC pour une bibliothèque musicale locale.

## Le problème
Les fichiers musicaux locaux n'ont pas de paroles synchronisées pour l'affichage en lecture.

## Ce que ça fait vraiment
Parcourt un dossier de musique, interroge le service LRCLIB et enregistre des fichiers `.lrc` du même nom à côté des morceaux. Application Tauri (Rust et JavaScript) pour Windows, Linux et macOS, c'est le client officiel de LRCLIB.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
graph LR
  A["Dossier de musique"] --> B["Application Tauri"]
  B --> C["Service LRCLIB"]
  C --> D["Fichiers .lrc à côté des morceaux"]
```

## Essayer
```bash
cd lrcget
npm install
npm run tauri dev
```

## Coût et pièges
Gratuit ; dépend du service LRCLIB. Compilation : Rust 1.81+, NodeJS 16.18+ ; sous Windows, outils de build C++.

## Ce que ce n'est pas
Pas un lecteur de musique. Les dons sont acceptés.

## Alternatives
- Aucune citée dans le README.

## Pour toi
À ignorer : utilitaire de bibliothèque musicale sans rapport avec data/IA.

