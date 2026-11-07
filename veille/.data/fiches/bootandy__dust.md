---
schema: 1
depot: bootandy/dust
source_readme_sha: 8c939f506689cf8f
ecrite_le: 2026-11-07
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# bootandy/dust

> Alternative à `du` en Rust, qui montre d'un coup d'œil où va l'espace disque.

## Le problème
Savoir ce qui remplit un disque oblige à enchaîner `du`, `sort` et `head`.

## Ce que ça fait vraiment
Affiche en arbre les plus gros dossiers et fichiers avec des barres de pourcentage, en s'adaptant à la hauteur du terminal. Filtres par regex, taille minimale, type de fichier, profondeur, sortie JSON. Ne compte pas deux fois les liens physiques. Configuration dans un fichier TOML.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
    CLI["Commande dust"] --> Cfg["config.toml"]
    CLI --> Walk["Parcours multi-threads"]
    Walk --> Tree["Arbre des tailles"]
    Tree --> Out["Barres et pourcentages"]
    Tree --> Json["Sortie JSON (-j)"]
```

## Essayer
```bash
curl -sSfL https://raw.githubusercontent.com/bootandy/dust/refs/heads/master/install.sh | sh
cargo install du-dust
dust -n 30
dust -d 3
```

## Coût et pièges
Gratuit. Le script d'installation est exécuté directement depuis curl : à lire avant. Sous Windows MSVC, il faut VCRUNTIME140.dll.

## Ce que ce n'est pas
Ce n'est pas un gestionnaire de nettoyage : il n'efface rien. Il n'est pas interactif comme ncdu.

## Alternatives
- NCDU, dutree, dua, pdu, dirstat-rs : listés dans le README, sans comparaison chiffrée ici.

## Pour toi
À adopter : pour repérer en quelques secondes les checkpoints, caches et datasets qui saturent une machine d'entraînement.

