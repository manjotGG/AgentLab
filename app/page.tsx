"use client";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
} from "reactflow";

import "reactflow/dist/style.css";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = (params: Connection) =>
    setEdges((eds) => addEdge(params, eds));

  const addNode = (type: string) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
      data: { label: type.toUpperCase() },
      style: {
        background:
          type === "thinker"
            ? "#3b82f6"
            : type === "memory"
            ? "#22c55e"
            : type === "tool"
            ? "#eab308"
            : "#a855f7",
        color: "white",
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="flex">
      <Sidebar addNode={addNode} />

      <div className="w-full h-screen">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}