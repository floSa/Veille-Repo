---
schema: 1
depot: OWASP/NodeGoat
source_readme_sha: a063e8728b30907e
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [Node, Docker]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [dernier commit ancien]
verdict: surveiller
---

# OWASP/NodeGoat

> Application Node.js volontairement vulnérable pour apprendre l'OWASP Top 10 en l'exploitant puis en la corrigeant.

## Le problème
Comprendre les failles OWASP sur Node.js est abstrait sans application réelle à attaquer.

## Ce que ça fait vraiment
Une appli Express avec MongoDB (profil, contributions, allocations, mémos, recherche) volontairement truffée de failles. Une page tutoriel explique chaque risque ; des comptes de test sont fournis.

## Comment c'est branché
Schéma d'après le diagramme fourni.

```mermaid
flowchart TD
    User["Web user"] --> Server["server.js"]
    Server --> Routes["routes/index.js"]
    Routes --> Session["session.js"]
    Routes --> Tuto["tutorial.js"]
    Session --> UserDao["user-dao.js"]
    UserDao --> Mongo[("MongoDB")]
```

## Essayer
```bash
git clone https://github.com/OWASP/NodeGoat.git
cd NodeGoat
npm install
npm run db:seed
npm start
```

## Coût et pièges
Gratuit ; MongoDB local, Atlas ou Docker. Ne jamais exposer sur Internet : l'application est vulnérable par conception.

## Ce que ce n'est pas
Pas un exemple de code sûr à copier. Dernier push en juin 2024, avec 119 issues ouvertes.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : bon support pour former à la sécurité web, mais peu lié à ton métier data/IA.

