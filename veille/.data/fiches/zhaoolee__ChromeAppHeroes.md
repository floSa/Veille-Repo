---
schema: 1
depot: zhaoolee/ChromeAppHeroes
source_readme_sha: bd3b44b0edf63d9c
ecrite_le: 2026-10-20
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# zhaoolee/ChromeAppHeroes

> Catalogue chinois de 133 extensions Chrome commentées une par une, pour lecteurs sinophones.

## Le problème
Trouver de bonnes extensions Chrome et savoir à quoi elles servent, en chinois.

## Ce que ça fait vraiment
Un README sous forme de sommaire numéroté (001 à 133) qui renvoie à une fiche rédigée par extension : traduction, blocage de pubs, téléchargement vidéo, apprentissage de l'anglais, outils de développeur. Le site est construit avec docsify et hébergé sur GitHub Pages. Un script `main.js` retraite les images référencées dans le README. Le dépôt archive aussi des implémentations d'extensions.

## Comment c'est branché
```mermaid
flowchart LR
  A["Lecteur"] --> B["GitHub Pages"]
  B --> C["Docsify site"]
  C --> D["Extension catalog README.md"]
  D --> E["Extension guides"]
  F["Mainteneur"] --> G["README image processor main.js"]
  G --> H["Image assets"]
```

## Essayer
Aucune commande documentée.

## Coût et pièges
Gratuit. Le README fait de la publicité pour un VPN payant (GLaDOS), fait la promotion d'outils de téléchargement vidéo et de contournement de restrictions, et plusieurs fiches ciblent des services chinois : lis les extensions installées avec prudence.

## Ce que ce n'est pas
Pas une extension : c'est une liste éditoriale. Le contenu de chaque fiche ne vit pas dans le fichier lu, il n'est donc pas vérifiable ici. Licence GPL-3.0 : elle s'applique au texte, pas aux extensions décrites.

## Alternatives
- chajian5 : site de recommandation d'extensions, cité dans le README.

## Pour toi
À ignorer pour un profil data/IA : catalogue de confort grand public, en chinois, sans lien avec tes outils ; le Chrome Web Store suffit.

