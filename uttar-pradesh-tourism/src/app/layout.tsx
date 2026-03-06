import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explore Uttar Pradesh",
  description: "Tourism portal for Uttar Pradesh built with Next.js + TypeScript + Framer Motion"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
