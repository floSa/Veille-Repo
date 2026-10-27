---
schema: 1
depot: processone/ejabberd
source_readme_sha: 2106c08ec75954e1
ecrite_le: 2026-10-27
nature: service
deploiement: docker
prerequis: [Docker]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# processone/ejabberd

> Serveur de messagerie temps réel XMPP, MQTT et SIP en Erlang/OTP, pour opérateurs de messagerie.

## Le problème
Héberger sa propre messagerie instantanée scalable et extensible.

## Ce que ça fait vraiment
Serveur Erlang/OTP : XMPP (C2S, S2S), broker MQTT, service SIP, modules (MUC, PubSub, vCard), interface web d'administration, authentification multiple (LDAP, SQL, PAM…), stockage Mnesia ou SQL, Redis, cluster. Le README mentionne les offres commerciales ProcessOne (Business Edition, Fluux). Il déclare GPL v2 alors que GitHub ne l'identifie pas.

## Comment c'est branché
```mermaid
flowchart LR
  X[XMPP / MQTT / SIP clients] --> H[Protocol handlers]
  H --> E[Core Server Engine]
  E --> M[MUC / PubSub / VCard]
  E --> A[Core Auth]
  E --> DB[Mnesia / SQL / Redis]
  W[Web Admin] --> E
```

## Essayer
```bash
./configure --help
make help
ejabberdctl help
man ejabberd.yml
```

## Coût et pièges
Installation par sources, installeurs, conteneurs `ecs` ou `ejabberd`. Édition commerciale payante à part.

## Ce que ce n'est pas
Pas un outil de messagerie d'équipe clé en main.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : serveur de messagerie sans lien avec data/IA/MLOps.

