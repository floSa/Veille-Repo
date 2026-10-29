---
schema: 1
depot: klzgrad/naiveproxy
source_readme_sha: 855044387ea59832
ecrite_le: 2026-10-29
nature: outil
deploiement: binaire
prerequis: [service tiers, compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# klzgrad/naiveproxy

> Proxy de contournement de censure qui réutilise la pile réseau de Chromium pour se fondre dans le trafic Chrome.

## Le problème
Les censeurs détectent les proxys par empreinte TLS, sondage actif ou analyse des longueurs de paquets. Les protocoles maison se font repérer.

## Ce que ça fait vraiment
Le client Naïve embarque la pile réseau de Chromium (empreinte TLS identique à Chrome) et ouvre des tunnels HTTP/2 ou HTTP/3 CONNECT. Côté serveur, un frontal comme Caddy (fork forwardproxy) ou HAProxy route selon l'en-tête d'autorisation pour résister au sondage. Un protocole de padding décrit dans le README brouille les longueurs.

## Comment c'est branché
```mermaid
flowchart LR
  A["Navigateur"] --> B["naive client SOCKS5 :1080"]
  B --> C["Censeur"]
  C --> D["Frontal Caddy / HAProxy"]
  D --> E["Naive server forward proxy"]
  E --> F["Internet"]
```

## Essayer
```bash
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest
~/go/bin/xcaddy build --with github.com/caddyserver/forwardproxy=github.com/klzgrad/forwardproxy@naive
sudo setcap cap_net_bind_service=+ep ./caddy
./caddy start
./naive   # avec config.json : listen socks://127.0.0.1:1080, proxy https://user:pass@example.com
```

## Coût et pièges
Il faut un serveur avec un nom de domaine et un certificat TLS. La branche master est réécrite à chaque version de Chrome : suivre les tags stables, et rester à la dernière version pour garder la signature Chrome.

## Ce que ce n'est pas
Pas un VPN clé en main ni un outil de données. Le README ne promet pas l'invisibilité : il parle d'atténuation de plusieurs attaques.

## Alternatives
- Caddy forwardproxy seul : proxy sans couche de padding.
- v2rayN : client graphique d'intégration cité dans le README.

## Pour toi
Surveiller : hors périmètre data/IA, à ne retenir que si tu as un besoin réel de contournement réseau.

