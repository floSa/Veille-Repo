---
schema: 1
depot: dotnet/csharplang
source_readme_sha: 024a5fcedfa32417
ecrite_le: 2026-11-07
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: ignorer
---

# dotnet/csharplang

> Dépôt officiel de conception du langage C# : propositions, notes de réunions et historique des versions.

## Le problème
Savoir comment et pourquoi C# évolue, et comment proposer une fonctionnalité.

## Ce que ça fait vraiment
Héberge les propositions de fonctionnalités (dossier proposals), les notes des réunions de conception (meetings) et l'historique des versions. Les débats passent par les Discussions GitHub ; une proposition n'est ouverte en issue que sur invitation d'un « champion ». L'implémentation de référence est dans Roslyn.

## Comment c'est branché
```mermaid
flowchart TD
    Disc["GitHub Discussions"] --> Champ["Champion"]
    Champ --> Prop["proposals/"]
    Prop --> LDM["Language Design Meetings (meetings/)"]
    LDM --> Proto["Prototype (fork de Roslyn)"]
    Proto --> Roslyn["Roslyn"]
    Roslyn --> Spec["Spécification ECMA-334"]
```

## Essayer
Aucune commande documentée : on lit les dossiers proposals et meetings.

## Coût et pièges
Gratuit. Aucune licence reconnue par le catalogue. Une proposition active n'est pas garantie d'aboutir. 298 issues ouvertes.

## Ce que ce n'est pas
Ce n'est pas le compilateur ni la spécification complète du langage (celle-ci est dans un autre dépôt). Ce n'est pas un forum d'entraide.

## Alternatives
Aucune alternative nommée dans le README (renvois vers Roslyn et le dépôt de spécification).

## Pour toi
À ignorer, sauf si tu suis l'évolution de C# ; sans lien avec data/IA/MLOps.

