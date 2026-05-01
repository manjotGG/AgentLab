# 🧠 AgentLab

AgentLab is a visual, no-code platform to build and experiment with AI agents using a drag-and-drop interface.

Instead of writing code, users connect modular “brain blocks” like reasoning, memory, and tools to create intelligent workflows powered by real LLMs.

---

## 🚀 Features

* 🧩 **Visual Agent Builder**
  Drag-and-drop blocks to design agent workflows

* 🧠 **LLM-powered Reasoning**
  Each node maps to real AI prompts and execution

* 🔗 **Graph Execution Engine**
  Converts block connections into a runnable DAG

* 🛠 **Tool Integration (Upcoming)**
  Web search, calculator, image generation

* 🧠 **Memory System (Upcoming)**
  Short-term, long-term, and vector-based memory

* 📊 **Live Agent Trace (Upcoming)**
  Visualize how your agent “thinks” step-by-step

---

## 🏗 Architecture

```
UI (React Flow)
   ↓
Block → Graph Compiler
   ↓
Agent Runtime Engine
   ↓
LLM APIs + Tools
   ↓
Memory Stores
```

---

## 🛠 Tech Stack

* Frontend: Next.js + React + Tailwind
* Graph UI: React Flow
* State: Zustand
* Backend (planned): FastAPI / Node.js
* LLM: OpenAI / Claude
* Memory (planned): Redis + Vector DB

---

## ⚙️ Getting Started

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🎯 Vision

Make AI building as intuitive as Scratch — but as powerful as real-world agent systems.

---

## 📌 Status

🚧 Currently building MVP:

* [x] Project setup
* [ ] Visual canvas
* [ ] Drag-and-drop blocks
* [ ] Graph execution engine

---

## 🤝 Contributing

This project is under active development. Contributions and ideas are welcome.

---

## ⭐ Author

Built by Manjot
