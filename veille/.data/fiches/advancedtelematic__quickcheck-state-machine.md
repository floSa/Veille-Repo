---
schema: 1
depot: advancedtelematic/quickcheck-state-machine
source_readme_sha: 1145b57975580ee8
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: entreprise
alertes: [licence à vérifier, archivé, dernier commit ancien]
verdict: ignorer
---

# advancedtelematic/quickcheck-state-machine

> Bibliothèque Haskell basée sur QuickCheck pour tester des programmes à état par modèle et trouver des courses.

## Le problème
Les tests de programmes à état ou concurrents sont ad hoc et ratent les conditions de course.

## Ce que ça fait vraiment
On fournit actions, modèle, pré et post-conditions, transition, générateur et sémantique. La propriété séquentielle vérifie le modèle ; la propriété parallèle cherche une linéarisation valide. Nombreux exemples : IORef, serveur CRUD, registre de processus.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  A["Commandes et modèle"] --> B["forAllCommands"]
  B --> C["runCommands"]
  A --> D["forAllParallelCommands"]
  D --> E["runParallelCommands"]
  C --> F["Contre-exemple minimal"]
  E --> F
```

## Essayer
```bash
stack ghci --test
# puis :l test/CrudWebserverDb.hs
```

## Coût et pièges
Gratuit. Haskell et stack requis ; archivé, dernier push en 2021.

## Ce que ce n'est pas
Pas un outil de test d'API généraliste : Haskell uniquement et marqué expérimental.

## Alternatives
Hedgehog : bibliothèque Haskell qui gère aussi les tests par machine à états.
PropEr : bibliothèque Erlang open source équivalente.
Hypothesis : bibliothèque Python avec machines à états, sans propriété parallèle.

## Pour toi
À ignorer : archivé et Haskell ; l'idée de test par modèle se retrouve avec Hypothesis côté Python.

