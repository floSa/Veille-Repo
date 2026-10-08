---
schema: 1
depot: apsdehal/awesome-ctf
source_readme_sha: e0457ef6cb3bc811
ecrite_le: 2026-10-08
nature: liste
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dernier commit ancien]
verdict: ignorer
---

# apsdehal/awesome-ctf

> Liste commentée d'outils, plateformes et ressources pour créer et résoudre des challenges CTF.

## Le problème
Les outils de CTF sont dispersés ; il est difficile de savoir lesquels utiliser par catégorie.

## Ce que ça fait vraiment
Un README Markdown classé en trois blocs : créer (plateformes comme CTFd, FBCTF), résoudre (crypto, forensique, stéganographie, rétro-ingénierie, web, réseau, exploits, force brute) et ressources (systèmes d'exploitation de sécurité, tutoriels, wargames, wikis, collections de writeups). Aucun code applicatif.

## Comment c'est branché
```mermaid
flowchart LR
  L[Lecteur] --> R[README.md]
  R --> CR[Création de challenges]
  R --> SO[Résolution : outils]
  R --> RE[Ressources d'apprentissage]
  SO --> WG[Wargames et writeups]
```

## Essayer
Aucune commande propre au dépôt : lire le README. Le README donne ponctuellement des commandes d'installation d'outils, par exemple :
```bash
apt-get install foremost
pip install sqlmap
```

## Coût et pièges
Gratuit. Certaines plateformes citées sont payantes (PentesterLab). Dernier push en juillet 2024 : des liens peuvent être morts.

## Ce que ce n'est pas
Pas un outil ni un cours : un annuaire de liens, sans garantie d'actualité. L'usage des outils offensifs reste soumis à autorisation.

## Alternatives
- CTF Field Guide (Trail of Bits) : guide cité dans le README pour débuter.
- CTF Time : calendrier des compétitions.

## Pour toi
À ignorer : hors sujet pour data/IA/MLOps, sauf si tu te formes à la sécurité.

