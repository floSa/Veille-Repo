# langchain-ai/langgraph

> Low-level orchestration framework for stateful, long-running agents.

## The problem
An agent that runs for hours must survive failures, keep its state and accept
human intervention — three things a `while` loop does not give.

## What it actually does
Provides the underlying infrastructure of a stateful workflow: durable execution that resumes
exactly where it stopped after a failure.
Allows inspecting and modifying the agent's state at any point of the execution
(human-in-the-loop). Handles a short-term memory for ongoing reasoning and a persistent long-term
memory across sessions. Integrates with LangSmith to visualize execution paths,
state transitions and metrics. The README cites Klarna, Replit and Elastic as users.

## How it is wired
```mermaid
flowchart TD
  graph["Graphe d'états (ton agent)"] --> runtime["Runtime LangGraph"]
  runtime --> ckpt[("Checkpoints : exécution durable")]
  runtime --> mem[("Mémoire courte + longue")]
  runtime --> hitl["Point d'arrêt human-in-the-loop"]
  runtime --> ls["LangSmith (traces, évals)"]
  deep["Deep Agents"] --> runtime
```

## Trying it
```bash
pip install -U langgraph
```

## Cost and gotchas
The library is free; the models called are at your expense. LangSmith, presented as
the companion for debugging, evaluations and observability, is a service of the publisher.
The deployment option promoted, LangSmith Deployment, is as well.

## What it is not
It is not a high-level framework: the README points to **Deep Agents** to build quickly.
It is not LangChain: these are two packages, with LangChain providing the integrations and components.
It is not an observability platform, LangSmith carries that.

## Alternatives
- **Deep Agents**: higher-level package built on top of it, for agents that plan and
  delegate to sub-agents.
- **LangGraph.js**: the JavaScript/TypeScript equivalent.

## For you
The right level of abstraction when your agent must resume after an interruption and be reviewable.
