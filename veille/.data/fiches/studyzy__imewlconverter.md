---
schema: 1
depot: studyzy/imewlconverter
source_readme_sha: 303d8433658e5407
ecrite_le: 2026-11-07
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# studyzy/imewlconverter

> Convertisseur de dictionnaires d'éditeurs de méthodes de saisie chinois, pour utilisateurs qui changent d'outil.

## Le problème
Les dictionnaires personnels des éditeurs de saisie chinois (Sogou, QQ, Rime, Google, Baidu) ont chacun leur format, sans passage de l'un à l'autre.

## Ce que ça fait vraiment
Il convertit entre plus de 50 éditeurs et formats, en lot, en interface graphique Windows ou en ligne de commande. Il lit par exemple les dictionnaires Sogou `.scel` et écrit du texte, du Rime ou du Google. Des filtres de longueur ou de type et des métadonnées `.scel` sont réglables.

## Comment c'est branché
```mermaid
flowchart LR
  A["Fichier de dictionnaire : scel, qpyd, bdict"] --> B["ImeWlConverterCmd"]
  B --> C["Filtres : len, rm"]
  C --> D["Format de sortie : sgpy, ggpy, rime"]
  D --> E["Fichier converti"]
```

## Essayer
```bash
git clone https://github.com/studyzy/imewlconverter.git
cd imewlconverter
dotnet build src/ImeWlConverterCmd
dotnet src/ImeWlConverterCmd/bin/Debug/net10.0/ImeWlConverterCmd.dll -i scel -o sgpy -O output.txt input.scel
```

## Coût et pièges
Gratuit, licence GPL-3.0 (copyleft). Il faut le SDK .NET 10 ou plus, hors liste des prérequis standard. Depuis la version 3.0.0, les arguments suivent le style GNU (guide de migration). Sous Windows, la version graphique ne gère pas les redirections.

## Ce que ce n'est pas
Ce n'est pas un éditeur de saisie ni un outil de traduction : il ne fait que convertir des fichiers de mots. La documentation est en chinois.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : utilitaire spécialisé dans les dictionnaires de saisie chinois, sans lien avec la data, l'IA ou le MLOps.

