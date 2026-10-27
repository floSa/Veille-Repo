---
schema: 1
depot: slint-ui/slint
source_readme_sha: ce3f909837c281d9
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# slint-ui/slint

> Boîte à outils d'interfaces déclaratives natives pour embarqué, bureau et mobile, en Rust, C++, JS ou Python.

## Le problème
Écrire des interfaces natives légères qui fonctionnent sur plusieurs plateformes et langages.

## Ce que ça fait vraiment
On décrit l'interface dans un langage `.slint` compilé en amont vers Rust, C++, ou interprété pour JS/Python (bêta). Runtime avec propriétés, layout, fenêtres, trois moteurs de rendu (femtovg/OpenGL ES, Skia, logiciel). Outils : serveur LSP, extension VS Code, visionneuse, SlintPad, plugin Figma.

## Comment c'est branché
```mermaid
flowchart LR
  UI["Fichiers .slint"] --> PA["Slint Parser (parser.rs)"]
  PA --> OP["Optimization Passes"]
  OP --> GE["Code Generators"]
  GE --> LB["APIs Rust / C++ / Node / Python"]
  LB --> RT["Core Runtime"]
  RT --> RD["Skia / FemtoVG / Software"]
```

## Essayer
```slint
export component HelloWorld inherits Window {
    width: 400px;
    height: 400px;
    Text { text: "Hello, world"; color: blue; }
}
```

## Coût et pièges
Licence présente mais non identifiée par GitHub : à lire avant un usage commercial. Le style `qt` demande Qt installé. 738 issues ouvertes.

## Ce que ce n'est pas
Pas une application web. Les API Node et Python sont encore en bêta.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Peu de lien avec le data/IA ; à ignorer sauf besoin d'une interface native pour un outil interne.

