"use client";

import { Handle, Position } from "reactflow";

export default function CustomNode({ data }: any) {
  return (
    <div className="px-4 py-2 rounded-lg shadow-md text-white"
      style={{ background: data.color }}
    >
      <strong>{data.label}</strong>

      {data.type === "thinker" && (
        <div className="text-xs mt-2">
          Prompt: {data.prompt || "No prompt"}
        </div>
      )}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}