import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "testproject1 — Statisches Hosting auf GitHub Pages",
  description:
    "Referenzprojekt von More BrAIns: ein Next.js Static Export, ausgeliefert über GitHub Pages.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
