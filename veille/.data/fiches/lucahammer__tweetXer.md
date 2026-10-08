---
schema: 1
depot: lucahammer/tweetXer
source_readme_sha: aaf184b2db696f3d
ecrite_le: 2026-10-08
nature: outil
deploiement: rien à installer
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# lucahammer/tweetXer

> Script de console ou userscript qui supprime tous tes tweets à partir de l'export de données X.

## Le problème
Supprimer des milliers de tweets anciens à la main est impossible, y compris ceux qui n'apparaissent plus sur le profil.

## Ce que ça fait vraiment
Tu colles le script dans la console du navigateur connecté à X, ou tu l'installes comme userscript. Il lit `tweets.js` de ton export, intercepte les requêtes XHR en y substituant les identifiants de tes tweets, puis les supprime (5 à 10 par seconde). Options : suppression lente sans export, suppression de DM, désabonnement de tous, export des favoris.

## Comment c'est branché
```mermaid
flowchart LR
  P[Propriétaire du compte] --> B[Barre de contrôle tweetXer.js]
  B --> F[Export tweet-headers.js]
  F --> I[Interception des requêtes]
  I --> D[Suppression tweets / DM]
  D --> X[Compte X]
```

## Essayer
Aucune commande : coller le script dans la console du navigateur (F12) sur X, ou installer le userscript via Greasy Fork, puis choisir `tweet-headers.js` ou `tweets.js`.

## Coût et pièges
Export de données à demander (plusieurs jours). Risque de blocage du compte, signalé par l'auteur. Plantages de navigateur au-delà de 15 000 tweets. Coller un script inconnu dans une console est risqué.

## Ce que ce n'est pas
Ne supprime pas les likes (seulement les derniers centaines) ; ne retire que ce qui est dans l'export.

## Alternatives
Lyfhael/DeleteTweets, source d'inspiration pour la rapidité de suppression, citée dans le README.

## Pour toi
À ignorer pour un profil data/IA : outil personnel de nettoyage de compte, licence non identifiée et risque de bannissement.

