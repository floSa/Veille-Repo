---
schema: 1
depot: cryptomator/cryptomator
source_readme_sha: 151671fde75280d1
ecrite_le: 2026-10-27
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: surveiller
---

# cryptomator/cryptomator

> Chiffrement côté client de fichiers synchronisés dans le cloud, via un disque virtuel, pour particuliers et équipes.

## Le problème
Les fournisseurs cloud peuvent lire tes fichiers ; il faut chiffrer avant la synchronisation sans changer ses habitudes.

## Ce que ça fait vraiment
Crée des coffres chiffrés (AES 256, noms de fichiers chiffrés, structure obscurcie, dérivation Scrypt) dans un dossier synchronisé (Dropbox, Drive, OneDrive, Nextcloud…), montés comme lecteur virtuel. Sans compte ni donnée envoyée. Gère clés de récupération, contrôles de santé et mises à jour.

## Comment c'est branché
```mermaid
flowchart LR
  User --> List["Vault list UI"]
  List --> Registry["Vault registry"]
  Registry --> Keys["Key loading strategies"]
  Keys --> Mount["Mount configuration"]
  Mount --> Provider["Mount provider"]
  Provider --> Folder["Synced local folder"]
```

## Essayer
```bash
./mvnw clean install
./mvnw -Prun compile exec:exec
./mvnw -Prun,dev compile exec:exec
```

## Coût et pièges
Gratuit ; binaires sur cryptomator.org. Compilation : JDK 26. Chiffrement du seul contenu synchronisé.

## Ce que ce n'est pas
Pas une sauvegarde ni une synchronisation : il chiffre un dossier que ton service cloud synchronise.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : pertinent pour protéger des jeux de données sensibles stockés dans un cloud grand public.

