---
schema: 1
depot: jszmajda/lid
source_readme_sha: 7b914ebc304a6bd6
ecrite_le: 2026-11-07
nature: outil
deploiement: autre
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# jszmajda/lid

> Méthode et plugins Claude Code pour spécifier la conception avant le code avec un agent.

## Le problème
Les agents de code comprennent de travers l'intention : les écarts ne sont pas des bugs mais des malentendus sur ce qu'on voulait.

## Ce que ça fait vraiment
Impose une chaîne HLD, LLD, spécifications EARS, tests, code, avec relecture à chaque phase. Le code et les tests citent des identifiants de spécification (`@spec`). Deux plugins : `linked-intent-dev` et `arrow-maintenance`, plus `lid-experimental`. Pour les autres outils, des règles pointent vers un `AGENTS.md`.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
    A["HLD"] --> B["LLDs"]
    B --> C["Specs EARS"]
    C --> D["Tests"]
    D --> E["Code"]
```

## Essayer
```bash
/plugin marketplace add jszmajda/lid
/plugin install linked-intent-dev@jszmajda-lid
/plugin install arrow-maintenance@jszmajda-lid
/linked-intent-dev
```

## Coût et pièges
Gratuit, mais tu paies les tokens de ton agent ; le README prévient que la cartographie d'un code existant consomme beaucoup. Discipline exigée : relire chaque conception.

## Ce que ce n'est pas
Pas un générateur de code : c'est un processus de documentation. Les skills et commandes ne fonctionnent pleinement que sur Claude Code.

## Alternatives
Aucune alternative nommée dans le README (il évoque d'autres systèmes de développement piloté par les specs sans les nommer).

## Pour toi
Surveiller : utile si tu codes beaucoup avec des agents et subis des dérives d'intention ; le coût en relecture est réel.

