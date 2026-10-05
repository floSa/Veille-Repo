---
schema: 1
depot: drakkan/sftpgo
source_readme_sha: d6c4c3670c8c1a4f
ecrite_le: 2026-10-05
nature: service
deploiement: binaire
prerequis: [aucun]
cout: freemium
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# drakkan/sftpgo

> Serveur de transfert de fichiers événementiel (SFTP, FTP/S, WebDAV, HTTP/S) avec stockages locaux ou cloud.

## Le problème
Échanger des fichiers avec des partenaires via des protocoles standards, en les stockant en local ou sur S3, GCS, Azure.

## Ce que ce n'est pas
Pas un simple serveur SFTP : un système de comptes, politiques, partages publics, MFA et automatisations. Les fonctions avancées (archivage intelligent, IMAP, PGP, antivirus/DLP, édition) sont réservées à l'édition Enterprise.

## Ce que ça fait vraiment
Serveurs SFTP, FTP/S, HTTP/S, WebDAV ; interfaces WebAdmin et WebClient ; API REST ; gestionnaire d'événements ; système de fichiers virtuel vers local, chiffré, S3, GCS, Azure ou autre SFTP.

## Comment c'est branché
```mermaid
flowchart LR
  A["service.go"] --> B["SFTP / FTP / WebDAV server.go"]
  B --> C["auth_utils.go"]
  C --> D["dataprovider.go"]
  B --> E["vfs.go"]
  E --> F["osfs.go / s3fs.go / cryptfs.go"]
  A --> G["eventmanager.go"]
```

## Essayer
Le README ne donne aucune commande d'installation : il renvoie à docs.sftpgo.com (édition Community).

## Coût et pièges
Community AGPL-3.0 gratuite ; Enterprise sous licence commerciale. La cadence des nouveautés est plus rapide côté Enterprise.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : bonne brique pour déposer des données vers un bucket S3, mais l'AGPL et le modèle à deux éditions imposent de vérifier que tu n'as pas besoin des fonctions payantes.

