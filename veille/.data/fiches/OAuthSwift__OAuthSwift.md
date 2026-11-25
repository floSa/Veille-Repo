---
schema: 1
depot: OAuthSwift/OAuthSwift
source_readme_sha: e7bd18911e7446ce
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [dernier commit ancien]
verdict: ignorer
---

# OAuthSwift/OAuthSwift

> Bibliothèque Swift pour authentifier des applications iOS et macOS en OAuth 1 et 2.

## Le problème
Implémenter le flux OAuth (redirections, jetons, signature des requêtes) à la main dans une app Apple est long et sujet aux erreurs.

## Ce que ça fait vraiment
`OAuth1Swift` et `OAuth2Swift` ouvrent l'URL d'autorisation via un gestionnaire (Safari, ASWebAuthenticationSession ou vue web), reçoivent le rappel, stockent le jeton dans `OAuthSwiftCredential`, puis signent les requêtes HTTP du client. PKCE pris en charge ; nombreux fournisseurs listés.

## Comment c'est branché
```mermaid
flowchart TD
  O1["OAuth1Swift.swift"] --> BASE["OAuthSwift.swift"]
  O2["OAuth2Swift.swift"] --> BASE
  O2 --> TYPE["OAuthSwiftURLHandlerType.swift"]
  TYPE --> SAF["SafariURLHandler.swift"]
  O2 --> CRED["OAuthSwiftCredential.swift"]
  CRED --> CLI["OAuthSwiftClient.swift"]
```

## Essayer
Installation en glissant `OAuthSwift.xcodeproj` dans le projet Xcode, puis :
```swift
oauthswift = OAuth2Swift(consumerKey: "********", consumerSecret: "********",
    authorizeUrl: "https://api.instagram.com/oauth/authorize", responseType: "token")
```

## Coût et pièges
Gratuit. Il faut Xcode et Swift, absents de la liste des prérequis. Dernier push en mai 2024 : suivi incertain. Il faut déclarer un schéma d'URL et vérifier l'application source.

## Ce que ce n'est pas
Pas un serveur OAuth, pas utilisable hors écosystème Apple. L'installation décrite est manuelle.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
Ignorer : bibliothèque d'app mobile Apple, sans lien avec un profil data, IA ou MLOps.

