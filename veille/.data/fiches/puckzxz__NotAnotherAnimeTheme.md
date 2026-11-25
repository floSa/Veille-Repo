---
schema: 1
depot: puckzxz/NotAnotherAnimeTheme
source_readme_sha: 1af14537f18bf180
ecrite_le: 2026-11-25
nature: extension
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: []
verdict: ignorer
---

# puckzxz/NotAnotherAnimeTheme

> Thème CSS personnalisable pour Discord, utilisable avec BetterDiscord ou Powercord.

## Le problème
L'interface par défaut de Discord se règle peu : fond, colonnes de serveurs, barres de défilement.

## Ce que ça fait vraiment
Un thème CSS dont le fichier principal charge les feuilles v3 et des variantes pour une à quatre colonnes de serveurs. Tout se règle dans le fichier du thème, y compris l'image de fond. Un dossier community propose des thèmes dérivés.

## Comment c'est branché
```mermaid
flowchart TD
  A["NotAnotherAnimeTheme.theme.css"] --> B["css/v3/naat.v3.css"]
  B --> C["css/v3/naat-min.v3.css"]
  B --> D["css/scsl.css"]
  B --> E["css/dcsl.css"]
  F["community/ZeroTwo"] --> A
```

## Essayer
Pour Powercord : créer un dossier NotAnotherAnimeTheme dans powercord/src/Powercord/themes et y télécharger le dépôt. Aucune commande documentée.

## Coût et pièges
Gratuit. Mode Dark requis, incompatible avec le mode minimal. Un don PayPal est suggéré à l'auteur.

## Ce que ce n'est pas
Pas un thème officiel : il dépend de modifications du client Discord (BetterDiscord, Powercord).

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : un thème visuel Discord, sans rapport avec un travail data, IA ou MLOps.

