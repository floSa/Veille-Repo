---
schema: 1
depot: ivnvxd/arc-export
source_readme_sha: 1bf4aa89bb1fb7b6
ecrite_le: 2026-10-08
nature: outil
deploiement: autre
prerequis: [version de Python]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# ivnvxd/arc-export

> Script Python qui exporte les onglets épinglés d'Arc Browser en fichier de signets HTML.

## Le problème
Arc n'offre aucun export des onglets épinglés, ce qui bloque le passage à un autre navigateur.

## Ce que ça fait vraiment
Lit `StorableSidebar.json` d'Arc (ou du dossier du projet), le convertit en arborescence de signets par espace épinglé, puis écrit un HTML horodaté importable dans n'importe quel navigateur. Tout tient dans `main.py`.

## Comment c'est branché
```mermaid
flowchart LR
  U[Utilisateur CLI] --> M[main.py]
  M --> J[StorableSidebar.json]
  J --> P[Pinned spaces]
  P --> T[Bookmark tree]
  T --> H[HTML serializer]
  H --> O[Fichier HTML]
```

## Essayer
```bash
curl -o main.py https://raw.githubusercontent.com/ivnvxd/arc-export/main/main.py
python3 main.py -v -o my_bookmarks.html
```

## Coût et pièges
Gratuit. Dépend du format interne du fichier d'Arc, qui peut changer ; dernier push février 2025.

## Ce que ce n'est pas
N'exporte que les onglets épinglés, pas l'historique ni les mots de passe.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : utilitaire de migration de navigateur sans rapport avec data ou IA, peu actif.

