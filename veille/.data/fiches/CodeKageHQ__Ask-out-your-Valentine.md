---
schema: 1
depot: CodeKageHQ/Ask-out-your-Valentine
source_readme_sha: 6c9bb6086af90d9a
ecrite_le: 2026-11-25
nature: app
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# CodeKageHQ/Ask-out-your-Valentine

> Page web interactive et amusante pour demander à quelqu'un d'être son Valentin.

## Le problème
Faire une demande originale avec une page personnalisée, sans écrire de code.

## Ce que ça fait vraiment
Une page unique `index.html` : la question avec un GIF, le bouton « Non » change de texte et agrandit le bouton « Oui », « Oui » déclenche un GIF et des confettis en cœurs. Tailwind CSS et canvas-confetti viennent d'un CDN, sans étape de build.

## Comment c'est branché
```mermaid
flowchart TD
  I["index.html"] --> G["images/image1-7.gif"]
  I --> T["Tailwind (CDN)"]
  I --> C["canvas-confetti (CDN)"]
  R["README.md"] --> I
```

## Essayer
```bash
git clone https://github.com/CodeKageHQ/Ask-out-your-Valentine.git
# puis ouvrir index.html dans le navigateur
```

## Coût et pièges
Gratuit. Dépend de CDN pour le style et les confettis.

## Ce que ce n'est pas
Pas un outil professionnel : une démonstration de loisir.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : gadget sans rapport avec ton travail.

