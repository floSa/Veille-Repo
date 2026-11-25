---
schema: 1
depot: ko-ichi-h/khcoder
source_readme_sha: ad434db06e6f2263
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# ko-ichi-h/khcoder

> Logiciel d'analyse de contenu quantitative et de fouille de textes, en Perl, avec statistiques R.

## Le problème
Analyser quantitativement de gros corpus de texte en sciences sociales sans programmer.

## Ce que ça fait vraiment
KH Coder charge un projet, découpe le texte en mots, stocke dans MySQL, applique des règles de codage et trace des graphiques via R. Il traite plusieurs langues dont le français, l'anglais et le japonais. Le README précise que ce dépôt sert surtout aux discussions et que le code est une ancienne version bêta.

## Comment c'est branché
Schéma d'après le diagramme du code.
```mermaid
flowchart TD
  A["kh_coder.pl"] --> B["gui_window/main.pm"]
  B --> C["kh_project.pm"]
  C --> D["kh_morpho.pm"]
  D --> E["mysql_exec.pm"]
  B --> F["kh_cod.pm"]
  B --> H["kh_r_plot.pm"]
```

## Essayer
Aucune commande documentée.

## Coût et pièges
Gratuit. Perl/Tk, MySQL et R sont nécessaires d'après l'architecture. Le code publié est périmé : récupérer la version à jour sur le site.

## Ce que ce n'est pas
Ce dépôt n'est pas la version actuelle du logiciel. Ce n'est pas un outil de NLP moderne (pas de modèles de langage).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : code obsolète et pile ancienne ; pour du texte, des bibliothèques Python récentes sont plus adaptées.

