---
schema: 1
depot: Gabriella439/grace
source_readme_sha: 2a475fe3ee36a941
ecrite_le: 2026-10-29
nature: outil
deploiement: binaire
prerequis: [clé d'API]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: surveiller
---

# Gabriella439/grace

> Langage dédié à la composition de prompts, avec schémas JSON déduits du typage.

## Le problème
Enchaîner des appels de modèles et structurer leurs sorties demande beaucoup de code de colle.

## Ce que ça fait vraiment
Fonction intégrée `prompt` ; le vérificateur de types déduit le schéma JSON attendu à partir de l'usage et contraint la sortie du modèle. `import prompt` génère du code Grace. CLI Haskell : `interpret`, `text`, `format`, `builtins`, `repl`. Utilisable sans installation sur trygrace.dev.

## Comment c'est branché
```mermaid
flowchart LR
  A[Main.hs CLI] --> B[Interpret.hs]
  B --> C[Infer.hs]
  C --> D[Encode.hs schéma JSON]
  D --> E[Prompt.hs]
  E --> F[Modèle de langage]
```

## Essayer
```bash
grace --help
grace interpret ./greet.ffg
grace repl
```

## Coût et pièges
Clé de fournisseur (les exemples utilisent un fichier de clé OpenAI) ; appels facturés par le fournisseur.

## Ce que ce n'est pas
Pas un framework d'agents : un langage de petite taille centré sur les types.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : l'idée de déduire le schéma de sortie du typage vaut d'être connue pour tes chaînes de prompts ; langage de niche encore.

