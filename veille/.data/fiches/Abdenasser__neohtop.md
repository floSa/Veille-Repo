---
schema: 1
depot: Abdenasser/neohtop
source_readme_sha: b7462ff23e465eaa
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# Abdenasser/neohtop

> Moniteur de processus de bureau (CPU, mémoire, recherche, kill), en SvelteKit et Rust/Tauri.

## Le problème
`htop` en terminal est austère ; on veut une interface graphique pour trier, filtrer et tuer des processus.

## Ce que ça fait vraiment
Suivi en temps réel de CPU et mémoire, recherche par nom, commande ou PID (virgules et expressions régulières), épinglage de processus, tri par colonne, thèmes clair/sombre. Une CLI `neohtop-cli` existe via npm. Certains processus exigent un lancement avec sudo.

## Comment c'est branché
```mermaid
flowchart LR
  U["Svelte UI"] --> B["Tauri Bridge"]
  B --> C["Command Handlers"]
  C --> M["Monitoring Modules"]
  M --> B
  B --> U
```

## Essayer
```bash
brew install --cask neohtop
npm install -g neohtop-cli
```

## Coût et pièges
Gratuit, MIT. Les paquets des gestionnaires (Homebrew, AUR, Scoop…) sont communautaires et non garantis par l'auteur. Dernier push en mars 2026.

## Ce que ce n'est pas
Pas un outil de supervision de flotte ni de GPU : il surveille une machine.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : un confort personnel, sans lien avec le suivi de jobs ou de GPU.

