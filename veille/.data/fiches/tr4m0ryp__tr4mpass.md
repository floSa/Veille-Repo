---
schema: 1
depot: tr4m0ryp/tr4mpass
source_readme_sha: dd5a805de7b9f2d4
ecrite_le: 2026-10-25
nature: outil
deploiement: compilation
prerequis: [aucun, Docker]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [licence non déclarée, mainteneur unique]
verdict: ignorer
---

# tr4m0ryp/tr4mpass

> Outil en C en ligne de commande qui contourne le verrouillage d'activation iCloud d'appareils Apple, destiné à la recherche en sécurité.

## Le problème
Un appareil Apple verrouillé par l'activation iCloud est inutilisable sans le compte d'origine. L'auteur propose un outil local qui lève ce verrou, sans serveur ni compte.

## Ce que ça fait vraiment
- Détecte un appareil USB en mode DFU, identifie sa puce, puis choisit l'un des deux chemins : Path A (A5 à A11, faille matérielle checkm8) ou Path B (A12 et plus, activation par session).
- Construit un enregistrement d'activation, nettoie l'assistant de configuration et vérifie

