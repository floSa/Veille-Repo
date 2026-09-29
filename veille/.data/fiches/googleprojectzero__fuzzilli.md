---
schema: 1
depot: googleprojectzero/fuzzilli
source_readme_sha: b8b8d6ffa5695383
ecrite_le: 2026-09-29
nature: outil
deploiement: compilation
prerequis: [Docker, beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [matière insuffisante]
verdict: surveiller
---

# googleprojectzero/fuzzilli

> Fuzzer guidé par la couverture pour interpréteurs JavaScript, destiné aux chercheurs en sécurité des moteurs JIT.

## Le problème
Trouver des bugs dans les compilateurs JIT exige des programmes générés qui restent valides sémantiquement ; un fuzzer syntaxique en produit trop d'invalides.

## Ce que ça fait vraiment
Fuzzilli mute un langage intermédiaire (FuzzIL) plutôt que l'AST, puis le traduit en JavaScript. Il exécute le moteur cible instrumenté via le mode REPRL (le moteur boucle sans redémarrer), mesure la couverture, minimise les crashs. Des instances peuvent former un arbre, en threads ou sur TCP. Implémenté en Swift, avec du C pour la couverture et les sockets.

## Comment c'est branché
```mermaid
graph LR
  CLI["FuzzilliCli"] --> Fuzzer["Fuzzer.swift"]
  Fuzzer --> Mut["Mutators"]
  Mut --> Lifter
  Lifter --> Runner["ScriptRunner REPRL"]
  Runner --> Engine["Moteur JS instrumenté"]
  Engine --> Eval["Evaluator"]
```

## Essayer
```bash
swift build [-c release]
swift run [-c release] FuzzilliCli --profile=<profil> [autres options] /path/to/jsshell
swift run FuzzilliCli --help
```

## Coût et pièges
Il faut compiler le moteur cible avec patchs et instrumentation (clang ≥ 4.0). Le fuzzing tourne longtemps et consomme du CPU ; Docker et Google Compute Engine sont supportés.

## Ce que ce n'est pas
Ce n'est pas un fuzzer généraliste : il vise les moteurs JavaScript. Ce n'est pas un produit officiel Google (le README le précise).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller seulement par curiosité : la génération par langage intermédiaire est instructive, mais le sujet est la sécurité des moteurs JS, loin du travail data/MLOps.

