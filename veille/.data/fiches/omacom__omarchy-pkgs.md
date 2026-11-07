---
schema: 1
depot: omacom/omarchy-pkgs
source_readme_sha: 221188f2be1d9441
ecrite_le: 2026-11-07
nature: outil
deploiement: autre
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# omacom/omarchy-pkgs

> Recettes et outillage de build des paquets Arch distribués par le dépôt pkgs.omarchy.org.

## Le problème
Distribuer des paquets Arch signés sur plusieurs architectures et canaux demande un pipeline de build, de signature et de promotion reproductible.

## Ce que ça fait vraiment
Un dossier par paquet avec un PKGBUILD. La CI construit chaque architecture (x86_64 et aarch64), signe et publie dans le canal `edge`. Les paquets avancent ensuite vers `rc` puis `stable` par promotion. Un robot propose les mises à jour amont à partir des releases ou tags.

## Comment c'est branché
```mermaid
graph LR
  A["PR sur pkgbuilds"] --> B["build-pr.yml"]
  B --> C["merge sur master"]
  C --> D["publish.yml"]
  D --> E["canal edge"]
  E --> F["promote.yml : rc puis stable"]
```

## Essayer
```bash
bin/add-package my-package --local --scaffold
bin/build --package my-package --dry-run
bin/build --package my-package
bin/build --package my-package --arch aarch64
```

## Coût et pièges
Docker ou Podman requis pour construire. Les builds CI tournent sur des machines payantes, d'où une approbation préalable pour les auteurs non vérifiés. Un `epoch` ne se pose qu'après accord.

## Ce que ce n'est pas
Pas un gestionnaire de paquets généraliste : il sert l'écosystème Omarchy. Une recette importée d'AUR n'est plus synchronisée avec AUR.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : c'est de l'outillage de distribution Arch, utile seulement si tu contribues à Omarchy.

