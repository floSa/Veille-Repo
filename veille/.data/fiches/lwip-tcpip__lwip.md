---
schema: 1
depot: lwip-tcpip/lwip
source_readme_sha: 382adcbaff80ccbc
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# lwip-tcpip/lwip

> Petite pile TCP/IP en C pour systèmes embarqués ayant quelques dizaines de kilo-octets de RAM.

## Le problème
Les piles réseau classiques sont trop lourdes pour un microcontrôleur.

## Ce que ça fait vraiment
Elle fournit IPv4 et IPv6, ICMP, IGMP, DHCP, UDP, TCP complet (contrôle de congestion, SACK), DNS, PPP et 6LoWPAN, une API brute et une API sockets optionnelle, du TLS via mbedTLS. Applications livrées : serveur HTTP, agent SNMP, SNTP, NetBIOS, mDNS, iPerf, client MQTT.

## Comment c'est branché
```mermaid
flowchart TD
  A["sockets.c"] --> B["api_msg.c"]
  B --> C["tcp.c / udp.c"]
  C --> D["ip4.c / ip6.c"]
  D --> E["netif.c"]
  E --> F["ethernet.c"]
  E --> G["sys_arch.c"]
```

## Essayer
Aucune commande n'est documentée dans le README : le code source est dans `src`, les ports dans `contrib`.

## Coût et pièges
Gratuit. Il faut écrire ou adapter un port de la plateforme (système, pilote réseau). Le README annonce une licence BSD, mais GitHub ne l'identifie pas.

## Ce que ce n'est pas
Ce n'est pas un système d'exploitation ni un client prêt à l'emploi : c'est une brique pour firmware.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : pile réseau embarquée, utile seulement si tu fais de l'IA sur microcontrôleur connecté.

