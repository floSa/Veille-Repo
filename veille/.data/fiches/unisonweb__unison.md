---
schema: 1
depot: unisonweb/unison
source_readme_sha: e3d1102b5f2ffb26
ecrite_le: 2026-10-27
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# unisonweb/unison

> Langage fonctionnel typé où le code est identifié par son empreinte, pour curieux de la programmation distribuée.

## Le problème
Compilation lente, renommages cassants et conflits de fusion dus à la mise en forme.

## Ce que ça fait vraiment
Langage statiquement typé à effets ; les définitions sont stockées comme AST adressés par leur hash dans une base, ce qui donne compilation incrémentale parfaite, renommage non cassant, mise en cache des tests déterministes, fusion sémantique. Serveur de codebase, LSP, serveur MCP pour agents IA ; Unison Cloud pour les systèmes distribués.

## Comment c'est branché
```mermaid
flowchart LR
  CLI[ucm CLI] --> P[Syntax Parser]
  P --> T[Type Inference]
  T --> H[Hashing System]
  H --> DB[SQLite Storage]
  CLI --> UI[Local Web UI]
  CLI --> LSP[Language Server]
```

## Essayer
```bash
git clone https://github.com/unisonweb/unison.git
cd unison
stack --version
stack build --fast --test && stack exec unison
```

## Coût et pièges
Build avec Stack (Haskell). Licence « présente mais non identifiée par GitHub » : à vérifier. 1 301 issues ouvertes.

## Ce que ce n'est pas
Pas un langage de data science établi : pas de bibliothèques ML mentionnées.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller par curiosité technique : modèle intéressant, mais aucun usage data/IA évident.

