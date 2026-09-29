---
schema: 1
depot: pinojs/pino
source_readme_sha: 9c6a2b59d1934e09
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# pinojs/pino

> Journaliseur JavaScript à très faible surcoût, sorties en JSON, pour applications Node.js.

## Le problème
Un logger lent ou synchrone réduit le nombre de requêtes par seconde d'un service.

## Ce que ça fait vraiment
Produit des lignes JSON (niveau, horodatage, message, pid, hostname), avec loggers enfants qui héritent de propriétés, masquage de champs (redaction) et sérialiseurs. Le traitement lourd (envoi, alertes, formatage) est déporté dans des « transports » exécutés dans un worker thread via `pino.transport`. `pino-pretty` sert au développement. Il fonctionne aussi sous Bare et Pear via `pino-bare`.

## Comment c'est branché
```mermaid
graph LR
    A[Application] --> L[Logger principal]
    L --> C[Child loggers]
    L --> S[Serializers + Redaction]
    L --> T[Worker Thread Transport]
    T --> O[Fichier / stdout]
```

## Essayer
```bash
npm install pino
```
```js
const logger = require('pino')()
logger.info('hello world')
const child = logger.child({ a: 'property' })
```

## Coût et pièges
Gratuit. Le README recommande de ne pas faire de traitement de logs dans le thread principal.

## Ce que ce n'est pas
Ce n'est pas une plateforme d'observabilité : il émet des logs, il ne les stocke ni ne les analyse.

## Alternatives
Le README dit « plus de 5 fois plus rapide que les alternatives » sans en nommer.

## Pour toi
À ignorer pour un profil data/IA en Python ; utile seulement si tu écris des services Node.js.

