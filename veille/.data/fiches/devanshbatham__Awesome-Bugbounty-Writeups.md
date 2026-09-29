---
schema: 1
depot: devanshbatham/Awesome-Bugbounty-Writeups
source_readme_sha: dc6c8c8228b5ce9b
ecrite_le: 2026-09-29
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence non déclarée, dernier commit ancien]
verdict: ignorer
---

# devanshbatham/Awesome-Bugbounty-Writeups

> Liste de comptes rendus de chasse aux bugs classés par type de faille, pour apprenants en sécurité web.

## Le problème
Les retours d'expérience de bug bounty sont dispersés sur des blogs.

## Ce que ça fait vraiment
Un README qui recense des articles par catégorie : XSS (la plus fournie), CSRF, clickjacking, LFI, prise de sous-domaine, DoS, contournement d'authentification, injection SQL, IDOR, 2FA, CORS, SSRF, conditions de course, exécution de code, débordement de tampon, Android. Aucune exécution : le code n'est qu'un TODO d'auto-mise à jour.

## Comment c'est branché
```mermaid
flowchart LR
  R["README.md"] --> Cat["Catégories (XSS, CSRF, SSRF…)"]
  Cat --> Links["Writeups liés"]
  Reader["Lecteur"] --> R
```

## Essayer
Rien à installer : lire le README sur GitHub.

## Coût et pièges
Gratuit. Le dernier push date d'août 2023 : des liens sont probablement morts. Aucune licence déclarée.

## Ce que ce n'est pas
Pas un cours structuré ni un outil : des titres d'articles, souvent sans résumé.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À ignorer : sécurité offensive web, sans rapport avec ton métier, et ancienne.

