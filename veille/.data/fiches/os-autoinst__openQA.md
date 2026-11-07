---
schema: 1
depot: os-autoinst/openQA
source_readme_sha: 42a382f939109661
ecrite_le: 2026-11-07
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# os-autoinst/openQA

> Framework de test d'OS et d'applications graphiques qui pilote des machines virtuelles, pour les équipes qui livrent des distributions.

## Le problème
Scripter des tests sur une fenêtre popup ou sur une erreur de démarrage avant même init est difficile, et vérifier la sortie l'est encore plus.

## Ce que ça fait vraiment
openQA lance des machines virtuelles, surveille leur état et exécute des tests dessus. Ce dépôt contient l'interface web et la logique de gestion (planification, gestion des tests, API de haut niveau). Le moteur de test os-autoinst est dans un autre dépôt et reste nécessaire.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
    U["Utilisateur ou API REST"] --> W["Interface web openQA"]
    W --> P["Planification des tests"]
    P --> E["Moteur os-autoinst"]
    E --> VM["Machines virtuelles"]
```

## Essayer
```bash
# Aucune commande dans le README.
# Il renvoie vers le Starter Guide, l'Installation Guide et un Codespace.
```

## Coût et pièges
Il faut aussi installer le dépôt os-autoinst. La procédure d'installation est dans des guides hors README. Les anciens tags GitHub sont trompeurs : chaque commit de master est considéré comme stable.

## Ce que ce n'est pas
Pas un outil de test de code applicatif classique : il teste des systèmes entiers dans des VM. Pas de versions numérotées fiables.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utile pour tester des OS ou le démarrage d'un noyau, loin d'un travail data, IA ou MLOps courant.

