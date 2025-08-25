"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { components } from "@/lib/api/v1";

type SessionsPaneProps = {
  sessions: Array<components["schemas"]["SessionDTO"]>;
  activeSessionId?: string;
  header?: React.ReactNode; // optional custom header content
};

export function SessionsPane({
  sessions,
  header = "Sessions",
}: SessionsPaneProps) {
  const params = useParams();
  const activeSessionId =
    typeof params?.id === "string" ? params.id : undefined;
  return (
    <aside className="w-64 shrink-0 border-r border-r-zinc-800 bg-zinc-950">
      <div className="p-3 flex items-center justify-between">
        {typeof header === "string" ? (
          <h2 className="text-sm font-semibold">{header}</h2>
        ) : (
          header
        )}
        <Link
          href="/"
          className="ml-2 px-3 py-1 rounded bg-zinc-800 text-white text-xs font-medium hover:bg-zinc-700"
        >
          New
        </Link>
      </div>

      <nav className="p-2 overflow-y-auto h-[calc(100%-44px)]">
        {sessions.length === 0 ? (
          <div className="text-xs text-gray-500 px-3 py-2">
            No sessions yet.
          </div>
        ) : (
          <ul className="space-y-1 text-sm">
            {sessions.map((s) => {
              const isActive = s.id === activeSessionId;
              return (
                <li key={s.id}>
                  <Link
                    href={`/session/${s.id}`}
                    // params={{ sessionId: s.id }}
                    className={[
                      "w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-900 block",
                      isActive ? "bg-zinc-900" : "",
                    ].join(" ")}
                  >
                    {s.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </aside>
  );
}
