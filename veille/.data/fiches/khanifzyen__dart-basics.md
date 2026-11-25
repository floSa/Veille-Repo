---
schema: 1
depot: khanifzyen/dart-basics
source_readme_sha: b225f18c3c00f3f0
ecrite_le: 2026-11-25
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, dernier commit ancien]
verdict: ignorer
---

# khanifzyen/dart-basics

> Cours d'introduction à Dart en indonésien pour étudiants de programmation mobile.

## Le problème
Des étudiants qui apprennent Flutter doivent d'abord maîtriser les bases du langage Dart.

## Ce que ça fait vraiment
Module de cours : types, variables, opérateurs, saisie utilisateur, conditions, boucles, avec des exercices. Les étudiants clonent, travaillent sur une branche `dev` et soumettent leur dépôt via une issue. Un petit projet Dart d'exemple accompagne le cours.

## Comment c'est branché
```mermaid
flowchart TD
  d1["README.md"] --> p2["dart_project/bin/dart_project.dart"]
  p1["dart_project/pubspec.yaml"] --> p2
  p2 --> p3["dart_project/lib/dart_project.dart"]
  p4["dart_project/test/dart_project_test.dart"] --> p3
  p5["dart_project/analysis_options.yaml"] --> p3
```

## Essayer
```bash
git clone https://github.com/namauser/dart-basics.git
git checkout -b dev
git add .
git commit -m "perulangan for in"
git push -u origin dev
```

## Coût et pièges
Texte en indonésien, rédigé pour un cours de 2023 ; certains extraits de code contiennent des erreurs (guillemets typographiques, boucle while sans incrément).

## Ce que ce n'est pas
Pas une référence officielle de Dart ni un cours complet : seulement les bases.

## Alternatives
Documentation officielle dart.dev et DartPad, citées dans le README.

## Pour toi
À ignorer : cours de débutant en indonésien, sans lien avec data/IA.

