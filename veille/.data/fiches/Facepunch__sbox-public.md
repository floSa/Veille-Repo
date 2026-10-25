---
schema: 1
depot: Facepunch/sbox-public
source_readme_sha: f568eeeeb5608ac1
ecrite_le: 2026-10-25
nature: outil
deploiement: compilation
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# Facepunch/sbox-public

> Sources du moteur de jeu s&box (Source 2 et .NET), pour contributeurs qui compilent le moteur.

## Le problème
Contribuer à un moteur de jeu exige d'accéder à son code, à l'éditeur et aux outils de compilation.

## Ce que ça fait vraiment
Dépôt du moteur C#, de l'éditeur, des outils et du contenu. Le cœur natif Source 2 est téléchargé sous forme de binaires précompilés par `Setup`, sans toolchain C++. L'éditeur s'installe sinon depuis Steam. Un hook git récupère les nouveaux binaires à chaque pull.

## Comment c'est branché
```mermaid
graph LR
  A[Editor launcher Launcher.cs] --> B[Engine loop EngineLoop.cs]
  B --> C[Editor system EditorSystem.cs]
  B --> D[Game API Game.cs]
  D --> E[Scene runtime]
  F[Project compiler Compiler.cs] --> D
```

## Essayer
```bash
git clone https://github.com/Facepunch/sbox-public.git
cd sbox-public
./Setup.sh
```

## Coût et pièges
Gratuit. SDK .NET 10 requis ; Intel Mac non pris en charge ; binaires natifs téléchargés. Licence non identifiée par GitHub : à lire avant réutilisation. 2 570 issues ouvertes.

## Ce que ce n'est pas
Pas le guide pour créer des jeux : le README renvoie vers la documentation du site pour cela.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : moteur de jeu sans rapport avec la data ou l'IA, sous licence à vérifier.

