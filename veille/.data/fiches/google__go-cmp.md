---
schema: 1
depot: google/go-cmp
source_readme_sha: 3e5fc0993a1105d6
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# google/go-cmp

> Paquet Go pour comparer des valeurs de façon plus sûre et configurable que `reflect.DeepEqual`, surtout dans les tests.

## Le problème
`reflect.DeepEqual` ne gère pas les tolérances ni les méthodes `Equal` et ne dit pas où est la différence.

## Ce que ça fait vraiment
`cmp.Equal` compare récursivement, en utilisant les méthodes `Equal` quand elles existent ou des fonctions d'égalité personnalisées. Les champs non exportés provoquent une panique sauf si on les ignore ou autorise explicitement. `cmp.Diff` produit un rapport lisible. Le README précise que ce n'est pas un produit Google officiel.

## Comment c'est branché
```mermaid
graph TD
  API[Equal and Diff : compare.go] --> Engine[Recursive comparison : compare.go]
  Opts[Option processing : options.go] --> Engine
  Engine --> Report[Comparison paths : path.go]
  Report --> Render[Value rendering : report_reflect.go]
  Engine --> Slices[Edit-script : diff.go]
```

## Essayer
```bash
go get -u github.com/google/go-cmp/cmp
```

## Coût et pièges
Gratuit. Le piège principal est la panique sur champs non exportés, à gérer avec `cmpopts.IgnoreUnexported`.

## Ce que ce n'est pas
Pas un framework de test complet. Réservé à Go.

## Alternatives
- reflect.DeepEqual : plus simple mais moins précis, d'après le README.

## Pour toi
À surveiller : utile seulement si tu écris du Go ; dans ce cas, c'est la référence pour comparer proprement dans les tests.

