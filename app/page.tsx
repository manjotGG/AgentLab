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
        <div className="absolute top-4 right-4 z-50">
          <button
          onClick={() => {
            console.log("NODES:", nodes);
            console.log("EDGES:", edges);
    }}
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
    >
      ▶ Run Agent
  </button>
</div>
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