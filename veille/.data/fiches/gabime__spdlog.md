---
schema: 1
depot: gabime/spdlog
source_readme_sha: cca571021dc10663
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: adopter
---

# gabime/spdlog

> Bibliothèque C++ de journalisation, en en-têtes seuls ou compilée, pour développeurs C++11 et plus.

## Le problème
Écrire des logs C++ performants, multi-threads, avec rotation de fichiers et formatage, sans réinventer un système maison.

## Ce que ça fait vraiment
On appelle l'API globale ou un `Logger`, les messages sont filtrés par niveau, formatés par `pattern_formatter` (basé sur fmt), puis envoyés à un ou plusieurs sinks : console couleur, fichiers simples, rotatifs ou journaliers, syslog, Qt, Android. Un mode asynchrone passe par un pool de threads et une file bloquante. Niveaux configurables via variable d'environnement ou argv.

## Comment c'est branché
```mermaid
flowchart LR
  A["spdlog.h"] --> B["logger.h"]
  B --> C["pattern formatter"]
  B --> D["async_logger.h"]
  D --> E["thread_pool.h"]
  B --> F["sink.h"]
  F --> G["console / fichier / syslog"]
```

## Essayer
```bash
git clone https://github.com/gabime/spdlog.git
cd spdlog && mkdir build && cd build
cmake .. && cmake --build .
```

## Coût et pièges
Gratuit. Le mode asynchrone n'est pas compatible avec le MDC (stockage thread-local). La licence est présente mais non reconnue par GitHub : à vérifier avant redistribution.

## Ce que ce n'est pas
Pas un agrégateur de logs ni un outil d'observabilité : il écrit dans des destinations locales ou réseau simples.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter si tu touches du code C++ (moteurs d'inférence, extensions) : référence éprouvée, il suffit de confirmer la licence.

