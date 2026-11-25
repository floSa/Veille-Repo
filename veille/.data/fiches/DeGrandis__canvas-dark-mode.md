---
schema: 1
depot: DeGrandis/canvas-dark-mode
source_readme_sha: 70890f962c783453
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# DeGrandis/canvas-dark-mode

> Extension Chrome qui ajoute un mode sombre à Canvas LMS pour les étudiants.

## Le problème
L'interface claire de Canvas fatigue les yeux lors des longues séances.

## Ce que ça fait vraiment
Extension disponible sur le Chrome Web Store. Pour un établissement non couvert, un clic sur l'icône puis « Enable on this site » l'active. Le développement se fait en chargeant l'extension non empaquetée dans `chrome://extensions/`.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  Ext[Extension Chrome] --> Page[Page Canvas de l'école]
  Menu[Icône de l'extension] --> Ext
  Ext --> Style[Style sombre]
```

## Essayer
```bash
git checkout -b my-branch-name
# puis chrome://extensions/ > Load Unpacked
```

## Coût et pièges
Gratuit, dons acceptés. Licence non déclarée. Ajouter un établissement à la liste force Chrome à désactiver l'extension pour tous les utilisateurs jusqu'à nouvelle approbation.

## Ce que ce n'est pas
Pas un thème universel : il ne couvre que Canvas.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : confort d'affichage Canvas, sans rapport avec la data ou l'IA.

