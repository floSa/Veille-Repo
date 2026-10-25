---
schema: 1
depot: ed0ard/CS2-Bot-Improver
source_readme_sha: 89b204c6a4aed418
ecrite_le: 2026-10-25
nature: extension
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# ed0ard/CS2-Bot-Improver

> Greffon pour Counter-Strike 2 qui améliore visée, grenades et stratégie des bots en parties hors ligne.

## Le problème
Les bots de CS2 visent mal, se bloquent et jouent sans stratégie.

## Ce que ça fait vraiment
Paquet à copier dans `game/csgo` : visée plus humaine, lancer de grenades, déplacements, économie d'achats, noms de pros et profils selon HLTV, personnalisation des skins. Panneau Windows (Tauri) pour choisir le mode et lancer le jeu. Greffons CounterStrikeSharp côté jeu.

## Comment c'est branché
```mermaid
graph LR
  A[Panel shell App.tsx] --> B[Mode and launch ModeCard.tsx]
  A --> C[Command browser CommandsPanel.tsx]
  A --> D[Game file API api.ts]
  D --> E[Linux bot AI addon BotAI.cs]
  E --> F[Counter-Strike 2]
```

## Essayer
```bash
bot_aim head
bot_nades more
br_reroll
```
Ces commandes se saisissent dans la console du jeu après installation du paquet.

## Coût et pièges
Gratuit. Installation manuelle dans le dossier du jeu ; le panneau n'existe que sous Windows. Pour jouer en ligne, retour à `gameinfo.gi` et retrait de `-insecure`.

## Ce que ce n'est pas
Pas un greffon pour le jeu en ligne classé : prévu pour matchs hors ligne et parties privées.

## Alternatives
Aucune alternative nommée dans le README (des projets de bots sont crédités).

## Pour toi
À ignorer : modification de jeu sans rapport avec la data ou l'IA.

