---
schema: 1
depot: hashicorp/hcl
source_readme_sha: 14933734178e5ce8
ecrite_le: 2026-10-05
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence copyleft]
verdict: surveiller
---

# hashicorp/hcl

> Bibliothèque Go pour définir des langages de configuration lisibles par humains et machines, utilisée par des outils DevOps.

## Le problème
JSON et YAML sérialisent des données mais ne sont pas conçus comme langage de configuration : peu lisibles, sans expressions ni bons messages d'erreur.

## Ce que ça fait vraiment
L'application déclare les attributs et blocs attendus ; HCL analyse le fichier (syntaxe native ou variante JSON équivalente), vérifie la structure et renvoie des objets exploitables. Il gère expressions, interpolation, variables et fonctions fournies par l'appelant. Des décodeurs remplissent des structs Go (`hclsimple.DecodeFile`) ou des valeurs dynamiques ; extensions : blocs dynamiques, fonctions utilisateur, écriture et formatage préservant la source. La version 2 est incompatible avec la 1.

## Comment c'est branché
```mermaid
flowchart LR
  A["Application appelante"] --> P["Parser (parser.go)"]
  P --> N["Syntaxe native"]
  P --> J["HCL JSON (structure.go)"]
  N --> E["Expressions + eval_context.go"]
  E --> D["Décodeurs (hclsimple.go, decode.go, spec.go)"]
  D --> A
```

## Essayer
```bash
# Exemple Go du README (hclsimple), fichier config.hcl :
# err := hclsimple.DecodeFile("config.hcl", nil, &config)
```

## Coût et pièges
Gratuit, import via Go Modules uniquement. Licence MPL-2.0 : copyleft de fichier à connaître. Pas de chemin de migration de HCL 1 vers 2.

## Ce que ce n'est pas
Pas un outil final : il faut une application Go qui l'embarque (c'est ce que fait Terraform, hors README). Pas un format d'échange universel type JSON.

## Alternatives
JSON, YAML (comparés dans la section « Why? » du README).

## Pour toi
Utile seulement si tu écris des outils Go avec configuration riche ; pour de la data/IA en Python il n'apporte rien directement, mais comprendre HCL aide à lire les configurations d'infra.

