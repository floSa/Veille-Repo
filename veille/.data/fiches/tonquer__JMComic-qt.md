---
schema: 1
depot: tonquer/JMComic-qt
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
source_readme_sha: 857ab881a8faadae
ecrite_le: 2026-09-21
---

# tonquer/JMComic-qt

> **Client lourd Qt de lecture et téléchargement de bandes dessinées en ligne, Windows/macOS/Linux.**

## Le problème

Sans ce client, on consulte le site depuis un navigateur : pas de téléchargement local
organisé, pas de lecteur hors ligne, pas d'agrandissement d'images. Le README ne formule
pas le problème autrement que par la liste de ses fonctions.

## Ce que ça fait vraiment

Le README annonce « la plupart des fonctions » du site cible, et deux usages explicites :
lire les images et les télécharger. Les captures listées (login, recherche, détail d'une
œuvre, téléchargement, lecture) décrivent l'application : un client de bureau qui s'authentifie,
cherche, affiche et rapatrie le contenu. L'interface est en Qt, le code en Python 3.9.13+.
L'upscaling d'images (Waifu2x et dérivés) est mentionné via les dépendances : DLL Visual Studio
et runtime Vulkan sont exigés sous Windows pour l'initialiser. Le README précise que le projet
est « à usage de recherche technique uniquement ».

## Comment c'est branché

```mermaid
graph LR
  U[Utilisateur] --> GUI[Interface Qt]
  GUI --> Login[Connexion et recherche]
  Login --> Site[Site distant]
  Site --> DL[Telechargement]
  DL --> Disk[(Fichiers locaux)]
  Disk --> Reader[Lecteur d images]
  Reader --> SR[Super resolution Vulkan]
```

Aucun diagramme tiré du code n'existe pour ce dépôt : ces nœuds sont déduits des seules
sections du README (fonctions, pré-requis Windows, projets remerciés). La chaîne va de
l'interface Qt vers le site distant, puis vers le disque, et un étage optionnel de
super-résolution s'appuie sur des binaires ncnn/Vulkan externes. Les vrais noms de fichiers
ne sont pas documentés.

## Essayer

```bash
# macOS, si le fichier est signalé comme endommagé
sudo xattr -r -d com.apple.quarantine /Applications/JMComic.app

# Deepin / UOS, dépendance Qt manquante
wget http://ftp.br.debian.org/debian/pool/main/x/xcb-util/libxcb-util1_0.4.0-1+b1_amd64.deb
sudo dpkg -i ./libxcb-util1_0.4.0-1+b1_amd64.deb
```

Le parcours nominal n'est pas une ligne de commande : on télécharge la release, on
décompresse le zip et on lance `start.exe` sous Windows, on glisse le `.dmg` dans
Applications sous macOS, on exécute le binaire sous Linux. La compilation n'est décrite
que par un renvoi vers les GitHub Actions du dépôt.

## Coût et pièges

Rien à payer et aucune clé d'API dans le README. Les pièges sont ailleurs : sous Windows
il faut installer le redistribuable Visual C++ et le runtime Vulkan, sinon l'initialisation
de Waifu2x échoue sur une erreur de DLL ; sous Deepin/UOS il faut poser `libxcb-util1` à la
main. La mise à jour consiste à écraser le répertoire avec la nouvelle version. Le coût réel
est juridique : l'outil accède à un service tiers dont on ne maîtrise ni la disponibilité ni
la légalité selon le pays, et le README se protège par la mention « recherche technique
uniquement ». La licence LGPL-3.0 est copyleft, ce qui contraint toute réutilisation du code.

## Ce que ce n'est pas

Ce n'est ni une bibliothèque ni une API : rien n'est exposé pour être importé depuis un autre
programme — pour du script, le README renvoie lui-même à JMComic-Crawler-Python. Ce n'est pas
non plus un outil de super-résolution : l'upscaling est délégué à waifu2x-ncnn-vulkan,
Real-ESRGAN et realcugan-ncnn-vulkan, simplement embarqués. Et ce n'est pas un lecteur
générique de fichiers locaux : il est lié à un site précis, donc cassable du jour au lendemain.

## Alternatives

- **ollm/OpenComic** (voisin du catalogue) : lecteur de BD local et multiformat, à préférer
  si l'on possède déjà ses fichiers et qu'on ne veut pas de client lié à un site.
- **hect0x7/JMComic-Crawler-Python** (remercié dans le README) : la brique de récupération en
  Python, à préférer pour automatiser sans interface graphique.
- **tonquer/picacg-qt** et **tonquer/ehentai-qt** (mêmes auteur et architecture) : la même
  application visant d'autres sites.

## Pour toi

Aucun intérêt pour un profil data / IA / MLOps : rien à réutiliser dans un pipeline, pas de
modèle, pas d'API. Le seul point d'intérêt technique est le packaging multiplateforme d'une
app PyQt avec des binaires Vulkan embarqués et une compilation par GitHub Actions — à lire
comme exemple, pas à adopter. Passe ton chemin.
