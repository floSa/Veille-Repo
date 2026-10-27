---
schema: 1
depot: php/php-src
source_readme_sha: 71ba0c02f73f4288
ecrite_le: 2026-10-27
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# php/php-src

> Code source de l'interpréteur PHP, langage de script orienté web.

## Le problème
Exécuter des applications web dynamiques côté serveur avec un langage de script largement déployé.

## Ce que ça fait vraiment
Un programme entre par l'interface d'exécution, est compilé par le moteur Zend (`zend_compile.c`), optimisé (`zend_optimizer.c`, inférence de types), puis exécuté par les gestionnaires de machine virtuelle. Extensions fournies : session, date, générateurs aléatoires (MT19937, PCG, Xoshiro), etc.

## Comment c'est branché
```mermaid
flowchart LR
  P[Programme PHP] --> M[main.c]
  M --> C[zend_compile.c]
  C --> O[zend_optimizer.c]
  O --> X[zend_execute.c]
  X --> E[Extensions]
```

## Essayer
```shell
./buildconf
./configure --enable-debug
make -j4
make test
```
Prérequis Linux : autoconf, bison, re2c, libxml2, libsqlite3.

## Coût et pièges
Gratuit. Compiler exige les outils de build ; des paquets précompilés existent (windows.php.net, gestionnaire de paquets).

## Ce que ce n'est pas
Pas un framework web : c'est l'interpréteur lui-même.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : sans rôle dans une chaîne data/IA ; à lire seulement pour l'architecture d'un interpréteur.

