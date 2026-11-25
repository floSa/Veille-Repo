---
schema: 1
depot: k4zmu2a/SpaceCadetPinball
source_readme_sha: a5c0b3677ee1b056
ecrite_le: 2026-11-25
nature: app
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dernier commit ancien]
verdict: ignorer
---

# k4zmu2a/SpaceCadetPinball

> Rétro-ingénierie du flipper Space Cadet de Windows, portée sur Windows, Linux et macOS avec SDL2.

## Le problème
Le jeu fourni avec Windows ne tourne plus sur les systèmes récents ni ailleurs qu'à Windows.

## Ce que ça fait vraiment
Le code a été décompilé depuis `pinball.exe` de Windows XP avec Ghidra et IDA, nommé, puis converti en C++ compilable. Le port utilise SDL2 et ImGui, avec fenêtre redimensionnable et sprites haute résolution. Les ressources d'origine ne sont pas fournies et doivent être placées à côté de l'exécutable. Il existe de nombreux portages tiers.

## Comment c'est branché
```mermaid
flowchart TD
  J["CMakeLists.txt"] --> A["winmain.cpp"]
  A --> B["pb.cpp"]
  B --> G["loader.cpp"]
  G --> C["TPinballTable.cpp"]
  C --> D["TFlipper.cpp"]
  B --> H["render.cpp"]
  B --> I["Sound.cpp"]
```

## Essayer
```bash
brew tap draftbrew/tap
brew install --no-quarantine space-cadet-pinball
```

## Coût et pièges
Il faut posséder les fichiers du jeu original. Compilation avec CMake et SDL2, SDL2_mixer. Dernier push en août 2024. Le Homebrew désactive Gatekeeper à l'installation.

## Ce que ce n'est pas
Pas un nouveau jeu : une reconstruction du code d'origine, dont la partie légale dépend des ressources que tu fournis.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : curiosité de rétro-ingénierie, sans lien avec ton travail data ou IA.

