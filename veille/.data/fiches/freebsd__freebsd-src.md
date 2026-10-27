---
schema: 1
depot: freebsd/freebsd-src
source_readme_sha: 932bff17253c5a40
ecrite_le: 2026-10-27
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# freebsd/freebsd-src

> Arbre des sources du système d'exploitation FreeBSD : noyau, userland, bibliothèques, outils.

## Le problème
Construire, étudier ou modifier un système complet (serveurs, postes, embarqué) à partir de ses sources.

## Ce que ça fait vraiment
Le dépôt réunit noyau (`sys`), commandes (`bin`, `sbin`, `usr.bin`), bibliothèques, chargeur de démarrage (`stand`), code tiers (`contrib`, `cddl`, `crypto`), tests Kyua et scripts de publication. L'architecture échantillonnée montre shell POSIX, ZFS, DTrace, TLS et pipeline LLVM.

## Comment c'est branché
```mermaid
flowchart LR
  U["User"] --> S["POSIX shell"]
  S --> C["System commands"]
  C --> Z["ZFS event daemon"]
  C --> D["DTrace command"]
  D --> L["DTrace library"]
```

## Essayer
Aucune commande documentée dans le README : il renvoie à `build(7)`, `config(8)` et au Handbook ; le `Makefile` racine pilote la compilation.

## Coût et pièges
Gratuit. La licence est « présente mais non identifiée par GitHub » : le fichier COPYRIGHT et les licences par répertoire font foi. Compilation longue et lourde.

## Ce que ce n'est pas
Pas une distribution prête à installer : les images officielles viennent de la page de releases.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : utile seulement si tu administres des serveurs FreeBSD ; rien de spécifique data/IA.

