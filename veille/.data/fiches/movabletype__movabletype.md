---
schema: 1
depot: movabletype/movabletype
source_readme_sha: 95addafc122016c6
ecrite_le: 2026-10-29
nature: app
deploiement: autre
prerequis: [service tiers, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence non déclarée]
verdict: ignorer
---

# movabletype/movabletype

> Système de blog et de gestion de sites en Perl, hébergé par l'utilisateur.

## Le problème
Publier et gérer des blogs et sites web avec un CMS auto-hébergé.

## Ce que ça fait vraiment
Application Perl (5.16.3+) exécutée en CGI sur nginx, Apache ou IIS avec une base comme MySQL. Installation par envoi de fichiers dans un dossier `mt`, assistant de configuration dans le navigateur ; mise à jour par écrasement après sauvegarde. Le README ne décrit que l'installation.

## Comment c'est branché
Matière insuffisante pour un schéma fidèle : aucune architecture fournie.

## Essayer
Aucune commande documentée : envoyer les fichiers sur le serveur, activer l'exécution CGI et ouvrir `/mt/`.

## Coût et pièges
Aucune licence déclarée au catalogue. Sauvegarde de la base avant mise à jour ; `mt-static` parfois à déplacer hors de `cgi-bin`.

## Ce que ce n'est pas
Pas une application moderne sans serveur : elle suppose CGI, Perl et une base.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : CMS Perl, sans rapport avec data/IA/MLOps.

