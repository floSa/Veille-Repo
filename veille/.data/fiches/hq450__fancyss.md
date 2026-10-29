---
schema: 1
depot: hq450/fancyss
source_readme_sha: 2a1e3ea600ca3dab
ecrite_le: 2026-10-29
nature: outil
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# hq450/fancyss

> Plugin de proxy transparent pour routeurs ASUS Merlin/officiel, destiné à contourner le filtrage réseau.

## Le problème
Faire passer le trafic de tout un réseau domestique par un proxy sans configurer chaque appareil.

## Ce que ça fait vraiment
S'installe dans le centre logiciel du routeur et propose des protocoles (SS, SSR, VMess, VLESS, Trojan, Hysteria2, NaïveProxy, TUIC). Gère les nœuds (import, abonnement), le découpage DNS (`chinadns-ng` ou `smartdns`), des règles par liste, le test de latence et un basculement simple. Sept paquets par plateforme (`arm`, `hnd`, `hnd_v8`, `qca`, `mtk`, `ipq32`, `ipq64`), en variante `full` ou `lite`.

## Comment c'est branché
```mermaid
flowchart LR
  A["Centre logiciel du routeur"] --> B["install.sh"]
  B --> C["fancyss/ (plugin)"]
  C --> D["binaires /binaries"]
  C --> E["rules_ng et rules_ng2"]
  F["build.sh"] --> C
```

## Essayer
```bash
mv /tmp/fancyss_hnd_lite.tar.gz /tmp/shadowsocks.tar.gz
tar -zxvf /tmp/shadowsocks.tar.gz
sh /tmp/shadowsocks/install.sh
```

## Coût et pièges
Le plugin est gratuit, mais il faut un routeur compatible et des nœuds proxy tiers (le README fait la publicité de fournisseurs payants). Choisir le bon paquet selon la plateforme, sinon l'installation échoue.

## Ce que ce n'est pas
Pas un VPN clé en main. Ne fonctionne que sur la liste de modèles ASUS annoncée. Pas de support pour d'autres routeurs.

## Alternatives
Aucune citée dans le README.

## Pour toi
Ignorer : dépend d'un matériel ASUS précis et de services proxy tiers, sans rapport avec ton travail data/IA/MLOps.

