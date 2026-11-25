---
schema: 1
depot: jaspervdj/patat
source_readme_sha: f3e26a5d111eff75
ecrite_le: 2026-11-25
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# jaspervdj/patat

> Outil de présentation en terminal qui lit le markdown via Pandoc et affiche des diapositives ANSI.

## Le problème
Faire une présentation technique dans son terminal, depuis un fichier texte versionnable, sans éditeur de diapositives.

## Ce que ça fait vraiment
Lit tout format Pandoc, découpe les diapositives, recharge à chaque sauvegarde (`--watch`), affiche coloration syntaxique, thèmes, transitions, notes d'orateur dans un second fichier. Peut évaluer des blocs de code et en montrer le résultat. Images via iTerm2, Kitty, WezTerm ou w3m.

## Comment c'est branché
Schéma d'après le diagramme du code.

```mermaid
flowchart TD
  A["src/Main.hs"] --> B["lib/Patat/Main.hs"]
  B --> C["Presentation/Read.hs"]
  C --> D["Pandoc/Extended.hs"]
  C --> F["Eval.hs"]
  B --> G["Interactive.hs"]
  G --> H["Display.hs"]
```

## Essayer
```bash
cabal install patat
patat --watch slides.md
patat -d slides.md
```

## Coût et pièges
Gratuit, binaires précompilés ou paquets de distribution. Évaluer du code est risqué : le README demande de relire les présentations téléchargées avant de les lancer.

## Ce que ce n'est pas
Pas un outil de présentation graphique : pas de mise en page libre, tout passe par le terminal.

## Alternatives
MDP et VTMC, dont il s'inspire (cités dans le README).

## Pour toi
À surveiller : pratique pour présenter des résultats ou démos depuis un dépôt, notamment avec l'évaluation de code.

