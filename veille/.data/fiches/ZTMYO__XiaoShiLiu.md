---
schema: 1
depot: ZTMYO/XiaoShiLiu
source_readme_sha: d322e95187f2f3e3
ecrite_le: 2026-11-25
nature: app
deploiement: docker
prerequis: [Node, Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# ZTMYO/XiaoShiLiu

> Clone pédagogique de Xiaohongshu en Vue 3 et Express : communauté de publications image-texte.

## Le problème
Offrir un exemple complet front et back d'un réseau social image-texte pour apprendre.

## Ce que ça fait vraiment
Frontend Vue 3 (Pinia, Vite) qui appelle l'API Express via `request.js` ; le middleware d'authentification JWT précède les routes, qui lisent MySQL via `dbHelper.js`. Publication, interactions sociales, administration, déploiement `docker-compose.yml`.

## Comment c'est branché
```mermaid
flowchart TD
  A["vue3-project/src/main.js"] --> D["src/api/request.js"]
  D --> E["express-project/app.js"]
  E --> G["middleware/auth.js"]
  G --> F["routes/posts.js"]
  F --> H["utils/dbHelper.js"]
  H --> J["scripts/init-database.sql"]
```

## Essayer
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Coût et pièges
Node 18+, MySQL 5.7+ ou MariaDB. Changer `JWT_SECRET` et le mot de passe de base avant tout usage. Utilise des API tierces d'images et de géolocalisation IP. Licence AGPL-3.0.

## Ce que ce n'est pas
Pas affilié à Xiaohongshu ; usage « apprentissage » annoncé, risque d'exploitation à la charge de l'utilisateur. README en chinois.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : appli web chinoise d'apprentissage, hors sujet data/IA/MLOps.

