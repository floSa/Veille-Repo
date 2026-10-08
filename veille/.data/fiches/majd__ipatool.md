---
schema: 1
depot: majd/ipatool
source_readme_sha: b10aa16a30a99c83
ecrite_le: 2026-10-08
nature: outil
deploiement: binaire
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dépend d'un SaaS, mainteneur unique]
verdict: ignorer
---

# majd/ipatool

> Outil en ligne de commande pour chercher et télécharger des apps de l'App Store en .ipa ou .pkg.

## Le problème
Récupérer le paquet d'une application Apple, ou une ancienne version, demande de passer par l'App Store officiel.

## Ce que ça fait vraiment
Authentifie un compte Apple, cherche des apps (iOS, iPadOS, tvOS, visionOS, macOS), liste les achats et les versions, obtient une licence et télécharge le paquet. Le code expose aussi des outils MCP, et un module de signature émulé (SAP) sert aux téléchargements. Les identifiants sont stockés dans le trousseau.

## Comment c'est branché
```mermaid
flowchart LR
  U[Utilisateur] --> M[main.go]
  M --> AU[auth.go]
  M --> SE[search.go]
  M --> DL[download.go]
  AU --> AS[appstore_login.go]
  DL --> SG[signer_local.go]
  AS --> KC[keychain.go]
```

## Essayer
```bash
brew install ipatool
ipatool --help
go build -o ipatool
```

## Coût et pièges
Gratuit, mais exige un compte Apple configuré pour l'App Store. Utiliser `--non-interactive` en automatisation.

## Ce que ce n'est pas
Ne contourne pas les achats : il faut posséder ou obtenir la licence. Dépend des serveurs Apple.

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À ignorer : outil de distribution d'apps iOS, sans usage dans un flux data/IA ; les conditions d'usage Apple sont à lire.

