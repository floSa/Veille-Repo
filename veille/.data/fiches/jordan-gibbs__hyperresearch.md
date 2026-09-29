---
schema: 1
depot: jordan-gibbs/hyperresearch
source_readme_sha: 548f82e3e4a842a6
ecrite_le: 2026-09-28
nature: outil
deploiement: pip
prerequis: [version de Python, clé d'API]
cout: clé d'API à ta charge
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# jordan-gibbs/hyperresearch

> Harnais de recherche profonde pour Claude Code, avec vault de sources persistant, pour analystes.

## Le problème
Un agent de recherche jette tout après le rapport : la session suivante refait les mêmes fetchs.
Les citations ne sont pas vérifiées, et cinq reprises d'un même communiqué comptent comme cinq sources.

## Ce que ça fait vraiment
Pipeline de 16 étapes (décomposition, balayage en largeur, graphe de contradictions, loci, enquête en
profondeur, critiques adversariaux, patch chirurgical, cite-check, polish) routé par tiers
`light` / `full` / `dissertation` et par « gears » de profil.
Vault markdown + index SQLite reconstructible, recherche plein texte, PageRank, score qualité avec
drapeaux de rétractation. Recherche savante unifiée sur OpenAlex, Crossref, CORE, DOAB,
ClinicalTrials.gov, SEC EDGAR, FRED. Texte intégral open access via Unpaywall / Europe PMC / CORE.

## Comment c'est branché
```mermaid
flowchart LR
  A[/hyperresearch prompt] --> B[step 1 decompose]
  B --> C[step 2 width sweep<br/>fetchers]
  C --> D[research/notes/<br/>markdown + SQLite]
  D --> E[steps 3-9 depth]
  E --> F[step 11 synthesize<br/>final_report.md]
  F --> G[step 12 critics + 14 patcher]
  G --> H[run verify: ship gate]
```

## Essayer
```bash
pip install hyperresearch && hyperresearch install
hyperresearch profile use premier
hpr scholar search "Byzantine iconoclasm" -j
hyperresearch run status -j
```

## Coût et pièges
Python 3.11–3.13 (pas 3.14). Le coût est en appels de modèles : `run init --budget 50` plafonne
la dépense estimée. Clés optionnelles : CORE, FRED, Exa, Tavily, Serply ; `HYPERRESEARCH_CONTACT_EMAIL`
exigé par SEC EDGAR et utile pour les « polite pools ». Un run `premier` est visé à 3–5 h.

## Ce que ce n'est pas
Ce n'est pas autonome : c'est un harnais qui pilote Claude Code, avec ses sous-agents et ses modèles.
Ce n'est pas un contournement de paywall : seules des copies open access légales sont récupérées,
et la substitution est signalée à quatre endroits. Les CAPTCHA, 2FA et logins ne sont jamais résolus
automatiquement — ils te sont rendus.

## Alternatives
Aucun dépôt concurrent nommé ; seuls des fournisseurs web (crawl4ai, Exa, Tavily, Parallel, Serply).

## Pour toi
Intéressant si tu produis des notes sourcées en série ; le vault markdown survit à l'outil, c'est ce qui rassure.
