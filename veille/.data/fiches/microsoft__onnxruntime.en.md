# microsoft/onnxruntime

> Cross-platform inference and training accelerator for ML models, for AI and MLOps engineers.

## The problem
The same PyTorch, TensorFlow or scikit-learn model must run fast on varied hardware and operating systems.

## What it actually does
Loads an ONNX model, optimizes its graph, runs it through an execution provider (CPU, CUDA...) and returns the outputs. Bindings for JavaScript, Java, Go, WebAssembly/WebGL. A training branch (ORTModule) speeds up PyTorch on multi-node NVIDIA GPUs.

## How it is wired
```mermaid
flowchart LR
  A[ONNX model] --> B[Session API]
  B --> C[Model graph]
  C --> D[Graph optimizers]
  D --> E[Execution providers]
  E --> F[CPU / CUDA provider]
  F --> G[Inference results]
```

## Trying it
No command in the README: documentation at onnxruntime.ai/docs and repositories of inference and training examples.

## Cost and gotchas
Free. The README warns of possible collection of usage data sent to Microsoft. Many open issues (1,819).

## What it is not
Not a modeling framework: it runs models that have already been exported. The claimed gains are not quantified.

## Alternatives
None named in the README.

## For you
Adopt: a standard building block for serving models in a portable and fast way; just check the telemetry for your context.
