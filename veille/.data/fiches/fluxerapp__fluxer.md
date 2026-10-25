---
schema: 1
depot: fluxerapp/fluxer
source_readme_sha: 7b5aaa97a2ca0d07
ecrite_le: 2026-10-25
nature: app
deploiement: docker
prerequis: [Docker, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# fluxerapp/fluxer

> Messagerie instantanée et VoIP libre, auto-hébergeable, pour amis, groupes et communautés.

## Le problème
Les messageries communautaires populaires sont fermées et centralisées ; héberger la sienne est difficile.

## Ce que ça fait vraiment
Clients web (React), bureau (Electron) et mobiles, API TypeScript, passerelle temps réel en Erlang/OTP, services Rust (messages, médias, unfurl), NATS/JetStream, Cassandra et PostgreSQL, voix via LiveKit. La composition auto-hébergée est dans `deploy/self-hosting/docker-compose.yml`. Le README renvoie les rapports de bugs vers un site externe, les issues GitHub étant fermées.

## Comment c'est branché
```mermaid
graph LR
  A[React SPA index.tsx] --> B[OTP gateway]
  A --> C[API process AppEntrypoint.ts]
  C --> D[Gateway RPC adapter NATS]
  C --> E[JetStream workers]
  C --> F[Cassandra and PostgreSQL]
  B --> G[Media proxy]
```

## Essayer
```bash
flatpak install flathub app.fluxer.Fluxer
```
Auto-hébergement : voir la documentation en ligne (aucune commande dans le README).

## Coût et pièges
Gratuit. Pile lourde à héberger (Erlang, Rust, NATS, Cassandra, LiveKit, Stripe, SMTP…). AGPL : obligations de partage du code en cas de service réseau modifié.

## Ce que ce n'est pas
Pas un outil data/IA. Les issues GitHub sont closes : le support passe par un compte Fluxer.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : messagerie généraliste sans lien avec ton métier ; l'intérêt éventuel serait l'architecture, pas l'usage.

