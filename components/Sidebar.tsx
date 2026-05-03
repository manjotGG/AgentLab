"use client";

export default function Sidebar({ addNode }: any) {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Blocks</h2>

      <div className="space-y-2">
        <button onClick={() => addNode("thinker")} className="w-full p-2 bg-blue-500 rounded">
          Thinker
        </button>

        <button onClick={() => addNode("memory")} className="w-full p-2 bg-green-500 rounded">
          Memory
        </button>

        <button onClick={() => addNode("tool")} className="w-full p-2 bg-yellow-500 rounded">
          Tool
        </button>

        <button onClick={() => addNode("responder")} className="w-full p-2 bg-purple-500 rounded">
          Responder
        </button>
      </div>
    </div>
  );
}