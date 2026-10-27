---
schema: 1
depot: iamgio/quarkdown
source_readme_sha: 332cb08589bdb7cd
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# iamgio/quarkdown

> Système de composition basé sur Markdown étendu de fonctions, produisant livres, articles, wikis ou présentations.

## Le problème
LaTeX est lourd ; Markdown n'a ni logique ni mise en page fine pour de vrais documents.

## Ce que ça fait vraiment
Étend CommonMark/GFM avec des appels de fonctions (`.somefunction`), des variables, des boucles et une bibliothèque standard. Types de document : plain, paged (paged.js), slides (reveal.js), docs. Export HTML, PDF, Markdown, texte. Aperçu en direct, permissions restrictives, skill pour agents de code.

## Comment c'est branché
```mermaid
flowchart LR
  CLI["CLI Interface"] --> Pipeline["Pipeline System"]
  Pipeline --> Lexer
  Lexer --> Parser
  Parser --> AST
  AST --> Functions["Function System"]
  Functions --> Renderer
```

## Essayer
```bash
brew install quarkdown-labs/quarkdown/quarkdown
quarkdown create
quarkdown c file.qd -p -w
quarkdown c file.qd --pdf
```

## Coût et pièges
Gratuit. Export PDF : navigateur Chromium requis. Le script d'installation est exécuté via curl | bash en root.

## Ce que ce n'est pas
Pas un éditeur WYSIWYG. Langage propre à apprendre, non compatible avec les extensions Markdown d'autres outils.

## Alternatives
Le README compare à LaTeX, Typst, AsciiDoc et MDX (tableau).

## Pour toi
À surveiller : pratique pour produire rapports et slides reproductibles ; Typst reste une option mieux établie.

