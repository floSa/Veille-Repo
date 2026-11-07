---
schema: 1
depot: Lampese/codex-switcher
source_readme_sha: 05420e73bebf1124
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dépend d'un SaaS, mainteneur unique]
verdict: ignorer
---

# Lampese/codex-switcher

> Application de bureau pour basculer entre plusieurs comptes OpenAI Codex et suivre leur quota.

## Le problème
Avec plusieurs comptes Codex, changer de compte à la main et surveiller les limites de 5 heures et hebdomadaires est fastidieux.

## Ce que ça fait vraiment
L'application stocke plusieurs comptes (connexion ChatGPT OAuth ou import de `auth.json`), bascule depuis la fenêtre ou la barre système et affiche limites, crédits et statistiques d'usage. Elle sauvegarde le jeton du compte actif avant de changer, pour ne pas perdre la session. Un « warm-up » envoie une requête minimale pour démarrer la fenêtre de quota, manuellement ou à heures fixes.

## Comment c'est branché
```mermaid
flowchart LR
  A["Main Dashboard (App.tsx)"] --> B["Runtime Bridge (platform.ts)"]
  B --> C["Backend Commands"]
  C --> D["Safe Account Switching (switcher.rs)"]
  C --> E["Account Storage (storage.rs)"]
  C --> F["Usage API Client (usage.rs)"]
  B --> G["Browser API Server (web.rs)"]
```

## Essayer
```bash
git clone https://github.com/Lampese/codex-switcher.git
cd codex-switcher
pnpm install
pnpm tauri dev
pnpm tauri build
pnpm lan
```

## Coût et pièges
Gratuit, mais les versions macOS ne sont pas notariées (retirer la quarantaine à la main). `pnpm lan` écoute sur 0.0.0.0:3210 : n'expose pas ce port sans protection, car l'application manipule des jetons. 80 issues ouvertes d'après le catalogue.

## Ce que ce n'est pas
Ce n'est pas un outil de mutualisation de comptes : le README interdit partage, contournement des conditions d'utilisation d'OpenAI et mise en commun d'identifiants. Il commence lui-même par « perhaps you no longer need this software ».

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : il sert à jongler entre quotas de comptes personnels, avec un risque vis-à-vis des conditions d'OpenAI, et le README suggère lui-même qu'il est peut-être devenu inutile.

