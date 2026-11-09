import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "meshbay-sample-next-web",
  description: "Next.js 15 sample frontend for the Meshbay vs Railway test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
