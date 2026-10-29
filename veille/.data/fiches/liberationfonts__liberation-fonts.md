---
schema: 1
depot: liberationfonts/liberation-fonts
source_readme_sha: b2f160522562cf7a
ecrite_le: 2026-10-29
nature: dataset
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier, dernier commit ancien]
verdict: ignorer
---

# liberationfonts/liberation-fonts

> Polices libres métriquement compatibles avec Times New Roman, Arial et Courier New, pour la mise en page de documents.

## Le problème
Un document Office ouvert sans les polices Microsoft se reflue et se décale ; il faut des polices aux dimensions équivalentes.

## Ce que ça fait vraiment
Fournit les sources de la collection Liberation Fonts, qui vise la compatibilité de mise en page avec Times New Roman, Arial et Courier New. Un `make` génère les fichiers TTF à partir des sources (fontforge et fonttools). L'installation consiste à copier les TTF dans `~/.fonts` ou `/usr/share/fonts/liberation` puis `fc-cache`.

## Comment c'est branché
```mermaid
graph LR
  A[Sources] --> B[make]
  B --> C[fontforge + fonttools]
  C --> D[liberation-fonts-ttf-VERSION]
  D --> E[~/.fonts ou /usr/share/fonts]
  E --> F[fc-cache]
```

## Essayer
```bash
git clone https://github.com/liberationfonts/liberation-fonts.git
cd liberation-fonts
make
# puis copier les TTF dans ~/.fonts et lancer fc-cache
```

## Coût et pièges
Gratuit. Il faut fontforge et python fonttools pour compiler. Le README ne détaille l'installation que pour Fedora.

## Ce que ce n'est pas
Pas un outil de data ou d'IA. Le README annonce la SIL Open Font License 1.1, mais GitHub ne reconnaît pas la licence du dépôt. Dernier push en décembre 2022.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer pour la veille data / IA : c'est de la typographie système, utile seulement si tu as besoin de polices compatibles Microsoft, et paquet déjà fourni par la plupart des distributions.

