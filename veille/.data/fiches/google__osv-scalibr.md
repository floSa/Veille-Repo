---
schema: 1
depot: google/osv-scalibr
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: adopter
source_readme_sha: 3a626298d968b69a
ecrite_le: 2026-09-21
---

# google/osv-scalibr

> **Une bibliothèque Go d'analyse de composition logicielle** : inventaire des paquets installés, détection de vulnérabilités connues, génération de SBOM.

## Le problème

Sans elle, il faut écrire soi-même la logique qui parcourt un système de fichiers ou une image
de conteneur, reconnaît les formats de paquets de chaque écosystème, et recoupe l'inventaire
obtenu avec des vulnérabilités connues. Le README ne décrit pas le problème en ces termes ; il
se présente d'emblée comme une bibliothèque extensible.

## Ce que ça fait vraiment

Le README annonce quatre choses. Un scanner de système de fichiers qui extrait l'inventaire
logiciel (par exemple les paquets de langage installés), détecte des vulnérabilités connues ou
produit un SBOM ; la liste des types d'inventaire pris en charge vit dans
`docs/supported_inventory_types.md`. De l'analyse de conteneurs, avec extraction par couche.
De la « Guided Remediation » : génération de patchs de montée de version pour les
vulnérabilités transitives. La sortie peut être un textproto (format défini dans
`binary/proto/scan_result.proto`) ou un SPDX v2.3 en json, yaml ou tag-value. La bibliothèque
embarque des plugins d'extraction et de détection, et accepte des plugins écrits par
l'utilisateur — mais uniquement en usage bibliothèque, pas via le binaire.

## Comment c'est branché

```mermaid
graph LR
  A[ScanRoots: FS réel, image distante, tarball] --> B[scalibr.New().Scan]
  B --> C[extractors: extractor/filesystem/list/list.go]
  B --> D[detectors: detector/list/list.go]
  B --> E[annotators + enrichers: annotator/list, enricher/enricherlist]
  C --> F[ScanResults — scalibr.go]
  D --> F
  E --> F
  F --> G[(result.textproto / SPDX 2.3)]
```

Aucun diagramme tiré du code n'existe pour ce dépôt ; ce schéma reprend les chemins de
fichiers cités par le README. Le point d'entrée est une `scalibr.ScanConfig` (`scalibr.go`)
où l'on déclare les `ScanRoots` et la liste de plugins ; `plugin.FilterByCapabilities` permet
de ne garder que les plugins dont les prérequis (OS, accès réseau, accès direct au FS) sont
satisfaits. Les interfaces à implémenter pour un plugin maison sont
`extractor/filesystem/extractor.go` et `detector/detector.go`. Le logger se remplace via
`log.SetLogger()` (`log/log.go`).

## Essayer

```bash
go install github.com/google/osv-scalibr/binary/scalibr@latest
scalibr --result=result.textproto
scalibr --help
```

```bash
scalibr --result=result.textproto --remote-image=alpine@sha256:0a4eaa0eecf5f8c050e5bba433f58c052be7587ee8af3e8b3910ef9ab5fbe9f5
scalibr --result=result.textproto --image-tarball=my-image.tar
scalibr -o spdx23-json=result.spdx.json
```

Pour construire depuis les sources : `make` et `make test`, qui produisent un binaire
`scalibr` à la racine du dépôt.

## Coût et pièges

Gratuit, pas de clé d'API, pas de compte. Il faut `go` installé pour construire. Le binaire ne
lance par défaut que les plugins « recommandés » : les autres s'activent par `--plugins=`, et
les listes de référence sont dans les fichiers `list.go` cités plus haut. L'analyse d'images de
conteneurs ne couvre que les images basées sur Linux ; le support Windows est suivi par
l'issue #953. Le support Windows et Mac de la bibliothèque elle-même est annoncé comme
expérimental. Contribuer un nouveau type d'inventaire impose de régénérer les protos, donc
d'installer `protoc` et `protoc-gen-go` puis de lancer `make protos` ou `./build_protos.sh`.

## Ce que ce n'est pas

Ce n'est pas un produit officiel de Google : le README le dit explicitement en fin de page. Ce
n'est pas d'abord une CLI — le binaire `scalibr` est un « wrapper », et le chemin CLI
recommandé pour le scan de vulnérabilités est OSV-Scanner, qui n'expose d'ailleurs pas encore
toutes les fonctions d'OSV-SCALIBR (un guide de migration est mentionné). Ce n'est pas non
plus un service : aucune base de vulnérabilités hébergée, aucun tableau de bord, aucune
politique de blocage CI n'est décrite dans le README. Et les plugins personnalisés ne
fonctionnent pas avec le binaire, seulement en bibliothèque.

## Alternatives

- `google/osv-scanner`, nommé dans le README : la CLI à préférer si le besoin est du scan de
  vulnérabilités en ligne de commande, sans écrire de Go.
- `aquasecurity/trivy` et `anchore/grype` (voisins du catalogue) : scanners d'images et de
  dépendances utilisables tels quels ; à préférer si l'on veut un outil fini plutôt qu'une
  bibliothèque à intégrer.

## Pour toi

Sur une chaîne MLOps, c'est la brique à embarquer quand on veut produire soi-même l'inventaire
ou le SBOM d'images de conteneurs — y compris des images de training ou de serving — depuis du
code Go, avec des extracteurs maison pour des formats que les scanners tout faits ignorent. Si
le besoin s'arrête à « scanner et lire un rapport », passer directement par OSV-Scanner.
