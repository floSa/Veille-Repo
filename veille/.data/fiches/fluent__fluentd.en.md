# fluent/fluentd

> Open source log collector that unifies event collection and sends it to many destinations.

## The problem
Logs come from heterogeneous sources and end up in different systems, with ad hoc collection code.

## What it actually does
Plugin architecture: a core engine, a configuration parser (`fluent.conf`), input, filter, parser/formatter and output plugins, a buffer and an event router. The flow goes from input to filter, to buffer, then to output. The README cites files, RDBMS, NoSQL, SaaS and Hadoop as destinations. A Cure53 security audit is mentioned.

## How it is wired
```mermaid
flowchart LR
  A["CLI (fluentd)"] --> B["Configuration Parser"]
  B --> C["Core Engine"]
  C --> D["Input Plugins"]
  D --> E["Event Router"]
  E --> F["Filter Plugins"]
  F --> G["Buffer Management"]
  G --> H["Output Plugins"]
```

## Trying it
```bash
gem install fluentd
fluentd -s conf
fluentd -c conf/fluent.conf &
echo '{"json":"message"}' | fluent-cat debug.test
```

## Cost and gotchas
Free. Requires Ruby 3.3 or later for development. Configuration and plugin choice are left to you.

## What it is not
Not a storage or search engine: it routes logs. The v0.12 branch is no longer supported.

## Alternatives
No alternative named in the README.

## For you
Adopt if you centralize training or inference logs: Apache-2.0, very widespread, governed by the Fluent foundation.
