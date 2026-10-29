---
schema: 1
depot: LinkedInLearning/learning-terraform-3087701
source_readme_sha: 701735af082b5bf3
ecrite_le: 2026-10-29
nature: doc
deploiement: rien à installer
prerequis: [compte à créer]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier, dernier commit ancien]
verdict: ignorer
---

# LinkedInLearning/learning-terraform-3087701

> Dépôt d'accompagnement du cours LinkedIn Learning « Learning Terraform », pour débutants sur AWS.

## Le problème
Suivre un cours vidéo avec le code exact de chaque étape.

## Ce que ça fait vraiment
Une branche par vidéo (`CHAPITRE#_FILM#`, ex. `02_03`) : le code est construit séquentiellement, `main` contient le point de départ et `final` la version terminée. Le cours montre la configuration d'AWS pour Terraform, les commandes de base et les modules du registre.

## Comment c'est branché
```mermaid
flowchart LR
  A[main départ] --> B[branche 02_03]
  B --> C[branche suivante]
  C --> D[branche final]
```

## Essayer
Aucune commande dans le README : on change de branche par chapitre.

## Coût et pièges
Compte AWS requis ; ressources créées à ta charge. Le cours LinkedIn Learning lui-même est payant. Dernier push en août 2024, 150 issues ouvertes.

## Ce que ce n'est pas
Pas un tutoriel autonome : sans la vidéo, peu de texte. Licence présente mais non identifiée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : cours Terraform débutant adossé à un abonnement ; utile seulement si tu suis déjà la vidéo.

