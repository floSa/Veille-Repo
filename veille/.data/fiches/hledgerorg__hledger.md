---
schema: 1
depot: hledgerorg/hledger
source_readme_sha: 9b778a752530a74f
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft]
verdict: adopter
---

# hledger

> Comptabilité en partie double en texte brut, multidevise, pour particuliers et indépendants à l'aise en CLI.

## Le problème
Suivre argent, temps et factures dans un format durable, versionnable et sans cloud.

## Ce que ça fait vraiment
Lit un fichier journal texte (ou du CSV avec règles d'import), vérifie l'équilibrage et produit bilans, comptes de résultat, registres, budgets. Interfaces : ligne de commande, terminal (hledger-ui), web. Sorties texte/HTML/JSON/SQL/CSV. Compatible en partie avec Ledger, interconvertible avec Beancount. Branche 1.x conservée, 2.x en développement sur `main`.

## Comment c'est branché
```mermaid
flowchart LR
  JNL[Journal parser JournalReader.hs] --> ENG[Journal.hs]
  CSV[CSV importer CsvReader.hs] --> ENG
  ENG --> CHK[JournalChecks.hs]
  ENG --> Q[Query.hs]
  Q --> REP[Reports.hs]
  REP --> OUT[CLI / TUI / Web]
```

## Essayer
```bash
hledger bs
hledger is --monthly
```

## Coût et pièges
Gratuit ; installation sur unix, mac, Windows (détails sur le site). Le journal est à saisir ou importer vous-même.

## Ce que ce n'est pas
Pas une appli de budget avec synchronisation bancaire : les interfaces sont « basiques ». Licence GPL-3.0 (copyleft).

## Alternatives
Ledger CLI et Beancount sont cités comme proches/interconvertibles.

## Pour toi
À adopter pour tes finances ou un suivi de temps scripté : format texte versionnable et export JSON/SQL exploitable.

