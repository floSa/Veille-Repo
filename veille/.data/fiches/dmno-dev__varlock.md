---
schema: 1
depot: dmno-dev/varlock
source_readme_sha: c7a85785a92614a4
ecrite_le: 2026-11-07
nature: outil
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: []
verdict: adopter
---

# dmno-dev/varlock

> Fichiers .env à schéma : les agents lisent la structure, jamais les secrets.

## Le problème
Les fichiers .env exposent les secrets aux agents IA, et le .env.example finit désynchronisé.

## Ce que ça fait vraiment
Un fichier `.env.schema` décrit variables, types, validation et sensibilité. Le CLI construit un graphe, résout les valeurs (greffons 1Password, AWS, Azure, Vault, etc.), puis injecte le résultat dans un processus lancé par `varlock run`. Il masque les secrets dans les journaux et `varlock scan` détecte les fuites. Intégrations Vite, Next.js, Astro, Cloudflare.

## Comment c'est branché
```mermaid
flowchart TD
  schema[".env.schema"] --> parser["Env Spec parser"]
  parser --> graph["Environment graph"]
  graph --> resolver["Value resolver"]
  plugins["Secret plugins"] --> resolver
  resolver --> proc["Spawned process"]
  resolver --> redaction["Redaction"]
```

## Essayer
```bash
npx varlock init
varlock load
varlock run -- python script.py
varlock scan
```

## Coût et pièges
Gratuit. Les greffons de secrets exigent un compte sur le coffre choisi. Le chiffrement local passe par des binaires natifs (Rust, Swift).

## Ce que ce n'est pas
Pas un coffre de secrets : il lit ceux d'un coffre externe. Ne protège pas si l'agent peut lire directement l'environnement du processus.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À adopter : cache les clés d'API aux agents dans tes pipelines, avec un schéma validé.

