---
schema: 1
depot: BenedictKing/ccx
source_readme_sha: 188a921a1d368966
ecrite_le: 2026-09-28
nature: service
deploiement: docker
prerequis: [clé d'API, Docker]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# BenedictKing/ccx

> Passerelle de proxy qui traduit entre les protocoles Claude, OpenAI, Codex et Gemini.

## Le problème
Chaque client IA parle le protocole d'un seul fournisseur, avec une seule clé.
Basculer de fournisseur ou répartir la charge suppose de reconfigurer tous les clients.

## Ce que ça fait vraiment
Un point d'entrée unique qui expose Claude Messages, OpenAI Chat, Images, Embeddings, Codex Responses et Gemini.
Une console web d'administration pour gérer les canaux, tester, lire les journaux et surveiller.
Ordonnancement par priorités, fenêtres de promotion, vérifications de santé, bascule et récupération de circuit.
Rotation des clés par canal, mappage de modèles, listes de modèles autorisés, préfixes de route, proxy sortant.

## Comment c'est branché
```mermaid
flowchart LR
  CL[Client] --> BK[backend :3000]
  BK --> UI[Web UI]
  BK --> MSG[/v1/messages Claude]
  BK --> CHAT[/v1/chat/completions]
  BK --> RESP[/v1/responses Codex]
  BK --> GEM[/v1beta/models Gemini]
  BK --> SCHED[ordonnancement, santé, bascule]
```

## Essayer
```bash
docker run -d \
  --name ccx \
  -p 3000:3000 \
  -e PROXY_ACCESS_KEY=your-proxy-access-key \
  -e APP_UI_LANGUAGE=en \
  -v $(pwd)/.config:/app/.config \
  crpi-i19l8zl0ugidq97v.cn-hangzhou.personal.cr.aliyuncs.com/bene/ccx:latest
```

## Coût et pièges
Les clés des fournisseurs restent à ta charge ; le proxy concentre toutes tes clés en un point.
Avec `BIND_HOST` vide, il écoute sur toutes les interfaces : à restreindre à `127.0.0.1` hors réseau de confiance.

## Ce que ce n'est pas
Pas un fournisseur de modèles : il route, il ne sert rien lui-même.
Pas un outil de maîtrise des coûts — il n'y a pas de budget ni de plafond décrit.
L'image Docker par défaut vient d'un registre personnel Aliyun, pas d'un registre public connu.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À regarder si tu jongles entre plusieurs fournisseurs ; centraliser les clés chez un tiers mérite réflexion.
