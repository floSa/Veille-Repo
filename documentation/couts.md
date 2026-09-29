# Coûts mesurés

Seules deux étapes sollicitent un modèle : la **rédaction des synthèses** et la **traduction**
des descriptions. Tout le reste est un script. Chaque chiffre ci-dessous est **mesuré** dans
l'historique des conversations, dédoublonné par message, jamais estimé.

---

## 1. D'où vient le coût d'une conversation

Le travail utile d'une synthèse pèse **environ 4 000 tokens** : 3 000 à lire, 1 000 à écrire.
Mais une conversation est facturée à **chaque appel d'outil**, et chaque appel renvoie **toute
sa fenêtre de contexte** : les consignes et outils de base (environ **35 000 tokens**), plus tout
ce qu'elle a déjà lu et écrit.

Le coût d'une conversation est donc, à peu près, **la somme des fenêtres à chaque appel**. Dix
lectures successives d'un même bloc repaient dix fois tout ce qui précède.

---

## 2. Ce qui a été mesuré

| Méthode | Appels | Coût par dépôt |
|---|---|---|
| Blocs de 30, README coupés à 25 000 caractères, lectures une par une | 10 à 15 | **68 000** |
| Blocs de 30, README à 6 000 caractères, lectures une par une | 10 | **45 000** |
| Blocs de 37, README complets, lectures une par une | 24 | **120 000** |
| Blocs de 10, README complets, lectures une par une | 7 à 10 | **63 000 à 99 000** |
| **Blocs de 30, README complets, toutes les lectures dans un seul message** | **4** | **18 000 à 26 000** |

La dernière ligne est la méthode retenue. Sur **16 blocs** consécutifs, elle a tenu entre
**0,55 et 0,77 M tokens** par bloc de 30, avec une fenêtre finale de **240 à 350 k tokens**.

---

## 3. Ce qui fait baisser le prix

| Levier | Effet mesuré |
|---|---|
| Lancer toutes les lectures en parallèle, dans un seul message | ÷3 : 4 appels au lieu de 10 |
| Donner dans l'en-tête du bloc les offset et limit exacts | plus de lecture refusée puis recommencée |
| Écrire dans le worktree par un chemin relatif | plus d'écriture refusée, un appel gagné |
| Effort faible | moins de réflexion en sortie, qualité tenue par les contrôles automatiques |
| Ne pas utiliser une conversation de rédaction pour autre chose | un bloc réutilisé comme pilote est passé de 0,7 à 2,4 M |

Ce qui **ne** fait **pas** baisser le prix : couper le README. À 6 000 caractères, **5 dépôts
sur 30** ont perdu leurs commandes d'installation. Le README reste donc entier.

---

## 4. Les pertes

| Cas | Coût |
|---|---|
| Un filtre de sécurité bloque l'écriture d'un bloc de 37 dépôts | **4,4 M tokens** perdus, aucune fiche |
| Deux conversations lancées sur le même bloc | le bloc payé deux fois |

D'où deux règles : les **outils offensifs** vont dans de petits blocs à part, avec une écriture
par dépôt ; et un bloc n'est lancé qu'une fois.

---

## 5. Les schémas

Les schémas ne coûtent **aucun token** : ils viennent du cache public de GitDiagram, ou d'une
génération déclenchée chez eux. Le service affiche le coût de chaque génération de son côté,
de l'ordre de **0,005 $**. Leur quota gratuit fixe le rythme : **~8 schémas par heure**.
