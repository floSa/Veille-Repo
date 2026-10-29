---
schema: 1
depot: ocaml/ocaml.org
source_readme_sha: 5b58d13b63d69b67
ecrite_le: 2026-10-29
nature: app
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# ocaml/ocaml.org

> Sources du site officiel ocaml.org : documentation de paquets opam, apprentissage et actualités.

## Le problème
Un langage a besoin d'un site unique qui lie gestion de paquets, documentation et ressources pour débutants.

## Ce que ça fait vraiment
Site en OCaml qui regroupe les paquets opam et une source centrale de documentation pour plus de 14 000 paquets. Les données sont en Yaml ou Markdown dans `./data`, converties en code OCaml via Ocurrent. Design réactif et accessible.

## Comment c'est branché
```mermaid
graph TD
  D[data Yaml et Markdown] --> O[Ocurrent]
  O --> S[site OCaml]
  OP[opam.ocaml.org] --> S
  DOC[docs.ocaml.org] --> S
```

## Essayer
```bash
make switch
make start
```
Prérequis : opam installé.

## Coût et pièges
Gratuit. Licence présente mais non identifiée par GitHub. 205 issues ouvertes.

## Ce que ce n'est pas
Pas un compilateur ni une bibliothèque : le code d'un site web.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : sauf contribution à l'écosystème OCaml, ce dépôt ne sert pas ton travail data ou IA.

