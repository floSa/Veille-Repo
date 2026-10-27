---
schema: 1
depot: Dyneteq/reconya
source_readme_sha: b94f4b079ff73f41
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# Dyneteq/reconya

> Outil Go de découverte et de surveillance des appareils d'un réseau local, avec console web.

## Le problème
Savoir quels appareils, ports et services sont présents sur son réseau demande plusieurs outils.

## Ce que ça fait vraiment
Balayage IPv4 natif (ICMP, TCP, ARP), surveillance IPv6 passive, identification (MAC, constructeur, nom d'hôte, empreinte d'OS), scan des 100 ports courants avec bannières, détection des services web avec captures d'écran, alertes (nouvel appareil, port risqué, MAC dupliquée) et topologie. Base SQLite, interface en gabarits Go. Aucun appel sortant par défaut : quatre recherches externes sont à activer.

## Comment c'est branché
```mermaid
graph LR
  N[Network discovery 30 s] --> I[Device identification]
  I --> P[Port scanning - worker pool]
  P --> W[Web service detection]
  I --> DB[(SQLite)]
  DB --> UI[Web console :3008]
  DB --> A[Alerts]
```

## Essayer
```bash
curl -sL https://raw.githubusercontent.com/Dyneteq/reconya/master/install.sh | sh
cd reconya && sudo ./reconya-*
make install
make start
```

## Coût et pièges
Gratuit. Exige les droits root pour l'ICMP. Identifiants par défaut `admin` / `password` à changer dans `.env`. Docker déconseillé (accès MAC peu fiable). Les polices web viennent de Google Fonts. La licence est à vérifier.

## Ce que ce n'est pas
Pas un outil d'attaque, mais un scanner qui génère du trafic actif : à n'utiliser que sur un réseau dont tu as l'autorisation. Le script `curl | sh` est à lire avant exécution.

## Alternatives
Aucune nommée dans le README.

## Pour toi
Surveiller : utile pour inventorier un réseau domestique ou un labo ; sans lien direct avec data/IA.

