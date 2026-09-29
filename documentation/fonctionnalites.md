# Fonctionnalités de la page

La page se consulte en ligne sur **https://flosa.github.io/Veille-Repo/**, ou hors ligne en
ouvrant `veille/catalogue.html` après un rendu local.

---

## 1. La liste des dépôts

Chaque ligne donne le nom du dépôt, sa description en français, ses étoiles, sa période de
trending, son langage, et des pastilles cliquables : nature, domaines, sujets, licence, vitalité.
Un clic sur une pastille pose le filtre correspondant.

La liste s'affiche par tranches : le bouton « Afficher N de plus » indique combien il ajoute et
combien sont déjà affichés sur le total.

| Tri | Effet |
|---|---|
| Persistance | Les dépôts restés le plus de jours en trending d'abord |
| Étoiles | Les plus étoilés d'abord |
| Vu récemment | Les derniers passés en trending d'abord |
| Apparu récemment | Les derniers entrés dans le catalogue d'abord |
| Nom | Ordre alphabétique |

---

## 2. Recherche et facettes

**La recherche** porte sur le nom, les descriptions française **et** anglaise, les topics GitHub,
les sujets, les domaines et le langage. Chercher « inference engine » trouve donc vLLM même quand
la page est en français. Elle ne porte pas sur le texte des synthèses.

**Les facettes** se cumulent :

| Facette | Exemples de valeurs |
|---|---|
| Pertinence | cœur métier, périphérie, hors périmètre, à trier |
| Nature | bibliothèque / framework, serveur / service, CLI / outil terminal, serveur MCP, skill / plugin d'agent, dataset… |
| Domaine | LLM & IA générative, Data & pipelines, DevOps & infra… |
| Sujet | agents, RAG, déploiement, local / on-device… |
| Licence | permissive, copyleft, à vérifier, absente, autre |
| Vitalité | actif, ralenti, dormant, archivé |
| Persistance | un seul jour, deux jours, remarqué (3-4 j), confirmé (5-9 j), installé (10 j et +) |
| Étoiles | < 1k, 1k-10k, 10k-50k, ≥ 50k |

**Au premier chargement, seul le cœur de métier est affiché.** Une recherche qui ne trouve rien
vient souvent de là : décocher la facette « Pertinence » élargit à tout le catalogue.

La période se règle par dates ou par raccourcis, et le sélecteur **FR | EN** bascule la langue
des descriptions.

---

## 3. La page d'un dépôt

Un clic sur le nom ouvre la page du dépôt dans l'application. Le bouton « Voir sur GitHub »
mène au dépôt lui-même.

En tête, un bandeau résume : **licence**, **étoiles**, **dernière modification**, **langage**,
**nature**. Trois onglets suivent :

| Onglet | Contenu |
|---|---|
| **Synthèse** | La fiche : problème, fonctionnement réel, schéma, commandes, coûts, limites, alternatives, verdict |
| **Schéma** | Le schéma d'architecture complet tiré du code par GitDiagram, avec son explication et sa date |
| **README officiel** | Le README complet, stocké hors ligne |

Quand GitDiagram n'a pas de schéma pour un dépôt, l'onglet Schéma affiche celui de la synthèse.

---

## 4. Les schémas

Un schéma GitDiagram fait souvent plusieurs écrans de large. Il s'affiche dans une fenêtre
zoomable :

| Geste | Effet |
|---|---|
| Molette | Zoom autour du pointeur |
| Double-clic | Zoom ×2 à cet endroit |
| Glisser | Déplacer le schéma |
| Boutons − / + / Ajuster / 1:1 | Zoom pas à pas, vue d'ensemble, taille réelle |
| Plein écran | Le schéma occupe tout l'écran |

Les nœuds sont **cliquables** : ils ouvrent le fichier ou le dossier correspondant sur GitHub.
Un glissé qui se termine sur un nœud ne l'ouvre pas.

---

## 5. Statuts, file et export

Chaque dépôt peut recevoir un statut : **à voir**, **retenu**, **dans DevBrain**, **dans
mes-skills**, **écarté**. Le bouton **File** regroupe les dépôts à traiter et propose un prompt
groupé à copier. **Exporter mes choix** sauvegarde les statuts dans un fichier.

Les statuts sont enregistrés **dans le navigateur** : ils ne se partagent pas entre la version
en ligne et la version locale, ni entre deux navigateurs.

---

## 6. Ce que la version en ligne n'a pas

La version locale affiche une facette supplémentaire, **« déjà chez toi »** : les dépôts déjà
présents dans les notes, clones ou skills de l'auteur. Elle décrit des données personnelles et
n'est donc **jamais publiée** (voir [SECURITY.md](SECURITY.md)).
