---
schema: 1
depot: systemd/systemd
source_readme_sha: ac86c23f101cd9ea
ecrite_le: 2026-10-27
nature: outil
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft, matière insuffisante]
verdict: ignorer
---

# systemd/systemd

> Gestionnaire de système et de services Linux, avec journal, udev, DNS et démarrage EFI.

## Le problème
Démarrer, superviser et journaliser les services d'une machine Linux de façon cohérente.

## Ce que ça fait vraiment
Le README ne fait que renvoyer à la documentation. D'après le code : le Manager résout les dépendances en transactions et jobs, exécute et supervise les services ; journald enregistre ; démons auxiliaires pour udev, résolution DNS, temps, répertoires personnels, mémoire (oomd) ; systemd-boot et bootctl pour EFI.

## Comment c'est branché
```mermaid
flowchart LR
  Admin["Service Client"] --> DBus["Manager D-Bus"]
  DBus --> Manager["Service Manager"]
  Manager --> Tx["Unit Transactions"]
  Tx --> Jobs["Unit Jobs"]
  Jobs --> Svc["Managed Services"]
  Svc --> Journal["Journal Manager"]
```

## Essayer
Aucune commande documentée dans le README.

## Coût et pièges
Gratuit. Licence GPL-2.0. Le README est très court (liens uniquement) : fiche minimale.

## Ce que ce n'est pas
Pas un outil à installer à part : il est déjà dans la plupart des distributions Linux. Le README ne dit pas comment l'utiliser.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer comme veille : tu l'utilises déjà (unités pour tes services de serving) ; rien à adopter.

