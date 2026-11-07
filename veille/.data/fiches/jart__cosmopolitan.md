---
schema: 1
depot: jart/cosmopolitan
source_readme_sha: 93c0809c202b2344
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# jart/cosmopolitan

> Libc C/C++ qui produit des exécutables uniques tournant sur Linux, Mac, Windows et BSD sans interpréteur.

## Le problème
Distribuer un binaire natif pour chaque système demande autant de compilations et de paquets.

## Ce que ça fait vraiment
Reconfigure GCC et Clang (`cosmocc`) pour émettre un format polyglotte (APE) exécutable nativement sur plusieurs systèmes. Fournit le loader APE, une libc, du traitement du signal et quelques programmes. Traçage intégré : `--strace` et `--ftrace`.

## Comment c'est branché
```mermaid
flowchart TD
  DEV["Développeur"] --> CC["cosmocc"]
  CC --> APE["Format APE (ape-m1.c)"]
  APE --> LD["Loader APE (loader.c)"]
  LD --> RT["Runtime libc (runtime.h)"]
  RT --> OS["Systèmes pris en charge"]
```

## Essayer
```sh
mkdir -p cosmocc && cd cosmocc
wget https://cosmo.zip/pub/cosmocc/cosmocc.zip
unzip cosmocc.zip
cosmocc -o hello hello.c
./hello --strace
```

## Coût et pièges
Sous Linux ou WSL, `binfmt_misc` peut intercepter les exécutables MZ : réglage root parfois nécessaire. Compiler le dépôt entier est lourd.

## Ce que ce n'est pas
Pas une machine virtuelle. Pas pensé pour Python ou ML ; certains shells anciens exigent un contournement.

## Alternatives
Aucune alternative nommée dans le README (musl est cité comme comparaison de mode de compilation).

## Pour toi
Surveiller : curiosité utile pour distribuer un petit outil CLI partout, peu pertinent pour le cœur d'un pipeline ML.

