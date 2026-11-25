---
schema: 1
depot: rdkit/rdkit
source_readme_sha: e3f46ec360f5aa3b
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: pip
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# rdkit/rdkit

> Boîte à outils de chémoinformatique et d'apprentissage automatique en C++ et Python, pour chimistes et data scientists.

## Le problème
Traiter des molécules (structures, descripteurs, recherche de similarité) sans bibliothèque dédiée est un chantier à part entière.

## Ce que ça fait vraiment
- Opérations moléculaires 2D et 3D, réactions, conformères et champs de force.
- Descripteurs et empreintes (fingerprints) pour l'apprentissage automatique.
- Cœur C++, interface Python, liaisons Java, C#, JavaScript.
- Cartouche PostgreSQL pour recherche par sous-structure et similarité, nœuds KNIME.

## Comment c'est branché
```mermaid
flowchart TD
  User(("Chimiste")) --> Py["rdkit/Chem/__init__.py"]
  Py --> Std["MolStandardize"]
  Py --> Desc["Descriptors"]
  Py --> Fp["Fingerprints"]
  Py --> Conf["Conformer generation"]
  Pg[("PostgreSQL cartridge")] --> Res["Résultats"]
```

## Essayer
```bash
conda install -c conda-forge rdkit
```

## Coût et pièges
Gratuit, BSD. Installation recommandée par conda. Le détail d'installation est dans Docs/Book/Install.md.

## Ce que ce n'est pas
Pas une application graphique ni un modèle prêt à l'emploi : une bibliothèque que tu programmes. Plusieurs liens internes n'ont pas été lus dans le code.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter pour tout projet IA sur molécules : descripteurs et empreintes alimentent directement tes modèles, sous licence BSD.

