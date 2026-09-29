---
schema: 1
depot: spf13/viper
source_readme_sha: b20cfb2d715c3c74
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: []
verdict: surveiller
---

# spf13/viper

> Bibliothèque Go de configuration : fichiers, variables d'environnement, flags et stores distants fusionnés en un registre.

## Le problème
Une application Go lit sa configuration depuis des fichiers, l'environnement, des flags et parfois etcd ou Consul, chacun avec sa logique.

## Ce que ça fait vraiment
Fusionne les sources avec un ordre de priorité fixe : Set explicite, flags, variables d'environnement, fichiers, stores clé/valeur, valeurs par défaut. Elle lit JSON, TOML, YAML, INI, envfile et properties, surveille les changements de fichier, lit etcd, Consul, Firestore ou NATS, gère les alias et désérialise vers des structs. Clés insensibles à la casse et sous-ensembles via Sub.

## Comment c'est branché
```mermaid
flowchart LR
  DF["Défauts"] --> V["Registre Viper (viper.go)"]
  FI["Fichiers (finder.go)"] --> V
  EN["Variables d'environnement"] --> V
  FL["Flags (pflag)"] --> V
  RM["Stores distants (remote/)"] --> V
  V --> UN["Get* et Unmarshal"]
```

## Essayer
```bash
go get github.com/spf13/viper
make test
make lint
```

## Coût et pièges
Gratuit. Pas de fusion profonde : une valeur complexe surchargée remplace l'ensemble. Non sûr en accès concurrent lecture/écriture (panic possible). Le singleton global est déconseillé. Le projet annonce une v2 et privilégie la stabilité aux nouveautés.

## Ce que ce n'est pas
Pas un gestionnaire de secrets : le chiffrement passe par crypt et un keyring GPG optionnel. Ne convient pas si tu veux évoluer vite : les nouveautés attendent la v2.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : référence pour la configuration d'outils Go, mais sans intérêt direct si ton travail data/IA reste en Python.

