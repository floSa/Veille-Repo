---
schema: 1
depot: yassinebenaid/bunster
source_readme_sha: 4e9da9a128d50955
ecrite_le: 2026-10-08
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# yassinebenaid/bunster

> Compilateur de scripts shell vers binaires statiques via Go, pour distribuer des scripts bash.

## Le problème
Distribuer un script bash suppose un shell compatible sur la machine cible et expose le code source.

## Ce que ça fait vraiment
Transforme un script en code Go puis le compile avec la chaîne Go : lexer, parseur, AST, analyse statique, générateur Go, puis binaire autonome avec son propre runtime shell. Ajoute un système de modules, un gestionnaire de paquets, le support natif des fichiers `.env`, l'embarquement de fichiers et l'analyse d'arguments. Le README avertit que seul un sous-ensemble de bash est supporté ; l'analyse statique est en cours de développement.

## Comment c'est branché
```mermaid
flowchart LR
  A["Script shell"] --> B["Lexer (lexer.go)"]
  B --> C["Shell parser (parser.go)"]
  C --> D["Static analyser (analyser.go)"]
  D --> E["Go generator (generator.go)"]
  E --> F["Go toolchain"]
  F --> G["Compiled binary"]
```

## Essayer
```bash
curl -f https://bunster.netlify.app/install.sh | bash
brew install bunster
```

## Coût et pièges
Gratuit ; la toolchain Go est nécessaire pour compiler. L'installeur se télécharge et s'exécute via curl dans bash.

## Ce que ce n'est pas
Pas un remplaçant fiable de bash aujourd'hui : « early stages ». Pas une simple enveloppe comme shc, selon le README.

## Alternatives
- shc (cité dans le README) : enveloppe le script dans un binaire au lieu de le compiler.

## Pour toi
À surveiller : pour empaqueter de petits utilitaires d'exploitation sans dépendance, mais trop jeune pour des scripts critiques.

