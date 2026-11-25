---
schema: 1
depot: uxmal/reko
source_readme_sha: 104012f2dc01246e
ecrite_le: 2026-11-25
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# uxmal/reko

> Décompilateur généraliste pour binaires en code machine, pour qui a le droit de les analyser.

## Le problème
Comprendre un binaire dont on n'a plus les sources oblige à lire du désassemblage brut.

## Ce que ça fait vraiment
Un moteur de décompilation reçoit un exécutable ou un fichier de projet Reko et l'analyse. Interfaces : ligne de commande, GUI Windows, GUI Avalonia multiplateforme en cours de développement. Vise de nombreuses architectures de processeur.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart TD
  A["Binaire ou projet Reko"] --> B["Moteur de décompilation"]
  C["CmdLine"] --> B
  D["WindowsDecompiler"] --> B
  E["AvaloniaShell"] --> B
  B --> F["Sortie décompilée"]
```

## Essayer
```cmd
dotnet msbuild -p:Platform={platform} -p:Configuration={config} -v:m -t:build_solution -m ./src/BuildTargets/BuildTargets.csproj
```
Le README demande .NET 9.0 SDK.

## Coût et pièges
Gratuit. Requiert .NET 9.0 : non listé, d'où `aucun`. Beaucoup de licences interdisent la décompilation : usage permis seulement sur ses propres binaires.

## Ce que ce n'est pas
Pas un décompileur parfait : les sorties demandent du travail humain. Pas un outil d'IA.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : la rétro-ingénierie de binaires n'entre pas dans un travail data / IA / MLOps courant.

