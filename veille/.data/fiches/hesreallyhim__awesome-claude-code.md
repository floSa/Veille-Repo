---
schema: 1
depot: hesreallyhim/awesome-claude-code
source_readme_sha: 6ab722f7a401152c
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: surveiller
---

# hesreallyhim/awesome-claude-code

> Liste commentée de skills, plugins, hooks et outils pour Claude Code, destinée à ses utilisateurs.

## Le problème
L'écosystème Claude Code produit des centaines de dépôts par mois ; trier le sérieux du bruit prend du temps.

## Ce que ça fait vraiment
Un README catégorisé : guides, ressources Anthropic, orchestration, sécurité, mémoire, observabilité, status lines, etc.
Chaque entrée porte un commentaire éditorial de l'auteur.
Côté code : un CSV canonique, un validateur de soumissions par issue, `generate_readme.py` qui régénère le README.
Un « ticker » récupère des métriques GitHub et produit des SVG.

## Comment c'est branché
```mermaid
flowchart LR
  I[Submit Issue] --> V[Issue Validator]
  V --> CAT[categories.py]
  V --> A[add_resource.py]
  A --> RC[Resource Catalog]
  RC --> G[generate_readme.py]
  G --> R[README.md]
```

## Essayer
```bash
# Aucune commande documentée : c'est une liste à lire.
```

## Coût et pièges
Rien. La liste est en refonte : des ressources « legacy » sont temporairement dans `README_ALTERNATIVES`.

## Ce que ce n'est pas
Pas un catalogue exhaustif ni neutre : la sélection et les jugements sont ceux d'une personne. Pas un outil installable.

## Alternatives
Non documenté (le README cite des ressources, pas de liste concurrente).

## Pour toi
Bonne porte d'entrée pour piocher des skills ou hooks ; à parcourir, pas à adopter.
