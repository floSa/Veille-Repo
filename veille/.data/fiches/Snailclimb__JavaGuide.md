---
schema: 1
depot: Snailclimb/JavaGuide
source_readme_sha: b57846f9955a275a
ecrite_le: 2026-09-28
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: freemium
maturite: éprouvé
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# Snailclimb/JavaGuide

> Recueil chinois de fiches de révision pour entretiens de développeur backend Java.

## Le problème
Préparer un entretien backend suppose de rassembler Java, JVM, réseau, SQL, Redis et systèmes distribués.
Les ressources sont éparpillées et de qualité inégale.

## Ce que ça fait vraiment
Agrège des centaines de fiches Markdown : bases Java, collections, concurrence, JVM, nouveautés par version.
Couvre aussi OS, réseau, structures de données, MySQL, Redis, MongoDB, Spring, sécurité, distribué.
Publié comme site statique VuePress, lisible en ligne sur javaguide.cn.
Renvoie vers des contenus payants de l'auteur (guide d'entretien, questions de design système).

## Comment c'est branché
```mermaid
flowchart TD
    A["Dépôt de contenu (Markdown)"]:::content
    F(("Dépôt & contrôle de version")):::content
    D["CI/CD & qualité"]:::cicd
    C["Chaîne de build & paquets"]:::build
    B["Moteur VuePress"]:::build
    E["Assets statiques & PWA"]:::client
    G["Navigateur client"]:::client

    A -->|"pousse"| F
    F -->|"déclenche"| D
    D -->|"teste et build"| C
    C -->|"invoque"| B
    B -->|"génère"| E
    E -->|"livre"| G

    classDef content fill:#90CAF9,stroke:#0D47A1,stroke-width:2px;
    classDef build fill:#A5D6A7,stroke:#2E7D32,stroke-width:2px;
    classDef cicd fill:#FFCC80,stroke:#F57C00,stroke-width:2px;
    classDef client fill:#FFF59D,stroke:#FBC02D,stroke-width:2px;
```

## Essayer
Aucune commande d'installation documentée : la lecture se fait sur javaguide.cn ou dans `docs/`.

## Coût et pièges
Le dépôt est gratuit ; plusieurs ressources liées sont payantes. Contenu quasi exclusivement en chinois.
Aucune licence déclarée dans le README, qui interdit explicitement la reprise sans attribution.

## Ce que ce n'est pas
Pas un cours : une liste de fiches de révision, orientée réussite d'entretien plutôt que pratique.
Pas de contenu data, ML ou MLOps ; la section IA renvoie à un autre dépôt du même auteur.
Pas de code exécutable — c'est de la documentation.

## Alternatives
- `shareAI-lab/learn-claude-code` : même format pédagogique, sur un sujet agents plutôt que Java.

## Pour toi
Hors périmètre data/IA, et en chinois. À ignorer.
