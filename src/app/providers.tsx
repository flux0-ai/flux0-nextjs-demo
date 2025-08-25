"use client";

import { StreamProvider } from "@flux0-ai/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [qc] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={qc}>
      <StreamProvider>{children}</StreamProvider>
    </QueryClientProvider>
  );
}
