---
schema: 1
depot: goldmansachs/gs-quant
source_readme_sha: ed6f9c0dcb91e9dc
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [version de Python, clé d'API, compte à créer]
cout: payant
maturite: éprouvé
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# goldmansachs/gs-quant

> Boîte à outils Python de finance quantitative de Goldman Sachs, pour quants clients institutionnels.

## Le problème
Développer des stratégies de trading et de gestion du risque sur dérivés exige des outils d'analyse et un accès aux données de marché.

## Ce que ça fait vraiment
Paquet `gs_quant` avec modules API (sessions, actifs), analytics, séries temporelles, backtests, marchés, instruments, risque, modèles et rapports. Les appels d'API passent par la plateforme Marquee de Goldman Sachs, qui exige un identifiant client et un secret réservés aux clients institutionnels. Le README n'en dit pas plus.

## Comment c'est branché
```mermaid
flowchart LR
  M[Marquee External API] --> Api[gs_quant/api]
  Api --> An[gs_quant/analytics]
  Api --> Ts[gs_quant/timeseries]
  Api --> Bt[gs_quant/backtests]
  Api --> Rk[gs_quant/risk + models]
  Rk --> Tg[gs_quant/target]
```

## Essayer
```bash
pip install gs-quant
```

## Coût et pièges
Python 3.9 ou plus. Les API exigent un identifiant et un secret obtenus auprès de l'équipe commerciale de Goldman Sachs : sans compte client, l'essentiel ne fonctionne pas. Le README annonce 3.9 et le code 3.8 : incohérence de version.

## Ce que ce n'est pas
Pas un outil autonome ni ouvert à tous : c'est un client d'une plateforme réservée à des clients institutionnels.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À surveiller : pertinent seulement si ton organisation est cliente de Goldman Sachs ; sinon, inutilisable sans accès à Marquee.

