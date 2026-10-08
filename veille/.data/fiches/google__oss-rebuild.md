---
schema: 1
depot: google/oss-rebuild
source_readme_sha: 15857a595043fa27
ecrite_le: 2026-10-08
nature: service
deploiement: binaire
prerequis: [compte à créer, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# google/oss-rebuild

> Reconstruit des paquets npm, PyPI et Crates.io et publie des attestations de build, pour sécuriser la chaîne logistique.

## Le problème
Un paquet publié peut différer de son code source sans que personne le détecte, comme dans les compromissions Solarwinds ou Codecov.

## Ce que ça fait vraiment
Analyse les métadonnées et artefacts publiés, refait le build, compare avec la version amont et publie une attestation signée si cela concorde. La CLI `oss-rebuild` consulte les données (`get`, `list`) et peut sortir le Dockerfile. Seuls les paquets les plus populaires sont reconstruits. Le graphe ajoute Debian, Maven et un agent assisté par IA.

## Comment c'est branché
```mermaid
flowchart LR
    A["Rebuild CLI (main.go)"] --> B["Core API (main.go)"]
    B --> C["Rebuild Workflow (rebuild.go)"]
    C --> D["npm Rebuilder (rebuild.go)"]
    C --> E["Artifact Stabilizer (stabilizer.go)"]
    C --> F["Attestation Store (storage.go)"]
```

## Essayer
```bash
go install github.com/google/oss-rebuild/cmd/oss-rebuild@latest
oss-rebuild get pypi absl-py 2.0.0
oss-rebuild get pypi absl-py 2.0.0 --output=payload
oss-rebuild list pypi absl-py
gcloud auth application-default login
```

## Coût et pièges
Les identifiants ADC Google Cloud sont nécessaires pour vérifier les signatures (clé KMS publique), sauf avec `--verify=false`. Couverture partielle des paquets.

## Ce que ce n'est pas
Pas un produit officiellement supporté par Google, selon le README. Ne garantit pas qu'un paquet est sans faille, seulement qu'il correspond à sa reconstruction.

## Alternatives
reproducible-central (Java, Kotlin), kpcyrd/rebuilderd (ordonnanceur multi-distributions).

## Pour toi
À surveiller : utile pour vérifier les dépendances PyPI de tes pipelines ML, mais couverture limitée aux paquets populaires.

