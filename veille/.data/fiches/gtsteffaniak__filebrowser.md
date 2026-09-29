---
schema: 1
depot: gtsteffaniak/filebrowser
source_readme_sha: f99b130226817418
ecrite_le: 2026-09-28
nature: app
deploiement: docker
prerequis: [beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# gtsteffaniak/filebrowser

> Gestionnaire de fichiers web auto-hébergé, fork étendu de filebrowser, un seul binaire.

## Le problème
Partager et parcourir des fichiers sur un serveur distant sans monter un Nextcloud complet laisse peu d'options avec authentification sérieuse et recherche utilisable.

## Ce que ça fait vraiment
Sources multiples avec règles d'inclusion et d'exclusion, configurées dans un `config.yaml`.
Authentification OIDC, LDAP, JWT, mot de passe avec 2FA, ou proxy.
Recherche indexée en temps réel, avec filtres sur tailles de fichiers et de dossiers, mise à jour en direct.
Vignettes pour bureautique, vidéo, pochettes d'album et modèles 3D ; WebDAV ; partages configurables avec expiration et permissions ; jetons d'API longue durée et page Swagger.

## Comment c'est branché
```mermaid
flowchart LR
    A[config.yaml] --> B[serveur FileBrowser Quantum]
    C[sources multiples] --> B
    B --> D[index de recherche]
    B --> E[auth OIDC/LDAP/JWT/2FA]
    B --> F[UI trois composants]
    B --> G[WebDAV]
    B --> H[/swagger API]
```

## Essayer
Aucune commande n'est documentée dans le README : il renvoie aux Getting Started Docs.

## Coût et pièges
Gratuit. Image Docker de 180 Mo avec ffmpeg, 512 Mo de mémoire minimum annoncés — nettement plus que le filebrowser d'origine (31 Mo, 128 Mo). Pas de support S3 ni FTP.

## Ce que ce n'est pas
Pas le projet filebrowser d'origine : c'est un fork massif, et l'exécution de commandes shell a été entièrement retirée, définitivement. Pas encore stabilisé : la v2.0.0 est en bêta et le README parle de « growing pains ». Le tableau comparatif marque une dizaine de fonctions en chantier (quotas, corbeille, notifications, conversions).

## Alternatives
Filebrowser d'origine (plus léger), Filestash (S3, FTP, recherche par contenu), Nextcloud — les colonnes du tableau comparatif du README.

## Pour toi
Utile comme accès web à un stockage de datasets ; le mainteneur unique et le statut bêta invitent à ne pas en faire un point critique.
