---
schema: 1
depot: pinterest/elixometer
source_readme_sha: 74ed92fd1ada0cbd
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [dernier commit ancien]
verdict: ignorer
---

# pinterest/elixometer

> Surcouche Elixir à exometer pour définir des métriques et les envoyer au reporter par défaut.

## Le problème
Dans exometer, il faut déclarer une métrique avant de la mettre à jour, ce qui alourdit le code.

## Ce que ça fait vraiment
Permet de mettre à jour directement compteurs, histogrammes, jauges, spirales et minuteurs, nommés par chaînes séparées par des points. L'annotation `@timed` chronomètre une fonction. Un préfixe et l'environnement sont ajoutés aux noms, un formateur est personnalisable, et `pobox` limite la file de messages.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
graph LR
  C[Code Elixir] --> E[Elixometer]
  E --> X[exometer_core]
  X --> R[Reporter configuré]
  E --> B[pobox]
```

## Essayer
```bash
# mix.exs : {:elixometer, "~> 1.5"}
```

## Coût et pièges
Gratuit. Il faut Elixir et mix. Les reporters OpenTSDB et Statsd exigent le paquet exometer complet. Dernier push en juillet 2023.

## Ce que ce n'est pas
Ce n'est pas un serveur de métriques : il n'envoie rien sans reporter exometer configuré.

## Alternatives
Non documenté dans le README.

## Pour toi
À ignorer : réservé à l'écosystème Elixir et sans mise à jour depuis plus de trois ans, il n'apporte rien à un profil data / IA / MLOps en Python.

