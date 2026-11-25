---
schema: 1
depot: afritz1/OpenTESArena
source_readme_sha: de96740f87f5a9e2
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [GPU]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: []
verdict: ignorer
---

# afritz1/OpenTESArena

> Moteur libre réécrit de zéro pour le jeu The Elder Scrolls: Arena de 1994.

## Le problème
Le jeu DOS de 1994 est difficile à faire tourner et à moderniser.

## Ce que ça fait vraiment
Reconstitution propre du moteur : combat, butin, inventaire, marchands, citoyens, voyage rapide, création de personnage. Incomplets : potions, quêtes, sorts, sauvegarde. Rendu Vulkan, audio OpenAL, fichiers lus par un système virtuel. Aucun fichier du jeu n'est distribué.

## Comment c'est branché
```mermaid
flowchart TD
  A["Main.cpp"] --> B["Game.cpp"]
  C["InputManager.cpp"] --> B
  B --> D["SceneManager.cpp"]
  D --> E["Voxel et entités"]
  D --> F["Renderer.cpp (Vulkan)"]
  G["AudioManager.cpp"] --> H["VFS (manager.cpp)"]
```

## Essayer
```bash
git clone https://github.com/afritz1/OpenTESArena
cd OpenTESArena
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=? ..
make -j8
```

## Coût et pièges
Gratuit, mais il faut les données du jeu original (téléchargeables gratuitement chez Bethesda ou sur Steam). Compilation : CMake, SDL, OpenAL, Vulkan.

## Ce que ce n'est pas
Pas un remake complet : loin de la jouabilité finale. Pas de modèle ni d'IA.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : projet de jeu rétro, sans rapport avec data/IA.

