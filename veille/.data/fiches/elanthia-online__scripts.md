---
schema: 1
depot: elanthia-online/scripts
source_readme_sha: 76301c93784c0241
ecrite_le: 2026-11-25
nature: liste
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence non déclarée]
verdict: ignorer
---

# elanthia-online/scripts

> Dépôt collaboratif de scripts pour Lich, publiés automatiquement à chaque fusion sur master.

## Le problème
Les scripts de la communauté Lich sont dispersés, sans publication partagée.

## Ce que ça fait vraiment
Centralise des scripts : à chaque fusion sur `master`, un build publie les scripts modifiés sous l'auteur `elanthia-online` avec l'outil `util/repo`. Pour contribuer, déplacer le fichier dans `scripts/` et le relier en lien dur au dossier Lich.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  Dev[Contributeur] --> PR[PR vers master]
  PR --> Scripts[scripts/]
  Scripts --> Build[Travis-CI]
  Build --> Repo[util/repo]
  Repo --> Lich[Scripts Lich publiés]
```

## Essayer
```bash
ln scripts/<fichier> <dossier-scripts-lich>/
```

## Coût et pièges
Gratuit. Le README mentionne Travis-CI. Licence non déclarée. Sans connaissance de Lich, le contenu est opaque.

## Ce que ce n'est pas
Pas un outil autonome : ce sont des scripts pour Lich.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : scripts pour un outil de jeu (Lich), sans lien avec ton travail.

