# Sécurité et données personnelles

Ce dépôt est **public**, et son site aussi. Ce document dit ce qui y est publié, ce qui ne
l'est jamais, et pourquoi.

---

## 1. Ce qui est publié

| Contenu | Origine | Remarque |
|---|---|---|
| Métadonnées des dépôts | API publique de GitHub | étoiles, licence, dates, sujets |
| README des dépôts | les dépôts eux-mêmes, tous publics | recopiés pour une lecture hors ligne ; secrets masqués |
| Schémas d'architecture | cache public de GitDiagram | mermaid, explication, date |
| Synthèses | rédigées pour ce catalogue | aucune donnée personnelle |

---

## 2. Ce qui n'est jamais publié

| Fichier | Contenu | Protection |
|---|---|---|
| `veille/.data/possede.json` | la facette « déjà chez toi » : notes, clones et skills de l'auteur | ignoré par git ; absent du site publié |
| `veille/.data/sorties/` | les sorties brutes des conversations, avec leurs bilans | ignoré par git |
| `veille/.data/readmes/` | les README bruts | ignoré par git ; seule leur copie nettoyée est publiée |

Ces fichiers ont aussi été **retirés de tout l'historique** avant la première publication.

Les statuts posés dans la page (« retenu », « écarté »…) restent **dans le navigateur de la
personne qui les pose**. Ils ne quittent jamais sa machine.

---

## 3. Secrets dans les README

Certains README publient un jeton ou un webhook, en exemple ou par erreur. Les recopier tels
quels les republierait, et GitHub refuse d'ailleurs l'envoi. `rendre_page.py` masque donc,
dans les copies publiées, tout ce qui a la forme d'un secret :

| Motif | Exemple de forme |
|---|---|
| Webhook Slack ou Discord | `https://hooks.slack.com/services/…` |
| Jeton de bot Discord ou Telegram | `MTE…`, `123456789:AA…` |
| Jeton GitHub | `ghp_…`, `github_pat_…` |
| Clé d'API OpenAI, Anthropic, Stripe | `sk-…`, `sk_live_…` |
| Clé AWS ou Google | `AKIA…`, `AIza…` |
| Clé privée | `-----BEGIN … PRIVATE KEY-----` |

Le secret est remplacé par `[secret masqué]`. Le README d'origine, lui, n'est pas modifié.

---

## 4. Outils offensifs

Le catalogue recense des outils de sécurité offensive et à double usage : tests d'intrusion,
contournement de détection, génération de deepfakes. Leurs fiches les décrivent **en termes
neutres** — ce qu'ils font, pour qui, à quelles conditions légales — **sans mode opératoire**.
Les dépôts dont la rédaction est refusée par le filtre de sécurité du modèle sont listés dans
`veille/.data/exclus.txt` et n'ont pas de fiche.

---

## 5. Dépendances et accès

| Accès | Usage | Portée |
|---|---|---|
| Jeton GitHub, lu dans `gh auth token` | enrichissement et recherche des dépôts renommés | utilisé uniquement pour lire des dépôts publics |
| GitDiagram | lecture du cache, déclenchement de générations | aucun identifiant |
| Clé SSH personnelle | publication de la branche `site` | ce dépôt |

Aucun jeton n'est écrit dans le dépôt.
