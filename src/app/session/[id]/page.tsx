import Chat from "@/app/components/Chat";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/sessions/${id}/events`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json().catch(() => ({ data: [] }));

  return (
    <main className="flex-1 flex flex-col">
      <Chat
        sessionId={id}
        initialEvents={data.data}
        agentId={process.env.NEXT_PUBLIC_AGENT_ID || ""}
      />
    </main>
  );
}
