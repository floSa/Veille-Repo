---
schema: 1
depot: vapor/template-kit
source_readme_sha: be6f6d05d92cce23
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [archivé, dernier commit ancien, matière insuffisante]
verdict: ignorer
---

# vapor/template-kit

> Ancienne bibliothèque Swift de rendu de gabarits (base de Leaf), archivée.

## Le problème
README vide : la fiche repose sur l'architecture déduite du code.

## Ce que ça fait vraiment
D'après le code : `TemplateByteScanner` et `TemplateParser` produisent un AST, `TemplateDataEncoder` convertit les données Swift en `TemplateData`, `TemplateRenderer` parcourt l'AST et appelle les `TagRenderer` (Var, If, etc.), `ASTCache` garde les AST analysés.

## Comment c'est branché
```mermaid
flowchart LR
  A[Template File] --> B[TemplateParser]
  B --> C[ASTCache]
  C --> D[TemplateRenderer]
  E[TemplateDataEncoder] --> D
  D --> F[TagRenderer]
```

## Essayer
Aucune commande documentée (README vide).

## Coût et pièges
Gratuit. Archivé, dernier push en mars 2020.

## Ce que ce n'est pas
Pas maintenu ni documenté ici ; pas un moteur de gabarits général hors Swift.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Ignorer : archivé depuis 2020, propre à Swift serveur, sans usage pour un profil data, IA ou MLOps.

