---
schema: 1
depot: sqlcipher/sqlcipher
source_readme_sha: 199d4db0f88670fa
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# sqlcipher/sqlcipher

> Fork de SQLite qui chiffre en AES-256 le fichier de base, pour embarquer des données protégées.

## Le problème
Une base SQLite stocke ses données en clair sur le disque, ce qui expose un appareil perdu ou volé.

## Ce que ça fait vraiment
Insère un codec entre le pager et la couche VFS : chiffrement par page (CBC avec HMAC), dérivation de clé PBKDF2, détection d'altération, nettoyage mémoire. Clé via `PRAGMA key` ou `sqlite3_key`, changement via `PRAGMA rekey`. Fournisseur crypto au choix (OpenSSL, LibTomCrypt, CommonCrypto, NSS). Sans clé, se comporte comme SQLite.

## Comment c'est branché
```mermaid
graph LR
  A[Client app] --> B[C API sqlite3_key]
  B --> C[SQL Parser and Planner]
  C --> D[VDBE]
  D --> E[Pager]
  E --> F[Encryption Codec]
  F --> G[VFS and filesystem]
```

## Essayer
```bash
./configure --with-tempstore=yes CFLAGS="-DSQLITE_HAS_CODEC -DSQLITE_EXTRA_INIT=sqlcipher_extra_init -DSQLITE_EXTRA_SHUTDOWN=sqlcipher_extra_shutdown" LDFLAGS="-lcrypto"
make
```

## Coût et pièges
Gratuit. Compatibilité de format limitée à une version majeure (SQLCipher 4 n'ouvre pas les bases 3 par défaut). Surcoût de 5–15 % annoncé. Contributions soumises à un accord de contributeur.

## Ce que ce n'est pas
Pas un chiffrement de la mémoire ou du transport. Pas un nouveau moteur SQL.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller si tu embarques des données sensibles dans SQLite côté application ; pas utile pour un entrepôt de données.

