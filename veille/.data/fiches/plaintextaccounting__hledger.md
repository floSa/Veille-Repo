---
schema: 1
depot: plaintextaccounting/hledger
source_readme_sha: 9b778a752530a74f
ecrite_le: 2026-10-30
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# plaintextaccounting/hledger

> Logiciel de comptabilité en partie double en texte brut, en ligne de commande, pour particuliers et techniciens.

## Le problème
Les logiciels de compta ferment tes données dans un format opaque, sans versionnage ni scriptage.

## Ce que ça fait vraiment
- Tient la compta dans un fichier journal texte versionnable, multi-devises, précis à 255 décimales.
- Produit des rapports (bilan, compte de résultat) en texte, HTML, JSON ou SQL.
- Importe et exporte du CSV ; compatible en partie avec Ledger, convertible avec Beancount.
- Interfaces : CLI, terminal, web ; scriptable par CLI, HTTP ou API. Code Haskell.

## Comment c'est branché
```mermaid
graph LR
  A[fichier journal texte] --> B[moteur hledger]
  C[CSV importé] --> B
  B --> D[hledger bs / is]
  B --> E[UI terminal / web]
  B --> F[export JSON / SQL / HTML]
```

## Essayer
```bash
hledger bs
hledger is --monthly
```

## Coût et pièges
Gratuit. Interfaces décrites comme basiques ; mainteneur principal unique. Même README et mêmes chiffres que simonmichael/hledger (même dépôt vu sous un autre nom, étoiles et dates identiques).

## Ce que ce n'est pas
Pas un logiciel de compta graphique clés en main ni un outil d'IA. Les commandes d'installation ne sont pas dans le README fourni.

## Alternatives
Ledger CLI et Beancount : cités comme compatibles ou convertibles.

## Pour toi
Surveiller : utile pour des finances en texte versionné, hors périmètre data/IA ; doublon probable de simonmichael/hledger dans le catalogue.

