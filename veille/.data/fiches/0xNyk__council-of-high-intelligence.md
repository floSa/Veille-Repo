---
schema: 1
depot: 0xNyk/council-of-high-intelligence
source_readme_sha: 3f6a0e75bea29edb
ecrite_le: 2026-10-23
nature: extension
deploiement: autre
prerequis: [aucun]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# 0xNyk/council-of-high-intelligence

> Skill qui confie une décision difficile à 18 personas d'analyse, avec désaccord forcé et verdict structuré.

## Le problème
Un seul raisonnement de modèle donne souvent une réponse trop consensuelle sur les décisions à enjeu (architecture, stratégie, risque).

## Ce que ça fait vraiment
La commande `/council` convoque des personas (Socrate, Feynman, Torvalds, Taleb, Karpathy…) selon trois modes : complet (analyse aveugle, contre-interrogatoire, position finale, synthèse), rapide, duo. Verdict avec points non résolus, critères d'arrêt et prochaine action. Étiquettes FACT, INFERENCE, ASSUMPTION, UNKNOWN. Répartition possible sur plusieurs fournisseurs.

## Comment c'est branché
```mermaid
graph TD
  A[/council SKILL.md] --> B[Mode resolver]
  B --> C[Panel selector]
  C --> D[Independent analysis]
  D --> E[Cross examination]
  E --> F[Verdict synthesis]
  C --> G[Provider router]
```

## Essayer
```text
/plugin marketplace add 0xNyk/council-of-high-intelligence
/plugin install council@council-of-high-intelligence
/council --quick Should we add caching here?
```
```bash
./install.sh --codex-only
```

## Coût et pièges
Le mode complet multiplie les appels modèle (18 personas) : facture à ta charge. Pas de mesure de qualité fournie.

## Ce que ce n'est pas
Pas une preuve de meilleure décision : le README ne chiffre aucun gain. Les personas sont des « lentilles », pas des personnes réelles.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour documenter un arbitrage d'architecture ML, mais teste le mode `--quick` avant d'engager les coûts du mode complet.

