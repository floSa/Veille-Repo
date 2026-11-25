---
schema: 1
depot: zio/zio-cli
source_readme_sha: a1709a8e21f8eb65
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# zio/zio-cli

> Bibliothèque Scala pour construire des applications en ligne de commande sur ZIO.

## Le problème
Écrire à la main l'analyse d'arguments, l'aide et la validation d'un CLI est fastidieux.

## Ce que ça fait vraiment
On combine `Options` et `Args` dans une `Command`, passée à `CliApp.make`, qui produit aide, validation et exécution. Les sous-commandes sont prises en charge. Des fichiers spécifiques adaptent le noyau à la JVM, JS et Native. Un testkit permet de tester les CLI.

## Comment c'est branché
Schéma d'après le diagramme du code.

```mermaid
flowchart TD
  A["Options.scala"] --> C["Command.scala"]
  B["Args.scala"] --> C
  C --> D["CliApp.scala"]
  D --> E["HelpDoc.scala"]
  F["CliAssertion.scala"] --> D
  G["GitExample.scala"] --> D
```

## Essayer
```bash
# build.sbt :
# libraryDependencies += "dev.zio" %% "zio-cli" % "0.8.2"
```

## Coût et pièges
Gratuit. Scala, sbt et l'écosystème ZIO sont nécessaires.

## Ce que ce n'est pas
Pas un outil CLI prêt à l'emploi : une bibliothèque pour en écrire en Scala.

## Alternatives
Aucune citée dans le README.

## Pour toi
Ignorer : utile uniquement si tu écris des CLI en Scala/ZIO.

