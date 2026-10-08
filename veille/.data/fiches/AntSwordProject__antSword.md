---
schema: 1
depot: AntSwordProject/antSword
source_readme_sha: 64207a2b4e2989bf
ecrite_le: 2026-10-08
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: []
verdict: ignorer
---

# AntSword/antSword

> Outil multi-plateforme d'administration de sites web par webshell, destiné aux pentesteurs autorisés et aux webmasters.

## Le problème
Piloter des webshells (terminal, fichiers, base de données) depuis une interface unique lors de tests d'intrusion autorisés.

## Ce que ça fait vraiment
Application Electron : on enregistre des shells cibles, puis on ouvre terminal distant, gestionnaire de fichiers, base de données ou vue du site. Des « cores » par famille de script, des encodeurs/décodeurs, un magasin de plugins et un service de mise à jour complètent l'ensemble.

## Comment c'est branché
```mermaid
graph TD
  Host[Electron host : app.js] --> Shells[Shell manager : contextmenu.js]
  Shells --> Term[Remote terminal]
  Shells --> Files[File manager]
  Shells --> DB[Remote database]
  Term --> Core[Script cores : index.js]
  Core --> Req[HTTP requests : request.js]
```

## Essayer
```bash
# Aucune commande dans le README : renvoie vers la documentation « Quick Start » externe.
```

## Coût et pièges
Gratuit. Le README interdit l'usage illégal et la publication de versions modifiées non autorisées. Usage à réserver aux cibles pour lesquelles tu as une autorisation.

## Ce que ce n'est pas
Pas un outil de développement ou d'IA. C'est un outil de sécurité offensive : rien pour la donnée ou le MLOps.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : hors de ton périmètre data/IA, et d'usage sensible nécessitant un cadre d'autorisation clair.

