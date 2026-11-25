---
schema: 1
depot: zeldaret/tww
source_readme_sha: 600ee7b0c4042e49
ecrite_le: 2026-11-25
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: []
verdict: ignorer
---

# zeldaret/tww

> Décompilation en cours de The Legend of Zelda: The Wind Waker (GameCube), pour passionnés de rétro-ingénierie.

## Le problème
Le code source du jeu n'est pas public : le comprendre ou le modifier exige de lire de l'assembleur.

## Ce que ça fait vraiment
Reconstruit du code C++ qui, une fois compilé, correspond au binaire d'origine, suivi par objdiff. Le dépôt ne contient aucun asset ni assembleur : il faut fournir sa propre image disque. Il couvre le gestionnaire de processus, les événements, les messages, l'audio, les particules et les couches graphiques. Une Ghidra partagée aide à comprendre les fonctions.

## Comment c'est branché
```mermaid
flowchart TD
  PM["f_pc_manager.cpp"] --> GS["d_com_inf_game.h"]
  EM["d_event_manager.cpp"] --> GS
  MM["f_op_msg_mng.cpp"] --> TB["J2DTextBox.h"]
  ZA["JAIZelBasic.cpp"] --> GS
  PE["JPAEmitterManager.cpp"] --> GX["GX.h"]
```

## Essayer
```bash
git clone https://github.com/zeldaret/tww.git
python configure.py
ninja
```
Copier d'abord l'image du jeu dans `orig/GZLE01`.

## Coût et pièges
Gratuit, mais il faut posséder le jeu. Python et ninja requis. Les PR générées par IA ou copiées de Ghidra sont refusées.

## Ce que ce n'est pas
Pas un jeu jouable ni un port : il ne contient pas les ressources.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : projet de rétro-ingénierie de jeu, sans application pour un profil data / IA / MLOps.

