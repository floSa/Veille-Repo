# sqlcipher/sqlcipher

> SQLite fork that encrypts the database file with AES-256, for embedding protected data.

## The problem
A SQLite database stores its data in clear text on disk, which exposes a lost or stolen device.

## What it actually does
Inserts a codec between the pager and the VFS layer: per-page encryption (CBC with HMAC), PBKDF2 key derivation, tamper detection, memory cleanup. Key set via `PRAGMA key` or `sqlite3_key`, changed via `PRAGMA rekey`. Choice of crypto provider (OpenSSL, LibTomCrypt, CommonCrypto, NSS). Without a key, it behaves like SQLite.

## How it is wired
```mermaid
graph LR
  A[Client app] --> B[C API sqlite3_key]
  B --> C[SQL Parser and Planner]
  C --> D[VDBE]
  D --> E[Pager]
  E --> F[Encryption Codec]
  F --> G[VFS and filesystem]
```

## Trying it
```bash
./configure --with-tempstore=yes CFLAGS="-DSQLITE_HAS_CODEC -DSQLITE_EXTRA_INIT=sqlcipher_extra_init -DSQLITE_EXTRA_SHUTDOWN=sqlcipher_extra_shutdown" LDFLAGS="-lcrypto"
make
```

## Cost and gotchas
Free. Format compatibility is limited to one major version (SQLCipher 4 does not open version 3 databases by default). Stated overhead of 5–15%. Contributions are subject to a contributor agreement.

## What it is not
Not memory or transport encryption. Not a new SQL engine.

## Alternatives
No alternative named in the README.

## For you
Worth watching if you embed sensitive data in SQLite on the application side; not useful for a data warehouse.
