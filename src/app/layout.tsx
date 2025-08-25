import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SessionsPane } from "./components/SessionsPane";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flux0 Next.js Demo",
  description: "Streaming chat with @flux0-ai/react",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/sessions`, {
    cache: "no-store",
    next: { tags: ["sessions"] },
  });
  const data = await res.json().catch(() => ({ data: [] }));
  data.data = Array.isArray(data.data)
    ? data.data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      )
    : [];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-[100dvh] bg-black text-white">
          <div className="mx-auto h-full shadow-sm overflow-hidden">
            <div className="flex h-full">
              <SessionsPane sessions={data.data} />
              <Providers>{children}</Providers>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
