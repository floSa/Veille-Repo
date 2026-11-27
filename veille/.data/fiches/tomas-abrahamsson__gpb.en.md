# tomas-abrahamsson/gpb

> Erlang compiler for Google Protocol Buffers definitions, generating encoding and decoding code.

## The problem
Using protobuf messages from Erlang without going through Google's compiler.

## What it actually does
`protoc-erl` reads a `.proto` and generates an `.erl` module and an `.hrl` (records or maps) with encoding/decoding. Handles nested messages, oneof, map, proto3, extensions, groups, JSON mapping. Introspection functions are generated. Does not handle rpc nor aggregated custom options. Poor error reporting on invalid `.proto` files.

## How it is wired
```mermaid
graph LR
  Proto[x.proto] --> Scan[gpb_scan.erl]
  Scan --> Parse[gpb_parse.erl]
  Parse --> Compile[gpb_compile.erl]
  Compile --> Codegen[gpb_codegen.erl]
  Codegen --> Sortie[x.erl + x.hrl]
```

## Trying it
```bash
.../gpb/bin/protoc-erl -I. x.proto
erlc -I.../gpb/include x.erl
```
```erlang
x:encode_msg(#'Person'{name="abc def", id=345, email="a@example.com"}).
```

## Cost and gotchas
Free. Version fixed by git tag: building outside a git repository requires `gpb.vsn`. Breaking changes in 4.0.0 and 5.0.0.

## What it is not
Not a full gRPC library; the README points to grpcbox and grpc. License not identified by GitHub.

## Alternatives
The README cites exprotobuf (Elixir), enif_protobuf (NIF) and rebar3_gpb_plugin.

## For you
Ignore: a specialized Erlang tool, outside the data/AI stack.
