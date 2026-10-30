---
schema: 1
depot: sigstore/root-signing
source_readme_sha: 7d4122a3692ac029
ecrite_le: 2026-10-30
nature: service
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: []
verdict: surveiller
---

# sigstore/root-signing

> Dépôt TUF qui distribue de façon sûre la racine de confiance de Sigstore aux clients.

## Le problème
Les clients Sigstore doivent obtenir `trusted_root.json` sans pouvoir être trompés par une substitution.

## Ce que ça fait vraiment
Maintient le dépôt TUF publié sur tuf-repo-cdn.sigstore.dev. Les changements demandent des signatures de détenteurs de clés (événements de signature via pull request) et des signatures en ligne par clés KMS, au moins tous les trois jours. Un déploiement de préproduction est testé avec cosign avant la production.

## Comment c'est branché
```mermaid
graph LR
  A[branche sign/*] --> B[signing-event]
  B --> C[online-sign]
  C --> D[publish préproduction]
  D --> E[tests clients]
  E --> F[tuf-repo-cdn.sigstore.dev]
```

## Essayer
Aucune commande documentée : le README renvoie aux manuels (signataire, mainteneur, infrastructure).

## Coût et pièges
Réservé aux détenteurs de clés pour signer. Utilisateur final : rien à faire, le client Sigstore consomme le dépôt.

## Ce que ce n'est pas
Pas un outil à installer ni une bibliothèque : une infrastructure de confiance. Le dépôt staging est séparé.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : à comprendre si tu signes des artefacts ou modèles avec cosign, sans rien à déployer.

