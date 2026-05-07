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
import CustomNode from "../components/CustomNode";
const nodeTypes = {
  custom: CustomNode,
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = (params: Connection) =>
    setEdges((eds) => addEdge(params, eds));

  const addNode = (type: string) => {
  const colors: any = {
    thinker: "#3b82f6",
    memory: "#22c55e",
    tool: "#eab308",
    responder: "#a855f7",
};

  const newNode = {
    id: `${nodes.length + 1}`,
    type: "custom",
    position: {
      x: Math.random() * 400,
      y: Math.random() * 400,
    },
    data: {
    label: type.toUpperCase(),
    type,
    color: colors[type],
    prompt: "",

    onChange: (value: string) => {
      setNodes((nds) =>
        nds.map((node) =>
         node.id === newNode.id
            ? {
               ...node,
                data: {
                 ...node.data,
                 prompt: value,
                },
             }
           : node
        )
      );
    },
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
          nodeTypes={nodeTypes}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}