---
schema: 1
depot: bytecodealliance/wasmtime
source_readme_sha: 61b003ff4ddfbe61
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: surveiller
---

# bytecodealliance/wasmtime

> Runtime WebAssembly autonome, rapide et sécurisé, avec compilateur Cranelift, CLI et API d'intégration.

## Le problème
Exécuter du code WebAssembly hors navigateur, de façon isolée et standard, depuis une application ou en ligne de commande.

## Ce que ça fait vraiment
Un `Engine` configurable compile (Cranelift, JIT ou ahead-of-time) ou interprète (Pulley), instancie les modules, appelle les exports et renvoie valeurs ou traps. Support WASI et composants, API Rust et C. Fuzzing continu par OSS-Fuzz, processus RFC, politique de sécurité.

## Comment c'est branché
```mermaid
flowchart LR
  A["CLI Interface"] --> B["Engine Configuration"]
  C["Rust API / C API"] --> B
  B --> D["Cranelift Compiler"]
  B --> E["Pulley Interpreter"]
  D --> F["Instance Runtime"]
  E --> F
```

## Essayer
```console
curl https://wasmtime.dev/install.sh -sSf | bash
rustup target add wasm32-wasip2
rustc hello.rs --target wasm32-wasip2
wasmtime hello.wasm
```

## Coût et pièges
Gratuit. L'installation par `curl | bash` et un Rust installé via `rustup` pour l'exemple. 885 issues ouvertes.

## Ce que ce n'est pas
Pas un langage ni un orchestrateur : un runtime à embarquer. Pas un outil d'IA.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Utile si tu isoles du code non fiable (plugins, agents) dans un sandbox WASM ; à surveiller.

