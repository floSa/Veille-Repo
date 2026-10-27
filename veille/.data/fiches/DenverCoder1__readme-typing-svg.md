---
schema: 1
depot: DenverCoder1/readme-typing-svg
source_readme_sha: 59fb86f9fd0fd83d
ecrite_le: 2026-10-27
nature: service
deploiement: SaaS
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [dépend d'un SaaS, mainteneur unique]
verdict: ignorer
---

# DenverCoder1/readme-typing-svg

> Génère une image SVG de texte « tapé » à coller dans un README de profil GitHub.

## Le problème
Un README GitHub ne permet pas d'animation ; on veut un en-tête dynamique sans JavaScript.

## Ce que ça fait vraiment
Un service PHP renvoie un SVG à partir des paramètres d'URL : `lines`, police, couleur, taille, durée, pause, boucle, groupes. Une page de démo permet l'aperçu. Application sans état ni base de données, structurée en contrôleur, modèle, vue ; les polices viennent de Google Fonts.

## Comment c'est branché
```mermaid
flowchart LR
  C["Client / README"] --> I["src/index.php"]
  I --> R["RendererController"]
  R --> M["RendererModel"]
  M --> V["RendererView"]
  V --> S["SVG"]
  R --> E["ErrorView"]
```

## Essayer
```md
[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=First+line+of+text;Second+line+of+text)](https://git.io/typing-svg)
```

## Coût et pièges
Gratuit. L'instance publique est hébergée par l'auteur ; le README conseille d'auto-héberger (PHP ou Heroku) pour la disponibilité.

## Ce que ce n'est pas
Pas une bibliothèque à intégrer : un service HTTP cosmétique.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : purement décoratif, sans valeur pour data/IA/MLOps.

