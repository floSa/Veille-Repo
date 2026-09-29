---
schema: 1
depot: rlaope/oh-my-hermes
source_readme_sha: 8a4a085af2c8536e
ecrite_le: 2026-09-29
nature: extension
deploiement: npm
prerequis: [service tiers, version de Python, clé d'API]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# rlaope/oh-my-hermes

> Couche de workflows au-dessus de Hermes Agent : routage de modèles, lanes parallèles, mémoire et preuves.

## Le problème
Un agent de code déclare souvent « terminé » sans preuve, et le choix du modèle par tâche reste manuel.

## Ce que ça fait vraiment
Plugin Python pour Hermes Agent : classe la requête, choisit un modèle et un niveau d'effort parmi 12 catégories éditables, découpe le travail en unités sur des worktrees séparés, distingue « prévu / en cours / annoncé fait / vérifié ». 108 skills `omh-*`, neuf workflows `ulw-*`, mémoire à long terme relue par un validateur. Le README dit qu'aucune mesure comparative n'est encore publiée.

## Comment c'est branché
```mermaid
graph LR
    A["CLI entry point (__main__.py)"] --> B["Command dispatch (main.py)"]
    B --> C["Intent routing (intent.py)"]
    C --> D["Model routing (model_routing.py)"]
    D --> E["Coding orchestration (fanout.py)"]
    E --> F["Verification execution"]
    F --> G["Reviewed local memory (memory_store.py)"]
```

## Essayer
```bash
curl -fsSL https://raw.githubusercontent.com/rlaope/oh-my-hermes/main/install.sh | sh
omh setup
omh doctor
```

## Coût et pièges
Suppose Hermes Agent installé et des fournisseurs de modèles configurés (coût à ta charge). Le README propose d'exécuter un script distant via curl. Les chaînes recommandées citent des modèles payants.

## Ce que ce n'est pas
Pas un agent autonome : il s'ajoute à Hermes. Les gains chiffrés dans le README ne sont pas encore reproduits publiquement.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf si tu utilises déjà Hermes Agent : dépôt jeune, un seul mainteneur, gains non mesurés publiquement.
