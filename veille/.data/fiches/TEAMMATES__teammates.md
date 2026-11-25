---
schema: 1
depot: TEAMMATES/teammates
source_readme_sha: c1482e59d29bfec1
ecrite_le: 2026-11-25
nature: app
deploiement: SaaS
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# TEAMMATES/teammates

> Outil en ligne d'évaluation par les pairs et de retours étudiants, utilisé par des universités.

## Le problème
Les enseignants doivent collecter des retours de pairs dans des projets d'équipe sans tableur improvisé.

## Ce que ça fait vraiment
Serveur Java et application Angular : sessions de feedback, questions de plusieurs types, résultats par statistiques, rappels par e-mail. Stockage relationnel Hibernate avec Liquibase, tâches via Google Cloud Tasks, déploiement sur App Engine ou Docker. Le README est surtout un point d'entrée pour contributeurs.

## Comment c'est branché
```mermaid
flowchart TD
  AN["Angular (main.ts)"] --> SV["WebApiServlet.java"]
  SV --> AF["ActionFactory.java"]
  AF --> FL["FeedbackSessionsLogic.java"]
  FL --> DB["Storage API + Hibernate"]
  FL --> TQ["TaskQueuer"]
  TQ --> EM["EmailQueueService.java"]
```

## Essayer
```bash
# Aucune commande documentée dans le README : voir la documentation développeur.
```

## Coût et pièges
Le service public est gratuit pour les enseignants. L'héberger soi-même demande Java, Gradle, Node, une base relationnelle et des services de mail.

## Ce que ce n'est pas
Pas un outil de notation automatique ni d'analyse : il collecte des retours.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : application pédagogique Java et Angular, sans usage pour un profil data / IA / MLOps.

