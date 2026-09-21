# google/osv-scalibr

> **A Go software composition analysis library**: software inventory extraction, known-vulnerability detection, SBOM generation.

## The problem

Without it you write your own traversal of a file system or a container image, your own
recognition of each ecosystem's package formats, and your own cross-check of that inventory
against known vulnerabilities. The README does not frame a problem statement; it introduces
itself directly as an extensible library.

## What it actually does

The README lists four things. A file system scanner that extracts software inventory data
(for example installed language packages), detects known vulnerabilities or generates SBOMs,
with the supported inventory types listed in `docs/supported_inventory_types.md`. Container
analysis, including layer-based extraction. Guided Remediation: generating upgrade patches for
transitive vulnerabilities. Output is either a textproto (format defined in
`binary/proto/scan_result.proto`) or SPDX v2.3 in json, yaml or tag-value form. Built-in
extraction and detection plugins ship with it, and custom plugins can be added — but only when
used as a library, not through the binary.

## How it is wired

```mermaid
graph LR
  A[ScanRoots: real FS, remote image, tarball] --> B[scalibr.New().Scan]
  B --> C[extractors: extractor/filesystem/list/list.go]
  B --> D[detectors: detector/list/list.go]
  B --> E[annotators + enrichers: annotator/list, enricher/enricherlist]
  C --> F[ScanResults — scalibr.go]
  D --> F
  E --> F
  F --> G[(result.textproto / SPDX 2.3)]
```

No code-derived diagram exists for this repo; the nodes above use the file paths the README
cites. The entry point is a `scalibr.ScanConfig` (`scalibr.go`) holding `ScanRoots` and a
plugin list; `plugin.FilterByCapabilities` keeps only the plugins whose requirements (OS,
network access, direct FS access) are met. Custom plugins implement
`extractor/filesystem/extractor.go` or `detector/detector.go`. The logger is replaced through
`log.SetLogger()` (`log/log.go`).

## Trying it

```bash
go install github.com/google/osv-scalibr/binary/scalibr@latest
scalibr --result=result.textproto
scalibr --help
```

```bash
scalibr --result=result.textproto --remote-image=alpine@sha256:0a4eaa0eecf5f8c050e5bba433f58c052be7587ee8af3e8b3910ef9ab5fbe9f5
scalibr --result=result.textproto --image-tarball=my-image.tar
scalibr -o spdx23-json=result.spdx.json
```

From source: `make` and `make test`, which produce a local `scalibr` binary at the repo base.

## Cost and gotchas

Free, no API key, no account. You need `go` installed to build. The binary runs only the
"recommended" plugins by default; the rest are turned on with `--plugins=`, with the reference
lists in the `list.go` files above. Container image scanning covers Linux-based images only;
Windows image support is tracked in issue #953. Windows and Mac support for the library itself
is described as experimental. Contributing a new inventory type means regenerating protos, so
installing `protoc` and `protoc-gen-go`, then running `make protos` or `./build_protos.sh`.

## What it is not

It is not an official Google product — the README says so on its last line. It is not
primarily a CLI: the `scalibr` binary is called a wrapper, and the recommended CLI path for
vulnerability scanning is OSV-Scanner, which does not yet expose all of OSV-SCALIBR's
functionality (a migration guide is mentioned). It is not a service either: no hosted
vulnerability database, no dashboard, no CI gating policy is described in the README. And
custom plugins do not work with the binary, only with the library.

## Alternatives

- `google/osv-scanner`, named in the README: the CLI to use if the need is command-line
  vulnerability scanning without writing Go.
- `aquasecurity/trivy` and `anchore/grype` (catalogue neighbours): ready-to-run image and
  dependency scanners; pick them if you want a finished tool rather than a library to embed.

## Why it matters to you

In an MLOps chain this is the brick to embed when you want to produce the inventory or SBOM of
container images yourself — training or serving images included — from Go code, with custom
extractors for formats the off-the-shelf scanners skip. If the need stops at "scan and read a
report", go straight to OSV-Scanner.
