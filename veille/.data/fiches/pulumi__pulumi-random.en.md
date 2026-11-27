# pulumi/pulumi-random

> Pulumi provider that generates stable random values, such as passwords or names.

## The problem
A normal random value changes at each evaluation of the Pulumi program and prevents reaching a stable target state.

## What it actually does
Provides resources (for example `RandomPassword`) whose result remains stored in the Pulumi state. Available in Node.js, Python, Go and .NET. The example generates a password and passes it to an AWS RDS instance.

## How it is wired
```mermaid
graph LR
  A[Programme Pulumi] --> B[RandomPassword]
  B --> C[output result]
  C --> D[aws.rds.Instance]
```

## Trying it
```bash
npm install @pulumi/random
pip install pulumi_random
go get github.com/pulumi/pulumi-random/sdk/v4/go/...
dotnet add package Pulumi.Random
```

## Cost and gotchas
Free. Pulumi must be installed; not documented in this README. The password is stored in the state: encrypt it.

## What it is not
Not a standalone cryptographic generator: it is only useful within a Pulumi program.

## Alternatives
No alternative named in the README.

## For you
Watch: minor but standard building block if you do IaC with Pulumi.
