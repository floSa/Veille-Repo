---
schema: 1
depot: novuhq/novu
source_readme_sha: 1e3f2e1690ac106e
ecrite_le: 2026-11-07
nature: service
deploiement: SaaS
prerequis: [compte à créer, service tiers]
cout: freemium
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier, dépend d'un SaaS]
verdict: surveiller
---

# novuhq/novu

> Infrastructure de notifications multicanal et de conversation entre agents IA et utilisateurs.

## Le problème
Chaque canal (e-mail, SMS, push, Slack, Teams) a son fournisseur et ses webhooks ; les agents doivent y parler sans réécriture.

## Ce que ça fait vraiment
Une API pour envoyer des notifications via des dizaines de fournisseurs, avec workflows, digests, composant Inbox et préférences. Une couche « agents » reçoit les messages d'un canal, les normalise, les route vers ton agent et renvoie sa réponse.

## Comment c'est branché
```mermaid
flowchart TD
    User(("Utilisateur")) --> Channel{{"Messaging channel"}}
    Channel --> Ingress["agent-inbound.controller.ts"]
    Ingress --> Turn["inbound-turn.handler.ts"]
    Turn --> Agent{{"Agent existant"}}
    Agent --> Reply["handle-agent-reply.usecase.ts"]
    Reply --> Egress["outbound.gateway.ts"]
```

## Essayer
```bash
npx novu@latest connect
```
Sinon : créer un compte gratuit et suivre le tableau de bord.

## Coût et pièges
Le démarrage passe par un compte cloud ; les fournisseurs (Twilio, SendGrid, etc.) se paient séparément. Licence non identifiée par GitHub : vérifier avant auto-hébergement.

## Ce que ce n'est pas
Pas un agent : Novu transporte les messages. Pas de tarifs précisés dans le README.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : utile pour relier un agent IA à Slack ou à l'e-mail, mais dépendance cloud et licence à lire.

