import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MR GR8 — Web3 Designer & On-Chain Architect",
  description: "Throughout heaven and earth, I alone am the honored one.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#02030a" }}>{children}</body>
    </html>
  );
}
