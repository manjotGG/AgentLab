"use client";

import { Handle, Position } from "reactflow";

export default function CustomNode({ data }: any) {
  return (
    <div
      className="px-4 py-3 rounded-xl shadow-lg min-w-[220px] text-white"
      style={{ background: data.color }}
    >
      <div className="font-bold text-lg">
        {data.label}
      </div>

      {data.type === "thinker" && (
        <textarea
          className="mt-3 w-full rounded p-2 text-black text-sm"
          placeholder="Enter prompt..."
          value={data.prompt}
          onChange={(e) => data.onChange?.(e.target.value)}
        />
      )}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}