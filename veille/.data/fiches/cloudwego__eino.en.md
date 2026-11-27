# cloudwego/eino

> Go framework for building LLM applications, agents and composable workflows.

## The problem
LLM frameworks are designed for Python; in Go you have to recode orchestration, streaming and
component abstractions.

## What it actually does
Eino is inspired by LangChain and Google ADK while following Go conventions. It provides
reusable components (`ChatModel`, `Tool`, `Retriever`, `Embedding`, `ChatTemplate`) with
official implementations for OpenAI, Claude, Gemini, Ark, Ollama, Elasticsearch. Its ADK
builds agents with tool use, multi-agent coordination, interruption and resumption for
human-in-the-loop; `ChatModelAgent` handles the ReAct loop internally, `DeepAgent` breaks down
tasks and delegates to sub-agents. The `compose` package assembles graphs and workflows, which can
in turn be exposed as agent tools via `graphtool`. Streaming is handled automatically
by the framework between nodes, and callbacks (OnStart, OnEnd, OnError…) inject logs,
traces and metrics.

## How it is wired
```mermaid
flowchart LR
  model[ChatModel OpenAI/Claude/Ollama] --> agent[adk.ChatModelAgent]
  tools[tool.BaseTool] --> agent
  agent --> runner[adk.NewRunner → iter]
  graph[compose.NewGraph] --> nodes[Lambda · ChatModel · format]
  graph --> gt[graphtool: graphe exposé en outil]
  gt --> agent
  agent --> cb[callbacks: log · trace · metrics]
```

## Trying it
```bash
golangci-lint run ./...
```
No installation command is documented; the README gives Go code
(`openai.NewChatModel`, `adk.NewChatModelAgent`, `compose.NewGraph`) and points to the user
manual and the quick-start guide.

## Cost and gotchas
Go 1.18 minimum. Provider API key at your expense (`OPENAI_API_KEY` in the example). DeepAgent
can run shell commands, Python code and web searches: the tools you entrust to it define its
radius of action.

## What it is not
This repository only contains the type definitions, the streaming mechanism, the component
abstractions, the orchestration, the agent implementations and the aspects. The concrete
component implementations are in EinoExt, visual debugging in Eino Devops, the example
applications in EinoExamples.

## Alternatives
The README cites its sources of inspiration: LangChain and Google ADK, whose ideas it takes over and
adapts to Go conventions.

## For you
Worth a look only if your platform is in Go; on the Python side the ecosystem is richer and Eino
brings nothing specific to data.
