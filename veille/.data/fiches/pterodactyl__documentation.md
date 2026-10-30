---
schema: 1
depot: pterodactyl/documentation
source_readme_sha: ea97e3591e45be40
ecrite_le: 2026-10-30
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [matière insuffisante]
verdict: ignorer
---

# pterodactyl/documentation

> Source de la documentation du panneau d'hébergement de serveurs de jeux Pterodactyl.

## Le problème
Les utilisateurs du panneau Pterodactyl ont besoin d'une documentation de référence.

## Ce que ça fait vraiment
Le README ne contient que le front matter de la page d'accueil du site : lien « Get Started » vers /project/introduction, et trois arguments (sécurité avec bcrypt, AES-256-CBC et HTTPS ; stack moderne ; serveurs dans des conteneurs Docker isolés). Le reste n'est pas documenté ici.

## Comment c'est branché
```mermaid
graph LR
  A[Page d'accueil] --> B[Get Started]
  B --> C[/project/introduction]
```

## Essayer
Aucune commande documentée.

## Coût et pièges
Rien d'indiqué. Matière insuffisante pour juger la mise en place d'un build local.

## Ce que ce n'est pas
Pas le panneau Pterodactyl lui-même, seulement sa documentation.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : documentation d'un outil d'hébergement de jeux, sans rapport avec ton profil.

