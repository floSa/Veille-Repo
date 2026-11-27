# php/php-src

> Source code of the PHP interpreter, a web-oriented scripting language.

## The problem
Running dynamic server-side web applications with a widely deployed scripting language.

## What it actually does
A program enters through the execution interface, is compiled by the Zend engine (`zend_compile.c`), optimized (`zend_optimizer.c`, type inference), then executed by the virtual machine handlers. Bundled extensions: session, date, random generators (MT19937, PCG, Xoshiro), etc.

## How it is wired
```mermaid
flowchart LR
  P[Programme PHP] --> M[main.c]
  M --> C[zend_compile.c]
  C --> O[zend_optimizer.c]
  O --> X[zend_execute.c]
  X --> E[Extensions]
```

## Trying it
```shell
./buildconf
./configure --enable-debug
make -j4
make test
```
Linux prerequisites: autoconf, bison, re2c, libxml2, libsqlite3.

## Cost and gotchas
Free. Compiling requires build tools; precompiled packages exist (windows.php.net, package manager).

## What it is not
Not a web framework: it is the interpreter itself.

## Alternatives
No alternative named in the README.

## For you
Ignore: no role in a data/AI chain; to be read only for the architecture of an interpreter.
