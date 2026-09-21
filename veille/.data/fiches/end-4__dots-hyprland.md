---
schema: 1
depot: end-4/dots-hyprland
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
source_readme_sha: 7a76deb40d433849
ecrite_le: 2026-09-21
---

# end-4/dots-hyprland

> **Fichiers de configuration livrant un shell graphique complet par-dessus le compositeur Wayland Hyprland.**

## Le problème

Hyprland est un compositeur : il place et rend les fenêtres, et s'arrête là. Tout le reste —
barre d'état, lanceur, panneaux latéraux, vue d'ensemble des fenêtres, thème cohérent — est à
assembler soi-même à partir de composants séparés, puis à maintenir. Ce dépôt propose cet
assemblage déjà fait, sous une identité visuelle unique (« illogical-impulse »).

## Ce que ça fait vraiment

Le README tranche lui-même sur ce qu'il livre : « techniquement, des fichiers de
configuration ; réalistement, surtout le shell graphique personnalisé ». Le système de
widgets actuel est Quickshell, décrit comme un système de widgets fondé sur QtQuick, employé
pour la barre d'état et les panneaux latéraux — d'où le langage QML relevé dans le catalogue.

Les fonctionnalités annoncées : une vue d'ensemble affichant les applications ouvertes avec
aperçus en direct ; une intégration d'assistants (Gemini, Ollama, « et plus ») ; des
commodités listées comme traduction d'écran, anti-flashbang et Google Lens ; des thèmes
Material dérivés du fond d'écran choisi ; et une installation dite « transparente », où chaque
commande est montrée avant d'être exécutée.

Le dépôt porte aussi son histoire : les styles précédents (illogical-impulse sur AGS, puis
m3ww, NovelKnock, Hybrid, Windoes sur EWW) sont conservés dans les branches `ii-ags` et
`archive`, et déclarés non maintenus.

## Comment c'est branché

```mermaid
graph LR
  A[setup install<br/>ou bash &lt;(curl -s https://ii.clsty.link/get)] --> B[fichiers de configuration<br/>déposés dans le système]
  B --> C[Hyprland<br/>compositeur : place et rend les fenêtres]
  B --> D[Quickshell / QML<br/>barre d'état · panneaux latéraux · vue d'ensemble]
  B --> E[autres dépendances<br/>sdata/deps-info.md]
  F[fond d'écran choisi] --> G[génération de couleurs<br/>thème Material]
  G --> D
  H[Gemini · Ollama] --> D
```

Aucun diagramme tiré du code n'existe pour ce dépôt : ce schéma est reconstruit depuis le seul
README, qui ne nomme que `setup`, `sdata/deps-info.md` et les branches `ii-ags` et `archive`.
Le point à retenir est que Hyprland et Quickshell sont des projets tiers installés à côté :
ce dépôt fournit ce qui les configure et les widgets QML, pas le compositeur.

## Essayer

```bash
bash <(curl -s https://ii.clsty.link/get)
```

Ou, en clonant le dépôt :

```bash
./setup install
```

Le README renvoie au wiki (`https://ii.clsty.link/en/ii-qs/01setup/`) pour les détails
d'installation et de mise à jour. Une fois en place, deux raccourcis sont donnés :
`Super`+`/` pour la liste des raccourcis, `Super`+`Entrée` pour le terminal.

## Coût et pièges

- **Rupture de version annoncée en tête de README** : avec la mise à jour Hyprland 0.55, si la
  distribution ne l'a pas encore livrée ou si l'on n'y est pas prêt, il faut basculer sur la
  version « Pre-Hyprland Luaification » ou ne pas mettre à jour. C'est le piège principal : le
  dépôt suit un amont qui casse.
- **Licence GPL-3.0** (catalogue) : copyleft. Le README invite explicitement à copier, « juste
  suivre la licence ».
- **Installation par script exécutant une commande téléchargée** : `bash <(curl …)` sur un
  domaine tiers (`ii.clsty.link`). Le README contrebalance en affichant chaque commande avant
  exécution, mais la confiance reste à accorder.
- **Dépendances non listées dans le README** : renvoyées à `sdata/deps-info.md`. Le volume
  réel d'installation n'est donc pas visible avant de lire ce fichier.
- **L'IA n'est pas incluse** : Gemini demande une clé d'API à ta charge, Ollama un modèle à
  faire tourner localement. Aucun quota ni tarif n'est documenté ici.
- **Dépôt d'une personne** (end-4), avec des contributeurs remerciés nommément pour le script
  d'installation et la génération de couleurs. Un canal Discord est proposé pour le support,
  les vrais problèmes étant renvoyés vers GitHub.

## Ce que ce n'est pas

- **Ce n'est pas un script d'installation système.** Le README le dit explicitement : pas de
  pilotes graphiques, pas de configuration de zram, etc. On part d'un système déjà en état.
- **Ce n'est pas Hyprland**, ni Quickshell : ce sont des projets tiers, liés depuis le README.
  Ce dépôt est ce qui se branche dessus.
- **Ce n'est pas une distribution ni un environnement de bureau versionné** : les styles
  antérieurs (AGS, EWW) sont marqués « Unsupported! » et relégués en branches. Ce qui est
  supporté est le style courant, sur le système de widgets courant.
- **Ce n'est pas indépendant de l'amont** : un saut de version de Hyprland impose une action de
  l'utilisateur, comme l'avertissement 0.55 le montre.

## Alternatives

Le catalogue ne propose aucun voisin autorisé pour ce dépôt, donc aucune comparaison n'en est
tirée ; les seuls projets comparables sont ceux que le README remercie, tous des collections
de fichiers de configuration du même genre.

| | Quand le préférer |
|---|---|
| **caelestia-dots/shell** | Cité parmi les projets Quickshell dont end-4 s'inspire : même système de widgets, autre parti pris esthétique et autre mainteneur. |
| **Aylur/dotfiles** | Cité pour AGS : à préférer si l'on reste sur AGS plutôt que Quickshell, que ce dépôt a quitté. |
| **fufexan/dotfiles** | Cité pour EWW : la voie à regarder si l'on veut un shell bâti sur EWW. |

## Pour toi

Sans rapport avec la data, l'IA appliquée ou le MLOps : c'est de l'aménagement de poste de
travail Linux, à évaluer comme tel. À surveiller si ton environnement quotidien est déjà
Hyprland et que tu acceptes de suivre les ruptures de version de l'amont ; sinon passe ton
chemin, l'investissement d'installation et de maintenance ne se rentabilise que sur une
machine que tu utilises tous les jours.
