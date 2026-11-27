# ucb-bar/chipyard

> Berkeley framework for generating RISC-V SoCs in Chisel, simulating them, and taking them to FPGA and VLSI.

## The problem
Designing a system on chip requires assembling scattered cores, accelerators, peripherals and simulation and implementation flows.

## What it actually does
Provides cores (Rocket, BOOM, CVA6), vector units (Saturn, Ara), accelerators (Gemmini, NVDLA) and memories, then connects them to flows: RTL simulation, FPGA simulation (FireSim), VLSI (Hammer) and workloads (FireMarshal). From the code: a configuration produces a system, whose ports and clocks are tied to a test bench or an FPGA board.

## How it is wired
```mermaid
graph LR
  C[SoC Configurations] --> D[Digital System - DigitalTop.scala]
  D --> T[Chip Top - ChipTop.scala]
  T --> I[IO Binders - IOBinders.scala]
  I --> H[Harness Binders]
  H --> FS[FireSim Harness - FireSim.scala]
  H --> FP[FPGA Harnesses]
```

## Trying it
No command in the README: everything goes through the docs at https://chipyard.readthedocs.io/. Not documented here.

## Cost and gotchas
Free, but the toolchain (Chisel, FireSim, FPGA, VLSI) is heavy; these prerequisites are detailed only in the external docs.

## What it is not
Not an AI/data tool. It is hardware: the academic citation (IEEE Micro 2020) is requested for research use.

## Alternatives
None named in the README.

## For you
Ignore: RISC-V chip design, outside the data/AI/MLOps scope, unless you work on hardware accelerators.
