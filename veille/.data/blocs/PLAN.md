# Plan d'une synthèse — le même pour tous les dépôts

Une synthèse fait **moins d'une page** : 2 500 à 3 000 caractères. Pas plus.
Elle commence par un front matter, puis huit sections aux titres **exacts** ci-dessous.

```
---
nature: outil | bibliothèque | liste | service | modèle | doc | app | extension | dataset
deploiement: pip | npm | docker | binaire | SaaS | rien à installer | compilation | autre
prerequis: [aucun | clé d'API | GPU | Docker | service tiers | compte à créer | version de Python | Node | beaucoup de RAM]
cout: gratuit | freemium | clé d'API à ta charge | payant
maturite: expérimental | utilisable | éprouvé
gouvernance: entreprise | fondation | une personne | communauté
alertes: [licence non déclarée | licence copyleft | licence à clauses commerciales | mainteneur unique | archivé | dépend d'un SaaS | télémétrie | dernier commit ancien | matière insuffisante]
verdict: adopter | surveiller | ignorer
---
```

Les valeurs sont **strictement** dans ces listes. Les champs `schema`, `depot`,
`source_readme_sha` et `ecrite_le` sont ajoutés par un script : ne pas les écrire.

# owner/repo

> **Une phrase** de quinze mots : ce que c'est, pour qui. Pas le slogan du README.

## Le problème
Deux lignes : ce qui fait mal sans cet outil.

## Ce que ça fait vraiment
Quatre lignes, concrètes, dégraissées du marketing.

## Comment c'est branché
Le bloc ```mermaid du diagramme fourni, **repris tel quel**. Si aucun diagramme n'est fourni,
en écrire un de cinq à huit nœuds.

## Essayer
Un bloc ```bash avec les commandes **réellement présentes** dans le README. Aucune inventée.
Aucune commande documentée ? L'écrire.

## Coût et pièges
Deux lignes : clé d'API, GPU, Docker, quota, facture à ta charge, compte à créer.

## Ce que ce n'est pas
Deux à trois lignes. **Jamais vide.** Malentendus, limites, coût caché.

## Alternatives
Trois au plus, une ligne chacune : pourquoi préférer l'autre. Uniquement des dépôts nommés
dans le README. Jamais un nom inventé.

## Pour toi
Une ligne, pour un profil data / IA / MLOps. Trancher.

---

## Règles

1. **Aucune invention.** Tout doit être traçable au README ou au diagramme. « non documenté »
   est une réponse attendue.
2. **Interdits** : *powerful, blazing fast, seamless, production-ready*, et tout superlatif
   du README.
3. **Moins d'une page par fiche.** C'est une contrainte, pas une indication.
4. README de moins de 800 caractères → fiche minimale, et `matière insuffisante` dans `alertes`.
