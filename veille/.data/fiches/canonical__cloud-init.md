---
schema: 1
depot: canonical/cloud-init
source_readme_sha: 087d08624c16451c
ecrite_le: 2026-09-29
nature: outil
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: adopter
---

# canonical/cloud-init

> Méthode standard d'initialisation d'instances cloud multi-distributions, pour administrateurs et ingénieurs plateforme.

## Le problème
Une image de machine identique doit se configurer différemment à chaque démarrage (réseau, SSH, paquets) selon le fournisseur.

## Ce que ça fait vraiment
Au démarrage, identifie le fournisseur, lit métadonnées, données utilisateur et fournisseur, puis exécute des modules de configuration (utilisateurs et SSH, disques, paquets, commandes) via une abstraction par distribution. Rend la configuration réseau et persiste les données d'instance.

## Comment c'est branché
```mermaid
flowchart LR
  I["Image + métadonnées"] --> D["Datasources"]
  D --> M["cloud-init CLI (main.py)"]
  M --> S["Stages (stages.py)"]
  S --> C["Config modules"]
  C --> X["Distro abstraction"]
  S --> R["Instance data / reporting"]
```

## Essayer
```bash
# Aucune commande dans le README : renvoi vers la documentation et le guide de contribution.
```

## Coût et pièges
Gratuit ; déjà livré avec la plupart des distributions et clouds. Plus de 600 tickets ouverts.

## Ce que ce n'est pas
Pas un outil à installer soi-même en général ; la licence est présente mais non identifiée par GitHub, donc à vérifier.

## Alternatives
- Aucune alternative citée dans le README.

## Pour toi
À adopter par défaut : tu l'utilises déjà en MLOps sur instances cloud, autant en maîtriser le format `user-data`.

