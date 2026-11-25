---
schema: 1
depot: layer5io/academy-example
source_readme_sha: b60ea93817746ec1
ecrite_le: 2026-11-25
nature: outil
deploiement: autre
prerequis: [Node, compte à créer, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: ignorer
---

# layer5io/academy-example

> Gabarit Hugo pour publier ses cours sur la plateforme Layer5 Academy, destiné aux auteurs de contenu.

## Le problème
Créer des parcours de formation intégrables à Layer5 Cloud sans connaître la structure attendue.

## Ce que ça fait vraiment
Un dépôt à forker avec une arborescence parcours, cours, chapitre, leçon en Markdown, des évaluations décrites en front matter YAML, et un `Makefile` pour prévisualiser en local (Hugo Extended installé par `make setup`). Il faut un identifiant d'organisation obtenu auprès de Layer5 Cloud, puis un administrateur Layer5 intègre le dépôt.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A[Fork du dépôt] --> B[go.mod]
  A --> C[content/learning-paths]
  C --> D[Hugo via make site]
  D --> E[Layer5 Cloud]
```

## Essayer
```bash
git clone https://github.com/<your-username>/academy-example.git
make setup
make site
make build
make lint
```

## Coût et pièges
Go et Node.js requis ; l'UID d'organisation vient de Layer5 Cloud, et la mise en ligne passe par un administrateur Layer5. L'aperçu local n'a pas le style final.

## Ce que ce n'est pas
Pas un générateur de cours : tout le contenu reste à écrire. Pas autonome : la publication dépend de la plateforme Layer5.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À ignorer : utile seulement si tu publies sur Layer5 Academy, ce qui n'est pas un besoin data/IA.

