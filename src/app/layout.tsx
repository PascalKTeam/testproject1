import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "testproject1 — Hello World",
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
