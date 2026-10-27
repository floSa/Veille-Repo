---
schema: 1
depot: getgrav/grav
source_readme_sha: 15fb8703d89b0e1b
ecrite_le: 2026-10-27
nature: app
deploiement: rien à installer
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# getgrav/grav

> CMS PHP à fichiers plats (Markdown, Twig, YAML) sans base de données, pour sites simples.

## Le problème
Publier un site sans installer ni administrer une base de données de type WordPress.

## Ce que ça fait vraiment
Le contrôleur frontal `index.php` charge le runtime `Grav.php`, des processeurs de requête, des pages stockées en fichiers (Flex, `PageStorage`), puis rend via Twig et Parsedown. Plugins et thèmes s'installent avec le gestionnaire GPM ; un planificateur gère les tâches.

## Comment c'est branché
```mermaid
flowchart LR
  Index[index.php] --> Grav[Grav.php]
  Grav --> Pages[Pages.php Page.php]
  Pages --> Storage[PageStorage FolderStorage]
  Grav --> Twig[Twig.php Parsedown.php]
  Grav --> Plugins[Plugins.php Themes.php]
  GPM[GPM.php] --> Plugins
```

## Essayer
```bash
composer create-project getgrav/grav ~/webroot/grav
bin/gpm index
bin/gpm install <plugin/theme>
bin/gpm selfupgrade
```

## Coût et pièges
Gratuit. PHP 8.3+ et serveur Apache/IIS. Le passage de Grav 1.x à 2.0 exige une migration dédiée : `selfupgrade` seul ne suffit pas.

## Ce que ce n'est pas
Ni "zéro installation" au sens strict (il faut PHP et un serveur web), ni un outil de données.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : un CMS PHP n'a pas de rapport avec ton métier data/IA, sauf besoin ponctuel d'un site statique-like.

