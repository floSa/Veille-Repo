---
schema: 1
depot: T31n/Geto
source_readme_sha: 4e69450fb27558de
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, matière insuffisante]
verdict: ignorer
---

# T31n/Geto

> Application Android qui applique des réglages système par application, par exemple masquer les options développeur.

## Le problème
Désactiver les options développeur réinitialise leurs réglages, ce qui gêne l'usage de certaines applications bancaires.

## Ce que ça fait vraiment
Même README, mêmes chiffres et mêmes dates que JackEblan/Geto, donc très probablement un doublon ou un miroir. Modifie les valeurs de réglages via les préférences partagées. Exige la permission `android.permission.WRITE_SECURE_SETTINGS`.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
  A[Geto] --> B[WRITE_SECURE_SETTINGS]
  B --> C[Réglages système]
  C --> D[Applications ciblées]
```

## Essayer
Aucune commande documentée dans le README. Une vidéo tutoriel est mentionnée.

## Coût et pièges
Gratuit, GPL-3.0. Permission sensible à accorder soi-même. Le lien avec JackEblan/Geto n'est pas documenté.

## Ce que ce n'est pas
Pas un outil de contournement de sécurité documenté. Le README est trop court pour juger la fiabilité.

## Alternatives
Aucune alternative nommée dans le README, hormis JackEblan/Geto, au README identique.

## Pour toi
À ignorer : utilitaire Android sans rapport avec la data, l'IA ou le MLOps.

