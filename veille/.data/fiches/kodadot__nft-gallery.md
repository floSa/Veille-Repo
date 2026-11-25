---
schema: 1
depot: kodadot/nft-gallery
source_readme_sha: 4e0fc5922e710e8a
ecrite_le: 2026-11-25
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [archivé, matière insuffisante]
verdict: ignorer
---

# kodadot/nft-gallery

> Place de marché d'art génératif de KodaDot, dépôt archivé, README quasi vide.

## Le problème
Non documenté dans le README fourni.

## Ce que ça fait vraiment
Le README indique seulement une place de marché d'art génératif, un système de récompenses en $DOT pour les contributeurs et une astuce de mise à jour du lockfile. Rien d'autre n'est documenté.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart TD
  A["Contributeur"] --> B["Pull request"]
  B --> C["Dépôt nft-gallery"]
  D["Renovate bot"] --> C
  C --> E["pnpm-lock.yaml"]
```

## Essayer
```bash
git checkout origin/main pnpm-lock.yaml && pnpm install
```

## Coût et pièges
Non documenté. Dépôt archivé, 567 issues ouvertes.

## Ce que ce n'est pas
Ce n'est pas une documentation d'utilisation : le README ne dit ni comment lancer l'application ni ce qu'elle exige.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : archivé, sans documentation et hors du périmètre data, IA ou MLOps.

