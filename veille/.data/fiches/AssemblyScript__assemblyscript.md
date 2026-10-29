---
schema: 1
depot: AssemblyScript/assemblyscript
source_readme_sha: fdaf34bd324c076d
ecrite_le: 2026-10-29
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [matière insuffisante]
verdict: surveiller
---

# AssemblyScript/assemblyscript

> Compilateur TypeScript vers WebAssembly, pour développeurs qui veulent du Wasm avec une syntaxe familière.

## Le problème
Produire du WebAssembly demande normalement C, C++ ou Rust ; ici la cible est un langage proche de TypeScript.

## Ce que ça fait vraiment
Fiche minimale : le README ne contient que des remerciements et des instructions de développement. L'architecture d'après le code décrit un compilateur en ligne de commande : tokenizer, parser, AST, résolveur, analyse de flux, système de types, génération de code, module Wasm, glue Binaryen, passes d'optimisation, liaisons JS, plus une bibliothèque standard, un runtime Wasm, un chargeur JS et un traçage de runtime.

## Comment c'est branché
```mermaid
flowchart LR
  D["Développeur"] --> CLI["Compiler CLI (index.js)"]
  CLI --> P["parser.ts"]
  P --> R["resolver.ts"]
  R --> G["compiler.ts"]
  G --> M["module.ts + Binaryen"]
  M --> W["Wasm + liaisons JS"]
```

## Essayer
```bash
git clone https://github.com/AssemblyScript/assemblyscript.git
cd assemblyscript
npm install
npm link
```
(Ce sont les commandes pour développer le compilateur, pas pour l'utiliser.)

## Coût et pièges
Gratuit, Apache-2.0. Le README fourni ne documente ni installation utilisateur ni exemple d'utilisation.

## Ce que ce n'est pas
Pas un TypeScript complet : le README ne le détaille pas, mais le nom du projet indique un dialecte « TypeScript-like ». Pas de guide d'usage dans l'extrait.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À surveiller : intéressant pour du calcul portable dans le navigateur, mais le README manque de détails pour juger ; rien d'immédiat côté data/IA.

