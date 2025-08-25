import { nanoid } from "nanoid";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Chat
        newSession={true}
        initialEvents={[]}
        sessionId={nanoid(10)}
        agentId={process.env.NEXT_PUBLIC_AGENT_ID || ""}
      />
    </main>
  );
}
