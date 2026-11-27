# yassinebenaid/bunster

> Compiler from shell scripts to static binaries via Go, for distributing bash scripts.

## The problem
Distributing a bash script assumes a compatible shell on the target machine and exposes the source code.

## What it actually does
Turns a script into Go code then compiles it with the Go toolchain: lexer, parser, AST, static analysis, Go generator, then a standalone binary with its own shell runtime. Adds a module system, a package manager, native support for `.env` files, file embedding and argument parsing. The README warns that only a subset of bash is supported; static analysis is under development.

## How it is wired
```mermaid
flowchart LR
  A["Script shell"] --> B["Lexer (lexer.go)"]
  B --> C["Shell parser (parser.go)"]
  C --> D["Static analyser (analyser.go)"]
  D --> E["Go generator (generator.go)"]
  E --> F["Go toolchain"]
  F --> G["Compiled binary"]
```

## Trying it
```bash
curl -f https://bunster.netlify.app/install.sh | bash
brew install bunster
```

## Cost and gotchas
Free; the Go toolchain is required to compile. The installer is downloaded and run via curl into bash.

## What it is not
Not a reliable bash replacement today: "early stages". Not a simple wrapper like shc, according to the README.

## Alternatives
- shc (cited in the README): wraps the script in a binary instead of compiling it.

## For you
To watch: for packaging small operations utilities without dependencies, but too young for critical scripts.
