---
schema: 1
depot: MHSanaei/3x-ui
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
source_readme_sha: 92278d50f3315e12
ecrite_le: 2026-09-21
---

# MHSanaei/3x-ui

> **Panneau web d'administration pour serveurs Xray-core, destiné à qui exploite son propre VPS proxy.**

## Le problème

Configurer Xray-core à la main, c'est écrire et maintenir du JSON pour chaque entrant, chaque
client, chaque règle de routage, sans vue sur le trafic consommé ni sur les dates d'expiration.
Multiplier les serveurs multiplie les fichiers, et rien ne dit qui consomme quoi.

## Ce que ça fait vraiment

3X-UI est une interface web en Go, fork enrichi du projet X-UI d'origine, qui pilote un ou
plusieurs Xray-core. Elle crée les entrants (VLESS, VMess, Trojan, Shadowsocks, WireGuard,
AmneziaWG, TUIC v5, Hysteria2, MTProto, HTTP, SOCKS, Dokodemo-door, TUN) et les transports
associés (TCP/Raw, mKCP, WebSocket, gRPC, HTTPUpgrade, XHTTP, avec TLS, XTLS, REALITY).

Elle tient la comptabilité par client : quotas de trafic, dates d'expiration, limites d'IP avec
adresses de confiance, limites d'appareils par HWID, cycles de renouvellement, état en ligne,
liens de partage, QR codes et abonnements. Les statistiques sont ventilées par entrant, par
client et par sortant.

Deux briques tournent *dans* le panneau plutôt que d'être déléguées : AmneziaWG sur une pile
réseau en espace utilisateur (pas de module noyau ni de DKMS) et un sidecar TUIC v5 avec
métrage du relais UDP. Le reste — routage, équilibrage, chaînage de sortants vers WARP,
NordVPN, PIA — est de la configuration poussée à Xray.

Autour : serveur d'abonnements intégré (sorties brute, JSON, Clash choisies selon le
User-Agent), API REST à jetons scopés, bots Telegram et Discord, intégration Fail2ban,
stockage SQLite ou PostgreSQL, 13 langues d'interface, installation en PWA.

## Comment c'est branché

Aucun diagramme tiré du code n'existe pour ce dépôt : ce schéma est reconstruit depuis le seul
README.

```mermaid
graph LR
  A[install.sh<br/>identifiants et chemin d'accès aléatoires] --> B[panneau web 3x-ui<br/>menu x-ui · PWA · 13 langues]
  B --> C[Xray-core<br/>entrants VLESS/VMess/Trojan/Hysteria2…]
  B --> D[AmneziaWG intégré<br/>pile réseau en espace utilisateur]
  B --> E[sidecar TUIC v5<br/>QUIC · relais UDP mesuré]
  B --> F[(base<br/>SQLite /etc/x-ui/x-ui.db<br/>ou PostgreSQL via XUI_DB_DSN)]
  B --> G[serveur d'abonnements<br/>brut · JSON · Clash]
  B --> H[bots Telegram / Discord<br/>API REST à jetons]
  B --> I[Fail2ban<br/>bans iptables · NET_ADMIN]
  B --> J[autres nœuds<br/>clonage d'entrants]
```

## Essayer

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

Une version précise, ou la build de développement roulante :

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh) v3.7.0
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh) dev-latest
```

En conteneur, et avec le PostgreSQL fourni :

```bash
docker compose --profile postgres up -d
docker run -d --cap-add=NET_ADMIN --cap-add=NET_RAW ... ghcr.io/mhsanaei/3x-ui
```

Migration d'un SQLite existant :

```bash
x-ui migrate-db --dsn "postgres://xui:password@127.0.0.1:5432/xui?sslmode=disable"
# then set XUI_DB_TYPE and XUI_DB_DSN in /etc/default/x-ui and restart:
systemctl restart x-ui
```

## Coût et pièges

- **Le logiciel est gratuit, le serveur non.** Il faut un VPS que l'on administre soi-même ;
  le README cite Hetzner, AWS, DO, Vultr, GCP, Azure, Oracle pour l'installation cloud-init.
  Pas de clé d'API, pas de GPU, pas de compte à créer.
- **Avertissement du dépôt lui-même** : « intended for personal use only […] do not use it
  for illegal purposes or in a production environment ». C'est écrit en encadré IMPORTANT.
- **Installation par `curl | bash` en root**, qui génère identifiants et chemin d'accès
  aléatoires. Les sommes `.sha256` sont vérifiées par `install.sh` et l'updater, mais le
  modèle de confiance reste « on exécute un script téléchargé ».
- **Docker et Fail2ban** : sans `--cap-add=NET_ADMIN` (et `NET_RAW`), les bans sont
  journalisés mais jamais appliqués — la limite d'IP par client devient décorative.
- **Moniteur de santé du tunnel** (`XUI_TUNNEL_HEALTH_MONITOR`, désactivé par défaut) :
  le README précise qu'un redémarrage de xray coupe tous les clients.
- **Chiffrement des jetons de nœuds** (`NODE_TOKEN_ENCRYPTION`) à `off` par défaut, avec un
  fichier de clés en `0600` à gérer soi-même. À régler avant tout usage multi-nœuds.
- **Licence GPL-3.0** : copyleft, à prendre en compte si l'on redistribue une version modifiée.

## Ce que ce n'est pas

- **Ce n'est pas un moteur proxy.** Le chiffrement, le transport et le routage sont faits par
  Xray-core ; 3X-UI écrit sa configuration et lit ses compteurs. Sans Xray, rien ne passe.
- **Ce n'est pas un produit hébergé ni un service géré** : ni SaaS, ni support, ni SLA — le
  README exclut explicitement l'usage en production.
- **Ce n'est pas un outil de données.** Les « statistiques de trafic » sont des compteurs
  d'exploitation par client, pas une chaîne d'analyse ; rien n'est prévu pour l'export.

## Alternatives

| | Quand le préférer |
|---|---|
| **XTLS/Xray-core** | Nommé dès la première ligne du README : c'est le moteur que 3X-UI pilote. À préférer si l'on veut gérer la configuration JSON soi-même, en infrastructure as code, sans panneau web. |
| **Gozargah/Marzban** | Autre panneau de gestion Xray du catalogue, non cité par le README. À comparer si l'on cherche une gouvernance ou un modèle multi-nœuds différent. |
| **hiddify/Hiddify-Manager** | Même famille de panneaux d'administration de proxys ; voisin du catalogue, non cité par le README. |

## Pour toi

À ignorer pour un profil data / IA / MLOps : c'est de l'outillage d'exploitation de proxys,
sans point de contact avec les données, les modèles ni les chaînes d'entraînement. Le seul
motif de s'y arrêter est personnel — administrer soi-même un VPN — et le dépôt lui-même
déconseille tout usage en production.
