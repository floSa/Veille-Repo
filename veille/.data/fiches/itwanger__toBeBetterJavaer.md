---
schema: 1
depot: itwanger/toBeBetterJavaer
source_readme_sha: eb4b92e79e6e5515
ecrite_le: 2026-10-27
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# itwanger/toBeBetterJavaer

> Base de connaissances chinoise sur Java, entretiens d'embauche et questions sur les agents IA.

## Le problème
Un débutant en Java cherche un parcours structuré, des supports d'étude et une préparation aux entretiens.

## Ce que ça fait vraiment
README en chinois servant de sommaire : Java (syntaxe, collections, IO, concurrence, JVM), Spring Boot, MySQL, Redis, calculs de base, « 面渣逆袭 » (questions d'entretien), parcours d'apprentissage et PDF. Nouvelle section : 369 questions sur les agents IA (RAG, MCP, mémoire, KV cache), renvoyées au dépôt `itwanger/ai-better`. Site VuePress ; promotion d'un groupe payant et d'un compte de dons. Le dépôt contient aussi un exemple Remotion.

## Comment c'est branché
```mermaid
flowchart LR
  A["Learner"] --> B["Learning Routes"]
  B --> C["Java Lessons"]
  A --> D["Interview Prep"]
  D --> E["Agent Questions"]
  E --> F["Video Platforms"]
```

## Essayer
```bash
pnpm docs:clean-dev
cp .env.example .env
./deploy-docs.sh
```

## Coût et pièges
Lecture gratuite ; les contenus annexes (cours, PDF) mènent à des offres payantes. Aucune licence déclarée, et l'auteur interdit la reproduction.

## Ce que ce n'est pas
Pas un cours sur l'IA : la partie agents est une liste de questions renvoyée ailleurs. Lien non vérifié ici.

## Alternatives
JavaGuide, paicoding, Hippo4J (« liens amis » du README).

## Pour toi
En chinois et orienté Java : peu utile à un profil data/IA francophone ; à ignorer.

