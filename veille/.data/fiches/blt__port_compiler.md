---
schema: 1
depot: blt/port_compiler
source_readme_sha: 77b1baab485d94b3
ecrite_le: 2026-10-29
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# blt/port_compiler

> Plugin rebar3 pour compiler du code natif (NIF, ports) en conservant la configuration rebar2.

## Le problème
Les projets Erlang avec code C/C++ dépendaient du port compiler de rebar2, absent de rebar3.

## Ce que ça fait vraiment
Fournit `rebar3 pc compile` et `pc clean`, accrochables via `provider_hooks`. Lit `port_specs` et `port_env` (CC, CFLAGS, LDFLAGS, gabarits). Option `pc_clang_db` pour clang-tidy. `overrides` permet de l'appliquer à une dépendance comme jiffy. README tronqué en fin de bloc de configuration.

## Comment c'est branché
```mermaid
flowchart LR
  A[rebar.config] --> B[pc.erl]
  B --> C[pc_prv_compile.erl]
  B --> D[pc_prv_clean.erl]
  C --> E[pc_port_specs.erl]
  C --> F[pc_port_env.erl]
```

## Essayer
```bash
rebar3 pc compile
```
Avec `{plugins, [pc]}.` dans `rebar.config`.

## Coût et pièges
Chaîne C/C++ requise. Pas un remplacement strict en ligne de commande. Il faut utiliser la syntaxe `${}`.

## Ce que ce n'est pas
Pas un remplacement strict du port compiler de rebar2 en ligne de commande : il faut adapter la syntaxe (`${}`). Pas un compilateur C/C++ : il appelle la chaîne C/C++ installée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utile seulement si tu compiles des NIF Erlang.

