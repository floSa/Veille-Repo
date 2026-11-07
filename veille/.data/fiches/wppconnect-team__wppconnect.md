---
schema: 1
depot: wppconnect-team/wppconnect
source_readme_sha: 6db08dc646698c44
ecrite_le: 2026-11-07
nature: bibliothèque
deploiement: npm
prerequis: [Node, compte à créer, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence à vérifier, dépend d'un SaaS]
verdict: ignorer
---

# wppconnect-team/wppconnect

> Bibliothèque Node.js qui pilote WhatsApp Web par navigateur automatisé, pour bots et intégrations.

## Le problème
WhatsApp n'offre pas d'API simple pour un développeur qui veut envoyer et recevoir des messages depuis son application.

## Ce que ça fait vraiment
Pilote WhatsApp Web avec Puppeteer et expose une API JavaScript/TypeScript : textes, images, vidéos, documents, contacts, groupes, sessions multiples et appairage par QR code. Un magasin de jetons conserve la session. Le code côté navigateur (`lib/wapi`) relaie les fonctions de WhatsApp Web.

## Comment c'est branché
```mermaid
flowchart TD
  A["src/index.ts"] --> B["Controllers (auth, browser)"]
  B --> C["Configuration (Puppeteer)"]
  B --> D["API Layer (layers, helpers)"]
  D --> E["Lib/WAPI"]
  C --> F["Token Store"]
```

## Essayer
```bash
npm install @wppconnect-team/wppconnect
node index.cjs
```

## Coût et pièges
Gratuit, mais il faut Chrome ou Chromium, un compte WhatsApp et le scan d'un QR code. Les changements de WhatsApp Web peuvent casser la bibliothèque : lire les notes de version à chaque mise à jour.

## Ce que ce n'est pas
Pas une API officielle de WhatsApp. Pas de version minimale de Node déclarée. Le diagramme fourni est une description générale du code, pas un relevé exact.

## Alternatives
- WPPConnect Server : API REST avec webhooks, pour exposer les sessions en HTTP.
- WA-JS : fonctions de WhatsApp Web côté navigateur.

## Pour toi
À ignorer : outil de bot WhatsApp sans lien avec la data ou l'IA, et fragile face aux changements de WhatsApp Web.

