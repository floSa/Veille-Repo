---
schema: 1
depot: openspeedtest/Speed-Test
nature: app
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
source_readme_sha: ca702fe3611bf21b
ecrite_le: 2026-09-21
---

# openspeedtest/Speed-Test

> **Un test de débit HTML5 à héberger soi-même, pour mesurer son propre réseau depuis un navigateur.**

## Le problème

Sans lui, on mesure son réseau sur des sites publics : on teste le chemin vers l'infrastructure
d'un tiers, pas vers son bureau, son NAS ou son serveur cloud. Le README en fait son argument
principal : choisir entre deux FAI, diagnostiquer un VLAN mal configuré ou un switch défaillant,
placer un répéteur, suppose de tester contre sa propre infrastructure.

## Ce que ça fait vraiment

Un test de débit descendant, montant et de latence, écrit en JavaScript sans framework ni
bibliothèque tierce, servi comme fichiers statiques. Il n'utilise que des API navigateur
intégrées (`XMLHttpRequest`, HTML, CSS, JS, SVG) ; l'interface est en SVG, le script annoncé
sous 8 kB gzip. Le comportement se pilote par paramètres d'URL : test continu (`Stress`),
lancement automatique (`Run`), nombre de connexions HTTP parallèles (`XHR`, 1 à 32), choix du
serveur (`Host`), test unique download/upload/ping (`Test`), nombre d'échantillons de ping
(`Ping`), timeout (`Out`), et remise à zéro du facteur de compensation d'overhead (`Clean`,
0 à 4 %, valeur par défaut 4 %). En éditant `Index.html` on active l'envoi des résultats vers
une base (`saveData`, `saveDataURL`) et on déclare une liste de serveurs
(`openSpeedTestServerList`) parmi lesquels l'app choisit celui de plus faible latence.

## Comment c'est branché

```mermaid
graph LR
  A[Navigateur IE10+] --> B[Index.html + JS vanilla]
  B --> C[XMLHttpRequest]
  C --> D[Serveur web statique<br/>NGINX / Apache / IIS / Express]
  D --> E[/downloading]
  D --> F[/upload]
  B --> G[UI SVG]
  B --> H[saveDataURL<br/>base externe optionnelle]
```

Aucun diagramme tiré du code n'existe pour ce dépôt ; ce schéma est reconstruit depuis le
README. Côté serveur, les exigences sont explicites : accepter `GET`, `POST`, `HEAD` et
`OPTIONS` avec `200 OK`, accepter `POST` sur des fichiers statiques, `client_max_body_size` à
35 Mo ou plus, timeout supérieur à 60 secondes. Le README recommande HTTP/1.1 pour le débit
maximal et renvoie à sa propre configuration NGINX (openspeedtest/Nginx-Configuration).

## Essayer

```bash
sudo docker run --restart=unless-stopped --name openspeedtest -d -p 3000:3000 -p 3001:3001 openspeedtest/latest
```

Puis `http://YOUR-SERVER-IP:3000` en HTTP, `https://YOUR-SERVER-IP:3001` en HTTPS. Avec
certificat Let's Encrypt automatique :

```bash
docker run -e ENABLE_LETSENCRYPT=True -e DOMAIN_NAME=speedtest.yourdomain.com -e USER_EMAIL=you@yourdomain.pro --restart=unless-stopped --name openspeedtest -d -p 80:3000 -p 443:3001 openspeedtest/latest
```

Un `docker-compose.yml` équivalent est donné dans le README, ainsi que le montage d'un
certificat perso via `-v /${PATH-TO-YOUR-OWN-SSL-CERTIFICATE}:/etc/ssl/` (fichiers renommés
`nginx.crt` et `nginx.key`).

## Coût et pièges

Gratuit, licence MIT, aucun compte ni clé d'API. Les pièges sont opérationnels et le README les
nomme : derrière un reverse proxy, il faut monter le `post-body content length` à 35 Mo sous
peine de résultats faux ; l'image Docker tourne mal sur macOS et Windows (support Docker
« développement seulement » d'après le README) et NGINX sous Windows n'utilise qu'un seul
worker quoi qu'on configure. Le Let's Encrypt automatique exige une IP publique v4/v6, un nom
de domaine résolvant vers le serveur et une adresse e-mail. Enfin, la mesure porte un facteur
de compensation d'overhead de 4 % par défaut, que l'auteur situe lui-même dans la marge
d'erreur.

## Ce que ce n'est pas

Ce n'est pas une mesure de la qualité du lien : pas de perte de paquets — l'auteur renvoie pour
cela à un projet distinct, OpenPacketLoss. Ce n'est pas un outil de supervision : aucune
collecte, historisation ni tableau de bord n'est fourni, l'enregistrement des résultats se
limite à poster vers une URL qu'on écrit soi-même. Ce n'est pas non plus une mesure de
référence absolue : c'est un test navigateur, dépendant des extensions installées et du mode de
navigation — le README en fait d'ailleurs un usage assumé, tester l'impact des extensions.

## Alternatives

Aucune alternative comparable dans le catalogue : les voisins proposés (juliangarnier/anime,
tabler/tabler-icons, les cours 30-Days-Of-React et 30-Days-Of-JavaScript d'Asabeneh) partagent
le langage JavaScript mais aucun ne mesure de réseau. Le README ne cite comme projets liés que
ses propres dépôts — openspeedtest/Nginx-Configuration pour la configuration serveur et
openpacketloss pour la perte de paquets — qui complètent l'outil plutôt qu'ils ne le remplacent.

## Pour toi

Intérêt périphérique mais réel pour un profil data/MLOps : poser un test de débit dans un
home lab, un cluster ou un VPC pour qualifier le lien avant de blâmer un pipeline de données
lent, sans exposer quoi que ce soit à l'extérieur. Un `docker run` suffit, l'engagement est
nul. À ne pas confondre avec un outil de métrologie réseau : pour un besoin d'observabilité
continue, passer son chemin.
