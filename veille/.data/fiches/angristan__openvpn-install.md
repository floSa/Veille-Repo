---
schema: 1
depot: angristan/openvpn-install
source_readme_sha: 3b3f29d1b305ade1
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [service tiers]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# angristan/openvpn-install

> Script shell qui installe et gère un serveur OpenVPN sur son propre serveur Linux.

## Le problème
Monter un VPN OpenVPN à la main (PKI, pare-feu, DNS, clients) est long et risqué.

## Ce que ça fait vraiment
Installe OpenVPN, génère les certificats avec Easy-RSA, configure pare-feu (firewalld, nftables, iptables), DNS (dont Unbound) et IPv4/IPv6. Ajout, révocation et renouvellement de clients, fichiers .ovpn, sortie JSON. Accès Internet par défaut ; réseau local et client-à-client désactivés. Mode empreinte (OpenVPN 2.6+).

## Comment c'est branché
```mermaid
flowchart LR
  Script["openvpn-install.sh"] --> Net["Linux OS & Network"]
  Script --> PKI["Easy-RSA Module"]
  PKI --> Gen["Client Config Generator (.ovpn)"]
  Gen --> Clients["Phone / Laptop / Computer"]
  Clients --> Net
```

## Essayer
```bash
curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
chmod +x openvpn-install.sh
./openvpn-install.sh interactive
./openvpn-install.sh client add alice
```

## Coût et pièges
Gratuit ; serveur VPS ou domestique à ta charge (Vultr, Hetzner, Digital Ocean suggérés). Root, module TUN, systemd, testé en amd64 seulement. L'interface CLI peut changer : fixer un commit.

## Ce que ce n'est pas
Pas une protection contre un adversaire étatique (le FAQ le dit). Pas multi-plateforme serveur.

## Alternatives
Le README renvoie à wireguard-install et au script de Nyr (distributions anciennes).

## Pour toi
À surveiller : pratique pour un accès privé à un serveur GPU ou à un réseau interne ; WireGuard est plus simple si le TCP n'est pas nécessaire.

