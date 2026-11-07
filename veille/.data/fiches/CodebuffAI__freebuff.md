---
schema: 1
depot: CodebuffAI/freebuff
source_readme_sha: f846bcb9eac73254
ecrite_le: 2026-11-07
nature: outil
deploiement: pip
prerequis: [Node, compte à créer]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS, télémétrie]
verdict: surveiller
---

# CodebuffAI/freebuff

> Cinq produits d'agents de code gratuits financés par des publicités textuelles, bâtis sur Codebuff.

## Le problème
Utiliser des agents de code et de recherche avec plusieurs modèles coûte cher en abonnements et en clés d'API.

## Ce que ça fait vraiment
Propose Desktop, CLI, Web, Cloud et Chat. Des agents spécialisés repèrent les fichiers, planifient, modifient, exécutent des commandes et relisent. Un catalogue de modèles est offert avec un solde en heures, un accès limité selon la région, et des heures supplémentaires par parrainage. Les publicités textuelles financent les modèles. Le README décrit des cas où les données peuvent servir à entraîner des modèles.

## Comment c'est branché
Aucun diagramme fourni : le README décrit des agents de contexte, d'implémentation et de recherche. Non documenté en détail.

## Essayer
```bash
npm install -g freebuff
cd ~/my-project
freebuff
```

## Coût et pièges
Gratuit avec limite quotidienne (5 heures en accès limité, 4 sur VPN). Des plans payants donnent accès à d'autres modèles. Les données peuvent être utilisées pour les publicités et parfois l'entraînement.

## Ce que ce n'est pas
Pas fonctionnement hors ligne : les modèles sont hébergés. Pas totalement privé : lis la politique de confidentialité.

## Alternatives
Aucune alternative nommée dans le README (il cite Codebuff, sur lequel il repose).

## Pour toi
À surveiller : un agent de code gratuit tentant, mais finançé par la publicité et avec des conditions d'usage des données à vérifier.

