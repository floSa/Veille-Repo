---
schema: 1
depot: DigitalPlatDev/FreeDomain
source_readme_sha: f20b031f96be60ab
ecrite_le: 2026-10-27
nature: doc
deploiement: rien à installer
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, dépend d'un SaaS]
verdict: surveiller
---

# DigitalPlatDev/FreeDomain

> Page d'information et guide DNS d'un service de sous-domaines gratuits ; pour qui veut une adresse sans payer.

## Le problème
Un domaine coûte de l'argent, ce qui freine un projet perso ou une démo. Le DNS, la mise en ligne et l'e-mail sont mal connus des débutants.

## Ce que ça fait vraiment
Ce dépôt ne contient que l'information publique : FAQ, annonces, tutoriel et un guide d'apprentissage (LEARN.md). L'enregistrement se fait sur un tableau de bord externe, avec des extensions comme .DPDNS.ORG ou .US.KG. Le code de l'application est dans un autre dépôt (Domain-OSS). Le guide couvre DNS, déploiement de site, e-mail et exploitation.

## Comment c'est branché
```mermaid
flowchart LR
  A[Visiteur] --> B["README.md"]
  B --> C["faq.md"]
  B --> D["LEARN.md"]
  B --> E[Registration Dashboard]
  D --> F[DNS et déploiement]
```

## Essayer
```bash
# aucune commande documentée : l'enregistrement passe par le tableau de bord web
```

## Coût et pièges
Gratuit, compte à créer sur le tableau de bord. Le service dépend d'un opérateur unique et les extensions ne t'appartiennent pas.

## Ce que ce n'est pas
Pas le code de l'application (autre dépôt). Pas un registrar classique : tes noms restent soumis aux règles et au signalement d'abus du service.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour un POC ou une démo jetable, trop fragile pour héberger un service de données ou un endpoint de modèle durable.

