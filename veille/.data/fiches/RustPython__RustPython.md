---
schema: 1
depot: RustPython/RustPython
source_readme_sha: 1f4c93de06157848
ecrite_le: 2026-10-27
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: []
verdict: surveiller
---

# RustPython/RustPython

> Interpréteur Python 3 écrit en Rust, embarquable ou compilable en WebAssembly.

## Le problème
Exécuter ou embarquer du Python dans une appli Rust ou dans WebAssembly sans lier CPython.

## Ce que ça fait vraiment
Compilateur vers bytecode puis machine virtuelle en Rust, avec stdlib mêlant `Lib/` (Python) et modules natifs Rust. Options : compilateur JIT « très expérimental » (`__jit__()`), cible WASI, SSL (rustls ou OpenSSL), installation de pip. Le README annonce lui-même qu'il n'est pas prêt pour la production.

## Comment c'est branché
```mermaid
flowchart LR
  A[Source Python] --> B[Compiler]
  B --> C[Bytecode]
  C --> D[VM Core]
  D --> E[Standard Library]
  D --> F[JIT Compiler]
  D --> G[WebAssembly Support]
```

## Essayer
```bash
git clone https://github.com/RustPython/RustPython
cd RustPython
cargo run --release -- -c 'print("Hello, RustPython!")'
```

## Coût et pièges
Rust stable requis, compilation longue ; JIT demande autoconf, automake, libtool et clang ; OpenSSL ou compilateur C pour SSL ; symlinks sous Windows.

## Ce que ce n'est pas
Pas un remplaçant de CPython pour la prod : écosystème scientifique (NumPy, etc.) non annoncé.

## Alternatives
Aucune nommée dans le README (pythonvm-rust et rspython sont cités comme liens).

## Pour toi
Surveiller : sympathique pour embarquer du Python dans du Rust ou le web, mais inutilisable pour ton stack data tant que les bibliothèques C manquent.

