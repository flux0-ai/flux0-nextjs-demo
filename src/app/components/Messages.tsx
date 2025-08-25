"use client";

import type { Message } from "@flux0-ai/react";

export default function Messages({ items }: { items: Message[] }) {
  return (
    <div className="space-y-2">
      {items.map((m) => (
        <div key={m.id} className="rounded bg-neutral-800 text-neutral-100 p-2">
          <div className="text-xs opacity-70">{m.source}</div>
          <div>{m.content}</div>
          {/* TODO: render tool calls nicely if you have widgets */}
        </div>
      ))}
    </div>
  );
}
